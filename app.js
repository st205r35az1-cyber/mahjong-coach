const TILE_DEFS = [
        { id: "m1", glyph: "🀇", order: 0, suit: "m", rank: 1, name: "一萬" },
        { id: "m2", glyph: "🀈", order: 1, suit: "m", rank: 2, name: "二萬" },
        { id: "m3", glyph: "🀉", order: 2, suit: "m", rank: 3, name: "三萬" },
        { id: "m4", glyph: "🀊", order: 3, suit: "m", rank: 4, name: "四萬" },
        { id: "m5", glyph: "🀋", order: 4, suit: "m", rank: 5, name: "五萬" },
        { id: "m6", glyph: "🀌", order: 5, suit: "m", rank: 6, name: "六萬" },
        { id: "m7", glyph: "🀍", order: 6, suit: "m", rank: 7, name: "七萬" },
        { id: "m8", glyph: "🀎", order: 7, suit: "m", rank: 8, name: "八萬" },
        { id: "m9", glyph: "🀏", order: 8, suit: "m", rank: 9, name: "九萬" },
        { id: "p1", glyph: "🀙", order: 9, suit: "p", rank: 1, name: "一筒" },
        { id: "p2", glyph: "🀚", order: 10, suit: "p", rank: 2, name: "二筒" },
        { id: "p3", glyph: "🀛", order: 11, suit: "p", rank: 3, name: "三筒" },
        { id: "p4", glyph: "🀜", order: 12, suit: "p", rank: 4, name: "四筒" },
        { id: "p5", glyph: "🀝", order: 13, suit: "p", rank: 5, name: "五筒" },
        { id: "p6", glyph: "🀞", order: 14, suit: "p", rank: 6, name: "六筒" },
        { id: "p7", glyph: "🀟", order: 15, suit: "p", rank: 7, name: "七筒" },
        { id: "p8", glyph: "🀠", order: 16, suit: "p", rank: 8, name: "八筒" },
        { id: "p9", glyph: "🀡", order: 17, suit: "p", rank: 9, name: "九筒" },
        { id: "s1", glyph: "🀐", order: 18, suit: "s", rank: 1, name: "一索" },
        { id: "s2", glyph: "🀑", order: 19, suit: "s", rank: 2, name: "二索" },
        { id: "s3", glyph: "🀒", order: 20, suit: "s", rank: 3, name: "三索" },
        { id: "s4", glyph: "🀓", order: 21, suit: "s", rank: 4, name: "四索" },
        { id: "s5", glyph: "🀔", order: 22, suit: "s", rank: 5, name: "五索" },
        { id: "s6", glyph: "🀕", order: 23, suit: "s", rank: 6, name: "六索" },
        { id: "s7", glyph: "🀖", order: 24, suit: "s", rank: 7, name: "七索" },
        { id: "s8", glyph: "🀗", order: 25, suit: "s", rank: 8, name: "八索" },
        { id: "s9", glyph: "🀘", order: 26, suit: "s", rank: 9, name: "九索" },
        { id: "east", glyph: "🀀", order: 27, suit: "z", rank: 1, name: "東" },
        { id: "south", glyph: "🀁", order: 28, suit: "z", rank: 2, name: "南" },
        { id: "west", glyph: "🀂", order: 29, suit: "z", rank: 3, name: "西" },
        { id: "north", glyph: "🀃", order: 30, suit: "z", rank: 4, name: "北" },
        { id: "white", glyph: "🀆", order: 31, suit: "z", rank: 5, name: "白" },
        { id: "green", glyph: "🀅", order: 32, suit: "z", rank: 6, name: "發" },
        { id: "red", glyph: "🀄", order: 33, suit: "z", rank: 7, name: "中" },
      ];

      const PLAYERS = ["あなた", "CPU 左", "CPU 対面", "CPU 右"];
      const YAKU = {
        riichi: "リーチ（鳴かずにテンパイして宣言する役）",
        tanyao: "タンヤオ（1・9・字牌を使わない役）",
        pinfu: "ピンフ（順子4つと役牌ではない頭で作る役）",
        yakuhai: "役牌（三元牌や自風・場風の刻子で作る役）",
        ippatsu: "一発（リーチ後、自分の次のツモまでに和了する役）",
        chiitoi: "七対子（同じ牌のペアを7組そろえる役）",
        honitsu: "混一色（1種類の数牌と字牌だけで作る役）",
        chinitsu: "清一色（1種類の数牌だけで作る高打点役）",
        kokushi: "国士無双（1・9・字牌を13種類集め、そのうち1種類を対子にする役）",
        toitoi: "対々和（すべて刻子で作る役）",
        dora: (count) => `ドラ${count}（ドラ牌を${count}枚持っている点数ボーナス）`,
      };

      const $ = (id) => document.getElementById(id);
      const tileById = Object.fromEntries(TILE_DEFS.map((tile) => [tile.id, tile]));
      const FIGHT_RANKS = ["新人", "10級", "9級", "8級", "7級", "6級", "5級", "4級", "3級", "2級", "1級", "初段", "二段", "三段", "四段", "五段", "四神候補", "龍位候補", "龍位"];
      const DAILY_MISSIONS = [
        "リーチ（鳴かずにテンパイして宣言する役）で和了を目指す",
        "タンヤオ（1・9・字牌を使わない役）候補を1回作る",
        "相手リーチ時に現物（相手がすでに切った牌）を確認する",
        "国士無双（1・9・字牌を13種類集める役）の気配を1回確認する",
        "危険度が赤い牌を避けて守備する",
      ];
      let state;
      let fightProfile = loadFightProfile();

      function buildWall() {
        const wall = [];
        for (const tile of TILE_DEFS) {
          for (let i = 0; i < 4; i += 1) wall.push(tile.id);
        }
        for (let i = wall.length - 1; i > 0; i -= 1) {
          const j = Math.floor(Math.random() * (i + 1));
          [wall[i], wall[j]] = [wall[j], wall[i]];
        }
        return wall;
      }

      function newRound() {
        const wall = buildWall();
        const doraIndicator = wall.pop();
        state = {
          wall,
          doraIndicator,
          dora: getDoraFromIndicator(doraIndicator),
          hands: [[], [], [], []],
          rivers: [[], [], [], []],
          scores: [25000, 25000, 25000, 25000],
          turn: 0,
          drawnIndex: null,
          busy: false,
          ended: false,
          riichiDeclared: false,
          riichiPlayers: [false, false, false, false],
          ippatsuLive: false,
          playerDiscardsSinceRiichi: 0,
          turnNumber: 1,
          calls: [[], [], [], []],
          pendingCall: null,
          selectedYakuCandidate: null,
          lastDiscard: null,
          advice: null,
          scoreExplanation: null,
          trainingModeName: "通常ランダム",
          trainingModeHelp: "通常のランダム配牌です。普通に対局しながらコーチの助言を確認できます。",
          log: [],
        };

        for (let draw = 0; draw < 13; draw += 1) {
          for (let player = 0; player < 4; player += 1) {
            state.hands[player].push(state.wall.pop());
          }
        }
        sortPlayerHand();
        drawTile(0);
        addLog("新しい局を開始しました。まずは孤立した字牌や端牌を探しましょう。");
        render();
      }

      function getDoraFromIndicator(id) {
        const tile = tileById[id];
        if (tile.suit !== "z") {
          const rank = tile.rank === 9 ? 1 : tile.rank + 1;
          return `${tile.suit}${rank}`;
        }
        const winds = ["east", "south", "west", "north"];
        const dragons = ["white", "green", "red"];
        if (winds.includes(id)) return winds[(winds.indexOf(id) + 1) % winds.length];
        return dragons[(dragons.indexOf(id) + 1) % dragons.length];
      }

      function sortPlayerHand() {
        const drawn = state.drawnIndex === null ? null : state.hands[0][state.drawnIndex];
        const base = state.hands[0]
          .filter((_, index) => index !== state.drawnIndex)
          .sort(tileSort);
        if (drawn) {
          state.hands[0] = [...base, drawn];
          state.drawnIndex = state.hands[0].length - 1;
        } else {
          state.hands[0] = base;
        }
      }

      function tileSort(a, b) {
        return tileById[a].order - tileById[b].order;
      }

      function drawTile(player) {
        if (!state.wall.length) {
          endDraw();
          return;
        }
        const tile = state.wall.pop();
        state.hands[player].push(tile);
        if (player === 0) {
          state.drawnIndex = state.hands[0].length - 1;
        }
      }

      function discardTile(player, index) {
        const [tile] = state.hands[player].splice(index, 1);
        state.rivers[player].push(tile);
        state.lastDiscard = { player, tile };
        addLog(`${PLAYERS[player]}が${tileLabel(tile)}を切りました。`);
        return tile;
      }

      function playerDiscard(index) {
        if (!canPlayerDiscardNow()) return;
        const discarded = discardTile(0, index);
        state.drawnIndex = null;

        if (state.riichiDeclared) {
          state.playerDiscardsSinceRiichi += 1;
          if (state.playerDiscardsSinceRiichi > 1) state.ippatsuLive = false;
        }

        const ronWinner = [1, 2, 3].find((player) => canWinWithDiscard(player, discarded));
        if (ronWinner) {
          winRound(ronWinner, 0, "ロン");
          return;
        }

        state.turn = 1;
        render("他家が自動でツモ切りします。次のツモでアドバイスが更新されます。");
        runCpuTurns();
      }

      function canWinWithDiscard(player, tile) {
        return isWinningHand([...state.hands[player], tile]);
      }

      function getPlayerCallOptions(fromPlayer, discardedTile) {
        if (state.riichiDeclared || state.ended || fromPlayer === 0) return [];
        const options = [];
        const hand = state.hands[0];
        const counts = countTiles(hand);
        const tile = tileById[discardedTile];
        const ronHand = [...hand, discardedTile];
        const canRon = state.calls[0].length ? isWinningWithOpen(ronHand, state.calls[0].length) : isWinningHand(ronHand);
        if (canRon) {
          const yaku = completedYakuDetails(ronHand, 0).filter((detail) => detail.kind === "yaku");
          if (yaku.length) {
            options.push({
              type: "ron",
              tiles: [discardedTile],
              consume: [],
              label: `ロン ${tile.name}`,
            });
          }
        }

        if (counts[tile.order] >= 2) {
          options.push({
            type: "pon",
            tiles: [discardedTile, discardedTile, discardedTile],
            consume: [discardedTile, discardedTile],
            label: `ポン ${tile.name}`,
          });
        }

        if (fromPlayer === 3 && tile.suit !== "z") {
          findChiOptions(hand, discardedTile).forEach((meldTiles) => {
            const consume = meldTiles.slice();
            consume.splice(consume.indexOf(discardedTile), 1);
            if (canConsumeTiles(hand, consume)) {
              options.push({
                type: "chi",
                tiles: meldTiles,
                consume,
                label: `チー ${formatTileNames(meldTiles)}`,
              });
            }
          });
        }

        return options;
      }

      function performCall(optionIndex) {
        if (!state.pendingCall) return;
        const option = state.pendingCall.options[optionIndex];
        if (!option || !canConsumeTiles(state.hands[0], option.consume)) return;

        const fromPlayer = state.pendingCall.fromPlayer;
        const calledTile = state.pendingCall.tile;
        const river = state.rivers[fromPlayer];
        if (river[river.length - 1] === calledTile) river.pop();

        if (option.type === "ron") {
          state.hands[0].push(calledTile);
          state.pendingCall = null;
          state.turn = 0;
          state.busy = false;
          sortPlayerHand();
          winRound(0, fromPlayer, "ロン");
          return;
        }

        removeTilesFromHand(0, option.consume);
        state.calls[0].push({ type: option.type, tiles: option.tiles.slice().sort(tileSort), from: fromPlayer, called: calledTile });
        state.pendingCall = null;
        state.drawnIndex = null;
        state.turn = 0;
        state.busy = false;
        state.riichiDeclared = false;
        state.ippatsuLive = false;
        sortPlayerHand();
        addLog(`あなたが${tileById[calledTile].name}を${option.type === "chi" ? "チー" : "ポン"}しました。`);
        render(`${option.type === "chi" ? "チー" : "ポン"}しました。鳴いたので${YAKU.riichi}は使えません。手牌から1枚切ってください。`);
      }

      function skipCall() {
        if (!state.pendingCall) return;
        const nextPlayer = state.pendingCall.nextPlayer;
        state.pendingCall = null;
        state.busy = true;
        render("鳴きを見送りました。");
        setTimeout(() => {
          if (nextPlayer > 3) startPlayerDrawTurn();
          else processCpuTurn(nextPlayer);
        }, 260);
      }

      function canConsumeTiles(hand, tiles) {
        const counts = countTiles(hand);
        return tiles.every((id) => {
          const order = tileById[id].order;
          if (counts[order] <= 0) return false;
          counts[order] -= 1;
          return true;
        });
      }

      function removeTilesFromHand(player, tiles) {
        tiles.forEach((id) => {
          const index = state.hands[player].indexOf(id);
          if (index >= 0) state.hands[player].splice(index, 1);
        });
      }

      function playerTurnTileCount(player) {
        return 14 - (state.calls[player]?.length || 0) * 3;
      }

      function canPlayerDiscardNow() {
        return !state.busy
          && !state.ended
          && !state.pendingCall
          && state.turn === 0
          && state.hands[0].length === playerTurnTileCount(0);
      }

      function runCpuTurns() {
        state.busy = true;
        setTimeout(() => {
          processCpuTurn(1);
        }, 520);
      }

      function processCpuTurn(player) {
        if (state.ended) return;
        if (player > 3) {
          startPlayerDrawTurn();
          return;
        }

        state.turn = player;
        drawTile(player);
        if (state.ended) return;

        if (isWinningHand(state.hands[player]) && Math.random() < 0.35) {
          winRound(player, null, "ツモ");
          return;
        }

        if (!state.riichiPlayers[player] && getShanten(state.hands[player]) === 0 && Math.random() < 0.18) {
          state.riichiPlayers[player] = true;
          addLog(`${PLAYERS[player]}が${YAKU.riichi}を宣言しました。`);
        }

        const discarded = discardTile(player, chooseCpuDiscard(player));
        const callOptions = getPlayerCallOptions(player, discarded);
        if (callOptions.length) {
          state.pendingCall = { fromPlayer: player, tile: discarded, options: callOptions, nextPlayer: player + 1 };
          state.busy = false;
          render(`${PLAYERS[player]}の${tileById[discarded].name}に反応できます。ロン/チー/ポンするか選んでください。`);
          return;
        }

        render(`${PLAYERS[player]}が${tileById[discarded].name}を切りました。`);
        setTimeout(() => processCpuTurn(player + 1), 280);
      }

      function startPlayerDrawTurn() {
        state.turn = 0;
        state.turnNumber += 1;
        drawTile(0);
        if (state.ended) return;
        sortPlayerHand();
        state.busy = false;
        render();
      }

      function chooseCpuDiscard(player) {
        const hand = state.hands[player];
        const counts = countTiles(hand);
        const candidates = hand.map((tile, index) => ({
          index,
          score: discardValue(tile, counts) + Math.random() * 2.5,
        }));
        candidates.sort((a, b) => b.score - a.score);
        return candidates[0].index;
      }

      function discardValue(tile, counts) {
        const order = tileById[tile].order;
        if (counts[order] >= 2) return -2;
        if (isHonor(tile)) return isValueHonor(tile) ? 1 : 4;
        const near = [order - 2, order - 1, order + 1, order + 2].filter((n) => sameSuit(order, n) && counts[n]);
        return 4 - near.length;
      }

      function declareRiichi() {
        if (!canDeclareRiichi()) return;
        state.riichiDeclared = true;
        state.riichiPlayers[0] = true;
        state.ippatsuLive = true;
        state.playerDiscardsSinceRiichi = 0;
        addLog(`あなたが${YAKU.riichi}を宣言しました。`);
        render(`${YAKU.riichi}を宣言しました。テンパイを崩さない牌を切りましょう。`);
      }

      function declareWin() {
        if (state.ended || state.turn !== 0 || !isPlayerWinning(0)) return;
        const yaku = completedYaku(state.hands[0]);
        if (!yaku.length) {
          render("形は和了ですが、いまは役がありません。役を作るまで続けましょう。");
          return;
        }
        winRound(0, null, "ツモ");
      }

      function winRound(winner, loser, method) {
        state.ended = true;
        state.busy = false;
        const result = calculateScore(winner, loser, method, state.hands[winner]);
        updateFightProfileAfterRound(winner, loser, result, method);
        result.payments.forEach((delta, player) => {
          state.scores[player] += delta;
        });
        state.scoreExplanation = result.explanation;
        state.advice = {
          recommendedId: state.hands[winner][0] || "east",
          recommendedText: "局が終了しました",
          shantenLabel: "和了",
          reason: `${PLAYERS[winner]}が${method}で和了しました。`,
          shape: "和了後は、下の点数計算の根拠を見ると「なぜその点数か」を確認できます。",
          yakuText: result.yakuText,
          callText: "局が終わったので鳴き判断はありません。新局で次の練習に進めます。",
          happyText: "次の局では、役と点数の両方を意識して進めましょう。",
          happyTiles: [],
          lesson: "点数は大きく「翻」と「符」で決まります。初心者はまず、役が何翻か、ドラが何枚あるかを見るところから始めると理解しやすいです。",
        };
        addLog(`${PLAYERS[winner]}の${method}。${result.displayScore}です。${result.yakuText}`);
        render(`${PLAYERS[winner]}の${method}！ ${result.displayScore}。点数計算の根拠を右のコーチ欄に出しました。`);
      }

      function endDraw() {
        state.ended = true;
        state.busy = false;
        addLog("牌山が尽きて流局しました。");
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

        state.advice = canPlayerDiscardNow()
          ? analyzePlayerHand()
          : state.advice;

        renderDora();
        renderHand();
        renderOpenMelds();
        for (let player = 0; player < 4; player += 1) renderRiver(player);
        for (let player = 1; player < 4; player += 1) renderCpuHand(player);
        renderCallPanel();

        const winning = !state.ended && state.turn === 0 && isPlayerWinning(0);
        const hasYaku = winning && completedYaku(state.hands[0]).length > 0;
        $("winButton").disabled = !hasYaku;
        $("riichiButton").disabled = !canDeclareRiichi();
        $("message").textContent = messageOverride ?? getMessage(winning, hasYaku);
        renderAdvice();
        renderFightProfile();
        renderOpponentAnalysis();
        renderLog();
      }

      function renderDora() {
        const indicator = tileById[state.doraIndicator];
        const dora = tileById[state.dora];
        $("doraIndicator").textContent = indicator.glyph;
        $("doraIndicator").title = `ドラ表示牌: ${indicator.name}`;
        $("doraText").textContent = `ボーナス牌は${dora.name}`;

        const drawn = state.drawnIndex === null ? null : state.hands[0][state.drawnIndex];
        const drawMini = $("drawTileMini");
        if (drawn) {
          drawMini.className = "tile small";
          drawMini.textContent = tileById[drawn].glyph;
          $("drawText").textContent = tileById[drawn].name;
        } else {
          drawMini.className = "tile small empty";
          drawMini.textContent = "待ち";
          $("drawText").textContent = "";
        }
      }

      function renderHand() {
        const hand = $("playerHand");
        const drawnSlot = $("drawnTileSlot");
        hand.innerHTML = "";
        drawnSlot.innerHTML = "";
        state.hands[0].forEach((id, index) => {
          const button = createTileButton(id, index);
          if (index === state.drawnIndex) {
            button.classList.add("drawn");
            drawnSlot.append(button);
          } else {
            hand.append(button);
          }
        });
      }

      function createTileButton(id, index) {
        const button = document.createElement("button");
        button.type = "button";
        button.className = "tile";
        if (state.advice && state.advice.recommendedId === id) button.classList.add("recommended");
        const marker = getYakuTileMarker(id);
        if (marker === "focus") button.classList.add("yaku-focus");
        if (marker === "blocker") button.classList.add("yaku-blocker");
        const danger = getPlayerTileDangerSummary(id);
        if (danger.className) button.classList.add(danger.className);
        button.textContent = tileById[id].glyph;
        button.title = `${tileById[id].name}を切る${danger.text ? ` / ${danger.text}` : ""}`;
        button.setAttribute("aria-label", `${tileById[id].name}を切る${danger.text ? `。${danger.text}` : ""}`);
        button.disabled = !canPlayerDiscardNow();
        button.addEventListener("click", () => playerDiscard(index));
        return button;
      }

      function renderRiver(player) {
        const river = $(`river${player}`);
        river.innerHTML = "";
        state.rivers[player].forEach((id) => {
          const tile = document.createElement("span");
          tile.className = "tile discarded";
          tile.textContent = tileById[id].glyph;
          tile.title = tileById[id].name;
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

      function renderOpenMelds() {
        const container = $("playerMelds");
        if (!container) return;
        container.innerHTML = "";
        state.calls[0].forEach((call) => {
          const meld = document.createElement("span");
          meld.className = "meld";
          const label = document.createElement("span");
          label.className = "meld-label";
          label.textContent = call.type === "chi" ? "チー" : "ポン";
          meld.append(label);
          call.tiles.forEach((id) => {
            const tile = document.createElement("span");
            tile.className = "tile small";
            const marker = getYakuTileMarker(id);
            if (marker === "focus") tile.classList.add("yaku-focus");
            if (marker === "blocker") tile.classList.add("yaku-blocker");
            tile.textContent = tileById[id].glyph;
            tile.title = tileById[id].name;
            meld.append(tile);
          });
          container.append(meld);
        });
      }

      function renderCallPanel() {
        const panel = $("callPanel");
        const buttons = $("callButtons");
        if (!panel || !buttons) return;
        buttons.innerHTML = "";
        if (!state.pendingCall || state.ended) {
          panel.hidden = true;
          return;
        }

        const tile = tileById[state.pendingCall.tile];
        $("callPrompt").textContent = `${PLAYERS[state.pendingCall.fromPlayer]}の${tile.name}に反応できます。`;
        state.pendingCall.options.forEach((option, index) => {
          const button = document.createElement("button");
          button.type = "button";
          button.textContent = option.label;
          button.addEventListener("click", () => performCall(index));
          buttons.append(button);
        });
        const skip = document.createElement("button");
        skip.type = "button";
        skip.className = "skip-call";
        skip.textContent = "スキップ";
        skip.addEventListener("click", skipCall);
        buttons.append(skip);
        panel.hidden = false;
      }

      function renderYakuCandidateButtons() {
        const container = $("yakuCandidateButtons");
        if (!container) return;
        container.innerHTML = "";
        const candidates = getYakuCandidatesForPlayer();
        if (!candidates.length) {
          const text = document.createElement("span");
          text.textContent = "まずは形を整える段階です。";
          container.append(text);
          return;
        }
        if (!candidates.some((candidate) => candidate.id === state.selectedYakuCandidate)) {
          state.selectedYakuCandidate = candidates[0].id;
        }
        candidates.forEach((candidate) => {
          const button = document.createElement("button");
          button.type = "button";
          button.textContent = candidate.label;
          button.title = candidate.description;
          if (candidate.id === state.selectedYakuCandidate) button.className = "active";
          button.addEventListener("click", () => {
            state.selectedYakuCandidate = candidate.id;
            render();
          });
          container.append(button);
        });
      }

      function getYakuTileMarker(tileId) {
        const candidates = getYakuCandidatesForPlayer();
        if (!candidates.length) return "";
        if (!candidates.some((candidate) => candidate.id === state.selectedYakuCandidate)) {
          state.selectedYakuCandidate = candidates[0].id;
        }
        const selected = candidates.find((candidate) => candidate.id === state.selectedYakuCandidate);
        if (!selected) return "";
        if (selected.blockerTiles.includes(tileId)) return "blocker";
        if (selected.focusTiles.includes(tileId)) return "focus";
        return "";
      }

      function getYakuCandidatesForPlayer() {
        if (!state || state.ended) return [];
        const concealed = state.hands[0] || [];
        const openTiles = state.calls[0].flatMap((call) => call.tiles);
        const full = [...concealed, ...openTiles];
        const counts = countTiles(full);
        const candidates = [];
        const open = state.calls[0].length > 0;
        const shanten = getShanten(concealed);
        const middleTiles = uniqueIds(full.filter((id) => !isTerminalOrHonor(id)));
        const terminalHonorTiles = uniqueIds(full.filter(isTerminalOrHonor));
        const doraRelated = uniqueIds(full.filter((id) => id === state.dora || isNearDora(id, state.dora)));

        if (!open && shanten <= 1) {
          candidates.push({
            id: "riichi",
            label: "リーチ候補",
            focusTiles: uniqueIds(full.filter((id) => !isHonor(id))),
            blockerTiles: [],
            description: YAKU.riichi,
          });
        }

        if (middleTiles.length >= 6 || terminalHonorTiles.length <= 3) {
          candidates.push({
            id: "tanyao",
            label: "タンヤオ候補",
            focusTiles: middleTiles,
            blockerTiles: terminalHonorTiles,
            description: YAKU.tanyao,
          });
        }

        if (!open && countSequencePotential(counts) >= 3) {
          candidates.push({
            id: "pinfu",
            label: "ピンフ候補",
            focusTiles: uniqueIds(full.filter((id) => !isHonor(id))),
            blockerTiles: uniqueIds(full.filter((id) => isValueHonor(id))),
            description: YAKU.pinfu,
          });
        }

        const yakuhaiTiles = uniqueIds(["east", "white", "green", "red"].filter((id) => counts[tileById[id].order] >= 2));
        if (yakuhaiTiles.length) {
          candidates.push({
            id: "yakuhai",
            label: "役牌候補",
            focusTiles: yakuhaiTiles,
            blockerTiles: [],
            description: YAKU.yakuhai,
          });
        }

        if (doraRelated.length) {
          candidates.push({
            id: "dora",
            label: "ドラ周り",
            focusTiles: doraRelated,
            blockerTiles: [],
            description: state.dora ? YAKU.dora(Math.max(1, countDora(full))) : "ドラ周り",
          });
        }

        const pairTiles = uniqueIds(TILE_DEFS.filter((tile) => counts[tile.order] >= 2).map((tile) => tile.id));
        if (!open && pairTiles.length >= 3) {
          candidates.push({
            id: "chiitoi",
            label: "七対子候補",
            focusTiles: pairTiles,
            blockerTiles: uniqueIds(full.filter((id) => counts[tileById[id].order] === 1)),
            description: YAKU.chiitoi,
          });
        }

        const suitCandidate = bestSuitCandidate(full);
        if (suitCandidate) {
          candidates.push({
            id: "honitsu",
            label: `${suitName(suitCandidate.suit)}染め候補`,
            focusTiles: uniqueIds(full.filter((id) => tileById[id].suit === suitCandidate.suit || tileById[id].suit === "z")),
            blockerTiles: uniqueIds(full.filter((id) => tileById[id].suit !== suitCandidate.suit && tileById[id].suit !== "z")),
            description: `${YAKU.honitsu}や${YAKU.chinitsu}`,
          });
        }

        return candidates;
      }

      function bestSuitCandidate(hand) {
        const counts = { m: 0, p: 0, s: 0 };
        hand.forEach((id) => {
          const suit = tileById[id].suit;
          if (counts[suit] !== undefined) counts[suit] += 1;
        });
        const best = Object.entries(counts).sort((a, b) => b[1] - a[1])[0];
        if (!best || best[1] < 5) return null;
        const otherTotal = Object.entries(counts).filter(([suit]) => suit !== best[0]).reduce((sum, [, count]) => sum + count, 0);
        if (best[1] >= otherTotal + 2) return { suit: best[0], count: best[1] };
        return null;
      }

      function renderAdvice() {
        const advice = state.advice;
        if (!advice) return;
        $("shantenBadge").textContent = advice.shantenLabel;
        $("recommendedTile").textContent = tileById[advice.recommendedId].glyph;
        $("recommendedText").textContent = advice.recommendedText;
        $("reasonText").textContent = advice.reason;
        $("shapeText").textContent = advice.shape;
        $("yakuText").textContent = advice.yakuText;
        $("callText").textContent = advice.callText;
        $("happyText").textContent = advice.happyText;
        $("lessonText").textContent = advice.lesson;
        $("scoreExplainText").textContent = state.scoreExplanation || "まだ和了していません。和了すると、役ごとの翻、符の考え方、ロン/ツモの支払いをここに表示します。";
        renderYakuCandidateButtons();

        const happy = $("happyTiles");
        happy.innerHTML = "";
        advice.happyTiles.slice(0, 10).forEach((id) => {
          const tile = document.createElement("span");
          tile.className = "tile small";
          tile.textContent = tileById[id].glyph;
          tile.title = tileById[id].name;
          happy.append(tile);
        });
      }

      function renderOpponentAnalysis() {
        const container = $("opponentAnalysisList");
        if (!container) return;
        container.innerHTML = "";
        [1, 2, 3].forEach((playerIndex) => {
          const analysis = analyzeOpponentIntent(playerIndex);
          const card = document.createElement("article");
          card.className = `opponent-card ${analysis.levelClass}`;
          const title = document.createElement("h3");
          title.textContent = `${PLAYERS[playerIndex]}の狙い予想`;
          card.append(title);

          const list = document.createElement("dl");
          [
            ["推測", analysis.guess],
            ["根拠", analysis.reason],
            ["警戒度", analysis.alert],
            ["危険牌", analysis.dangerTiles],
            ["安全牌", analysis.safeTiles],
            ["手牌別危険度", analysis.handDanger],
            ["初心者向け解説", analysis.lesson],
          ].forEach(([label, value]) => {
            const dt = document.createElement("dt");
            const dd = document.createElement("dd");
            dt.textContent = label;
            dd.textContent = value;
            list.append(dt, dd);
          });
          card.append(list);
          container.append(card);
        });
      }

      function analyzeOpponentIntent(playerIndex) {
        const river = state.rivers[playerIndex];
        const calls = state.calls[playerIndex] || [];
        const suitBias = detectSuitBias(river);
        const tanyao = detectTanyaoPattern(river);
        const kokushi = detectKokushiPattern(river);
        const callPattern = detectYakuhaiOrToitoiPattern(calls);
        const isRiichi = state.riichiPlayers[playerIndex];
        const dangerEvaluations = uniqueIds(state.hands[0]).map((id) => evaluateTileDanger(id, playerIndex));
        const dangerous = dangerEvaluations
          .filter((item) => item.rank === "危険" || item.rank === "やや危険")
          .sort((a, b) => b.score - a.score);
        const safe = dangerEvaluations
          .filter((item) => item.rank === "安全" || item.rank === "やや安全")
          .sort((a, b) => a.score - b.score);
        const handDanger = dangerEvaluations
          .sort((a, b) => tileById[a.tile].order - tileById[b.tile].order)
          .map((item) => `${tileById[item.tile].name}: ${item.rank}（${item.reason}）`)
          .join(" / ");

        const guesses = [];
        const reasons = [];
        let alertScore = Math.min(2, Math.floor(river.length / 5));

        if (isRiichi) {
          alertScore += 4;
          guesses.push(`${YAKU.riichi}しています。待ちは断定できないため、守備を強める場面です。`);
          reasons.push(`${PLAYERS[playerIndex]}がリーチを宣言しています。`);
        }
        if (suitBias.detected) {
          alertScore += suitBias.alert;
          guesses.push(`${YAKU.honitsu}や${YAKU.chinitsu}を狙っている可能性があります。`);
          reasons.push(suitBias.reason);
        }
        if (tanyao.detected) {
          alertScore += 1;
          guesses.push(`${YAKU.tanyao}を狙っている可能性があります。`);
          reasons.push(tanyao.reason);
        }
        if (kokushi.detected) {
          alertScore += kokushi.alert;
          guesses.push(`${YAKU.kokushi}を狙っている可能性があります。`);
          reasons.push(kokushi.reason);
        }
        if (callPattern.detected) {
          alertScore += callPattern.alert;
          guesses.push(callPattern.guess);
          reasons.push(callPattern.reason);
        }

        if (!guesses.length) {
          guesses.push("まだ狙いははっきりしません。推測です。");
          reasons.push(`捨て牌が${river.length}枚で、特定の役に強く偏った情報はまだ少ないです。`);
        }

        const alert = alertLabel(alertScore);
        const dangerText = dangerous.length
          ? dangerous.slice(0, 5).map((item) => `${tileById[item.tile].name}: ${item.rank}（${item.reason}）`).join(" / ")
          : "今の手牌には、はっきり危険と出る牌は少なめです。ドラ周辺は引き続き注意です。";
        const safeText = safe.length
          ? safe.slice(0, 5).map((item) => `${tileById[item.tile].name}: ${item.rank}（${item.reason}）`).join(" / ")
          : `${PLAYERS[playerIndex]}の現物が自分の手牌に少ないため、完全に安全と言える牌は見つかっていません。`;

        return {
          guess: `推測：${guesses.join(" ")}`,
          reason: reasons.join(" "),
          alert: alert.label,
          levelClass: alert.className,
          dangerTiles: dangerText,
          safeTiles: safeText,
          handDanger,
          lesson: buildOpponentLesson(playerIndex, isRiichi, suitBias, tanyao, kokushi),
        };
      }

      function detectSuitBias(river) {
        if (river.length < 5) return { detected: false, alert: 0, reason: "" };
        const suitCounts = { m: 0, p: 0, s: 0, z: 0 };
        river.forEach((id) => {
          suitCounts[tileById[id].suit] += 1;
        });
        const numbered = ["m", "p", "s"].map((suit) => ({ suit, count: suitCounts[suit] }));
        numbered.sort((a, b) => a.count - b.count);
        const kept = numbered[0];
        const cutMany = numbered.slice(1).filter((item) => item.count >= 2).length;
        if (kept.count <= 1 && cutMany >= 1) {
          return {
            detected: true,
            alert: suitCounts.z <= 1 ? 2 : 1,
            suit: kept.suit,
            reason: `${suitName(kept.suit)}をほとんど切っておらず、他の色を先に整理しています。特定の色を集めている可能性があります。`,
          };
        }
        return { detected: false, alert: 0, reason: "" };
      }

      function detectTanyaoPattern(river) {
        if (river.length < 4) return { detected: false, reason: "" };
        const terminalHonor = river.filter(isTerminalOrHonor).length;
        if (terminalHonor >= 3 && terminalHonor / river.length >= 0.55) {
          return {
            detected: true,
            reason: `序盤から1・9・字牌を${terminalHonor}枚切っており、中張牌を残しているように見えます。`,
          };
        }
        return { detected: false, reason: "" };
      }

      function detectKokushiPattern(river) {
        if (river.length < 4 || state.turnNumber > 9) return { detected: false, alert: 0, reason: "" };
        const middle = river.filter((id) => !isTerminalOrHonor(id)).length;
        const terminalHonor = river.length - middle;
        if (middle >= 3 && terminalHonor <= 1) {
          return {
            detected: true,
            alert: middle >= 5 ? 2 : 1,
            reason: `序盤に2〜8の数牌を多く切り、1・9・字牌をあまり切っていません。ただし国士無双はレアなので推測です。`,
          };
        }
        return { detected: false, alert: 0, reason: "" };
      }

      function detectYakuhaiOrToitoiPattern(calls) {
        const ponCalls = calls.filter((call) => call.type === "pon");
        if (ponCalls.length >= 2) {
          return {
            detected: true,
            alert: 3,
            guess: `${YAKU.toitoi}や${YAKU.yakuhai}を狙っている可能性があります。`,
            reason: "ポンが複数見えているため、刻子で進める手の可能性があります。",
          };
        }
        if (ponCalls.some((call) => call.tiles.some(isValueHonor))) {
          return {
            detected: true,
            alert: 2,
            guess: `${YAKU.yakuhai}を狙っている可能性があります。`,
            reason: "役牌のポンが見えているため、鳴いても役が残る形です。",
          };
        }
        return { detected: false, alert: 0, guess: "", reason: "" };
      }

      function evaluateTileDanger(tile, targetPlayer) {
        const reasons = [];
        let score = state.riichiPlayers[targetPlayer] ? 45 : 16;
        if (getGenbutsuSafeTiles(targetPlayer).includes(tile)) {
          return { tile, rank: "安全", score: 0, reason: "現物（相手がすでに切っている牌）なので、その相手にはロンされません。" };
        }

        const tileInfo = tileById[tile];
        const suji = getSujiSafety(tile, targetPlayer);
        const kabe = getKabeSafety(tile);
        if (state.riichiPlayers[targetPlayer]) reasons.push(`${PLAYERS[targetPlayer]}のリーチに対して現物ではありません`);
        if (suji.safe) {
          score -= 13;
          reasons.push(suji.reason);
        } else if (tileInfo.suit !== "z" && state.riichiPlayers[targetPlayer]) {
          score += 14;
          reasons.push("無筋なのでリーチ後は危険寄りです");
        }
        if (kabe.safe) {
          score -= 10;
          reasons.push(kabe.reason);
        }
        if (tile === state.dora || isNearDora(tile, state.dora)) {
          score += tile === state.dora ? 28 : 14;
          reasons.push(tile === state.dora ? "ドラそのものです" : "ドラ周辺の牌です");
        }
        if (tileInfo.suit === "z") {
          const visible = countPublicVisibleTiles()[tileInfo.order];
          if (visible >= 2) {
            score -= 10;
            reasons.push(`${tileInfo.name}が場に${visible}枚見えていて残り枚数が少なめです`);
          } else {
            score += isValueHonor(tile) ? 8 : 2;
            reasons.push(isValueHonor(tile) ? "役牌なので相手の刻子に注意です" : "字牌は相手の対子・刻子に当たることがあります");
          }
        }
        if (isTerminalOrHonor(tile) && !state.riichiPlayers[targetPlayer]) score -= 4;

        return { tile, rank: dangerRank(score), score, reason: reasons.join("。") || "目立つ安全材料も危険材料も少ない牌です。" };
      }

      function getGenbutsuSafeTiles(targetPlayer) {
        return uniqueIds(state.rivers[targetPlayer]);
      }

      function getSujiSafety(tile, targetPlayer) {
        const info = tileById[tile];
        if (info.suit === "z") return { safe: false, reason: "" };
        const river = new Set(state.rivers[targetPlayer]);
        const related = [info.rank - 3, info.rank + 3]
          .filter((rank) => rank >= 1 && rank <= 9)
          .map((rank) => `${info.suit}${rank}`);
        const passed = related.find((id) => river.has(id));
        if (passed) {
          return {
            safe: true,
            reason: `${tileById[passed].name}が通っているスジなので少し安全度が上がります。ただしスジは完全な安全ではありません`,
          };
        }
        return { safe: false, reason: "" };
      }

      function getKabeSafety(tile) {
        const info = tileById[tile];
        if (info.suit === "z") return { safe: false, reason: "" };
        const visible = countPublicVisibleTiles();
        const wallRanks = [info.rank + 1, info.rank - 2, info.rank - 1, info.rank + 2].filter((rank) => rank >= 1 && rank <= 9);
        const wall = wallRanks.find((rank) => visible[tileById[`${info.suit}${rank}`].order] >= 4);
        if (wall) {
          return {
            safe: true,
            reason: `${tileById[`${info.suit}${wall}`].name}が4枚見えている壁で、${info.name}は少し通りやすい可能性があります`,
          };
        }
        return { safe: false, reason: "" };
      }

      function countPublicVisibleTiles() {
        const counts = Array(34).fill(0);
        state.hands[0].forEach((id) => counts[tileById[id].order] += 1);
        state.rivers.flat().forEach((id) => counts[tileById[id].order] += 1);
        counts[tileById[state.doraIndicator].order] += 1;
        state.calls.flat().forEach((call) => {
          call.tiles.forEach((id) => counts[tileById[id].order] += 1);
        });
        return counts;
      }

      function dangerRank(score) {
        if (score <= 8) return "安全";
        if (score <= 22) return "やや安全";
        if (score <= 39) return "普通";
        if (score <= 58) return "やや危険";
        return "危険";
      }

      function alertLabel(score) {
        if (score >= 5) return { label: "高", className: "high" };
        if (score >= 3) return { label: "中", className: "medium" };
        return { label: "低", className: "low" };
      }

      function buildOpponentLesson(playerIndex, isRiichi, suitBias, tanyao, kokushi) {
        if (isRiichi) {
          return "リーチ後は、まず現物を探します。現物（相手がすでに切っている牌）は、その相手にはロンされない牌です。現物がない時はスジや壁を参考にしますが、完全な安全ではありません。";
        }
        if (suitBias.detected) {
          return "相手が特定の色をあまり切っていない場合、その色を集めている可能性があります。その色やドラ周辺を切る時は少し注意しましょう。";
        }
        if (tanyao.detected) {
          return `1・9・字牌が多く捨てられている時は、${YAKU.tanyao}のように2〜8を集める手が考えられます。中張牌、特にドラ周辺は少し注意です。`;
        }
        if (kokushi.detected) {
          return `${YAKU.kokushi}は珍しい役です。序盤に中張牌ばかり切られている時だけ、1・9・字牌を切る前に少し確認しましょう。`;
        }
        return `これは公開情報だけからの推測です。${PLAYERS[playerIndex]}の手牌は見ず、捨て牌・リーチ・ドラ表示牌・場に見えている牌から安全度を考えています。`;
      }

      function suitName(suit) {
        return { m: "萬子", p: "筒子", s: "索子", z: "字牌" }[suit];
      }

      function uniqueIds(ids) {
        return [...new Set(ids)].sort(tileSort);
      }

      function countLiveTileTotal(ids) {
        if (!ids || !ids.length) return 0;
        const visible = countPublicVisibleTiles();
        return uniqueIds(ids).reduce((sum, id) => {
          const remaining = Math.max(0, 4 - visible[tileById[id].order]);
          return sum + remaining;
        }, 0);
      }

      function describeFuritenForWaits(waits) {
        const selfDiscards = waits.filter((id) => state.rivers[0].includes(id));
        if (!selfDiscards.length) return "";
        return ` ただし${formatTileNames(selfDiscards)}は自分で切っているため、フリテン（自分の捨て牌にある待ちではロンできない状態）に注意してください。`;
      }

      function getPlayerTileDangerSummary(tileId) {
        if (!state || state.ended || !state.hands || !state.hands[0]) return { className: "", text: "" };
        const evaluations = [1, 2, 3].map((player) => ({ player, ...evaluateTileDanger(tileId, player) }));
        const worst = evaluations.sort((a, b) => b.score - a.score)[0];
        if (!worst) return { className: "", text: "" };
        const prefix = `${PLAYERS[worst.player]}への危険度：${worst.rank}`;
        if (worst.rank === "危険") return { className: "danger-high", text: `${prefix}。${worst.reason}` };
        if (worst.rank === "やや危険") return { className: "danger-risk", text: `${prefix}。${worst.reason}` };
        if (worst.rank === "普通") return { className: "danger-caution", text: `${prefix}。${worst.reason}` };
        return { className: "danger-safe", text: `${prefix}。${worst.reason}` };
      }

      function profileStorageKey() {
        return "mahjongCoachFightProfileV1";
      }

      function todayMissionIndex() {
        const day = new Date().toISOString().slice(0, 10).replace(/-/g, "");
        const value = Number(day) || 0;
        return value % DAILY_MISSIONS.length;
      }

      function loadFightProfile() {
        try {
          const stored = JSON.parse(localStorage.getItem(profileStorageKey()) || "null");
          if (stored && typeof stored === "object") return { rankIndex: 0, orbs: 0, leaguePoint: 0, stars: 0, ...stored };
        } catch (error) {
          console.warn("闘牌ステータスの読み込みに失敗しました", error);
        }
        return { rankIndex: 0, orbs: 0, leaguePoint: 0, stars: 0 };
      }

      function saveFightProfile() {
        try {
          localStorage.setItem(profileStorageKey(), JSON.stringify(fightProfile));
        } catch (error) {
          console.warn("闘牌ステータスの保存に失敗しました", error);
        }
      }

      function renderFightProfile() {
        if (!$("fightRank")) return;
        $("fightRank").textContent = FIGHT_RANKS[Math.min(fightProfile.rankIndex, FIGHT_RANKS.length - 1)];
        $("fightOrb").textContent = fightProfile.orbs.toLocaleString("ja-JP");
        $("fightLeague").textContent = leagueLabel(fightProfile.leaguePoint);
        $("fightStars").textContent = fightProfile.stars.toLocaleString("ja-JP");
        $("fightMission").textContent = `本日の課題：${DAILY_MISSIONS[todayMissionIndex()]}`;
        if ($("trainingExplain")) {
          $("trainingExplain").textContent = `現在の練習：${state?.trainingModeName || "通常ランダム"}。${state?.trainingModeHelp || "練習モードを選ぶと、特定の学習用手牌で開始できます。"}`;
        }
      }

      function leagueLabel(point) {
        if (point >= 120) return "鳳凰";
        if (point >= 90) return "A1";
        if (point >= 70) return "A2";
        if (point >= 50) return "B1";
        if (point >= 30) return "B2";
        if (point >= 15) return "C1";
        if (point >= 6) return "C2";
        return "C3";
      }

      function updateFightProfileAfterRound(winner, loser, result, method) {
        if (winner === 0) {
          const bonus = (result.han || 1) + (result.limitName ? 3 : 0) + (method === "ツモ" ? 1 : 0);
          fightProfile.stars += 1;
          fightProfile.orbs += Math.max(1, bonus);
          fightProfile.leaguePoint += Math.max(2, bonus * 2);
          if (fightProfile.orbs >= (fightProfile.rankIndex + 1) * 3 && fightProfile.rankIndex < FIGHT_RANKS.length - 1) {
            fightProfile.rankIndex += 1;
            addLog(`闘牌ステータス：${FIGHT_RANKS[fightProfile.rankIndex]}に昇格しました。`);
          }
        } else {
          fightProfile.leaguePoint = Math.max(0, fightProfile.leaguePoint - 2);
          if (loser === 0) fightProfile.orbs = Math.max(0, fightProfile.orbs - 1);
        }
        saveFightProfile();
      }

      function resetFightProfile() {
        fightProfile = { rankIndex: 0, orbs: 0, leaguePoint: 0, stars: 0 };
        saveFightProfile();
        renderFightProfile();
        addLog("闘牌ステータスをリセットしました。");
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

      function getMessage(winning, hasYaku) {
        if (state.ended) return "局が終了しました。新局を押すと続けられます。";
        if (state.pendingCall) return "反応できる牌が出ました。ロン/チー/ポンするか、スキップを選んでください。";
        if (winning && hasYaku) return "和了できます。和了ボタンを押してください。";
        if (winning) return "形は和了ですが役がありません。役を確認して進めましょう。";
        if (state.busy) return `${PLAYERS[state.turn]}の番です。`;
        if (state.riichiDeclared) return `${YAKU.riichi}中です。テンパイを崩さない打牌を選びましょう。`;
        return "手牌から1枚クリックして打牌してください。";
      }

      function analyzePlayerHand() {
        const hand = state.hands[0];
        const analysis = analyzeHand(hand, state.dora);
        const candidates = recommendDiscard(hand, state.dora, state.rivers.flat());
        const best = candidates[0];
        const yakuPlan = describeYakuPlan(best.after, state.dora);
        const tenpai = findTenpaiWaits(hand);
        const callDecision = state.lastDiscard && state.lastDiscard.player !== 0
          ? evaluateCallDecision(hand, state.lastDiscard.tile, "auto", state.dora)
          : buildCallAdvice(best.after, yakuPlan.routes);
        const waitText = describeTenpaiAdvice(tenpai, best);

        return {
          recommendedId: best.tile,
          recommendedText: `${tileById[best.tile].name}を切る`,
          shantenLabel: shantenLabel(best.shanten),
          reason: buildReason(best, analysis),
          shape: `${describeShape(best.after, best.shanten)} ${waitText}`,
          yakuText: yakuPlan.text,
          callText: callDecision,
          happyText: best.happyTiles.length
            ? `${formatTileNames(best.happyTiles.slice(0, 10))}が来ると手が進みます。見えている牌を除くと、合計${countLiveTileTotal(best.happyTiles)}枚くらい残っています。`
            : "今は形を整える段階です。孤立牌を減らすツモがうれしいです。",
          happyTiles: best.happyTiles,
          lesson: buildLesson(best, yakuPlan.routes),
        };
      }

      function analyzeHand(hand, dora) {
        const counts = countTiles(hand);
        const shanten = getShanten(hand);
        const isolated = hand.filter((id) => tileShapeInfo(id, counts, dora).isIsolated);
        const pairs = TILE_DEFS.filter((tile) => counts[tile.order] >= 2).map((tile) => tile.id);
        const completeMeldTiles = completedMeldTileIds(counts);
        const sequenceBlocks = sequenceBlockCount(counts);
        const twoSided = twoSidedPotential(counts);
        const closedWaits = closedWaitPotential(counts);
        const edgeWaits = edgeWaitPotential(counts);
        return { counts, shanten, isolated, pairs, completeMeldTiles, sequenceBlocks, twoSided, closedWaits, edgeWaits };
      }

      function recommendDiscard(hand, dora, discards) {
        return hand.map((tile, index) => {
          const after = hand.filter((_, handIndex) => handIndex !== index);
          const shanten = getShanten(after);
          const happyTiles = improvingTiles(after, shanten);
          const routes = identifyYakuRoutes(after, shanten);
          const detail = tileShapeInfo(tile, countTiles(hand), dora);
          const afterAnalysis = analyzeHand(after, dora);
          const score = scoreDiscard(tile, hand, after, shanten, happyTiles, routes, detail, afterAnalysis, discards, dora);
          return { tile, index, after, shanten, happyTiles, routes, score, detail, afterAnalysis };
        }).sort((a, b) => b.score - a.score);
      }

      function getDiscardCandidates(hand) {
        return recommendDiscard(hand, state.dora, state.rivers.flat());
      }

      function scoreDiscard(tile, before, after, shanten, happyTiles, routes, detail, afterAnalysis, discards, dora) {
        const countsBefore = countTiles(before);
        const order = tileById[tile].order;
        let score = -shanten * 120 + happyTiles.length * 7 + discardValue(tile, countsBefore) * 8;
        if (detail.isIsolated) score += 34;
        if (detail.isHonor && !detail.isValueHonor && detail.count === 1) score += 28;
        if (detail.isTerminal && detail.count === 1) score += 18;
        if (detail.isEdgeOnly) score += 12;
        if (detail.isClosedOnly) score += 8;
        if (detail.hasTwoSided) score -= 20;
        if (detail.inCompleteMeld) score -= 36;
        if (detail.count >= 2) score -= detail.isValueHonor ? 34 : 16;
        if (tile === dora) score -= 45;
        if (isNearDora(tile, dora)) score -= 12;
        if (isTerminalOrHonor(tile) && routes.includes(YAKU.tanyao)) score += 18;
        if (isHonor(tile) && !isValueHonor(tile) && countsBefore[order] === 1) score += 18;
        if (isValueHonor(tile) && countsBefore[order] >= 2) score -= 24;
        if (routes.includes(YAKU.riichi)) score += 10;
        if (routes.includes(YAKU.pinfu)) score += 8;
        if (routes.some((route) => route.startsWith("ドラ"))) score += 4;
        if (state.riichiDeclared && shanten > 0) score -= 80;
        if (afterAnalysis.twoSided >= 2) score += 10;
        if (afterAnalysis.completeMeldTiles.length >= 3) score += 5;
        after.forEach((id) => {
          if (id === dora) score += 3;
        });
        return score;
      }

      function buildReason(candidate, analysis) {
        const tile = tileById[candidate.tile];
        const detail = candidate.detail;
        const parts = [];
        parts.push(`${tile.name}を切ると${shantenLabel(candidate.shanten)}で、受け入れ候補が${candidate.happyTiles.length}種類あります。`);
        if (detail.isHonor && !detail.isValueHonor && detail.count === 1) {
          parts.push(`${tile.name}は字牌で順子にならず、1枚だけなので孤立牌として整理しやすいです。`);
        } else if (detail.isIsolated && detail.isTerminal) {
          parts.push(`${tile.name}は端牌で、周辺の牌が少ないため順子になりにくい孤立牌です。`);
        } else if (detail.isIsolated) {
          parts.push(`${tile.name}は周辺の牌が薄く、両面待ちに育ちにくい孤立牌です。`);
        } else if (detail.isEdgeOnly) {
          parts.push(`${tile.name}はペンチャン寄りの形に絡む牌で、両面待ちに比べると伸びが少し弱いです。`);
        } else if (detail.isClosedOnly) {
          parts.push(`${tile.name}はカンチャン寄りの形に絡む牌で、両面待ちより待ちが狭くなりやすいです。`);
        } else if (isTerminalOrHonor(candidate.tile) && candidate.routes.includes(YAKU.tanyao)) {
          parts.push(`${YAKU.tanyao}に不要な1・9・字牌を外して、使いやすい2から8の牌を残します。`);
        } else if (candidate.tile === state.dora) {
          parts.push("ただし点数ボーナス牌なので、本当は残したい牌です。手の進みが大きく変わるときだけ切ります。");
        } else if (detail.count >= 2) {
          parts.push("対子を切る選択なので少し強めですが、ほかの形を優先した方が手が進みます。");
        } else if (detail.hasTwoSided) {
          parts.push("両面候補にも絡みますが、他の色の形がより強いため今回は整理候補になっています。");
        } else {
          parts.push("周りの牌とのつながりが薄く、残した牌の方が順子や対子になりやすい形です。");
        }
        if (analysis.completeMeldTiles.includes(candidate.tile)) {
          parts.push("ただし完成している面子に触る打牌なので、実戦では他候補も比べたい場面です。");
        } else {
          parts.push("すでに完成している面子は崩しにくい評価にしています。");
        }
        return parts.join("");
      }

      function describeShape(hand, shanten) {
        const counts = countTiles(hand);
        const sequences = countSequencePotential(counts);
        const pairs = counts.filter((count) => count >= 2).length;
        const yakuhaiPairs = valueHonorPairs(counts);
        const doraCount = countDora(hand);
        const base = `${shantenLabel(shanten)}です。`;
        if (sevenPairsShanten(counts) <= Math.min(shanten, 1) && pairs >= 4) {
          return `${base} 対子が多いので、${YAKU.chiitoi}も見えます。ペアを壊しすぎないのがコツです。`;
        }
        if (yakuhaiPairs.length) {
          return `${base} ${formatTileNames(yakuhaiPairs)}の対子があり、${YAKU.yakuhai}を軸にできます。`;
        }
        if (sequences >= 4) {
          return `${base} 数牌のつながりが多く、順子を4つ作る門前寄りの手です。${YAKU.riichi}や${YAKU.pinfu}が自然です。`;
        }
        if (doraCount > 0) {
          return `${base} 点数ボーナス牌を${doraCount}枚持っています。役を1つ作れれば${YAKU.dora(doraCount)}で点数が伸びます。`;
        }
        return `${base} まだ材料集めの段階です。孤立した牌を減らして、2枚組や連続形を増やしましょう。`;
      }

      function tileShapeInfo(id, counts, dora) {
        const tile = tileById[id];
        const order = tile.order;
        const count = counts[order];
        const isHonorTile = isHonor(id);
        const isTerminal = !isHonorTile && (tile.rank === 1 || tile.rank === 9);
        const neighbor1 = !isHonorTile && hasSameSuit(counts, order, -1);
        const neighbor2 = !isHonorTile && hasSameSuit(counts, order, 1);
        const gap1 = !isHonorTile && hasSameSuit(counts, order, -2);
        const gap2 = !isHonorTile && hasSameSuit(counts, order, 2);
        const hasTwoSided = !isHonorTile && (
          (tile.rank >= 3 && tile.rank <= 7 && neighbor1) ||
          (tile.rank >= 3 && tile.rank <= 7 && neighbor2)
        );
        const isEdgeOnly = !isHonorTile && (
          (tile.rank === 1 && neighbor2) ||
          (tile.rank === 2 && neighbor1 && !neighbor2) ||
          (tile.rank === 8 && neighbor2 && !neighbor1) ||
          (tile.rank === 9 && neighbor1)
        );
        const isClosedOnly = !isHonorTile && !neighbor1 && !neighbor2 && (gap1 || gap2);
        const isIsolated = count === 1 && (isHonorTile || (!neighbor1 && !neighbor2 && !gap1 && !gap2));
        return {
          count,
          isHonor: isHonorTile,
          isTerminal,
          isValueHonor: isValueHonor(id),
          isIsolated,
          hasTwoSided,
          isEdgeOnly,
          isClosedOnly,
          inCompleteMeld: completedMeldTileIds(counts).includes(id),
          isDora: id === dora,
          isNearDora: isNearDora(id, dora),
        };
      }

      function hasSameSuit(counts, order, offset) {
        const next = order + offset;
        return sameSuit(order, next) && counts[next] > 0;
      }

      function completedMeldTileIds(counts) {
        const result = new Set();
        for (const tile of TILE_DEFS) {
          if (counts[tile.order] >= 3) result.add(tile.id);
        }
        for (const base of [0, 9, 18]) {
          for (let order = base; order <= base + 6; order += 1) {
            if (counts[order] && counts[order + 1] && counts[order + 2]) {
              result.add(TILE_DEFS[order].id);
              result.add(TILE_DEFS[order + 1].id);
              result.add(TILE_DEFS[order + 2].id);
            }
          }
        }
        return [...result];
      }

      function sequenceBlockCount(counts) {
        let blocks = 0;
        for (const base of [0, 9, 18]) {
          for (let order = base; order <= base + 7; order += 1) {
            if (counts[order] && counts[order + 1]) blocks += 1;
          }
          for (let order = base; order <= base + 6; order += 1) {
            if (counts[order] && counts[order + 2]) blocks += 1;
          }
        }
        return blocks;
      }

      function twoSidedPotential(counts) {
        let total = 0;
        for (const base of [0, 9, 18]) {
          for (let order = base + 1; order <= base + 6; order += 1) {
            if (counts[order] && counts[order + 1]) total += 1;
          }
        }
        return total;
      }

      function closedWaitPotential(counts) {
        let total = 0;
        for (const base of [0, 9, 18]) {
          for (let order = base; order <= base + 6; order += 1) {
            if (counts[order] && counts[order + 2] && !counts[order + 1]) total += 1;
          }
        }
        return total;
      }

      function edgeWaitPotential(counts) {
        let total = 0;
        for (const base of [0, 9, 18]) {
          if (counts[base] && counts[base + 1] && !counts[base + 2]) total += 1;
          if (counts[base + 7] && counts[base + 8] && !counts[base + 6]) total += 1;
        }
        return total;
      }

      function isNearDora(id, dora) {
        const tile = tileById[id];
        const doraTile = tileById[dora];
        if (!tile || !doraTile || tile.suit !== doraTile.suit || tile.suit === "z") return false;
        return Math.abs(tile.rank - doraTile.rank) <= 2;
      }

      function describeYakuPlan(hand, dora) {
        const shanten = getShanten(hand);
        const counts = countTiles(hand);
        const routes = identifyYakuRoutes(hand, shanten);
        const terminalHonor = hand.filter(isTerminalOrHonor);
        const doraCount = countDora(hand);
        const plan = routes.length
          ? `役構成：${routes.join("＋")}狙いです。`
          : "役構成：まだ役は固定せず、まずはリーチ（鳴かずにテンパイして宣言する役）を目指せる形に整えます。";
        const notes = [];
        if (terminalHonor.length && routes.includes(YAKU.tanyao)) {
          notes.push(`補足：今はまだ${formatTileNames(terminalHonor.slice(0, 4))}があるため、${YAKU.tanyao}は確定していません。これらを処理できるとタンヤオ寄りになります。`);
        }
        if (valueHonorPairs(counts).length) {
          notes.push(`補足：${formatTileNames(valueHonorPairs(counts))}の対子があるので、鳴いて${YAKU.yakuhai}にする道もあります。`);
        }
        if (doraCount > 0) {
          notes.push(`補足：${YAKU.dora(doraCount)}があるので、役を1つ作れれば点数が伸びます。`);
        } else if (hand.some((id) => isNearDora(id, dora))) {
          notes.push(`補足：ドラ周りの牌があります。直接のドラではなくても、ドラを引いた時に使いやすい形は大切です。`);
        }
        return { routes, text: [plan, ...notes].join(" ") };
      }

      function findTenpaiWaits(hand) {
        const candidates = recommendDiscard(hand, state.dora, state.rivers.flat()).filter((candidate) => candidate.shanten === 0);
        const options = candidates.map((candidate) => {
          const waits = TILE_DEFS
            .filter((tile) => countVisibleTiles(candidate.after)[tile.order] < 4)
            .map((tile) => tile.id)
            .filter((id) => state.calls[0].length ? isWinningWithOpen([...candidate.after, id], state.calls[0].length) : isWinningHand([...candidate.after, id]));
          return { discard: candidate.tile, waits: [...new Set(waits)].sort(tileSort), candidate };
        }).filter((option) => option.waits.length);
        options.sort((a, b) => b.waits.length - a.waits.length || tileById[a.discard].order - tileById[b.discard].order);
        return {
          isTenpai: options.length > 0,
          options,
          best: options[0] || null,
        };
      }

      function describeTenpaiAdvice(tenpai, bestDiscard) {
        if (!tenpai.isTenpai) return "";
        const best = tenpai.best;
        const waits = best.waits;
        const allTanyao = waits.every((id) => !isTerminalOrHonor(id));
        const quality = waits.length >= 3
          ? `${formatTileNames(waits)}の${waits.length}面待ちなので、かなり良い待ちです。`
          : waits.length === 2
            ? `${formatTileNames(waits)}の2種類待ちです。悪くない待ちです。`
            : `${formatTileNames(waits)}だけの待ちなので、少し狭い待ちです。`;
        const tanyaoNote = allTanyao
          ? `すべて2〜8の牌なので、${YAKU.tanyao}も崩れません。`
          : `待ちに1・9・字牌が絡むため、${YAKU.tanyao}狙いでは注意が必要です。`;
        const furitenNote = describeFuritenForWaits(waits);
        const riichiText = canDeclareRiichi()
          ? `現在テンパイしています。待ちは${formatTileNames(waits)}です。${quality}${tanyaoNote}${furitenNote} リーチ可能です。おすすめは${tileById[best.discard].name}切りリーチです。`
          : `現在テンパイしています。待ちは${formatTileNames(waits)}です。${quality}${tanyaoNote}${furitenNote}`;
        return riichiText;
      }

      function buildCallAdvice(hand, routes) {
        const counts = countTiles(hand);
        const yakuhaiPairs = valueHonorPairs(counts);
        if (state.riichiDeclared) {
          return `鳴き判断：${YAKU.riichi}中なので鳴けません。ツモかロンを待ちます。`;
        }
        if (yakuhaiPairs.length) {
          return `鳴き判断：${formatTileNames(yakuhaiPairs)}が出たらポンしてもよいです。${YAKU.yakuhai}は鳴いても役が残るので、初心者にはわかりやすい攻め方です。`;
        }
        if (routes.includes(YAKU.tanyao) && !routes.includes(YAKU.pinfu)) {
          return `鳴き判断：${YAKU.tanyao}は鳴いても成立します。ただし鳴くと${YAKU.riichi}が使えなくなるので、テンパイが近い時だけ鳴きましょう。`;
        }
        if (routes.includes(YAKU.pinfu) || routes.includes(YAKU.riichi)) {
          return `鳴き判断：今は門前で進めたい手です。鳴くと${YAKU.riichi}や${YAKU.pinfu}が弱くなるので、基本は鳴かない方がよいです。`;
        }
        return "鳴き判断：まだ役が決まりきっていません。鳴く前に、鳴いたあとに残る役があるかを確認しましょう。";
      }

      function evaluateCallDecision(hand, discardedTile, callType, dora) {
        const tile = tileById[discardedTile];
        const baseHand = state.drawnIndex === null
          ? hand.slice()
          : hand.filter((_, index) => index !== state.drawnIndex);
        const counts = countTiles(baseHand);
        const ponPossible = counts[tile.order] >= 2;
        const chiOptions = findChiOptions(baseHand, discardedTile);
        const yakuPlan = describeYakuPlan(baseHand, dora);
        if (!ponPossible && !chiOptions.length) {
          return `鳴き判断：直近の${tile.name}は、今の手ではチー・ポンできる形がありません。無理に鳴くより、手牌の形を整えましょう。`;
        }
        if (state.riichiDeclared || yakuPlan.routes.includes(YAKU.riichi)) {
          return `鳴き判断：今は鳴かない方がいいです。理由：鳴くと${YAKU.riichi}ができなくなり、門前で進める価値が高い手だからです。`;
        }
        if (isTerminalOrHonor(discardedTile) && yakuPlan.routes.includes(YAKU.tanyao)) {
          return `鳴き判断：${tile.name}は鳴かない方がよいです。理由：${tile.name}を使うと${YAKU.tanyao}が消えてしまうためです。`;
        }
        if (ponPossible && isValueHonor(discardedTile)) {
          return `鳴き判断：この${tile.name}はポンしてもよいです。理由：${tile.name}をポンすると${YAKU.yakuhai}の刻子ができ、鳴いても役が残るからです。`;
        }
        const goodChi = chiOptions.find((option) => option.every((id) => !isTerminalOrHonor(id)));
        if (goodChi && yakuPlan.routes.includes(YAKU.tanyao)) {
          return `鳴き判断：この${tile.name}はチーしてもよいです。理由：${formatTileNames(goodChi)}の順子ができ、${YAKU.tanyao}も維持できます。`;
        }
        if (chiOptions.length && twoSidedPotential(counts) >= 2) {
          return `鳴き判断：今は鳴かない方がいいです。理由：手牌に両面候補があり、鳴かずに進めると${YAKU.riichi}を残せるからです。`;
        }
        const optionText = chiOptions.length ? `${formatTileNames(chiOptions[0])}の順子` : `${tile.name}の刻子`;
        return `鳴き判断：鳴いてもよい候補はありますが、急がなくて大丈夫です。理由：${optionText}はできますが、鳴いた後に残る役を確認してから鳴くのが安全です。`;
      }

      function findChiOptions(hand, discardedTile) {
        const tile = tileById[discardedTile];
        if (tile.suit === "z") return [];
        const ids = new Set(hand);
        const options = [];
        for (const ranks of [[tile.rank - 2, tile.rank - 1], [tile.rank - 1, tile.rank + 1], [tile.rank + 1, tile.rank + 2]]) {
          if (ranks.every((rank) => rank >= 1 && rank <= 9 && ids.has(`${tile.suit}${rank}`))) {
            options.push([`${tile.suit}${ranks[0]}`, discardedTile, `${tile.suit}${ranks[1]}`].sort(tileSort));
          }
        }
        return options;
      }

      function buildLesson(candidate, routes) {
        if (state.calls[0].length > 0) {
          return `すでに鳴いているので${YAKU.riichi}は使えません。鳴いた後は、${YAKU.tanyao}や${YAKU.yakuhai}のように鳴いても残る役があるかを確認しましょう。`;
        }
        if (candidate.shanten === 0) {
          return `テンパイは「あと1枚で和了」の状態です。門前なら${YAKU.riichi}を宣言できるか確認しましょう。`;
        }
        if (routes.includes(YAKU.tanyao)) {
          return `${YAKU.tanyao}は初心者が最初に覚えやすい役です。1・9・字牌を使わず、2から8だけで作ります。`;
        }
        if (routes.includes(YAKU.yakuhai)) {
          return `${YAKU.yakuhai}は対象の字牌を3枚集めるだけで役になります。鳴いても成立するのが強みです。`;
        }
        if (candidate.happyTiles.length >= 8) {
          return "嬉しい牌が多いほど、次のツモで手が進みやすいです。迷ったら受け入れ枚数が多い打牌を選ぶと安定します。";
        }
        return "最初は点数よりも形を意識しましょう。孤立牌を切り、連続している数牌と対子を残すと手がまとまります。";
      }

      function identifyYakuRoutes(hand, shanten) {
        const counts = countTiles(hand);
        const routes = [];
        const terminalHonorCount = hand.filter(isTerminalOrHonor).length;
        const sequencePotential = countSequencePotential(counts);
        const doraCount = countDora(hand);
        const yakuhaiBlocks = valueHonorPairs(counts).length + valueHonorTriples(counts).length;
        const chiitoi = sevenPairsShanten(counts);

        const open = state.calls[0]?.length > 0;
        if (!open && !state.riichiDeclared && shanten <= 1) routes.push(YAKU.riichi);
        if (!open && state.riichiDeclared) routes.push(YAKU.riichi);
        if (!open && state.riichiDeclared && state.ippatsuLive) routes.push(YAKU.ippatsu);
        if (terminalHonorCount === 0 || terminalHonorCount <= 2) routes.push(YAKU.tanyao);
        if (!open && sequencePotential >= 4 && !valueHonorPairs(counts).length) routes.push(YAKU.pinfu);
        if (yakuhaiBlocks) routes.push(YAKU.yakuhai);
        if (doraCount > 0) routes.push(YAKU.dora(doraCount));
        if (!open && chiitoi <= 1) routes.push(YAKU.chiitoi);

        return [...new Set(routes)].slice(0, 5);
      }

      function improvingTiles(hand, shanten) {
        const visible = countVisibleTiles(hand);
        const result = [];
        for (const tile of TILE_DEFS) {
          if (visible[tile.order] >= 4) continue;
          const next = [...hand, tile.id];
          if (getShanten(next) < shanten) result.push(tile.id);
        }
        return result.sort(tileSort);
      }

      function countVisibleTiles(hand) {
        const counts = countTiles(hand);
        counts[tileById[state.doraIndicator].order] += 1;
        state.rivers.flat().forEach((id) => {
          counts[tileById[id].order] += 1;
        });
        return counts;
      }

      function completedYaku(hand) {
        return completedYakuDetails(hand, 0).map((detail) => detail.name);
      }

      function completedYakuDetails(hand, player = 0) {
        const result = [];
        const openTiles = state.calls[player]?.flatMap((call) => call.tiles) || [];
        const fullHand = [...hand, ...openTiles];
        const counts = countTiles(fullHand);
        const open = openTiles.length > 0;
        if (!open && player === 0 && state.riichiDeclared) result.push({ name: YAKU.riichi, han: 1, kind: "yaku" });
        if (!open && player === 0 && state.riichiDeclared && state.ippatsuLive) result.push({ name: YAKU.ippatsu, han: 1, kind: "yaku" });
        if (fullHand.every((id) => !isTerminalOrHonor(id))) result.push({ name: YAKU.tanyao, han: 1, kind: "yaku" });
        if (!open && isLikelyPinfu(countTiles(hand))) result.push({ name: YAKU.pinfu, han: 1, kind: "yaku" });
        if (valueHonorTriples(counts).length) result.push({ name: YAKU.yakuhai, han: 1, kind: "yaku" });
        const doraCount = countDora(fullHand);
        if (doraCount) result.push({ name: YAKU.dora(doraCount), han: doraCount, kind: "dora" });
        if (!open && sevenPairsShanten(countTiles(hand)) === -1) result.push({ name: YAKU.chiitoi, han: 2, kind: "yaku" });
        return result;
      }

      function calculateScore(winner, loser, method, hand) {
        let details = completedYakuDetails(hand, winner);
        const hasRealYaku = details.some((detail) => detail.kind === "yaku");
        if (!hasRealYaku) {
          details = [{ name: "練習用和了（CPU用の簡易判定）", han: 1, kind: "yaku" }, ...details];
        }
        const han = details.reduce((sum, detail) => sum + detail.han, 0);
        const fuInfo = estimateFu(hand, method);
        const limit = limitBasePoints(han, fuInfo.fu);
        const basePoints = limit.base ?? fuInfo.fu * 2 ** (han + 2);
        const isDealer = winner === 0;
        const payments = [0, 0, 0, 0];
        let displayScore = "";
        let paymentText = "";

        if (method === "ロン") {
          const ron = ceilHundred(basePoints * (isDealer ? 6 : 4));
          payments[winner] += ron;
          payments[loser] -= ron;
          displayScore = `${ron.toLocaleString("ja-JP")}点`;
          paymentText = `${PLAYERS[loser]}が${PLAYERS[winner]}へ${ron.toLocaleString("ja-JP")}点を支払います。`;
        } else if (isDealer) {
          const each = ceilHundred(basePoints * 2);
          for (let player = 0; player < 4; player += 1) {
            if (player !== winner) {
              payments[player] -= each;
              payments[winner] += each;
            }
          }
          displayScore = `${each.toLocaleString("ja-JP")}点オール`;
          paymentText = `親のツモなので、他の3人がそれぞれ${each.toLocaleString("ja-JP")}点を支払います。`;
        } else {
          const childPay = ceilHundred(basePoints);
          const dealerPay = ceilHundred(basePoints * 2);
          for (let player = 0; player < 4; player += 1) {
            if (player === winner) continue;
            const pay = player === 0 ? dealerPay : childPay;
            payments[player] -= pay;
            payments[winner] += pay;
          }
          displayScore = `${childPay.toLocaleString("ja-JP")} / ${dealerPay.toLocaleString("ja-JP")}点`;
          paymentText = `子のツモなので、子は${childPay.toLocaleString("ja-JP")}点、親は${dealerPay.toLocaleString("ja-JP")}点を支払います。`;
        }

        const yakuBreakdown = details.map((detail) => `${detail.name}: ${detail.han}翻`).join("、");
        const yakuText = `役: ${details.map((detail) => detail.name).join("＋")}`;
        const limitText = limit.name ? `${limit.name}として扱います。` : `${fuInfo.fu}符${han}翻の基本点から計算します。`;
        const explanation = [
          `${yakuBreakdown}。合計${han}翻です。`,
          `符は${fuInfo.fu}符として計算します。${fuInfo.reason}`,
          `${limitText}`,
          paymentText,
          `ドラ（ドラ牌を持っている点数ボーナス）は翻に足しますが、ドラだけでは和了役にはなりません。`,
        ].join(" ");

        return { payments, displayScore, explanation, yakuText, han, fu: fuInfo.fu, limitName: limit.name || "" };
      }

      function estimateFu(hand, method) {
        const counts = countTiles(hand);
        if (sevenPairsShanten(counts) === -1) {
          return { fu: 25, reason: `${YAKU.chiitoi}は特別に25符で数える形です。` };
        }
        if (isLikelyPinfu(counts) && method === "ツモ") {
          return { fu: 20, reason: `${YAKU.pinfu}のツモは、練習用に20符として見せています。` };
        }
        if (isLikelyPinfu(counts) && method === "ロン") {
          return { fu: 30, reason: `${YAKU.pinfu}のロンは、門前ロンの加符を含めて30符として見せています。` };
        }
        const tripletCount = counts.filter((count) => count >= 3).length;
        const valueTriplets = valueHonorTriples(counts).length;
        const extraFu = tripletCount * 4 + valueTriplets * 4;
        const fu = roundUpTen(30 + extraFu);
        return {
          fu,
          reason: `細かい待ちや刻子の符は簡略化し、基本30符に刻子や役牌分を少し足して10符単位に丸めています。`,
        };
      }

      function limitBasePoints(han, fu) {
        if (han >= 13) return { name: "数え役満", base: 8000 };
        if (han >= 11) return { name: "三倍満", base: 6000 };
        if (han >= 8) return { name: "倍満", base: 4000 };
        if (han >= 6) return { name: "跳満", base: 3000 };
        if (han >= 5 || (han === 4 && fu >= 40) || (han === 3 && fu >= 70)) return { name: "満貫", base: 2000 };
        return { name: "", base: null };
      }

      function ceilHundred(value) {
        return Math.ceil(value / 100) * 100;
      }

      function roundUpTen(value) {
        return Math.ceil(value / 10) * 10;
      }

      function isWinningHand(hand) {
        if (hand.length % 3 !== 2) return false;
        const counts = countTiles(hand);
        if (sevenPairsShanten(counts) === -1) return true;

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

      function isPlayerWinning(player) {
        const openCount = state.calls[player]?.length || 0;
        if (!openCount) return isWinningHand(state.hands[player]);
        return isWinningWithOpen(state.hands[player], openCount);
      }

      function isWinningWithOpen(hand, openCount) {
        if (hand.length % 3 !== 2) return false;
        const neededMelds = 4 - openCount;
        const counts = countTiles(hand);
        for (let i = 0; i < counts.length; i += 1) {
          if (counts[i] >= 2) {
            counts[i] -= 2;
            if (canFormMeldsNeeded(counts, neededMelds)) {
              counts[i] += 2;
              return true;
            }
            counts[i] += 2;
          }
        }
        return false;
      }

      function canFormMeldsNeeded(counts, needed) {
        const first = counts.findIndex((count) => count > 0);
        if (first === -1) return needed === 0;
        if (needed <= 0) return false;

        if (counts[first] >= 3) {
          counts[first] -= 3;
          if (canFormMeldsNeeded(counts, needed - 1)) {
            counts[first] += 3;
            return true;
          }
          counts[first] += 3;
        }

        const rank = first % 9;
        if (first < 27 && rank <= 6 && counts[first + 1] > 0 && counts[first + 2] > 0 && sameSuit(first, first + 2)) {
          counts[first] -= 1;
          counts[first + 1] -= 1;
          counts[first + 2] -= 1;
          if (canFormMeldsNeeded(counts, needed - 1)) {
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

        const rank = first % 9;
        if (first < 27 && rank <= 6 && counts[first + 1] > 0 && counts[first + 2] > 0 && sameSuit(first, first + 2)) {
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

      function getShanten(hand) {
        const counts = countTiles(hand);
        return Math.min(standardShanten(counts), sevenPairsShanten(counts));
      }

      function standardShanten(startCounts) {
        let best = 8;
        const memo = new Set();
        const counts = startCounts.slice();

        function dfs(index, melds, taatsu, pair) {
          while (index < 34 && counts[index] === 0) index += 1;
          if (index >= 34) {
            const usableTaatsu = Math.min(taatsu, 4 - melds);
            best = Math.min(best, 8 - melds * 2 - usableTaatsu - pair);
            return;
          }

          const key = `${index}|${melds}|${taatsu}|${pair}|${counts.join("")}`;
          if (memo.has(key)) return;
          memo.add(key);

          if (melds < 4 && counts[index] >= 3) {
            counts[index] -= 3;
            dfs(index, melds + 1, taatsu, pair);
            counts[index] += 3;
          }

          if (melds < 4 && index < 27 && index % 9 <= 6 && counts[index + 1] > 0 && counts[index + 2] > 0) {
            counts[index] -= 1;
            counts[index + 1] -= 1;
            counts[index + 2] -= 1;
            dfs(index, melds + 1, taatsu, pair);
            counts[index] += 1;
            counts[index + 1] += 1;
            counts[index + 2] += 1;
          }

          if (!pair && counts[index] >= 2) {
            counts[index] -= 2;
            dfs(index, melds, taatsu, 1);
            counts[index] += 2;
          }

          if (taatsu < 4 && counts[index] >= 2) {
            counts[index] -= 2;
            dfs(index, melds, taatsu + 1, pair);
            counts[index] += 2;
          }

          if (taatsu < 4 && index < 27) {
            if (index % 9 <= 7 && counts[index + 1] > 0) {
              counts[index] -= 1;
              counts[index + 1] -= 1;
              dfs(index, melds, taatsu + 1, pair);
              counts[index] += 1;
              counts[index + 1] += 1;
            }
            if (index % 9 <= 6 && counts[index + 2] > 0) {
              counts[index] -= 1;
              counts[index + 2] -= 1;
              dfs(index, melds, taatsu + 1, pair);
              counts[index] += 1;
              counts[index + 2] += 1;
            }
          }

          counts[index] -= 1;
          dfs(index, melds, taatsu, pair);
          counts[index] += 1;
        }

        dfs(0, 0, 0, 0);
        return best;
      }

      function sevenPairsShanten(counts) {
        const pairs = counts.filter((count) => count >= 2).length;
        const unique = counts.filter((count) => count > 0).length;
        return 6 - pairs + Math.max(0, 7 - unique);
      }

      function countTiles(hand) {
        const counts = Array(34).fill(0);
        for (const id of hand) counts[tileById[id].order] += 1;
        return counts;
      }

      function countDora(hand) {
        return hand.filter((id) => id === state.dora).length;
      }

      function countSequencePotential(counts) {
        let total = 0;
        for (const base of [0, 9, 18]) {
          for (let i = base; i <= base + 6; i += 1) {
            if (counts[i] && counts[i + 1] && counts[i + 2]) total += 1;
          }
          for (let i = base; i <= base + 7; i += 1) {
            if (counts[i] && counts[i + 1]) total += 0.5;
          }
          for (let i = base; i <= base + 6; i += 1) {
            if (counts[i] && counts[i + 2]) total += 0.5;
          }
        }
        return total;
      }

      function isLikelyPinfu(counts) {
        return countSequencePotential(counts) >= 4 && !valueHonorPairs(counts).length && !valueHonorTriples(counts).length;
      }

      function valueHonorPairs(counts) {
        return ["east", "white", "green", "red"].filter((id) => counts[tileById[id].order] >= 2);
      }

      function valueHonorTriples(counts) {
        return ["east", "white", "green", "red"].filter((id) => counts[tileById[id].order] >= 3);
      }

      function canDeclareRiichi() {
        if (!state || state.ended || state.busy || state.pendingCall || state.calls[0].length > 0 || state.riichiDeclared || state.turn !== 0 || state.hands[0].length !== 14) return false;
        return getDiscardCandidates(state.hands[0]).some((candidate) => candidate.shanten === 0);
      }

      function sameSuit(a, b) {
        if (b < 0 || b > 26) return false;
        return Math.floor(a / 9) === Math.floor(b / 9);
      }

      function isHonor(id) {
        return tileById[id].suit === "z";
      }

      function isTerminalOrHonor(id) {
        const tile = tileById[id];
        return tile.suit === "z" || tile.rank === 1 || tile.rank === 9;
      }

      function isValueHonor(id) {
        return ["east", "white", "green", "red"].includes(id);
      }

      function shantenLabel(shanten) {
        if (shanten < 0) return "和了形";
        if (shanten === 0) return "テンパイ";
        return `${shanten}向聴`;
      }

      function tileLabel(id) {
        const tile = tileById[id];
        return `${tile.glyph}${tile.name}`;
      }

      function formatTileNames(ids) {
        return [...new Set(ids)].sort(tileSort).map((id) => tileById[id].name).join("・");
      }

      function removeOneFromWall(wall, id) {
        const index = wall.indexOf(id);
        if (index >= 0) wall.splice(index, 1);
      }

      function setupScenario(mode) {
        if (mode === "random") {
          newRound();
          return;
        }
        const scenarios = {
          kokushi: {
            name: "国士無双チャンス",
            doraIndicator: "s6",
            hand: ["m1", "m9", "p1", "p9", "s1", "s9", "east", "south", "west", "north", "white", "green", "red", "m2"],
            message: `${YAKU.kokushi}の練習です。まず不要な中張牌を切り、1・9・字牌を残す判断を確認しましょう。`,
          },
          pinfu: {
            name: "ピンフ・リーチ練習",
            doraIndicator: "p6",
            hand: ["m2", "m3", "m4", "p3", "p4", "p5", "s3", "s4", "s5", "m6", "m7", "p7", "p8", "s6"],
            message: `${YAKU.pinfu}と${YAKU.riichi}を狙う練習です。両面候補を残しましょう。`,
          },
          chiitoi: {
            name: "七対子練習",
            doraIndicator: "m4",
            hand: ["m2", "m2", "p3", "p3", "s4", "s4", "m5", "m5", "p6", "p6", "s7", "s7", "east", "red"],
            message: `${YAKU.chiitoi}の練習です。対子を残し、孤立牌を整理しましょう。`,
          },
          tanyao: {
            name: "タンヤオ練習",
            doraIndicator: "s6",
            hand: ["m2", "m3", "m4", "p2", "p3", "p4", "s3", "s4", "s5", "m6", "m7", "p6", "p7", "p8"],
            message: `${YAKU.tanyao}の練習です。1・9・字牌を使わず、2〜8だけでまとめる感覚を確認しましょう。`,
          },
          defense: {
            name: "相手リーチ守備練習",
            doraIndicator: "p4",
            hand: ["m2", "m5", "m8", "p2", "p5", "p8", "s2", "s5", "s8", "east", "south", "white", "green", "red"],
            rivers: [[], ["m3", "p3", "s6", "north", "m9"], ["p1", "p4", "s4", "west", "m1"], ["s1", "s7", "p7", "south", "m4"]],
            riichiPlayers: [false, true, false, false],
            message: `${PLAYERS[1]}が${YAKU.riichi}している想定です。現物（相手がすでに切った牌）と危険牌の色分けを見ながら守備判断を練習しましょう。`,
          },
        };
        const scenario = scenarios[mode];
        if (!scenario) return;
        const wall = buildWall();
        const doraIndicator = scenario.doraIndicator || wall.pop();
        removeOneFromWall(wall, doraIndicator);
        scenario.hand.forEach((id) => removeOneFromWall(wall, id));
        const cpuHands = [[], [], []];
        for (let draw = 0; draw < 13; draw += 1) {
          for (let player = 0; player < 3; player += 1) {
            cpuHands[player].push(wall.pop());
          }
        }
        state = {
          wall,
          doraIndicator,
          dora: getDoraFromIndicator(doraIndicator),
          hands: [scenario.hand.slice(), cpuHands[0], cpuHands[1], cpuHands[2]],
          rivers: scenario.rivers ? scenario.rivers.map((river) => river.slice()) : [[], [], [], []],
          scores: [25000, 25000, 25000, 25000],
          turn: 0,
          drawnIndex: scenario.hand.length - 1,
          busy: false,
          ended: false,
          riichiDeclared: false,
          riichiPlayers: scenario.riichiPlayers ? scenario.riichiPlayers.slice() : [false, false, false, false],
          ippatsuLive: false,
          playerDiscardsSinceRiichi: 0,
          turnNumber: mode === "defense" ? 8 : 1,
          calls: [[], [], [], []],
          pendingCall: null,
          selectedYakuCandidate: null,
          lastDiscard: null,
          advice: null,
          scoreExplanation: null,
          trainingModeName: scenario.name,
          trainingModeHelp: scenario.message,
          log: [],
        };
        sortPlayerHand();
        addLog(`${scenario.name}を開始しました。あなたの番です。手牌または右側のツモ牌から1枚切ってください。`);
        render(`${scenario.message} 現在はあなたの番です。手牌または右側のツモ牌から1枚切ってください。`);
      }

      function forcePlayerTurn() {
        if (!state || state.ended) return;
        state.pendingCall = null;
        state.busy = false;
        state.turn = 0;
        const targetCount = playerTurnTileCount(0);
        if (state.hands[0].length < targetCount && state.wall.length) {
          drawTile(0);
        }
        sortPlayerHand();
        render("自分の番に戻しました。手牌または右側のツモ牌から1枚切ってください。");
      }

      $("newGameButton").addEventListener("click", newRound);
      $("sortButton").addEventListener("click", () => {
        if (state.ended || state.busy) return;
        sortPlayerHand();
        render();
      });
      $("riichiButton").addEventListener("click", declareRiichi);
      $("winButton").addEventListener("click", declareWin);
      $("applyTrainingButton")?.addEventListener("click", () => {
        setupScenario($("trainingModeSelect")?.value || "random");
      });
      $("resetProfileButton")?.addEventListener("click", resetFightProfile);
      $("forceMyTurnButton")?.addEventListener("click", forcePlayerTurn);

      newRound();
