const TILE_DEFS = [
  ["m1", "🀇", 0], ["m2", "🀈", 1], ["m3", "🀉", 2], ["m4", "🀊", 3], ["m5", "🀋", 4], ["m6", "🀌", 5], ["m7", "🀍", 6], ["m8", "🀎", 7], ["m9", "🀏", 8],
  ["p1", "🀙", 9], ["p2", "🀚", 10], ["p3", "🀛", 11], ["p4", "🀜", 12], ["p5", "🀝", 13], ["p6", "🀞", 14], ["p7", "🀟", 15], ["p8", "🀠", 16], ["p9", "🀡", 17],
  ["s1", "🀐", 18], ["s2", "🀑", 19], ["s3", "🀒", 20], ["s4", "🀓", 21], ["s5", "🀔", 22], ["s6", "🀕", 23], ["s7", "🀖", 24], ["s8", "🀗", 25], ["s9", "🀘", 26],
  ["east", "🀀", 27], ["south", "🀁", 28], ["west", "🀂", 29], ["north", "🀃", 30], ["white", "🀆", 31], ["green", "🀅", 32], ["red", "🀄", 33],
];

const PLAYERS = ["あなた", "CPU 左", "CPU 対面", "CPU 右"];
const $ = (id) => document.getElementById(id);
const tileById = Object.fromEntries(TILE_DEFS.map(([id, glyph, order]) => [id, { id, glyph, order }]));

let state;

function buildWall() {
  const wall = [];
  for (const [id] of TILE_DEFS) {
    for (let i = 0; i < 4; i += 1) wall.push(id);
  }
  for (let i = wall.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [wall[i], wall[j]] = [wall[j], wall[i]];
  }
  return wall;
}

function newRound() {
  const wall = buildWall();
  state = {
    wall,
    hands: [[], [], [], []],
    rivers: [[], [], [], []],
    scores: [25000, 25000, 25000, 25000],
    turn: 0,
    drawnIndex: null,
    busy: false,
    ended: false,
    log: [],
  };

  for (let draw = 0; draw < 13; draw += 1) {
    for (let player = 0; player < 4; player += 1) {
      state.hands[player].push(state.wall.pop());
    }
  }
  sortHand(0);
  drawTile(0);
  addLog("新しい局を開始しました。あなたのツモ番です。");
  render();
}

function sortHand(player) {
  state.hands[player].sort((a, b) => tileById[a].order - tileById[b].order);
}

function drawTile(player) {
  if (!state.wall.length) {
    endDraw();
    return;
  }
  const tile = state.wall.pop();
  state.hands[player].push(tile);
  state.drawnIndex = player === 0 ? state.hands[0].length - 1 : null;
}

function discardTile(player, index) {
  const [tile] = state.hands[player].splice(index, 1);
  state.rivers[player].push(tile);
  addLog(`${PLAYERS[player]}が${tileById[tile].glyph}を切りました。`);
  return tile;
}

function playerDiscard(index) {
  if (state.busy || state.ended || state.turn !== 0 || state.hands[0].length !== 14) return;
  const tile = discardTile(0, index);
  state.drawnIndex = null;

  const ronWinner = [1, 2, 3].find((player) => canWinWithDiscard(player, tile));
  if (ronWinner) {
    winRound(ronWinner, 0, "ロン");
    return;
  }

  state.turn = 1;
  render();
  runCpuTurns();
}

function canWinWithDiscard(player, tile) {
  const hand = [...state.hands[player], tile];
  return isWinningHand(hand);
}

function runCpuTurns() {
  state.busy = true;
  setTimeout(() => {
    for (let player = 1; player < 4; player += 1) {
      state.turn = player;
      drawTile(player);
      if (state.ended) return;

      if (isWinningHand(state.hands[player])) {
        winRound(player, null, "ツモ");
        return;
      }

      const discardIndex = chooseCpuDiscard(player);
      discardTile(player, discardIndex);
    }

    state.turn = 0;
    drawTile(0);
    sortHand(0);
    state.drawnIndex = state.hands[0].length - 1;
    state.busy = false;
    render();
  }, 480);
}

function chooseCpuDiscard(player) {
  const hand = state.hands[player];
  const counts = countTiles(hand);
  const isolated = hand
    .map((tile, index) => ({ tile, index, value: discardValue(tile, counts) }))
    .sort((a, b) => b.value - a.value);
  return isolated[0].index;
}

function discardValue(tile, counts) {
  const order = tileById[tile].order;
  if (counts[order] >= 2) return -2;
  if (order >= 27) return counts[order] === 1 ? 3 : -1;
  const near = [order - 2, order - 1, order + 1, order + 2].filter((n) => sameSuit(order, n) && counts[n]);
  return 4 - near.length;
}

function sameSuit(a, b) {
  if (b < 0 || b > 26) return false;
  return Math.floor(a / 9) === Math.floor(b / 9);
}

function countTiles(hand) {
  const counts = Array(34).fill(0);
  for (const id of hand) counts[tileById[id].order] += 1;
  return counts;
}

function isWinningHand(hand) {
  if (hand.length % 3 !== 2) return false;
  const counts = countTiles(hand);
  if (counts.filter((count) => count === 2).length === 7) return true;

  for (let i = 0; i < counts.length; i += 1) {
    if (counts[i] >= 2) {
      counts[i] -= 2;
      if (canFormMelds(counts)) {
        counts[i] += 2;
        return true;
      }
      counts[i] += 2;
    }
  }
  return false;
}

function canFormMelds(counts) {
  const first = counts.findIndex((count) => count > 0);
  if (first === -1) return true;

  if (counts[first] >= 3) {
    counts[first] -= 3;
    if (canFormMelds(counts)) {
      counts[first] += 3;
      return true;
    }
    counts[first] += 3;
  }

  const isNumberTile = first < 27;
  const rank = first % 9;
  if (isNumberTile && rank <= 6 && counts[first + 1] > 0 && counts[first + 2] > 0 && sameSuit(first, first + 2)) {
    counts[first] -= 1;
    counts[first + 1] -= 1;
    counts[first + 2] -= 1;
    if (canFormMelds(counts)) {
      counts[first] += 1;
      counts[first + 1] += 1;
      counts[first + 2] += 1;
      return true;
    }
    counts[first] += 1;
    counts[first + 1] += 1;
    counts[first + 2] += 1;
  }

  return false;
}

function declareWin() {
  if (state.ended || state.turn !== 0 || !isWinningHand(state.hands[0])) return;
  winRound(0, null, "ツモ");
}

function winRound(winner, loser, method) {
  state.ended = true;
  state.busy = false;
  const gain = method === "ロン" ? 8000 : 2000;
  if (method === "ロン") {
    state.scores[winner] += gain;
    state.scores[loser] -= gain;
  } else {
    for (let player = 0; player < 4; player += 1) {
      if (player !== winner) {
        state.scores[player] -= gain;
        state.scores[winner] += gain;
      }
    }
  }
  addLog(`${PLAYERS[winner]}の${method}。和了です。`);
  render(`${PLAYERS[winner]}の${method}！新局で続けられます。`);
}

function endDraw() {
  state.ended = true;
  state.busy = false;
  addLog("流局しました。");
  render("牌山が尽きました。流局です。");
}

function addLog(text) {
  state.log.unshift(text);
  state.log = state.log.slice(0, 18);
}

function render(messageOverride) {
  $("wallCount").textContent = state.wall.length;
  state.scores.forEach((score, index) => {
    $(`score${index}`).textContent = score.toLocaleString("ja-JP");
  });

  renderHand();
  for (let player = 0; player < 4; player += 1) renderRiver(player);
  for (let player = 1; player < 4; player += 1) renderCpuHand(player);

  const canWin = !state.ended && state.turn === 0 && isWinningHand(state.hands[0]);
  $("winButton").disabled = !canWin;
  $("message").textContent = messageOverride ?? getMessage(canWin);
  renderLog();
}

function renderHand() {
  const hand = $("playerHand");
  hand.innerHTML = "";
  state.hands[0].forEach((id, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `tile${index === state.drawnIndex ? " drawn" : ""}`;
    button.textContent = tileById[id].glyph;
    button.title = "クリックして打牌";
    button.disabled = state.busy || state.ended || state.turn !== 0 || state.hands[0].length !== 14;
    button.addEventListener("click", () => playerDiscard(index));
    hand.append(button);
  });
}

function renderRiver(player) {
  const river = $(`river${player}`);
  river.innerHTML = "";
  state.rivers[player].forEach((id) => {
    const tile = document.createElement("span");
    tile.className = "tile discarded";
    tile.textContent = tileById[id].glyph;
    river.append(tile);
  });
}

function renderCpuHand(player) {
  const hand = $(`cpu${player}Hand`);
  hand.innerHTML = "";
  for (let i = 0; i < state.hands[player].length; i += 1) {
    const back = document.createElement("span");
    back.className = "back";
    hand.append(back);
  }
}

function renderLog() {
  const log = $("logList");
  log.innerHTML = "";
  for (const entry of state.log) {
    const item = document.createElement("li");
    item.textContent = entry;
    log.append(item);
  }
}

function getMessage(canWin) {
  if (state.ended) return "局が終了しました。新局を押すと続けられます。";
  if (canWin) return "和了できます。和了ボタンを押してください。";
  if (state.busy) return `${PLAYERS[state.turn]}の番です。`;
  return "手牌から1枚クリックして打牌してください。";
}

$("newGameButton").addEventListener("click", newRound);
$("sortButton").addEventListener("click", () => {
  if (state.ended || state.busy) return;
  sortHand(0);
  state.drawnIndex = null;
  render();
});
$("winButton").addEventListener("click", declareWin);

newRound();
