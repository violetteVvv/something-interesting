import {i as Me} from "./vendor-analytics-Dt_uw1iv.js";
import "./vendor-driver-nkxtR9G_.js";
import {C as d, c as ne, p as be, R as K, r as L, g as _e, s as ie, a as he, S as ge, b as ke, f as y, d as U, e as M, h as Te, i as Pe, m as Ae, j as Ce, D as re, k as Ee, l as $e, n as xe, o as Le, A as q, q as Re, t as Q, u as Z, v as ue, w as de, x as Ne, W as Ie, y as Ge, z as ye, B as fe, E as I, F as Oe, G as ee, H as Be, I as pe, J as x, K as G, L as De, M as oe, N as Ue, O as B, P as je, Q as Fe, T as Ke, U as Se, V as we, X as He, Y as Ye, Z as v, _ as Je, $ as S, a0 as We, a1 as Ve, a2 as qe, a3 as Qe, a4 as ze, a5 as Xe, a6 as Ze, a7 as z, a8 as et, a9 as tt, aa as st, ab as at, ac as nt, ad as it, ae as rt, af as ot, ag as lt, ah as ct, ai as mt, aj as ht, ak as gt, al as ut, am as dt, an as yt, ao as ft, ap as pt, aq as St, ar as wt, as as le, at as vt, au as Mt, av as bt, aw as _t, ax as ce, ay as me} from "./game-ui-B8Cuuk0d.js";
(function() {
    const e = document.createElement("link").relList;
    if (e && e.supports && e.supports("modulepreload"))
        return;
    for (const a of document.querySelectorAll('link[rel="modulepreload"]'))
        s(a);
    new MutationObserver(a => {
        for (const n of a)
            if (n.type === "childList")
                for (const i of n.addedNodes)
                    i.tagName === "LINK" && i.rel === "modulepreload" && s(i)
    }
    ).observe(document, {
        childList: !0,
        subtree: !0
    });
    function t(a) {
        const n = {};
        return a.integrity && (n.integrity = a.integrity),
        a.referrerPolicy && (n.referrerPolicy = a.referrerPolicy),
        a.crossOrigin === "use-credentials" ? n.credentials = "include" : a.crossOrigin === "anonymous" ? n.credentials = "omit" : n.credentials = "same-origin",
        n
    }
    function s(a) {
        if (a.ep)
            return;
        a.ep = !0;
        const n = t(a);
        fetch(a.href, n)
    }
}
)();
class kt {
    constructor() {
        this.listeners = [],
        this.batchDepth = 0,
        this.pendingNotify = !1,
        this.reset()
    }
    reset() {
        this.state = {
            region: "",
            orientation: "straight",
            playerGender: "male",
            year: 1,
            month: 9,
            monthTotal: 1,
            energy: d.initialEnergy,
            money: 0,
            gpa: d.initialGPA,
            cumulative_gpa: d.initialGPA,
            semester_score: 80,
            completed_semesters: 0,
            mental: d.initialMental,
            health: d.initialHealth,
            diseases: [],
            debtMonths: 0,
            parentsCutOff: !1,
            partner: null,
            didTechInternThisMonth: !1,
            techInternStreak: 0,
            returnOfferUnlocked: !1,
            rel_prof: 50,
            rel_parents: 80,
            logs: [],
            tickerMessages: [],
            socialFeed: [],
            socialSeenCount: 0,
            seen_event_ids: [],
            narrative_event_stats: {},
            inventory: [],
            tragedies: {
                hiv: !1,
                robbed: !1,
                failed: !1,
                bankrupt: !1
            },
            history: {
                monthsPlayed: 0,
                partnersMet: [],
                jobsWorked: 0,
                diseasesGot: [],
                eventsTriggered: 0,
                totalEarnings: 0,
                totalSpending: 0,
                deaths: 0,
                graduations: 0,
                entertainmentTimes: 0,
                studyTimes: 0,
                partyTimes: 0,
                gymTimes: 0,
                libraryCramStreak: 0,
                maxLibraryCramStreak: 0,
                lastLibraryCramMonthTotal: null,
                gpaTermBelow2Ever: !1,
                gpaCumulativeBelow2Ever: !1,
                gpaDroppedEver: !1,
                homelessStruggle: !1,
                mentalLowConsecutiveMonths: 0,
                ultimateSimpUnlocked: !1,
                hadPartnerEver: !1,
                missionRaiseAppliedEver: !1,
                missionProposalSuccessEver: !1
            },
            missionState: {
                completedYears: [],
                completedTaskIds: [],
                scholarshipAwardedYears: [],
                mental60Streak: 0,
                year1ExamScoreReady: !1,
                raiseAppliedEver: !1,
                proposalSuccessEver: !1
            },
            tags: {},
            flags: [],
            narrativeBuffs: [],
            guideAutoShownAtStart: !1,
            tutorialFirstMonthGreenLogDone: !1,
            currentClass: "refugee",
            work_counts: {
                dish: 0,
                tutor: 0,
                ta: 0,
                tech: 0,
                research: 0
            },
            playerName: "Player",
            major: "CS",
            current_job: null,
            actionRepeatInMonth: {},
            actionRepeatCounts: {}
        },
        this.state.current_job = ne(this.state),
        this.syncWealthClass({
            silent: !0
        }),
        this.notifyListeners()
    }
    loadState(e) {
        if ((e.inventory === void 0 || e.inventory === null) && (e.inventory = []),
        (e.tragedies === void 0 || e.tragedies === null) && (e.tragedies = {
            hiv: !1,
            robbed: !1,
            failed: !1,
            bankrupt: !1
        }),
        (e.tickerMessages === void 0 || e.tickerMessages === null) && (e.tickerMessages = []),
        (e.socialFeed === void 0 || e.socialFeed === null) && (e.socialFeed = []),
        (e.socialSeenCount === void 0 || e.socialSeenCount === null) && (e.socialSeenCount = 0),
        Array.isArray(e.seen_event_ids) || (e.seen_event_ids = []),
        (!e.narrative_event_stats || typeof e.narrative_event_stats != "object") && (e.narrative_event_stats = {}),
        (!e.tags || typeof e.tags != "object" || Array.isArray(e.tags)) && (e.tags = {}),
        Array.isArray(e.flags) || (e.flags = []),
        Array.isArray(e.narrativeBuffs) || (e.narrativeBuffs = []),
        !e.work_counts || typeof e.work_counts != "object" ? e.work_counts = {
            dish: 0,
            tutor: 0,
            ta: 0,
            tech: 0,
            research: 0
        } : e.work_counts = {
            dish: Number(e.work_counts.dish) || 0,
            tutor: Number(e.work_counts.tutor) || 0,
            ta: Number(e.work_counts.ta) || 0,
            tech: Number(e.work_counts.tech) || 0,
            research: Number(e.work_counts.research) || 0
        },
        (e.playerName == null || e.playerName === "") && (e.playerName = "Player"),
        (!e.actionRepeatInMonth || typeof e.actionRepeatInMonth != "object" || Array.isArray(e.actionRepeatInMonth)) && (e.actionRepeatInMonth = e.actionRepeatCounts && typeof e.actionRepeatCounts == "object" && !Array.isArray(e.actionRepeatCounts) ? {
            ...e.actionRepeatCounts
        } : {}),
        e.actionRepeatCounts = {
            ...e.actionRepeatInMonth
        },
        (e.history === void 0 || e.history === null) && (e.history = {
            monthsPlayed: 0,
            partnersMet: [],
            jobsWorked: 0,
            diseasesGot: [],
            eventsTriggered: 0,
            totalEarnings: 0,
            totalSpending: 0,
            deaths: 0,
            graduations: 0,
            entertainmentTimes: 0,
            studyTimes: 0,
            partyTimes: 0,
            gymTimes: 0,
            libraryCramStreak: 0,
            maxLibraryCramStreak: 0,
            lastLibraryCramMonthTotal: null,
            gpaTermBelow2Ever: !1,
            gpaCumulativeBelow2Ever: !1,
            gpaDroppedEver: !1,
            homelessStruggle: !1,
            mentalLowConsecutiveMonths: 0,
            ultimateSimpUnlocked: !1,
            hadPartnerEver: !1
        }),
        e.history.partyTimes === void 0 && (e.history.partyTimes = 0),
        e.history.gymTimes === void 0 && (e.history.gymTimes = 0),
        e.history.maxLibraryCramStreak === void 0 && (e.history.maxLibraryCramStreak = 0),
        e.history.libraryCramStreak === void 0 && (e.history.libraryCramStreak = 0),
        e.history.lastLibraryCramMonthTotal === void 0 && (e.history.lastLibraryCramMonthTotal = null),
        e.history.gpaTermBelow2Ever === void 0 && (e.history.gpaTermBelow2Ever = !1),
        e.history.gpaCumulativeBelow2Ever === void 0 && (e.history.gpaCumulativeBelow2Ever = !1),
        e.history.gpaDroppedEver === void 0 && (e.history.gpaDroppedEver = !1),
        e.history.homelessStruggle === void 0 && (e.history.homelessStruggle = !1),
        e.history.mentalLowConsecutiveMonths === void 0 && (e.history.mentalLowConsecutiveMonths = 0),
        e.history.ultimateSimpUnlocked === void 0 && (e.history.ultimateSimpUnlocked = !1),
        e.history.hadPartnerEver === void 0 && (e.history.hadPartnerEver = !1),
        e.history.missionRaiseAppliedEver === void 0 && (e.history.missionRaiseAppliedEver = !1),
        e.history.missionProposalSuccessEver === void 0 && (e.history.missionProposalSuccessEver = !1),
        (!e.missionState || typeof e.missionState != "object") && (e.missionState = {}),
        Array.isArray(e.missionState.completedYears) || (e.missionState.completedYears = []),
        Array.isArray(e.missionState.completedTaskIds) || (e.missionState.completedTaskIds = []),
        Array.isArray(e.missionState.scholarshipAwardedYears) || (e.missionState.scholarshipAwardedYears = []),
        e.missionState.mental60Streak === void 0 && (e.missionState.mental60Streak = 0),
        e.missionState.year1ExamScoreReady === void 0 && (e.missionState.year1ExamScoreReady = !1),
        e.missionState.raiseAppliedEver === void 0 && (e.missionState.raiseAppliedEver = !1),
        e.missionState.proposalSuccessEver === void 0 && (e.missionState.proposalSuccessEver = !1),
        e.parentsCutOff === void 0 && (e.parentsCutOff = !1),
        e.playerGender !== "female" && e.playerGender !== "male" && (e.playerGender = "male"),
        e.didTechInternThisMonth === void 0 && (e.didTechInternThisMonth = !1),
        e.techInternStreak === void 0 && (e.techInternStreak = 0),
        e.returnOfferUnlocked === void 0 && (e.returnOfferUnlocked = !1),
        (e.cumulative_gpa === void 0 || e.cumulative_gpa === null) && (e.cumulative_gpa = Number(e.gpa) || d.initialGPA),
        (e.semester_score === void 0 || e.semester_score === null) && (e.semester_score = 80),
        (e.completed_semesters === void 0 || e.completed_semesters === null) && (e.completed_semesters = 0),
        e.gpa = e.cumulative_gpa,
        (e.major == null || e.major === "") && (e.major = "CS"),
        (e.current_job === void 0 || e.current_job === null) && (e.current_job = ne(e)),
        e.current_job && typeof e.current_job == "object" && be(e.current_job, e),
        e.tutorialFirstMonthGreenLogDone === void 0 && (e.tutorialFirstMonthGreenLogDone = !1),
        e.guideAutoShownAtStart === void 0 && (e.guideAutoShownAtStart = !0),
        e.partner && typeof e.partner == "object") {
            const t = e.partner;
            t.origin !== "local" && t.origin !== "international" && (t.origin = Math.random() < .5 ? "international" : "local"),
            t.partnerGender || (t.partnerGender = t.origin === "local" ? "female" : "male"),
            (t.stage === "single" || t.stage === "crush" || !t.stage) && (t.stage = "dating"),
            (t.rel == null || Number.isNaN(t.rel)) && (t.rel = 50),
            t.bondedThisMonth === void 0 && (t.bondedThisMonth = !1),
            !t.type && t.tag && (t.type = t.tag),
            t.personality || (t.personality = "合拍"),
            (!t.giftLikes || !Array.isArray(t.giftLikes)) && (t.giftLikes = ["flower", "chocolate", "book"])
        }
        if (e.region === "HKSG" && (e.region = "HK"),
        e._economyVersion !== d.ECONOMY_VERSION && e.region && K[e.region]) {
            K[e.region].rateToRMB;
            const t = Number(e.money);
            !Number.isNaN(t) && t <= 5e3 && (e.money = L(t * 1e3, e.region)),
            e._economyVersion = d.ECONOMY_VERSION
        }
        this.state = {
            ...this.state,
            ...e
        },
        this.syncWealthClass({
            silent: !0
        }),
        this.notifyListeners()
    }
    getSnapshot() {
        return JSON.parse(JSON.stringify(this.state))
    }
    get(e) {
        return this.state[e]
    }
    set(e, t) {
        e === "money" && (t == null || isNaN(t)) && (console.warn("GameState.set: money is null/NaN, setting to 0"),
        t = 0),
        this.state[e] = t,
        this.checkLimits(),
        this.syncWealthClass(),
        this.notifyListeners()
    }
    update(e) {
        e.money !== void 0 && (e.money === null || e.money === void 0 || isNaN(e.money)) && (console.warn("GameState.update: money is null/NaN, setting to 0"),
        e.money = 0),
        Object.assign(this.state, e),
        this.checkLimits(),
        this.syncWealthClass(),
        this.notifyListeners()
    }
    syncWealthClass(e={}) {
        const t = e.silent === !0
          , s = _e(this.state)
          , a = this.state.currentClass;
        if (s.id === a)
            return;
        if (this.state.currentClass = s.id,
        !t && a != null && a !== void 0) {
            const i = ["refugee", "poor", "normal", "bourgeois", "dragon"]
              , r = i.indexOf(a)
              , l = i.indexOf(s.id)
              , c = r >= 0 && l >= 0 && l < r ? ie.classDown : ie.classUp;
            this.addLog(`${c}
当前阶级：【${s.title}】`, "log-class-tier")
        }
    }
    checkLimits() {
        const e = Number(this.state.cumulative_gpa)
          , t = Number.isFinite(e) ? Math.min(4, Math.max(0, e)) : d.initialGPA;
        this.state.cumulative_gpa = t,
        this.state.gpa = t;
        const s = Number(this.state.semester_score);
        this.state.semester_score = Number.isFinite(s) ? Math.min(100, Math.max(0, s)) : 80;
        const a = Number(this.state.completed_semesters);
        this.state.completed_semesters = Number.isFinite(a) ? Math.max(0, Math.floor(a)) : 0,
        this.state.mental = Math.min(this.getMentalCap(), Math.max(0, this.state.mental)),
        this.state.health = Math.min(this.getHealthCap(), Math.max(0, this.state.health)),
        this.state.skill !== void 0 && delete this.state.skill,
        this.state.energy = Math.min(this.getEnergyCap(), Math.max(0, this.state.energy))
    }
    getEnergyCap() {
        const e = Number.isFinite(d.initialEnergy) ? d.initialEnergy : 100
          , t = this._countInventoryEffects(["energy_cap_boost"]) * 20;
        return e + t
    }
    getMentalCap() {
        let e = d.maxStat;
        return this.state.diseases.includes("depression") && (e = Math.floor(e * .5)),
        e += he(this.state),
        e
    }
    getHealthCap() {
        const e = Number.isFinite(d.maxStat) ? d.maxStat : 100
          , t = this._countInventoryEffects(["health_cap_boost"]) * 20;
        return e + t
    }
    _countInventoryEffects(e=[]) {
        if (!Array.isArray(this.state.inventory) || !this.state.inventory.length || !Array.isArray(e) || !e.length)
            return 0;
        const t = new Set(e);
        let s = 0;
        for (const a of this.state.inventory) {
            const n = ge[a];
            n && t.has(n.effect) && (s += 1)
        }
        return s
    }
    getRegionConfig() {
        return K[this.state.region] || null
    }
    addListener(e) {
        this.listeners.push(e)
    }
    removeListener(e) {
        const t = this.listeners.indexOf(e);
        t > -1 && this.listeners.splice(t, 1)
    }
    notifyListeners() {
        if (this.batchDepth > 0) {
            this.pendingNotify = !0;
            return
        }
        this.listeners.forEach(e => {
            typeof e == "function" && e(this.state)
        }
        )
    }
    beginBatch() {
        this.batchDepth += 1
    }
    endBatch() {
        if (this.batchDepth <= 0) {
            this.batchDepth = 0;
            return
        }
        this.batchDepth -= 1,
        this.batchDepth === 0 && this.pendingNotify && (this.pendingNotify = !1,
        this.notifyListeners())
    }
    addLog(e, t="", s={}) {
        this.state.logs.unshift({
            message: e,
            type: t,
            timestamp: Date.now(),
            ...s
        }),
        this.state.logs.length > d.maxLogs && (this.state.logs = this.state.logs.slice(0, d.maxLogs)),
        this.notifyListeners()
    }
    addOutcomeLogNarrative(e={}) {
        const t = String(e.summary || e.sentence || "").trim()
          , s = String(e.statusLine || "").trim()
          , a = String(e.effectsTag || "").trim()
          , n = String(e.detail || "").trim()
          , i = String(e.resultKind || e.type || "").trim().toLowerCase()
          , l = {
            gain: "收益/GAIN",
            loss: "损失/LOSS",
            turn: "转折/TURN",
            relationship: "关系/RELATION",
            career: "职业/CAREER",
            academic: "学业/ACADEMIC",
            survival: "生存/SURVIVAL"
        }[i] || "事件/EVENT"
          , c = a
          , m = [t, s, c, n].filter(Boolean)
          , u = [l, ...m].join(`
`)
          , h = i === "loss" ? "log-bad" : i === "gain" ? "log-good" : "log-event";
        this.addLog(u, h, {
            outcome: {
                actionKey: e.actionKey || "",
                kind: i,
                header: l,
                summary: t,
                statusLine: s,
                detail: n,
                effectsTag: a,
                settlementTag: c,
                finalMultiplier: e.finalMultiplier != null && Number.isFinite(Number(e.finalMultiplier)) ? Number(e.finalMultiplier) : null,
                finalDelta: e.finalDelta || null,
                toneTier: e.toneTier || ""
            }
        })
    }
    getLogs() {
        return this.state.logs
    }
    markActionUsed(e) {
        const t = String(e || "").trim();
        if (!t)
            return 0;
        const s = this.state.actionRepeatInMonth || this.state.actionRepeatCounts || {}
          , a = (Number(s[t]) || 0) + 1;
        return this.state.actionRepeatInMonth = {
            ...s,
            [t]: a
        },
        this.state.actionRepeatCounts = {
            ...this.state.actionRepeatInMonth
        },
        a
    }
    getActionRepeatCount(e) {
        const t = String(e || "").trim();
        if (!t)
            return 0;
        const s = this.state.actionRepeatInMonth || this.state.actionRepeatCounts || {};
        return Number(s[t]) || 0
    }
    resetMonthlyActionUsage() {
        this.state.actionRepeatInMonth = {},
        this.state.actionRepeatCounts = {},
        this.notifyListeners()
    }
    tickNarrativeBuffs() {
        const e = Array.isArray(this.state.narrativeBuffs) ? this.state.narrativeBuffs : [];
        e.length && (this.state.narrativeBuffs = e.map(t => ({
            ...t,
            duration: Math.floor(Number(t.duration) || 0) - 1
        })).filter(t => t.duration > 0),
        this.notifyListeners())
    }
    addTicker(e) {
        this.state.tickerMessages = this.state.tickerMessages || [],
        this.state.tickerMessages.unshift({
            message: e,
            timestamp: Date.now()
        }),
        this.state.tickerMessages.length > d.maxTickerMessages && (this.state.tickerMessages = this.state.tickerMessages.slice(0, d.maxTickerMessages)),
        this.notifyListeners()
    }
    getTicker() {
        return this.state.tickerMessages && this.state.tickerMessages[0] ? this.state.tickerMessages[0].message : null
    }
    addFeedPost(e) {
        this.state.socialFeed = this.state.socialFeed || [];
        const s = {
            id: `feed_${Date.now()}_${Math.random().toString(36).slice(2, 8)}`,
            timeAgo: "刚刚",
            likes: [],
            comments: [],
            ...e
        };
        return this.state.socialFeed.unshift(s),
        this.state.socialFeed.length > d.maxFeedPosts && (this.state.socialFeed = this.state.socialFeed.slice(0, d.maxFeedPosts)),
        this.notifyListeners(),
        s
    }
    getSocialFeed() {
        return this.state.socialFeed || []
    }
    updateHistory(e, t) {
        if (this.state.history || (this.state.history = {
            monthsPlayed: 0,
            partnersMet: [],
            jobsWorked: 0,
            diseasesGot: [],
            eventsTriggered: 0,
            totalEarnings: 0,
            totalSpending: 0,
            deaths: 0,
            graduations: 0,
            entertainmentTimes: 0,
            studyTimes: 0,
            partyTimes: 0,
            gymTimes: 0,
            libraryCramStreak: 0,
            maxLibraryCramStreak: 0,
            lastLibraryCramMonthTotal: null,
            gpaTermBelow2Ever: !1,
            gpaCumulativeBelow2Ever: !1,
            gpaDroppedEver: !1,
            homelessStruggle: !1,
            mentalLowConsecutiveMonths: 0,
            ultimateSimpUnlocked: !1,
            hadPartnerEver: !1
        }),
        e === "addToArray" && Array.isArray(t)) {
            const [s,a] = t;
            this.state.history[s] || (this.state.history[s] = []),
            this.state.history[s].includes(a) || this.state.history[s].push(a)
        } else if (e === "increment") {
            const [s,a=1] = t;
            this.state.history[s] = (this.state.history[s] || 0) + a
        } else if (e === "set") {
            const [s,a] = t;
            this.state.history[s] = a
        } else
            this.state.history[e] = t
    }
    getHistory() {
        return this.state.history || {}
    }
}
function Tt(o) {
    const e = o.state;
    let t = Array.isArray(e.flags) ? [...e.flags] : [];
    const s = c => t.includes(c)
      , a = c => {
        t.includes(c) || t.push(c)
    }
      , n = c => {
        t = t.filter(m => m !== c)
    }
      , i = e.rel_prof;
    typeof i == "number" && (i < 20 && !s("prof_angry") && a("prof_angry"),
    i > 40 && s("prof_angry") && n("prof_angry"));
    const r = Number(e.money);
    Number.isFinite(r) && (r < 10 && !s("broke") && a("broke"),
    r >= 10 && s("broke") && n("broke"));
    const l = e.partner;
    if (l && typeof l == "object") {
        s("has_partner") || a("has_partner");
        const c = l.rel != null ? Number(l.rel) : 50;
        Number.isFinite(c) && (c < 30 && !s("relationship_crisis") && a("relationship_crisis"),
        c >= 30 && s("relationship_crisis") && n("relationship_crisis"))
    } else
        s("has_partner") && n("has_partner"),
        s("relationship_crisis") && n("relationship_crisis");
    o.set("flags", t)
}
class Pt {
    constructor(e, t, s, a, n, i, r=null, l=null, c=null) {
        this.gameState = e,
        this.eventSystem = t,
        this.logger = s,
        this.modal = a,
        this.gameOverCallback = n,
        this.endGameCallback = i,
        this.relationshipSystem = r,
        this.datingSystem = l,
        this.saveSystem = c,
        this.isAdvancingMonth = !1
    }
    _writeSeamlessAutoSave() {
        this.saveSystem && typeof this.saveSystem.writeSeamlessAutoSave == "function" && this.saveSystem.writeSeamlessAutoSave()
    }
    async nextMonth() {
        var e, t, s, a, n, i, r, l;
        if (this.isAdvancingMonth)
            return !1;
        this.isAdvancingMonth = !0,
        (t = (e = this.gameState).beginBatch) == null || t.call(e);
        try {
            const c = this.gameState.state
              , u = c.region === "UK" || c.region === "AU" ? 3 : 4;
            if (c.year === u && c.month === 6)
                return this._writeSeamlessAutoSave(),
                await this.endGameCallback(!0);
            const h = ke(c.region);
            if (c.monthTotal > h)
                return this._writeSeamlessAutoSave(),
                await this.endGameCallback(!0);
            Tt(this.gameState);
            let g = 0;
            c.didTechInternThisMonth && (g = (c.techInternStreak || 0) + 1);
            const p = {
                didTechInternThisMonth: !1,
                techInternStreak: g
            };
            g >= 3 && c.year >= 3 && !c.returnOfferUnlocked && (p.returnOfferUnlocked = !0,
            this.modal.show("🎉 Return Offer！", "你连续数月在大厂实习表现出色，拿到了该公司的 <strong>Return Offer</strong>！毕业走向将锁定<strong>海外高薪</strong>轨道，人生轨迹已改变。"),
            this.logger.log("🎉 你拿到了大厂 Return Offer！海外高薪结局已解锁。", "log-good")),
            this.gameState.update(p);
            let f = 0;
            if (window.housingSystem && typeof window.housingSystem.payMonthlyRent == "function") {
                const w = window.housingSystem.payMonthlyRent();
                w && w.paid ? (this.logger.logTicker(`[系统] 缴纳房租 -${y(w.amount, c.region)}`),
                f = 0) : w && w.owed && w.owed > 0 ? (this.gameState.update({
                    mental: c.mental - 10
                }),
                this.logger.logTicker("[系统] 欠租！心态-10"),
                f = 0) : w && w.defaultRent ? (f = U(c.region),
                this.logger.logTicker(`[系统] 无住房，默认房租 -${y(f, c.region)}`)) : (f = U(c.region),
                this.logger.logTicker(`[系统] 默认房租 -${y(f, c.region)}`))
            } else
                f = U(c.region),
                this.logger.logTicker(`[系统] 默认房租 -${y(f, c.region)}`);
            const k = M(this.gameState.state);
            let E = Te(c.region);
            E = Math.max(0, E - L(k.livingCostReductionRMB, c.region));
            const _ = Pe(this.gameState.state.inventory, c.region)
              , A = f + E + _
              , O = this.gameState.state.money - A;
            if (this.gameState.update({
                money: O
            }),
            this.logger.logTicker(`[系统] 本月支出（含生活费/维护） -${y(A, c.region)}，当前余额:${y(O, c.region)}`),
            this.processDiseases(),
            c.month === d.tuitionMonth && !this.payTuition()) {
                this._writeSeamlessAutoSave();
                return
            }
            const P = this.checkGameOver();
            if (P && P.gameOver) {
                this._writeSeamlessAutoSave(),
                P.narrativeContext === "bankrupt" ? await this.showBankruptStoryThenGameOver(P.reason) : P.narrativeContext === "gpa_low" ? await this.showGPALowStoryThenGameOver(P.reason) : this.gameOverCallback(P.reason);
                return
            }
            this.decayRelationships();
            const D = this.gameState.state;
            if (this.datingSystem && D.partner && D.partner.rel <= 0) {
                const w = this.datingSystem.breakUp();
                w.success && this.logger.log(`💔 ${w.message}`, "log-bad")
            }
            this.relationshipSystem && this.relationshipSystem.checkRelationships();
            const Y = this.gameState.state.month
              , J = this.gameState.state.mental;
            this.advanceTime(),
            typeof window < "u" && ((a = (s = window.game) == null ? void 0 : s.missionSystem) != null && a.recordMonthEndMental) && window.game.missionSystem.recordMonthEndMental(J);
            const W = this.gameState.state.month;
            if (this.applySemesterMonthTransition(Y, W),
            await this._runMilestoneModalsAfterAdvance(),
            Math.random() < d.eventProbability)
                try {
                    await this.eventSystem.triggerRandomEvent()
                } catch (w) {
                    console.error("触发随机事件失败:", w)
                }
            if (window.stockSystem && window.stockSystem.updatePrices(),
            this.gameState.state.gpa >= 3.8 && this.gameState.addFeedPost({
                author: "me",
                content: "成绩单出了，这学期还行～",
                likes: ["妈妈"],
                comments: []
            }),
            window.housingSystem) {
                const w = window.housingSystem.getMentalEffect();
                if (w !== 0) {
                    const T = this.gameState.state.mental;
                    this.gameState.update({
                        mental: Math.min(100, Math.max(0, T + w))
                    }),
                    w > 0 ? this.logger.logTicker(`[系统] 住房舒适，心情+${w}`) : this.logger.logTicker(`[系统] 住房条件差，心情${w}`)
                }
            }
            const R = this.gameState.state;
            R.month === 8 && R.monthTotal % 12 === 0 && window.skillTreeSystem && (window.skillTreeSystem.addPoints(5),
            this.logger.logTicker("🌳 新学年开始，获得 5 点技能点"));
            const C = M(this.gameState.state);
            this.gameState.set("energy", Math.min(this.gameState.getEnergyCap(), d.initialEnergy + C.monthlyEnergyRecovery));
            const N = this.gameState.state
              , $ = {};
            return C.monthlyMentalRecovery && ($.mental = Math.min(this.gameState.getMentalCap(), Math.max(0, (Number(N.mental) || 0) + C.monthlyMentalRecovery))),
            C.monthlyHealthRecovery && ($.health = Math.min(this.gameState.getHealthCap(), Math.max(0, (Number(N.health) || 0) + C.monthlyHealthRecovery))),
            Object.keys($).length > 0 && this.gameState.update($),
            (N.mental ?? 100) <= 0 && this.gameState.update({
                mental: Math.max(15, N.mental)
            }),
            this.gameState.resetMonthlyActionUsage(),
            (i = (n = this.gameState).tickNarrativeBuffs) == null || i.call(n),
            this._syncGlobalAchievementHistory(),
            this._writeSeamlessAutoSave(),
            !0
        } finally {
            (l = (r = this.gameState).endBatch) == null || l.call(r),
            this.isAdvancingMonth = !1
        }
    }
    _syncGlobalAchievementHistory() {
        var r;
        const e = this.gameState.state
          , t = Number(e.mental) || 0
          , s = e.history || {};
        let a = Number(s.mentalLowConsecutiveMonths) || 0;
        t < 10 ? a += 1 : a = 0,
        this.gameState.updateHistory("set", ["mentalLowConsecutiveMonths", a]);
        const n = typeof window < "u" ? window.housingSystem : null;
        !((r = n == null ? void 0 : n.getCurrentHousing) != null && r.call(n)) && (e.monthTotal || 0) >= 3 && e.money < L(5e3, e.region) && this.gameState.updateHistory("set", ["homelessStruggle", !0])
    }
    applySemesterMonthTransition(e, t) {
        const s = this.gameState.state;
        if (e === 12 && t === 1 || e === 5 && t === 6) {
            const i = s.semester_score ?? 80
              , r = Ce(i)
              , l = s.completed_semesters ?? 0
              , c = s.cumulative_gpa ?? s.gpa ?? d.initialGPA
              , m = Ae(c, l, r)
              , u = l + 1;
            this.gameState.update({
                cumulative_gpa: m,
                gpa: m,
                completed_semesters: u,
                semester_score: 80
            }),
            this.logger.logTicker(`[学期结算] 本学期 GPA ${r.toFixed(2)}，累计 GPA ${m.toFixed(2)}`),
            r < 2 && (this.gameState.addLog("警告：本学期惨遭滑铁卢！你被列入学术观察名单！", "log-bad log-academic-warn"),
            this.gameState.updateHistory("set", ["gpaTermBelow2Ever", !0])),
            m < 2 && this.gameState.updateHistory("set", ["gpaCumulativeBelow2Ever", !0]),
            r < 3 && this.gameState.updateHistory("set", ["gpaDroppedEver", !0])
        }
        const n = this.gameState.state;
        if (t !== 6 && t !== 7 && t !== 8) {
            const i = M(n)
              , r = Math.max(12, 15 - i.semesterDecayReduction)
              , l = Math.max(0, (n.semester_score ?? 80) - r);
            this.gameState.update({
                semester_score: l
            }),
            this.logger.logTicker(`本学期分数每月衰减 -${r}（当前 ${Math.round(l)}/100）`)
        }
    }
    decayRelationships() {
        const e = this.gameState.state
          , t = {};
        let s = !1;
        if (e.rel_parents > 0 && (t.rel_parents = Math.max(0, e.rel_parents - 10),
        s = !0),
        e.rel_prof > 0) {
            const a = M(e)
              , n = Math.max(0, 10 - a.profRelationshipDecayReduction);
            t.rel_prof = Math.max(0, e.rel_prof - n),
            s = !0
        }
        e.partner && (!(e.partner.bondedThisMonth === !0) && e.partner.rel > 0 && (e.partner.rel = Math.max(0, e.partner.rel - 5),
        this.logger.logTicker("💔 本月疏于陪伴，恋爱好感 -5")),
        e.partner.bondedThisMonth = !1,
        t.partner = {
            ...e.partner
        }),
        Object.keys(t).length > 0 && this.gameState.update(t),
        s && this.logger.logTicker("💔 关系自然衰减 -10")
    }
    processDiseases() {
        const e = this.gameState.state;
        if (e.diseases.length > 0) {
            let t = 0;
            e.diseases.forEach(s => {
                re[s] && (t += re[s].decay)
            }
            ),
            t > 0 && (this.gameState.update({
                health: e.health - t
            }),
            this.logger.logTicker(`受到疾病折磨，健康-${t}`))
        }
    }
    payTuition() {
        const e = this.gameState.state
          , t = Ee(e.region);
        if (e.money >= t) {
            const s = e.money - t;
            return this.gameState.update({
                money: s
            }),
            this.modal.show("💸 缴纳学费", `新学年学费已扣除 ${y(t, e.region)}<br>剩余资金: ${y(s, e.region)}`),
            this.logger.logTicker(`缴纳学费 -${y(t, e.region)}，剩余:${y(s, e.region)}`),
            this._writeSeamlessAutoSave(),
            !0
        } else
            return this.gameOverCallback("交不起学费，被学校开除并取消签证"),
            !1
    }
    checkGameOver() {
        const e = this.gameState.state;
        if (e.health <= 0)
            return {
                gameOver: !0,
                reason: "你的健康值归零，不幸在异国他乡去世"
            };
        if (e.money < 0) {
            e.tragedies && (e.tragedies.bankrupt = !0);
            const s = (e.debtMonths || 0) + 1;
            if (this.gameState.update({
                debtMonths: s
            }),
            s >= d.maxDebtMonths)
                return {
                    gameOver: !0,
                    reason: "破产超过3个月，流浪街头被遣返",
                    narrativeContext: "bankrupt"
                }
        } else
            this.gameState.set("debtMonths", 0);
        const t = e.cumulative_gpa ?? e.gpa;
        return t < d.minGPA ? {
            gameOver: !0,
            reason: `GPA过低（${t.toFixed(2)}），被学校劝退。`,
            narrativeContext: "gpa_low"
        } : !1
    }
    showBankruptStoryThenGameOver(e) {
        return new Promise(t => {
            this.modal.showCustom("💸 破产遣返", `<div class="story-text crisis-bankrupt-end">
                <p>长期资不抵债，你失去了住所与合法身份支撑，被迫离开这座城市。</p>
                <p style="margin-top:10px;opacity:0.9">签证与银行账户陆续冻结，留学篇章在此终结。</p>
            </div>`, [{
                text: "接受结果",
                cb: () => {
                    this.gameOverCallback(e),
                    t()
                }
            }], "type-negative")
        }
        )
    }
    showGPALowStoryThenGameOver(e) {
        return new Promise(t => {
            this.modal.showCustom("📉 学术劝退", `<div class="story-text crisis-gpa-dismissal">
                <p>学校认定你的累计 GPA 未达最低要求，学籍已被终止，限期离境。</p>
                <p style="margin-top:10px;opacity:0.9">签证状态即将失效，请尽快处理返程与行李。</p>
            </div>`, [{
                text: "接受结果",
                cb: () => {
                    this.gameOverCallback(e),
                    t()
                }
            }], "type-negative")
        }
        )
    }
    async _runMilestoneModalsAfterAdvance() {
        const e = this.gameState.state
          , t = e.region === "HKSG" ? "HK" : e.region;
        if (e.year === 1 && e.month === 6) {
            await new Promise(s => {
                this.modal.showCustom("🎉 暑假到来！工作签证解禁！", '<div class="story-text">经过了一年的煎熬，你终于迎来了第一个暑假！更重要的是，你的 F1 签证合法打工限制正式解禁。你现在可以打开手机里的【领英】App，去投递那些高薪的实习和助教岗位了！摆脱洗盘子命运的时刻到了！</div>', [{
                    text: "太棒了，立刻去投简历",
                    cb: () => s()
                }], "type-positive")
            }
            ),
            this._writeSeamlessAutoSave();
            return
        }
        if (e.month === 9 && e.year > 1 && e.monthTotal > 1) {
            if (e.parentsCutOff) {
                await new Promise(n => {
                    this.modal.showCustom(`📅 第 ${e.year} 学年开启`, `<div class="story-text">新的学年开始了。父母仍在气头上，本月没有给你打生活费。请注意，${d.tuitionMonth} 月份将再次扣除高昂的学费，请合理规划你的资金。随着年级的提升，课程难度也在加大，不要放松警惕。</div>`, [{
                        text: "开启新学年",
                        cb: () => n()
                    }], "type-negative")
                }
                ),
                this.logger.logTicker("[系统] 父母断供中，未收到资助"),
                this._writeSeamlessAutoSave();
                return
            }
            const s = $e(t)
              , a = e.money + s;
            this.gameState.update({
                money: a
            }),
            this.logger.logTicker(`[银行] 父母汇入 ¥${d.PARENT_SUPPORT_RMB.toLocaleString("en-US")}，按汇率已兑换为 ${y(s, t)}，余额:${y(a, t)}`),
            await new Promise(n => {
                this.modal.showCustom(`📅 第 ${e.year} 学年开启`, `<div class="story-text">新的学年开始了。父母的汇款已经到账（¥${d.PARENT_SUPPORT_RMB.toLocaleString("en-US")}）。请注意，${d.tuitionMonth} 月份将再次扣除高昂的学费，请合理规划你的资金。随着年级的提升，课程难度也在加大，不要放松警惕。</div><div class="narrative-consequence-effects" style="margin-top:10px"><span class="effect-tag eff-green narrative-fx-big">💰 +${y(s, t)}</span></div>`, [{
                    text: "开启新学年",
                    cb: () => n()
                }], "type-positive")
            }
            ),
            this._writeSeamlessAutoSave()
        }
    }
    advanceTime() {
        const e = this.gameState.state;
        let t = e.month + 1
          , s = e.year
          , a = e.monthTotal + 1;
        t > 12 && (t = 1),
        t === 9 && s++,
        this.gameState.update({
            month: t,
            year: s,
            monthTotal: a
        })
    }
    getRent() {
        return U(this.gameState.get("region"))
    }
}
const At = ["今晚蹦迪去了，灯光晃得我怀疑人生🪩", "DJ 打碟打到我心巴上，明天早八已自动弃权", "舞池里人挤人，我挤出了当代留学生社交样本", "蹦完迪耳朵还在嗡嗡响，这大概就是青春的底噪", "今晚不学习，只练腿，蹦迪也算有氧运动吧", "卡座太贵，站票蹦完全程，省钱冠军是我", "被朋友拽去夜店，结果我成了人体节拍器", "凌晨三点的城市，只有我和出租车师傅清醒", "蹦迪前：我要自律；蹦迪后：自律是什么能吃吗", "今晚的 BPM 比我的 GPA 高多了", "舞池里踩脚五次，道歉六次，社交 KPI 超额完成", "灯光太闪，我差点以为自己在拍赛博朋克番外", "散场后路边炸鸡，这才是蹦迪的句号", "耳机里的 EDM 终于变成现场，耳朵怀孕了", "今晚人设：不会跳舞但很会晃的留学生", "被陌生人碰杯三次，社恐被迫营业", "蹦到鞋带开了，系鞋带的时候世界都安静了", "出门说只喝一杯，回家天都亮了", "今晚的汗水里有一半是期中周的焦虑", "舞池太热，我把外套寄存了，也把烦恼寄存了", "朋友说「最后一首」，结果最后一首唱了五遍", "蹦迪使我贫穷，但使我快乐，这账算不清", "回家路上冷风一吹，突然想给导师发邮件道歉", "今晚的自拍全糊了，糊得像我的未来（开玩笑）", "夜场门口排队半小时，进去发现不如宿舍蹦迪省钱"]
  , Ct = ["今天又靠打工续命，时薪换的是尊严和咖啡钱", "后厨站了四小时，腿已经不是自己的了", "端盘子端到怀疑人生，但账户数字终于好看一点", "家教结束家长塞了红包，瞬间觉得备课值得", "图书馆闭馆后去便利店夜班，留学生标配作息", "老板夸我手脚麻利，我夸老板按时发工资", "打工路上下雨，鞋湿了，钱没湿就行", "今天被客人刁难，我微笑服务，内心在写辞职信", "站柜台站到腰断，回家倒头就睡，梦都是收银声", "兼职排班和期中撞车，我选择先赚下周饭钱", "同事问我为什么不回国，我说账单会替我回答", "今天多干了半小时没加班费，纯纯为爱发电", "打工穿搭：怎么舒服怎么来，反正没人认识我", "收到工资那一刻，觉得昨天的自己还能再站三小时", "被排了早班，闹钟响了五次才爬起来", "今天小费意外不错，决定奖励自己一顿像样的饭", "老板让我多带新人，我时薪没变活变多了，经典", "打工间隙刷了下 GPA，感觉两个世界在打架", "站了一天回家泡脚，这是我给自己的加班费", "今天又学会一句当地脏话，算文化输出反向输入", "排班表像俄罗斯方块，我永远在填那条缝", "同事请假我顶班，钱到位什么都好说", "打工使我作息规律：累到没空焦虑", "今天被顾客夸中文好，我夸他小费给得大方（并没有）", "收工路上看到晚霞，突然觉得廉价劳动力也有浪漫"]
  , Et = ["周末自驾游，副驾零食比风景还精彩", "公路歌单循环到第三遍，油箱见底心态还在", "导航说前方拥堵，我说是人生常态", "海边风大，发型自由，心情也自由", "山路十八弯，我胃也十八弯", "服务区泡面，米其林平替，懂的都懂", "日落时分停在观景台，假装自己是公路片主角", "副驾睡了一路，醒来问我到哪了——到梦里了", "油费比门票贵，但自由无价（自我安慰）", "后备箱塞满零食，前半段旅行后半段长胖", "走错出口多绕四十公里，这叫探索支线剧情", "露营一夜，星星很亮，蚊子也很亮", "拍照两百张，能发九张，剩下全是表情包", "自驾最大的敌人：找停车位", "风大到怀疑车门会被吹飞，我人还在", "小镇咖啡意外好喝，比城里网红店真诚", "公路餐厅汉堡，热量爆炸，快乐也爆炸", "副驾说「你来开」，我假装没听见", "雨刷开到最大，能见度最小，心跳最大", "返程路上全员沉默，只有导航在说话", "油箱红灯闪烁的瞬间，我对人生有了新的理解", "路过一片油菜花田，停车拍照五分钟堵车半小时", "海边踩水，鞋里进沙，心里进浪", "自驾总结：风景在路上，罚单也可能在路上（并没有）"]
  , $t = [{
    author: "玩咖室友",
    text: "下次带我一个，别自己爽"
}, {
    author: "妈妈",
    text: "早点回来，注意安全。"
}, {
    author: "卷王同学",
    text: "你蹦迪我刷题，我们都有光明的未来"
}, {
    author: "富二代同学",
    text: "卡座我请，下次别站票了"
}, {
    author: "群友A",
    text: "回来讲讲有没有艳遇👀"
}, {
    author: "导师",
    text: "……注意休息。（已读不回版）"
}, {
    author: "玩咖室友",
    text: "牛逼，明天早课见"
}, {
    author: "妈妈",
    text: "少喝酒，胃要紧。"
}]
  , xt = [{
    author: "妈妈",
    text: "别太累了，身体要紧。"
}, {
    author: "卷王同学",
    text: "我还在图书馆，你已经财富自由（并没有）"
}, {
    author: "玩咖室友",
    text: "有钱请客吗兄弟"
}, {
    author: "富二代同学",
    text: "我爸公司缺实习生…算了你当我没说"
}, {
    author: "群友",
    text: "打工魂打工都是人上人"
}, {
    author: "妈妈",
    text: "工资记得存一点，别乱花。"
}, {
    author: "卷王同学",
    text: "你这周工时比我学习时长还长"
}, {
    author: "舍友",
    text: "回来带点夜宵，求你了"
}]
  , Lt = [{
    author: "妈妈",
    text: "开车慢点，到了说一声。"
}, {
    author: "卷王同学",
    text: "我在图书馆看你定位在海边，合理吗"
}, {
    author: "富二代同学",
    text: "下次开我车，油费我出"
}, {
    author: "玩咖室友",
    text: "下次自驾捎我，我负责零食"
}, {
    author: "群友B",
    text: "求攻略！路线发我"
}, {
    author: "导师",
    text: "注意安全，旅途愉快。"
}, {
    author: "妈妈",
    text: "多拍点风景给妈妈看。"
}, {
    author: "卷王同学",
    text: "你玩你的，我先把作业交了"
}];
function Rt(o, e) {
    const t = [...o]
      , s = []
      , a = Math.min(e, t.length);
    for (let n = 0; n < a; n++) {
        const i = Math.floor(Math.random() * t.length);
        s.push(t.splice(i, 1)[0])
    }
    return s
}
function te(o, e={}) {
    const t = o === "party" ? At : o === "work" ? Ct : Et
      , s = o === "party" ? $t : o === "work" ? xt : Lt
      , a = t[Math.floor(Math.random() * t.length)]
      , n = Math.random() < .5 ? 1 : 2
      , i = Rt(s, n)
      , r = [];
    return Math.random() < .35 && r.push("妈妈"),
    {
        content: a,
        likes: r,
        comments: i
    }
}
function X(o) {
    return String(o ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
}
const Nt = new Set([6, 7, 8])
  , j = new Set([9, 10, 1, 2, 3])
  , F = new Set([11, 12, 4, 5]);
class It {
    constructor(e, t, s=null, a=null) {
        this.gameState = e,
        this.logger = t,
        this.eventSystem = s,
        this.modal = a
    }
    _isSummerMonth(e) {
        return Nt.has(e)
    }
    _mergeJobProficiency(e, t) {
        const s = e.current_job;
        if (!s || typeof s != "object")
            return {};
        const a = Math.min(100, Math.max(0, (Number(s.proficiency) || 0) + t));
        return {
            current_job: {
                ...s,
                proficiency: a
            }
        }
    }
    study() {
        const e = this.gameState.state.month;
        return this._isSummerMonth(e) ? (this.logger.log("假期没有课业可卷。", "log-bad"),
        !1) : j.has(e) ? this.homeworkDue() : F.has(e) ? this.normalReview() : (this.logger.log("本月无对应学业行动。", "log-bad"),
        !1)
    }
    homeworkDue() {
        const e = this.gameState.state;
        if (this._isSummerMonth(e.month) || !j.has(e.month))
            return alert("当前月份不可用「肝 Due」"),
            !1;
        const t = this.gameState.markActionUsed("academic:homeworkDue")
          , s = this._repeatEfficiencyMultiplier(t)
          , a = this._repeatPenalty(t)
          , n = M(e)
          , i = Math.max(1, 20 - n.academicEnergyReduction + a.energyPenalty);
        if (!this.checkEnergy(i))
            return !1;
        const r = this._scaledPositive(10, s) + n.normalStudyScoreBonus + n.homeworkScoreBonus;
        this.gameState.update({
            energy: e.energy - i,
            mental: Math.max(0, e.mental - a.mentalPenalty),
            semester_score: Math.min(100, (e.semester_score ?? 80) + r)
        }),
        this.gameState.updateHistory("increment", ["studyTimes", 1]);
        const l = this._buildActionNarrativeTone(s);
        return this.gameState.addOutcomeLogNarrative({
            actionKey: "academic:homeworkDue",
            finalMultiplier: s,
            finalDelta: {
                energy: -i,
                semester_score: r,
                mental: -a.mentalPenalty
            },
            resultKind: l.resultKind,
            summary: "你把 Due 连夜赶完了。",
            statusLine: l.statusLine,
            effectsTag: `[ ⚡-${i} | 📉 本学期+${r}${a.mentalPenalty ? ` | 🧠-${a.mentalPenalty}` : ""} ]`
        }),
        this.logger.logTicker(`📝 肝Due：⚡-${i} | 本学期+${r}${a.mentalPenalty ? ` | 🧠-${a.mentalPenalty}` : ""}`),
        this._maybeTriggerActionEvent("homework"),
        !0
    }
    prepPre() {
        const e = this.gameState.state
          , t = j.has(e.month) || F.has(e.month);
        if (this._isSummerMonth(e.month) || !t)
            return alert("当前月份不可用「Pre」"),
            !1;
        const s = this.gameState.markActionUsed("academic:prepPre")
          , a = this._repeatEfficiencyMultiplier(s)
          , n = this._repeatPenalty(s)
          , i = M(e)
          , r = Math.max(1, 30 - i.academicEnergyReduction + n.energyPenalty);
        if (!this.checkEnergy(r))
            return !1;
        const l = this._scaledPositive(15, a) + i.normalStudyScoreBonus
          , c = this._scaledPositive(1, a);
        this.gameState.update({
            energy: e.energy - r,
            mental: Math.min(this.gameState.getMentalCap(), Math.max(0, e.mental - 5 - n.mentalPenalty)),
            semester_score: Math.min(100, (e.semester_score ?? 80) + l),
            ...this._mergeJobProficiency(e, c)
        }),
        this.gameState.updateHistory("increment", ["studyTimes", 1]);
        const m = this._buildActionNarrativeTone(a);
        return this.gameState.addOutcomeLogNarrative({
            actionKey: "academic:prepPre",
            finalMultiplier: a,
            finalDelta: {
                energy: -r,
                semester_score: l,
                proficiency: c,
                mental: -(5 + n.mentalPenalty)
            },
            resultKind: m.resultKind,
            summary: "你完成了 Pre。",
            statusLine: m.statusLine,
            effectsTag: `[ ⚡-${r} | 📉 本学期+${l} | 💼 熟练+${c} | 🧠-${5 + n.mentalPenalty} ]`
        }),
        this.logger.logTicker(`🗣️ Pre：⚡-${r} | 本学期+${l} | 熟练+${c}`),
        this._maybeTriggerActionEvent("prep_pre"),
        !0
    }
    takeQuiz() {
        const e = this.gameState.state;
        if (this._isSummerMonth(e.month) || !j.has(e.month))
            return alert("当前月份不可用「Quiz」"),
            !1;
        const t = this.gameState.markActionUsed("academic:takeQuiz")
          , s = this._repeatEfficiencyMultiplier(t)
          , a = this._repeatPenalty(t)
          , n = M(e)
          , i = Math.max(1, 15 - n.academicEnergyReduction + a.energyPenalty);
        if (!this.checkEnergy(i))
            return !1;
        const r = this._scaledPositive(8, s) + n.normalStudyScoreBonus;
        this.gameState.update({
            energy: e.energy - i,
            mental: Math.min(this.gameState.getMentalCap(), Math.max(0, e.mental - 5 - a.mentalPenalty)),
            semester_score: Math.min(100, (e.semester_score ?? 80) + r)
        }),
        this.gameState.updateHistory("increment", ["studyTimes", 1]);
        const l = this._buildActionNarrativeTone(s);
        return this.gameState.addOutcomeLogNarrative({
            actionKey: "academic:takeQuiz",
            finalMultiplier: s,
            finalDelta: {
                energy: -i,
                semester_score: r,
                mental: -(5 + a.mentalPenalty)
            },
            resultKind: l.resultKind,
            summary: "你刚扛完一场 Quiz。",
            statusLine: l.statusLine,
            effectsTag: `[ ⚡-${i} | 📉 本学期+${r} | 🧠-${5 + a.mentalPenalty} ]`
        }),
        this.logger.logTicker(`🧠 Quiz：⚡-${i} | 本学期+${r}`),
        this._maybeTriggerActionEvent("quiz"),
        !0
    }
    libraryCram() {
        const e = this.gameState.state;
        if (this._isSummerMonth(e.month) || !F.has(e.month))
            return alert("当前月份不可用「图书馆通宵复习」"),
            !1;
        const t = this.gameState.markActionUsed("academic:libraryCram")
          , s = this._repeatEfficiencyMultiplier(t)
          , a = this._repeatPenalty(t)
          , n = M(e)
          , i = Math.max(1, 50 - n.academicEnergyReduction + a.energyPenalty);
        if (!this.checkEnergy(i))
            return !1;
        const r = this._scaledPositive(30, s);
        this.gameState.update({
            energy: e.energy - i,
            mental: Math.min(this.gameState.getMentalCap(), Math.max(0, e.mental - 20 - a.mentalPenalty)),
            semester_score: Math.min(100, (e.semester_score ?? 80) + r)
        }),
        this.gameState.updateHistory("increment", ["studyTimes", 1]);
        const l = this.gameState.state.history || {}
          , c = e.monthTotal
          , m = l.lastLibraryCramMonthTotal;
        if (m !== c) {
            let h = Number(l.libraryCramStreak) || 0;
            m != null && c === m + 1 ? h += 1 : h = 1;
            const g = Math.max(Number(l.maxLibraryCramStreak) || 0, h);
            this.gameState.updateHistory("set", ["lastLibraryCramMonthTotal", c]),
            this.gameState.updateHistory("set", ["libraryCramStreak", h]),
            this.gameState.updateHistory("set", ["maxLibraryCramStreak", g])
        }
        const u = this._buildActionNarrativeTone(s);
        return this.gameState.addOutcomeLogNarrative({
            actionKey: "academic:libraryCram",
            finalMultiplier: s,
            finalDelta: {
                energy: -i,
                semester_score: r,
                mental: -(20 + a.mentalPenalty)
            },
            resultKind: u.resultKind,
            summary: "你在图书馆里发起了最后冲刺。",
            statusLine: u.statusLine,
            effectsTag: `[ ⚡-${i} | 📉 本学期+${r} | 🧠-${20 + a.mentalPenalty} ]`
        }),
        this.logger.logTicker(`📚 通宵复习：⚡-${i} | 本学期+${r}`),
        this._maybeTriggerActionEvent("cram"),
        !0
    }
    normalReview() {
        const e = this.gameState.state;
        if (this._isSummerMonth(e.month) || !F.has(e.month))
            return alert("当前月份不可用「正常复习」"),
            !1;
        const t = this.gameState.markActionUsed("academic:normalReview")
          , s = this._repeatEfficiencyMultiplier(t)
          , a = this._repeatPenalty(t)
          , n = M(e)
          , i = Math.max(1, 30 - n.academicEnergyReduction + a.energyPenalty);
        if (!this.checkEnergy(i))
            return !1;
        const r = this._scaledPositive(15, s) + n.normalStudyScoreBonus;
        this.gameState.update({
            energy: e.energy - i,
            mental: Math.min(this.gameState.getMentalCap(), Math.max(0, e.mental - 5 - a.mentalPenalty)),
            semester_score: Math.min(100, (e.semester_score ?? 80) + r)
        }),
        this.gameState.updateHistory("increment", ["studyTimes", 1]);
        const l = this._buildActionNarrativeTone(s);
        return this.gameState.addOutcomeLogNarrative({
            actionKey: "academic:normalReview",
            finalMultiplier: s,
            finalDelta: {
                energy: -i,
                semester_score: r,
                mental: -(5 + a.mentalPenalty)
            },
            resultKind: l.resultKind,
            summary: "你把重点内容又梳理了一遍。",
            statusLine: l.statusLine,
            effectsTag: `[ ⚡-${i} | 📉 本学期+${r} | 🧠-${5 + a.mentalPenalty} ]`
        }),
        this.logger.logTicker(`🧾 复习：⚡-${i} | 本学期+${r}`),
        this._maybeTriggerActionEvent("review"),
        !0
    }
    research() {
        const e = this.gameState.state;
        if (this._isSummerMonth(e.month))
            return alert("假期实验室不开放科研"),
            !1;
        const t = this.gameState.markActionUsed("academic:research")
          , s = this._repeatEfficiencyMultiplier(t)
          , a = this._repeatPenalty(t)
          , n = M(e)
          , i = Math.max(1, 40 - n.researchEnergyReduction + a.energyPenalty);
        if (!this.checkEnergy(i))
            return !1;
        const r = {
            dish: 0,
            tutor: 0,
            ta: 0,
            tech: 0,
            research: 0,
            ...e.work_counts || {}
        };
        r.research = (r.research || 0) + 1;
        const l = this._scaledPositive(3, s) + n.researchProficiencyBonus
          , c = this._scaledPositive(5, s) + n.researchProfRelationBonus;
        this.gameState.update({
            mental: Math.max(0, e.mental - 10 - a.mentalPenalty),
            ...this._mergeJobProficiency(e, l),
            rel_prof: Math.min(100, e.rel_prof + c),
            energy: e.energy - i,
            work_counts: r
        });
        const m = this._buildActionNarrativeTone(s);
        return this.gameState.addOutcomeLogNarrative({
            actionKey: "academic:research",
            finalMultiplier: s,
            finalDelta: {
                energy: -i,
                proficiency: l,
                rel_prof: c,
                mental: -(10 + a.mentalPenalty)
            },
            resultKind: m.resultKind,
            summary: "你在实验室里把科研节奏拉了起来。",
            statusLine: m.statusLine,
            effectsTag: `[ ⚡-${i} | 💼 熟练+${l} | 👨‍🏫 导师+${c} | 🧠-${10 + a.mentalPenalty} ]`
        }),
        this.logger.logTicker(`🧪 科研：⚡-${i} | 熟练+${l} | 导师+${c}`),
        this._maybeTriggerActionEvent("research"),
        !0
    }
    workCurrentJob() {
        const t = this.gameState.state.current_job;
        return t != null && t.workTypeId ? this._workShift(t.workTypeId, {
            skipUnlockCheck: !0,
            visaExempt: !!t.freshmanVisaExempt
        }) : (alert("当前没有在职岗位，请打开手机「领英」在求职市场中投递。"),
        !1)
    }
    work(e) {
        return this._workShift(e, {
            skipUnlockCheck: !1,
            visaExempt: !1
        })
    }
    applyForJob(e) {
        const t = xe(e);
        if (!t)
            return alert("未知岗位"),
            !1;
        const s = this.gameState.state
          , a = Le(s, t);
        if (a === "visa_freshman")
            return alert("[F1签证：大一学年非暑假期间禁止校外合法打工] 暑假（6–8 月）起或「唐人街黑工」等灰色岗位除外。"),
            !1;
        if (a === "requirements")
            return alert(`未满足投递条件：${t.lockHint || "请提升履历后再试"}`),
            !1;
        if (!this.checkEnergy(q))
            return !1;
        const n = s.region === "HKSG" ? "HK" : s.region;
        this.gameState.update({
            energy: s.energy - q
        }),
        this.logger.log(`📨 你向 ${t.company} 投递了「${t.title}」岗位简历。（体力 -${q}）`, "log-event");
        const {probability: i} = Re(s, s.current_job, t)
          , r = Math.random() < i
          , l = () => {
            var g;
            typeof window < "u" && ((g = window.game) != null && g.refreshUI) && window.game.refreshUI()
        }
        ;
        if (l(),
        !r) {
            const g = `
                <div class="story-text modal-reject-letter">
                    很遗憾，虽然你的背景很优秀，但我们找到了更匹配的候选人……感谢你对本职位的关注，祝你求职顺利。
                </div>`
              , p = this._resolveModal();
            return p ? p.showCustom("拒信 (Rejection Letter)", g, [{
                text: "关闭",
                secondary: !0
            }], "type-negative") : alert("面试未通过。"),
            !1
        }
        const c = Q(t, s)
          , m = y(c.salary, n)
          , u = `
            <div class="modal-offer-gold-body">
                <p class="modal-offer-lead">你成功通过了面试，获得了 <strong>${X(t.company)}</strong> 的
                    <strong>${X(t.title)}</strong> 岗位！</p>
                <p class="modal-offer-salaryline">底薪为 <strong>${X(m)}</strong>/月</p>
                <p class="modal-offer-ask">是否接受入职？</p>
            </div>`
          , h = this._resolveModal();
        if (h)
            h.showCustom("🎉 恭喜获得 Offer！", u, [{
                text: "接受入职",
                cb: () => {
                    const g = this.gameState.state
                      , p = g.region === "HKSG" ? "HK" : g.region
                      , f = Q(t, g);
                    f.proficiency = 0,
                    this.gameState.update({
                        current_job: f
                    }),
                    this.logger.log(`✅ 你已接受 Offer，入职 ${t.company} · ${t.title}，底薪 ${y(f.salary, p)}/月。`, "log-good"),
                    l()
                }
            }, {
                text: "再考虑",
                secondary: !0,
                cb: () => {}
            }], "type-offer-gold");
        else {
            const g = Q(t, this.gameState.state);
            g.proficiency = 0,
            this.gameState.update({
                current_job: g
            }),
            this.logger.log(`录用：${t.title}`, "log-good")
        }
        return !0
    }
    _resolveModal() {
        const e = this.modal;
        return e && typeof e.showCustom == "function" ? e : typeof window < "u" && window.modalInstance && typeof window.modalInstance.showCustom == "function" ? window.modalInstance : null
    }
    _buildWorkNarrativeToneV2(e) {
        const t = Z(e);
        return e >= 1 ? {
            ...t,
            statusLine: "你今天状态爆棚，效率很高，连老板都多看了你一眼。"
        } : e >= .6 ? {
            ...t,
            statusLine: "连续重复同一份工作让你有点麻木，动作明显慢了下来。"
        } : {
            ...t,
            statusLine: "你几乎在机械应付，身体和情绪都在强烈抗议。"
        }
    }
    _buildActionNarrativeTone(e) {
        return Z(e)
    }
    _repeatEfficiencyMultiplier(e) {
        return ue(e)
    }
    _repeatPenalty(e) {
        return de(e)
    }
    _scaledPositive(e, t) {
        return e <= 0 ? e : Math.max(1, Math.round(e * t))
    }
    _workShift(e, t={}) {
        const s = Ie[e];
        if (!s)
            return !1;
        const a = this.gameState.state;
        if (Ne(a) && !t.visaExempt)
            return alert("政策限制：大一学年非暑假期间禁止校外合法打工（仅唐人街黑工等灰色岗位例外；暑假 6–8 月解除）"),
            !1;
        const n = M(a)
          , i = n.workEnergyMultiplier
          , r = this.gameState.markActionUsed(`work:${e}`)
          , l = this._repeatEfficiencyMultiplier(r)
          , c = this._repeatPenalty(r);
        let m = s.energy * i + c.energyPenalty;
        const u = Math.max(1, Math.ceil(m));
        if (!t.skipUnlockCheck && !s.unlocked(a) || !this.checkEnergy(u))
            return !1;
        let h = Ge(e, a.region, {
            state: a
        });
        h = Math.floor(h * l);
        let g = s.mental || 0
          , p = "";
        e === "dishwash" && Math.random() < .2 && (h = Math.floor(h * .8),
        g -= 15,
        p = "本班出现扣薪波动，实际到账打了折。"),
        e === "tutor" && Math.random() < .55 && (h = Math.floor(h * 2),
        p = "本班收到额外奖金，实际到账高于预期。"),
        c.mentalPenalty > 0 && (g -= c.mentalPenalty);
        const f = ye(l) ? fe(`work:${e}`) : null;
        f && (g += f.mental || 0);
        const k = {
            money: a.money + h,
            mental: Math.min(this.gameState.getMentalCap(), Math.max(0, a.mental + g)),
            energy: a.energy - u
        };
        s.gpa !== void 0 && s.gpa !== 0 && (k.semester_score = I(a.semester_score ?? 80, s.gpa)),
        s.health !== void 0 && s.health !== 0 && (k.health = Math.min(this.gameState.getHealthCap(), Math.max(0, a.health + s.health))),
        f != null && f.health && (k.health = Math.min(this.gameState.getHealthCap(), Math.max(0, (k.health ?? a.health) + f.health))),
        e === "big_intern" && (k.didTechInternThisMonth = !0);
        const E = De[e];
        if (E) {
            const T = {
                dish: 0,
                tutor: 0,
                ta: 0,
                tech: 0,
                research: 0,
                ...a.work_counts || {}
            };
            T[E] = (T[E] || 0) + 1,
            k.work_counts = T
        }
        const _ = a.current_job || {};
        let A = _.jobLevel != null ? _.jobLevel : Oe(e);
        A = Math.min(4, Math.max(1, Math.floor(A)));
        const se = Math.min(100, (_.proficiency || 0) + 10)
          , O = _.raiseMultiplier != null && _.raiseMultiplier > 0 ? Number(_.raiseMultiplier) : 1
          , P = ee(e, a.region, {
            major: a.major,
            jobLevel: A
        })
          , D = Math.floor(P * O)
          , Y = _.company || _.companyName || Be(e)
          , J = _.title || _.positionTitle || pe(e, A);
        if (k.current_job = {
            ..._,
            workTypeId: e,
            jobLevel: A,
            major: a.major,
            proficiency: se,
            raiseMultiplier: O,
            salaryBaseLocal: P,
            salary: D,
            companyName: Y,
            positionTitle: J,
            lastPayLocal: h,
            lastWorkedMonthTotal: a.monthTotal
        },
        this.gameState.update(k),
        this.gameState.updateHistory("increment", ["jobsWorked", 1]),
        this.gameState.updateHistory("increment", ["totalEarnings", Math.max(0, h)]),
        Math.random() < .2) {
            const T = te("work", a);
            this.gameState.addFeedPost({
                author: "me",
                content: x.injectDynamicData(T.content, a),
                likes: T.likes,
                comments: T.comments.map(ae => ({
                    ...ae,
                    text: x.injectDynamicData(ae.text, a)
                }))
            })
        }
        const W = T => y(T, a.region)
          , V = _.title || s.name || "打工"
          , R = s.gpa ? Math.round(s.gpa * 25) : 0
          , C = this._buildWorkNarrativeToneV2(l)
          , N = r >= 3 ? "你已经连续上班太久了，状态明显下滑。" : r === 2 ? "你开始感到疲惫，效率出现衰减。" : "这次上班节奏顺畅，一切还在掌控内。"
          , $ = [`💰 ${h >= 0 ? "+" : ""}${W(h)}`, `⚡-${u}`, `🧠 ${g >= 0 ? "+" : ""}${g}`, R ? `📉 本学期${R >= 0 ? "+" : ""}${R}` : null, s.health ? `❤️ ${s.health >= 0 ? "+" : ""}${s.health}` : null].filter(Boolean).join(" | ")
          , w = [N, C.statusLine];
        return p && w.push(p),
        f != null && f.sentence && w.push(f.sentence),
        i < 1 && w.push("自行车通勤减少了体力开销。"),
        n.workIncomeBonusPct > 0 && w.push("商店道具让这班打工收入略有提高，但总加成被封顶。"),
        this.gameState.addOutcomeLogNarrative({
            actionKey: `work:${e}`,
            finalMultiplier: l,
            finalDelta: {
                money: h,
                mental: g,
                energy: -u
            },
            resultKind: C.resultKind,
            summary: `你在${V}岗位撑完了一班。`,
            detail: `${w.join(" ")} [ ${$} ]`,
            region: a.region,
            eventId: `work_${e}`
        }),
        this.logger.logTicker(`${s.icon || "💼"} ${V}结算：${$}`),
        t.skipUnlockCheck && this._maybeTriggerActionEvent("workCurrentJob"),
        !0
    }
    slack() {
        const e = this.gameState.markActionUsed("academic:slack")
          , t = this._repeatEfficiencyMultiplier(e)
          , s = this._repeatPenalty(e)
          , a = G.energyCost + s.energyPenalty;
        if (!this.checkEnergy(a))
            return !1;
        const n = this.gameState.state
          , i = this._scaledPositive(G.mentalBonus, t);
        this.gameState.update({
            mental: Math.min(this.gameState.getMentalCap(), Math.max(0, n.mental + i - s.mentalPenalty)),
            energy: n.energy - a
        });
        const r = this._buildActionNarrativeTone(t);
        return this.gameState.addOutcomeLogNarrative({
            actionKey: "academic:slack",
            finalMultiplier: t,
            finalDelta: {
                energy: -a,
                mental: i - s.mentalPenalty
            },
            resultKind: r.resultKind,
            summary: `${G.label}了一天，暂时从高压里抽离。`,
            statusLine: r.statusLine,
            effectsTag: `[ ⚡-${a} | 🧠+${i}${s.mentalPenalty ? ` | 🧠额外-${s.mentalPenalty}` : ""} ]`
        }),
        this.logger.logTicker(`🛏️ 躺平：⚡-${a} | 🧠+${i}${s.mentalPenalty ? ` | 额外🧠-${s.mentalPenalty}` : ""}`),
        this._maybeTriggerActionEvent("slack"),
        !0
    }
    internship() {
        var m, u;
        const e = this.gameState.state
          , t = this.gameState.markActionUsed("academic:internship")
          , s = this._repeatEfficiencyMultiplier(t)
          , a = this._repeatPenalty(t)
          , n = 40 + a.energyPenalty;
        if (!this.checkEnergy(n))
            return !1;
        const i = ((u = (m = K[e.region]) == null ? void 0 : m.jobs) == null ? void 0 : u.tech) ?? 4500
          , r = Math.floor(i * .4 * (.9 + Math.random() * .2) * s)
          , l = this._scaledPositive(15, s);
        this.gameState.update({
            money: e.money + r,
            mental: Math.max(0, e.mental - 15 - a.mentalPenalty),
            ...this._mergeJobProficiency(e, l),
            semester_score: I(e.semester_score ?? 80, -.15),
            energy: e.energy - n
        });
        const c = this._buildActionNarrativeTone(s);
        return this.gameState.addOutcomeLogNarrative({
            actionKey: "academic:internship",
            finalMultiplier: s,
            finalDelta: {
                money: r,
                energy: -n,
                proficiency: l,
                mental: -(15 + a.mentalPenalty),
                semester_score: -.15
            },
            resultKind: c.resultKind,
            summary: "你把假期换成了一段实习经历。",
            statusLine: c.statusLine,
            effectsTag: `[ 💰 +${y(r, e.region)} | ⚡-${n} | 💼 熟练+${l} | 📉 本学期-4 | 🧠-${15 + a.mentalPenalty} ]`
        }),
        this.logger.logTicker(`💼 实习：+${y(r, e.region)} | ⚡-${n} | 熟练+${l} | 本学期-4`),
        !0
    }
    _maybeTriggerActionEvent(e) {
        !this.eventSystem || typeof this.eventSystem.maybeTriggerActionEvent != "function" || Promise.resolve().then( () => this.eventSystem.maybeTriggerActionEvent(e)).catch(t => console.warn(`[action-event] ${e} skipped:`, t))
    }
    checkEnergy(e) {
        return this.gameState.state.energy < e ? (alert(`体力不足 (需要 ${e})`),
        !1) : !0
    }
}
class Gt {
    constructor(e, t, s, a=null, n=null) {
        this.gameState = e,
        this.logger = t,
        this.diseaseSystem = s,
        this.eventSystem = a,
        this.modal = n
    }
    buyItem(e) {
        var u;
        const t = ge[e];
        if (!t)
            return !1;
        const s = this.gameState.state
          , a = s.region
          , i = new Set(["therapy", "漫画_collection"]).has(e)
          , r = he(s)
          , l = Number((u = t.effectPayload) == null ? void 0 : u.mentalCapBonus) || 0;
        if (i && r >= 30)
            return alert("心态上限增益已达到 +30 上限"),
            !1;
        if (i && r + l > 30)
            return alert(`该道具会超过 +30 上限（当前 +${r}）`),
            !1;
        if (!i && oe(s, e))
            return alert(`你已经拥有 ${t.name}`),
            !1;
        const c = Ue(e, a);
        if (s.money < c)
            return alert(`资金不足，需要 ${y(c, a)}`),
            !1;
        const m = Array.isArray(s.inventory) ? [...s.inventory] : [];
        return m.push(e),
        this.gameState.update({
            money: s.money - c,
            inventory: m
        }),
        this.logger.logTicker(`购买 ${t.name}，花费 ${y(c, a)}`),
        !0
    }
    _repeatEfficiencyMultiplier(e) {
        return ue(e)
    }
    _repeatPenalty(e) {
        return de(e)
    }
    _scaledPositive(e, t) {
        return e <= 0 ? e : Math.max(1, Math.round(e * t))
    }
    _toneByMultiplier(e) {
        const t = Z(e);
        return {
            resultKind: t.resultKind,
            status: t.statusLine
        }
    }
    _maybeApplyFumble(e, t, s, a) {
        if (!ye(t))
            return null;
        const n = fe(e);
        return n.mental && (s.mental = Math.min(this.gameState.getMentalCap(), Math.max(0, (s.mental ?? a.mental) + n.mental))),
        n.health && (s.health = Math.min(this.gameState.getHealthCap(), Math.max(0, (s.health ?? a.health) + n.health))),
        n
    }
    playGame() {
        const e = this.gameState.markActionUsed("life:playGame")
          , t = this._repeatEfficiencyMultiplier(e)
          , s = this._repeatPenalty(e)
          , a = 25 + s.energyPenalty;
        if (!this.checkEnergy(a))
            return !1;
        const n = this.gameState.state
          , i = M(n)
          , r = this._scaledPositive(25, t) + i.entertainmentMentalBonus
          , l = -.3;
        this.gameState.update({
            mental: Math.min(this.gameState.getMentalCap(), Math.max(0, n.mental + r - s.mentalPenalty)),
            semester_score: I(n.semester_score ?? 80, l),
            energy: n.energy - a
        });
        const c = this._toneByMultiplier(t);
        return this.gameState.addOutcomeLogNarrative({
            actionKey: "life:playGame",
            finalMultiplier: t,
            finalDelta: {
                energy: -a,
                mental: r - s.mentalPenalty,
                gpa: l
            },
            resultKind: c.resultKind,
            summary: "你沉进了游戏世界，短暂逃离现实轰炸。",
            statusLine: c.status,
            effectsTag: `[⚡ -${a} | 🧠 +${r}${s.mentalPenalty ? ` | 🧠额外-${s.mentalPenalty}` : ""} | 📚 本学期 ${l}]`
        }),
        this.logger.logTicker(`🎮 打游戏：⚡-${a} | 🧠+${r}`),
        this._maybeTriggerActionEvent("slack"),
        !0
    }
    drink() {
        const e = this.gameState.markActionUsed("life:drink")
          , t = this._repeatEfficiencyMultiplier(e)
          , s = this._repeatPenalty(e)
          , a = 30 + s.energyPenalty;
        if (!this.checkEnergy(a))
            return !1;
        const n = this.gameState.state
          , i = B(45, n.region)
          , r = M(n)
          , l = this._scaledPositive(15, t) + r.entertainmentMentalBonus
          , c = Math.max(2, Math.round(2 / Math.max(.5, t)))
          , m = -.1;
        this.gameState.update({
            money: n.money - i,
            mental: Math.min(this.gameState.getMentalCap(), Math.max(0, n.mental + l - s.mentalPenalty)),
            semester_score: I(n.semester_score ?? 80, m),
            health: Math.max(0, n.health - c),
            energy: n.energy - a
        });
        const u = this._toneByMultiplier(t);
        return this.gameState.addOutcomeLogNarrative({
            actionKey: "life:drink",
            finalMultiplier: t,
            finalDelta: {
                money: -i,
                energy: -a,
                mental: l - s.mentalPenalty,
                health: -c,
                gpa: m
            },
            resultKind: u.resultKind,
            summary: "你举杯说着“就这一杯”，然后又来了一杯。",
            statusLine: u.status,
            effectsTag: `[💰 -${y(i, n.region)} | ⚡ -${a} | 🧠 +${l}${s.mentalPenalty ? ` | 🧠额外-${s.mentalPenalty}` : ""} | ❤️ -${c}]`
        }),
        this.logger.logTicker(`🍺 小酌：💰-${y(i, n.region)} | ⚡-${a} | 🧠+${l}`),
        this._maybeTriggerActionEvent("party"),
        !0
    }
    party() {
        var h, g;
        const e = this.gameState.markActionUsed("life:party")
          , t = this._repeatEfficiencyMultiplier(e)
          , s = this._repeatPenalty(e)
          , a = 40 + s.energyPenalty;
        if (!this.checkEnergy(a))
            return !1;
        const n = this.gameState.state
          , i = B(180, n.region)
          , r = M(n)
          , l = this._scaledPositive(25, t) + r.entertainmentMentalBonus
          , c = -.1;
        this.gameState.update({
            money: n.money - i,
            mental: Math.min(this.gameState.getMentalCap(), Math.max(0, n.mental + l - s.mentalPenalty)),
            semester_score: I(n.semester_score ?? 80, c),
            health: Math.max(0, n.health - 3),
            energy: n.energy - a
        });
        const m = te("party", n);
        this.gameState.addFeedPost({
            author: "me",
            content: x.injectDynamicData(m.content, n),
            likes: m.likes,
            comments: (m.comments || []).map(p => ({
                ...p,
                text: x.injectDynamicData(p.text, n)
            }))
        });
        const u = {
            regionId: n.region,
            multiplier: t,
            moneyDelta: -i,
            energyDelta: -a,
            mentalDelta: l - s.mentalPenalty,
            healthDelta: -3,
            gpaDelta: c
        };
        if (Math.random() < .7)
            this._showHookupModal(n.region, u);
        else if (Math.random() < .15)
            (g = (h = this.diseaseSystem) == null ? void 0 : h.infectRandom) == null || g.call(h, "party"),
            this._logPartyOutcome({
                ...u,
                resultKind: "loss",
                summary: "你从派对回来后状态不太对。",
                statusLine: "热闹没有免费，账单从身体开始寄来。"
            });
        else {
            const p = this._toneByMultiplier(t);
            this._logPartyOutcome({
                ...u,
                resultKind: p.resultKind,
                summary: "你在派对里强行续命了一整晚。",
                statusLine: p.status
            })
        }
        return this.gameState.updateHistory("increment", ["partyTimes", 1]),
        this._maybeTriggerActionEvent("party"),
        !0
    }
    _showHookupModal(e, t={}) {
        var r, l;
        if (!this.modal) {
            Math.random() < .15 && ((l = (r = this.diseaseSystem) == null ? void 0 : r.infectRandom) == null || l.call(r, "party")),
            this._logPartyOutcome({
                ...t,
                summary: "你在派对里强行续命了一整晚。",
                statusLine: this._toneByMultiplier(t.multiplier || 1).status
            });
            return
        }
        const s = this.gameState.state
          , a = je(s.playerGender || "male", s.orientation || "straight")
          , i = `
            <div class="hookup-modal-shell">
                <img class="hookup-npc-avatar portrait-randomuser" src="${Fe(a)}" width="72" height="72" alt="" decoding="async" fetchpriority="high" onerror="${Ke(a)}" />
                <p class="hookup-modal-text">你在派对上遇到一个很来电的人，对方暗示可以继续发展。</p>
            </div>
        `;
        this.modal.showCustom("✨ 艳遇", i, [{
            text: "欣然接受（高收益高风险）",
            cb: () => this._applyHookupAccept(e, t)
        }, {
            text: "果断拒绝（稳妥）",
            secondary: !0,
            cb: () => this._logPartyOutcome({
                ...t,
                resultKind: "turn",
                summary: "你选择了稳妥离场。",
                statusLine: "你把欲望留在门口，打车回去继续面对人生。"
            })
        }])
    }
    _applyHookupAccept(e, t={}) {
        var l, c;
        const s = this.gameState.state
          , a = B(200, e);
        if (s.money < a) {
            alert(`现金不足，约会需要 ${y(a, e)}`),
            this._logPartyOutcome({
                ...t,
                resultKind: "turn",
                summary: "你本想继续发展，但余额先替你做了决定。",
                statusLine: "浪漫败给了支付页面，至少没有追加风险。"
            });
            return
        }
        const n = s.mental
          , i = Math.min(this.gameState.getMentalCap(), s.mental + 40)
          , r = i - n;
        this.gameState.update({
            money: s.money - a,
            mental: i
        }),
        Math.random() < .2 ? ((c = (l = this.diseaseSystem) == null ? void 0 : l.infectRandom) == null || c.call(l, "party"),
        this._logPartyOutcome({
            ...t,
            moneyDelta: (t.moneyDelta || 0) - a,
            mentalDelta: (t.mentalDelta || 0) + r,
            resultKind: "loss",
            summary: "你接受了艳遇，也接受了风险。",
            statusLine: "短暂上头之后，身体开始递交抗议书。"
        })) : this._logPartyOutcome({
            ...t,
            moneyDelta: (t.moneyDelta || 0) - a,
            mentalDelta: (t.mentalDelta || 0) + r,
            resultKind: "gain",
            summary: "你接受了艳遇，度过了一个难忘夜晚。",
            statusLine: "多巴胺暂时接管了人生，钱包在旁边沉默。"
        })
    }
    _logPartyOutcome({regionId: e, multiplier: t=1, moneyDelta: s=0, energyDelta: a=0, mentalDelta: n=0, healthDelta: i=0, gpaDelta: r=0, resultKind: l="", summary: c="你在派对里强行续命了一整晚。", statusLine: m=""}={}) {
        const u = e || this.gameState.state.region
          , h = this._toneByMultiplier(t)
          , g = `${s >= 0 ? "+" : "-"}${y(Math.abs(s), u)}`
          , p = k => `${k >= 0 ? "+" : ""}${k}`
          , f = [s ? `💰 ${g}` : null, a ? `⚡ ${p(a)}` : null, n ? `🧠 ${p(n)}` : null, i ? `❤️ ${p(i)}` : null, r ? `📉 本学期${p(r)}` : null].filter(Boolean);
        this.gameState.addOutcomeLogNarrative({
            actionKey: "life:party",
            finalMultiplier: t,
            finalDelta: {
                money: s,
                energy: a,
                mental: n,
                health: i,
                gpa: r
            },
            resultKind: l || h.resultKind,
            summary: c,
            statusLine: m || h.status,
            effectsTag: `[${f.join(" | ")}]`
        }),
        this.logger.logTicker(`🎉 蹦迪结算：${f.join(" | ")}`)
    }
    gym() {
        const e = this.gameState.markActionUsed("life:gym")
          , t = this._repeatEfficiencyMultiplier(e)
          , s = this._repeatPenalty(e)
          , a = 20 + s.energyPenalty;
        if (!this.checkEnergy(a))
            return !1;
        const n = this.gameState.state
          , i = M(n)
          , r = Math.max(0, Math.floor(B(65, n.region) * i.gymCostMultiplier));
        if (n.money < r)
            return alert(`资金不足，需要 ${y(r, n.region)}`),
            !1;
        const l = this._scaledPositive(10, t) + i.gymHealthBonus
          , c = this._scaledPositive(5, t);
        this.gameState.update({
            money: n.money - r,
            health: Math.min(this.gameState.getHealthCap(), n.health + l),
            mental: Math.min(this.gameState.getMentalCap(), Math.max(0, n.mental + c - s.mentalPenalty)),
            energy: n.energy - a
        }),
        this.gameState.updateHistory("increment", ["gymTimes", 1]);
        const m = this._toneByMultiplier(t);
        return this.gameState.addOutcomeLogNarrative({
            actionKey: "life:gym",
            finalMultiplier: t,
            finalDelta: {
                money: -r,
                energy: -a,
                health: l,
                mental: c - s.mentalPenalty
            },
            resultKind: m.resultKind,
            summary: "你硬着头皮完成了一组训练。",
            statusLine: m.status,
            effectsTag: `[💰 -${y(r, n.region)} | ⚡ -${a} | ❤️ +${l} | 🧠 +${c}${s.mentalPenalty ? ` | 🧠额外-${s.mentalPenalty}` : ""}]`
        }),
        this.logger.logTicker(`🏋️ 健身：⚡-${a} | ❤️+${l} | 🧠+${c}`),
        this._maybeTriggerActionEvent("gym"),
        !0
    }
    travel() {
        const e = this.gameState.markActionUsed("life:travel")
          , t = this._repeatEfficiencyMultiplier(e)
          , s = this._repeatPenalty(e)
          , a = 50 + s.energyPenalty;
        if (!this.checkEnergy(a))
            return !1;
        const n = this.gameState.state;
        if (!oe(n, "used_car"))
            return alert("你需要先购买二手车才能开启短途旅行。"),
            !1;
        const i = B(520, n.region);
        if (n.money < i)
            return alert(`资金不足，需要 ${y(i, n.region)}`),
            !1;
        const r = this._scaledPositive(50, t);
        this.gameState.update({
            money: n.money - i,
            mental: Math.min(this.gameState.getMentalCap(), Math.max(0, n.mental + r - s.mentalPenalty)),
            energy: n.energy - a
        });
        const l = te("travel", n);
        this.gameState.addFeedPost({
            author: "me",
            content: x.injectDynamicData(l.content, n),
            likes: l.likes,
            comments: (l.comments || []).map(m => ({
                ...m,
                text: x.injectDynamicData(m.text, n)
            }))
        });
        const c = this._toneByMultiplier(t);
        return this.gameState.addOutcomeLogNarrative({
            actionKey: "life:travel",
            finalMultiplier: t,
            finalDelta: {
                money: -i,
                energy: -a,
                mental: r - s.mentalPenalty
            },
            resultKind: c.resultKind,
            summary: "你在短途旅行里暂时把生活拉回正轨。",
            statusLine: c.status,
            effectsTag: `[💰 -${y(i, n.region)} | ⚡ -${a} | 🧠 +${r}${s.mentalPenalty ? ` | 🧠额外-${s.mentalPenalty}` : ""}]`
        }),
        this.logger.logTicker(`🧳 旅行：💰-${y(i, n.region)} | ⚡-${a} | 🧠+${r}`),
        this._maybeTriggerActionEvent("slack"),
        !0
    }
    sleep() {
        const e = this.gameState.markActionUsed("life:sleep")
          , t = this._repeatEfficiencyMultiplier(e)
          , s = this._repeatPenalty(e)
          , a = 20 + s.energyPenalty;
        if (!this.checkEnergy(a))
            return !1;
        const n = this.gameState.state
          , i = this._scaledPositive(10, t)
          , r = this._scaledPositive(5, t);
        this.gameState.update({
            mental: Math.min(this.gameState.getMentalCap(), Math.max(0, n.mental + i - s.mentalPenalty)),
            health: Math.min(this.gameState.getHealthCap(), n.health + r),
            energy: n.energy - a
        });
        const l = this._toneByMultiplier(t);
        return this.gameState.addOutcomeLogNarrative({
            actionKey: "life:sleep",
            finalMultiplier: t,
            finalDelta: {
                energy: -a,
                mental: i - s.mentalPenalty,
                health: r
            },
            resultKind: l.resultKind,
            summary: "你总算补了觉，灵魂勉强回到身体里。",
            statusLine: l.status,
            effectsTag: `[⚡ -${a} | 🧠 +${i}${s.mentalPenalty ? ` | 🧠额外-${s.mentalPenalty}` : ""} | ❤️ +${r}]`
        }),
        this.logger.logTicker(`😴 睡觉：⚡-${a} | 🧠+${i} | ❤️+${r}`),
        this._maybeTriggerActionEvent("slack"),
        !0
    }
    slack() {
        const e = this.gameState.markActionUsed("life:slack")
          , t = this._repeatEfficiencyMultiplier(e)
          , s = this._repeatPenalty(e)
          , a = G.energyCost + s.energyPenalty;
        if (!this.checkEnergy(a))
            return !1;
        const n = this.gameState.state
          , i = M(n)
          , r = this._scaledPositive(G.mentalBonus, t) + i.entertainmentMentalBonus;
        this.gameState.update({
            mental: Math.min(this.gameState.getMentalCap(), Math.max(0, n.mental + r - s.mentalPenalty)),
            energy: n.energy - a
        });
        const l = this._toneByMultiplier(t);
        return this.gameState.addOutcomeLogNarrative({
            actionKey: "life:slack",
            finalMultiplier: t,
            finalDelta: {
                energy: -a,
                mental: r - s.mentalPenalty
            },
            resultKind: l.resultKind,
            summary: `${G.label}了一天，暂时躲开现实轰炸。`,
            statusLine: l.status,
            effectsTag: `[⚡ -${a} | 🧠 +${r}${s.mentalPenalty ? ` | 🧠额外-${s.mentalPenalty}` : ""}]`
        }),
        this.logger.logTicker(`🛌 躺平：⚡-${a} | 🧠+${r}`),
        this._maybeTriggerActionEvent("slack"),
        !0
    }
    _maybeTriggerActionEvent(e) {
        !this.eventSystem || typeof this.eventSystem.maybeTriggerActionEvent != "function" || Promise.resolve().then( () => this.eventSystem.maybeTriggerActionEvent(e)).catch(t => console.warn(`[action-event] ${e} skipped:`, t))
    }
    checkEnergy(e) {
        const t = this.gameState.state
          , s = Math.max(1, Math.ceil(Number(e) || 0));
        return (t.energy || 0) < s ? (alert(`体力不足（需要 ${s}）`),
        !1) : !0
    }
}
class Ot {
    constructor(e, t) {
        this.gameState = e,
        this.logger = t
    }
    callParents() {
        if (!this.checkEnergy(10))
            return !1;
        const t = this.gameState.state
          , s = t.rel_parents;
        if (this.gameState.update({
            rel_parents: Math.min(100, t.rel_parents + 20),
            mental: t.mental - 5,
            energy: t.energy - 10
        }),
        Math.random() < .3 && s > 60) {
            const a = L((10 + Math.random() * 20) * 1e3, t.region);
            this.gameState.update({
                money: this.gameState.state.money + a
            }),
            this.logger(`父母心疼你，给你转了 ${y(a, t.region)}，关系 +20。`, "log-good")
        } else
            this.logger("听了父母一顿唠叨，关系 +20，心态 -5。", "log-event");
        return !0
    }
    interactWithProf() {
        if (!this.checkEnergy(20))
            return !1;
        const t = this.gameState.state;
        return this.gameState.update({
            rel_prof: Math.min(100, t.rel_prof + 20),
            mental: t.mental + 5,
            energy: t.energy - 20
        }),
        this.logger("和导师进行了深入交流，导师关系 +20，心态 +5。", "log-good"),
        !0
    }
    date() {
        var i, r;
        if (!this.checkEnergy(30))
            return !1;
        const t = this.gameState.state;
        if (!t.partner)
            return alert("你还没有对象"),
            !1;
        const s = {
            ...t.partner
        }
          , a = Math.min(100, (Number(s.rel) || 50) + 20);
        s.rel = a,
        s.bondedThisMonth = !0,
        this.gameState.update({
            partner: s,
            mental: t.mental + 15,
            energy: t.energy - 30
        }),
        (r = (i = window.game) == null ? void 0 : i.datingSystem) != null && r.markPartnerBonded && window.game.datingSystem.markPartnerBonded();
        const n = s.orientation || s.tag || s.type || "unknown";
        if (this.gameState.updateHistory("addToArray", ["partnersMet", n]),
        s.tag === "学霸") {
            const l = this.gameState.state;
            this.gameState.update({
                semester_score: I(l.semester_score ?? 80, .2)
            }),
            this.logger(`和 ${s.name} 一起学习，本学期 GPA 提升，关系 +20。`, "log-good")
        } else if (s.tag === "富二代") {
            const l = L((5 + Math.random() * 10) * 1e3, t.region);
            this.gameState.update({
                money: this.gameState.state.money + l
            }),
            this.logger(`${s.name} 送了你 ${y(l, t.region)} 的礼物，关系 +20。`, "log-good")
        } else
            s.tag === "玩咖" ? (this.gameState.update({
                mental: this.gameState.state.mental + 10
            }),
            this.logger(`和 ${s.name} 玩得很开心，心态大幅提升，关系 +20。`, "log-good")) : this.logger(`和 ${s.name} 约会，心情变好了，关系 +20。`, "log-good");
        return !0
    }
    checkEnergy(e) {
        return this.gameState.state.energy < e ? (alert(`体力不足 (需要 ${e})`),
        !1) : !0
    }
}
class Bt {
    constructor(e) {
        this.gameState = e
    }
    log(e, t="") {
        this.gameState.addLog(e, t)
    }
    logTicker(e) {
        this.gameState.addTicker(e)
    }
}
Me();
function ve() {
    if (typeof window > "u")
        return !1;
    try {
        return new URLSearchParams(window.location.search).get("qa") === "1"
    } catch {
        return !1
    }
}
function Dt() {
    if (!ve() || typeof window > "u")
        return null;
    try {
        const o = new URLSearchParams(window.location.search);
        if ((o.get("screen") || "").toLowerCase() !== "game")
            return null;
        const t = (o.get("region") || "US").toUpperCase()
          , a = new Set(["US", "UK", "AU", "HK", "SG"]).has(t) ? t : "US"
          , n = (o.get("phoneSub") || "hub").toLowerCase();
        return {
            region: a,
            phoneSub: new Set(["hub", "guide", "action-guide", "map", "housing", "shop", "hospital", "stocks", "social", "dating", "contacts", "resume", "linkedin", "my"]).has(n) ? n : "hub",
            name: o.get("name") || "Player"
        }
    } catch {
        return null
    }
}
class Ut {
    constructor() {
        this.gameState = new kt,
        this.logger = new Bt(this.gameState),
        this.modal = new We,
        window.modalInstance = this.modal,
        this.tutorialModal = new Ve(this.gameState),
        this.diseaseSystem = new qe(this.gameState,this.modal),
        this.achievementSystem = new Qe(this.gameState),
        this.globalAchievementSystem = new ze,
        this.endingSystem = new Xe(this.gameState,this.achievementSystem),
        this.endingScreen = new Ze( () => {
            this.restartRunToStartScreen()
        }
        ),
        this.saveSystem = new z(this.gameState,this.achievementSystem),
        this.relationshipSystem = new et(this.gameState, (e, t) => this.logger.log(e, t),this.modal),
        this.statisticsSystem = new tt(this.gameState),
        this.settingsSystem = new st,
        this.stockSystem = new at(this.gameState),
        this.datingSystem = new nt(this.gameState,this.modal),
        this.skillTreeSystem = new it(this.gameState),
        this.housingSystem = new rt(this.gameState),
        this.missionSystem = new ot(this.gameState,this.modal,this.logger),
        window.statisticsSystem = this.statisticsSystem,
        window.settingsSystem = this.settingsSystem,
        window.stockSystem = this.stockSystem,
        window.datingSystem = this.datingSystem,
        window.skillTreeSystem = this.skillTreeSystem,
        window.housingSystem = this.housingSystem,
        window.diseaseSystem = this.diseaseSystem,
        window.missionSystem = this.missionSystem,
        this.eventSystem = new x(this.gameState, (e, t) => this.logger.log(e, t),this.modal,this.diseaseSystem),
        this.gameLoop = new Pt(this.gameState,this.eventSystem,this.logger,this.modal,e => this.handleGameOver(e),e => this.handleEndGame(e),this.relationshipSystem,this.datingSystem,this.saveSystem),
        this.academicActions = new It(this.gameState,this.logger,this.eventSystem,this.modal),
        this.lifeActions = new Gt(this.gameState,this.logger,this.diseaseSystem,this.eventSystem,this.modal),
        this.socialActions = new Ot(this.gameState, (e, t) => this.logger.log(e, t)),
        this.introOverlay = new lt(this.gameState,this.settingsSystem),
        this.startScreen = new ct(this.gameState, (e, t, s, a, n) => this.beginIntroSequence(e, t, s, a, n), () => this.loadAutoSaveGame(), () => this.openStartSettings()),
        this.gameScreen = new mt(this.gameState),
        this.tabRenderer = new ht(this.gameState,this.gameScreen,this.gameLoop),
        this.achievementScreen = new gt(this.gameState,this.achievementSystem),
        this.statisticsScreen = new ut(this.statisticsSystem),
        this.settingsScreen = new dt(this.settingsSystem),
        this.stockScreen = new yt(this.stockSystem),
        this.datingScreen = new ft(this.datingSystem),
        this.skillTreeScreen = new pt(this.skillTreeSystem),
        this.housingScreen = new St(this.housingSystem),
        this.tutorialDriverSystem = new wt(this),
        this._disposePhoneMobileFloat = null,
        this._scrollRestoreSnapshot = null,
        this.gameState.addListener( () => this.onStateChange()),
        this.init()
    }
    init() {
        const e = document.getElementById("app");
        if (!e) {
            console.error("app element not found!");
            return
        }
        this.startScreen.render(e);
        const t = Dt();
        t && (this.startGame(t.region, "straight", "male", "CS", {
            playerName: t.name,
            deferEntry: !0
        }),
        this.goToGameScreen(),
        this.applyNavigation("phone", t.phoneSub, {
            push: !1
        }))
    }
    beginIntroSequence(e, t, s, a, n={}) {
        this.introOverlay.show({
            draft: {
                region: e,
                countryId: (n == null ? void 0 : n.countryId) || this.gameState.get("countryId") || le(e || "US"),
                orientation: t,
                playerGender: s,
                major: a,
                playerName: (n == null ? void 0 : n.playerName) || this.gameState.get("playerName") || "Player"
            },
            onComplete: i => {
                this.gameState.reset(),
                this.startGame(i.region, i.orientation, i.playerGender, i.major, {
                    countryId: i.countryId,
                    playerName: i.playerName,
                    deferEntry: !0
                }),
                this.goToGameScreen()
            }
            ,
            onAbort: () => this.goToStartScreen()
        })
    }
    startGame(e, t, s, a, n={}) {
        const i = s === "female" ? "female" : "male"
          , r = a && vt.includes(a) ? a : "CS"
          , l = n.countryId || this.gameState.get("countryId") || le(e || "US")
          , c = e || Mt(l)
          , m = this.gameState.state.current_job
          , u = m && typeof m == "object" ? {
            ...m,
            major: r
        } : m;
        this.gameState.update({
            region: c,
            countryId: l,
            orientation: t,
            playerGender: i,
            playerName: String(n.playerName || this.gameState.get("playerName") || "Player").trim() || "Player",
            major: r,
            ...u ? {
                current_job: u
            } : {},
            _economyVersion: d.ECONOMY_VERSION
        });
        const h = L(d.PARENT_SUPPORT_RMB, c)
          , g = L(d.STARTING_LIQUIDITY_RMB, c);
        this.gameState.set("money", h + g),
        window.housingSystem && window.housingSystem.reset(),
        window.stockSystem && (typeof window.stockSystem.resetPortfolioForNewRun == "function" && window.stockSystem.resetPortfolioForNewRun(),
        typeof window.stockSystem.syncPricesFromRegion == "function" && window.stockSystem.syncPricesFromRegion());
        const p = y(h, c);
        this.gameState.addTicker(`[银行] 父母汇入 ¥${d.PARENT_SUPPORT_RMB.toLocaleString("en-US")}，按汇率已兑换为 ${p}` + (g ? `；另有积蓄 ${y(g, c)}` : "")),
        n.deferEntry || this.goToGameScreen()
    }
    loadAutoSaveGame() {
        this.saveSystem.loadSeamlessAutoSave() ? (window.hasAutoSave = !0,
        this.goToGameScreen(),
        this.logger.log("已读取自动存档", "log-good")) : alert("读取自动存档失败！")
    }
    openStartSettings() {
        const e = document.getElementById("app");
        if (!e)
            return;
        this.closeStartSettings();
        const t = document.createElement("div");
        t.className = "start-settings-overlay",
        t.innerHTML = `
            <div class="start-settings-overlay__backdrop" data-action="close-start-settings"></div>
            <div class="start-settings-overlay__sheet" role="dialog" aria-modal="true" aria-label="游戏设置">
                <div class="start-settings-overlay__header">
                    <div>
                        <span class="start-settings-overlay__eyebrow">SYSTEM SETTINGS</span>
                        <h2>游戏设置</h2>
                    </div>
                    <button type="button" class="start-settings-overlay__close" data-action="close-start-settings" aria-label="关闭设置">
                        <span class="material-symbols-outlined">close</span>
                    </button>
                </div>
                <div id="start-settings-overlay-body" class="start-settings-overlay__body"></div>
            </div>
        `,
        e.appendChild(t),
        this.settingsScreen.render(t.querySelector("#start-settings-overlay-body")),
        t.querySelectorAll('[data-action="close-start-settings"]').forEach(s => {
            s.addEventListener("click", () => this.closeStartSettings())
        }
        ),
        this.startSettingsOverlay = t
    }
    closeStartSettings() {
        var e;
        (e = this.startSettingsOverlay) != null && e.parentNode && this.startSettingsOverlay.parentNode.removeChild(this.startSettingsOverlay),
        this.startSettingsOverlay = null
    }
    goToGameScreen() {
        var l, c, m, u;
        this.closeStartSettings();
        const e = ((c = (l = this.tutorialDriverSystem) == null ? void 0 : l.shouldAutoStart) == null ? void 0 : c.call(l)) === !0;
        typeof window < "u" && (window.__IMMERSIVE_TUTORIAL_ACTIVE__ = e);
        const t = document.getElementById("app")
          , s = document.getElementById("start-screen");
        s && (s.style.display = "none",
        console.log("start-screen hidden")),
        this.gameScreen.render(t);
        const a = document.getElementById("game-screen");
        if (a) {
            a.style.display = "flex";
            const h = document.getElementById("btn-back-home");
            h && (h.onclick = () => this.goToStartScreen());
            const g = document.getElementById("top-home-btn");
            g && (g.onclick = () => this.goToStartScreen());
            const p = document.getElementById("top-achievement-btn");
            p && (p.onclick = () => {
                this.navigateSub("phone", "my"),
                this.openMyInner("codex")
            }
            );
            const f = document.getElementById("top-settings-btn");
            f && (f.onclick = () => {
                this.navigateSub("phone", "my"),
                this.openMyInner("settings")
            }
            )
        }
        typeof this._disposePhoneMobileFloat == "function" && this._disposePhoneMobileFloat(),
        this._disposePhoneMobileFloat = bt();
        const n = this.gameState.getRegionConfig();
        if (!n) {
            console.error("regionConfig is null!");
            return
        }
        const i = this.gameState.get("region");
        this.logger.log("欢迎来到 " + n.name + "。当前余额 " + y(this.gameState.get("money"), i) + "。"),
        this.logger.log("注意：每年 " + d.tuitionMonth + " 月需缴纳当年学费 " + y(n.tuitionLocal || 0, i) + "！", "log-event"),
        this.gameScreen.tabRenderer = this.tabRenderer,
        this.refreshUI(),
        _t(),
        this.eventSystem.loadNarrativeEvents();
        const r = this.gameState.state;
        !r.tutorialFirstMonthGreenLogDone && r.year === 1 && r.month === 9 && r.monthTotal === 1 && (this.logger.log("初来乍到，建议本月先点【卷GPA】适应一下节奏，然后点击【结束本月】看看会发生什么。", "log-good"),
        this.gameState.update({
            tutorialFirstMonthGreenLogDone: !0
        })),
        (u = (m = this.tutorialDriverSystem) == null ? void 0 : m.maybeStartAfterGameScreen) == null || u.call(m)
    }
    openGuideFromHub() {
        this.navigateSub("phone", "guide")
    }
    openGuideModal() {
        this.tutorialModal.show({
            mode: "app"
        })
    }
    startImmersiveTutorial() {
        var e, t;
        (t = (e = this.tutorialDriverSystem) == null ? void 0 : e.replayTour) == null || t.call(e)
    }
    goToStartScreen() {
        this.closeStartSettings(),
        typeof this._disposePhoneMobileFloat == "function" && (this._disposePhoneMobileFloat(),
        this._disposePhoneMobileFloat = null),
        typeof document < "u" && document.body.classList.remove("phone-mobile-expanded");
        const e = document.getElementById("app")
          , t = document.getElementById("game-screen");
        if (t && (t.style.display = "none"),
        e && this.startScreen)
            this.startScreen.render(e);
        else {
            window.hasAutoSave = z.detectHasSeamlessAutoSave();
            const s = document.getElementById("start-screen");
            s && (s.style.display = "flex")
        }
    }
    applyNavigation(e, t, {push: s=!1}={}) {
        const a = this.gameScreen
          , n = t;
        if (e === "daily") {
            a.centerMain = "daily",
            a.centerSub = n || "home",
            this.tabRenderer.renderFull(a);
            return
        }
        if (e === "city") {
            s && a.pushPhoneRoute(),
            a.phoneMain = "phone",
            a.phoneSub = n || "housing",
            a.centerMain = "daily",
            a.centerSub = "home",
            this.tabRenderer.renderFull(a);
            return
        }
        if (e === "phone") {
            if (n === "hub" || n === null || n === void 0 ? a.phoneHome() : (s && a.pushPhoneRoute(),
            a.phoneMain = "phone",
            a.phoneSub = n),
            a.phoneSub === "social") {
                const i = Array.isArray(this.gameState.state.socialFeed) ? this.gameState.state.socialFeed.length : 0;
                this.gameState.update({
                    socialSeenCount: i
                })
            }
            this.tabRenderer.renderFull(a);
            return
        }
        if (e === "profile") {
            s && a.pushPhoneRoute(),
            a.phoneMain = "profile",
            a.phoneSub = n || "settings",
            this.tabRenderer.renderFull(a);
            return
        }
        a.centerMain = "daily",
        a.centerSub = "home",
        this.tabRenderer.renderFull(a)
    }
    navigateSub(e, t) {
        S(),
        this.applyNavigation(e, t, {
            push: !0
        })
    }
    navigateLinkedInTab(e) {
        S();
        const t = e === "market" ? "market" : "profile";
        this.gameScreen.linkedinTab = t,
        this.refreshUI()
    }
    phoneBack() {
        this.gameScreen.phoneBack(),
        this.tabRenderer.renderFull(this.gameScreen)
    }
    phoneHomeOrCollapseMobile() {
        var e;
        if (S(),
        ce()) {
            if (((e = this.gameScreen) == null ? void 0 : e.phoneSub) === "hub") {
                me();
                return
            }
            this.applyNavigation("phone", "hub", {
                push: !1
            });
            return
        }
        this.applyNavigation("phone", "hub", {
            push: !1
        })
    }
    phoneBackOrCollapseMobile() {
        var e;
        if (S(),
        ce() && ((e = this.gameScreen) == null ? void 0 : e.phoneSub) === "hub") {
            me();
            return
        }
        this.phoneBack()
    }
    _pickScrollableInside(e, t=[]) {
        if (!e)
            return {
                selector: "",
                top: 0
            };
        for (const s of t) {
            const a = e.querySelectorAll(s);
            for (const n of a)
                if (n && !(n.scrollHeight <= n.clientHeight + 1) && n.offsetParent !== null)
                    return {
                        selector: s,
                        top: n.scrollTop || 0
                    }
        }
        return {
            selector: "",
            top: 0
        }
    }
    _captureScrollSnapshot() {
        var n, i, r, l;
        const e = document.getElementById("phone-panel-inner")
          , t = document.getElementById("log-list")
          , s = [".stock-rh-scroll", ".shop-flow-scroll", ".shop-flow-screen", ".phone-feed-scroll", ".hospital-app-body", ".resume-scroll", ".linkedin-market-scroll", ".phone-screen-scroll", ".feed-container"]
          , a = this._pickScrollableInside(e, s);
        return {
            centerRoute: `${((n = this.gameScreen) == null ? void 0 : n.centerMain) || ""}:${((i = this.gameScreen) == null ? void 0 : i.centerSub) || ""}`,
            phoneRoute: `${((r = this.gameScreen) == null ? void 0 : r.phoneMain) || ""}:${((l = this.gameScreen) == null ? void 0 : l.phoneSub) || ""}`,
            phoneScrollSelector: a.selector,
            phoneScrollTop: a.top,
            logScrollTop: (t == null ? void 0 : t.scrollTop) || 0
        }
    }
    _restoreScrollSnapshot(e) {
        var n, i, r, l;
        if (!e)
            return;
        const t = `${((n = this.gameScreen) == null ? void 0 : n.centerMain) || ""}:${((i = this.gameScreen) == null ? void 0 : i.centerSub) || ""}`
          , s = `${((r = this.gameScreen) == null ? void 0 : r.phoneMain) || ""}:${((l = this.gameScreen) == null ? void 0 : l.phoneSub) || ""}`;
        if (e.centerRoute !== t || e.phoneRoute !== s)
            return;
        const a = document.getElementById("log-list");
        if (a && (a.scrollTop = e.logScrollTop || 0),
        e.phoneScrollSelector) {
            const c = document.getElementById("phone-panel-inner")
              , m = c == null ? void 0 : c.querySelector(e.phoneScrollSelector);
            m && m.scrollHeight > m.clientHeight + 1 && (m.scrollTop = e.phoneScrollTop || 0)
        }
    }
    refreshUI({preserveScroll: e=!0}={}) {
        const t = e ? this._captureScrollSnapshot() : null;
        this.tabRenderer && typeof this.tabRenderer.renderFull == "function" ? this.tabRenderer.renderFull(this.gameScreen) : this.gameScreen.updateUI(),
        t && requestAnimationFrame( () => this._restoreScrollSnapshot(t))
    }
    setCurrentYearTaskIndex(e) {
        var a, n;
        const t = Math.max(1, Math.min(4, Number((n = (a = this.gameState) == null ? void 0 : a.state) == null ? void 0 : n.year) || 1));
        (!this.gameScreen.currentTaskIndexByYear || typeof this.gameScreen.currentTaskIndexByYear != "object") && (this.gameScreen.currentTaskIndexByYear = {
            1: 0,
            2: 0,
            3: 0,
            4: 0
        });
        const s = Math.max(0, Number(e) || 0);
        this.gameScreen.currentTaskIndexByYear[t] = s,
        this.refreshUI()
    }
    openMyInner(e) {
        S(),
        this.gameScreen.myInnerSub = e === "settings" ? "settings" : "codex",
        this.refreshUI()
    }
    onStateChange() {
        var t, s;
        (s = (t = this.missionSystem) == null ? void 0 : t.evaluateAndSync) == null || s.call(t);
        const e = document.getElementById("game-screen");
        e && e.style.display !== "none" && this.refreshUI()
    }
    checkAchievements() {
        const e = this.achievementSystem.checkAchievements();
        e.length > 0 && (e.forEach(t => {
            const s = t.rarity || "common"
              , a = s === "legendary" ? "传说" : s === "rare" ? "稀有" : "普通"
              , n = s === "legendary" ? "type-ach-legendary" : s === "rare" ? "type-ach-rare" : "type-ach-common"
              , i = t.rate != null ? `<div class="achievement-unlock-rate">已有 ${Number(t.rate).toFixed(1)}% 用户达成</div>` : "";
            this.modal.showCustom(`🏆 成就达成 · ${a}`, `<div class="achievement-unlock-modal">
                        <div class="achievement-unlock-name">${t.name}</div>
                        <div class="achievement-unlock-desc">${t.desc}</div>
                        ${i}
                    </div>`, [{
                text: "收下这份痛苦纪念"
            }], n),
            this.logger.logTicker("🏆 解锁成就：" + t.name)
        }
        ),
        this.achievementScreen && this.achievementScreen.refresh())
    }
    async handleGameOver(e) {
        Se(),
        we();
        const t = await this.endingSystem.generateEndingAsync()
          , s = this.endingSystem.processGlobalAchievements(this.globalAchievementSystem, t, e);
        this.modal && typeof this.modal.close == "function" && this.modal.close(),
        this.endingScreen.show({
            ending: t,
            report: t.report,
            gameOverReason: e,
            globalResult: s,
            state: this.gameState.state,
            outcome: "forced_end"
        })
    }
    _escapeEndingHtml(e) {
        return e == null ? "" : String(e).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
    }
    async handleEndGame(e) {
        const t = await this.endingSystem.generateEndingAsync()
          , s = t.report
          , a = this.endingSystem.processGlobalAchievements(this.globalAchievementSystem, t, "");
        this.modal && typeof this.modal.close == "function" && this.modal.close(),
        this.endingScreen.show({
            ending: t,
            report: s,
            gameOverReason: null,
            globalResult: a,
            state: this.gameState.state,
            outcome: e ? "graduation" : "neutral"
        })
    }
    restartRunToStartScreen() {
        this.endingScreen && this.endingScreen.hide(),
        this.modal && typeof this.modal.close == "function" && this.modal.close(),
        z.clearSeamlessAutoSave(),
        window.hasAutoSave = !1,
        this.gameState.reset(),
        this.achievementSystem.loadAchievements([]),
        this.gameScreen && (this.gameScreen.centerMain = "daily",
        this.gameScreen.centerSub = "home",
        this.gameScreen.phoneMain = "phone",
        this.gameScreen.phoneSub = "hub",
        this.gameScreen.phoneRouteStack = [],
        this.gameScreen.linkedinTab = "profile",
        this.gameScreen.myInnerSub = "codex",
        this.gameScreen.stageGoalsCollapsed = !1,
        this.gameScreen.currentTaskIndexByYear = {
            1: 0,
            2: 0,
            3: 0,
            4: 0
        }),
        this.goToStartScreen()
    }
    cleanup() {
        typeof this._disposePhoneMobileFloat == "function" && (this._disposePhoneMobileFloat(),
        this._disposePhoneMobileFloat = null),
        window.modalInstance && (window.modalInstance = null),
        window.testGraduation && (window.testGraduation = null),
        console.log("[Game] 已清理全局引用")
    }
}
ve() && (Se(),
we(),
typeof window < "u" && (window.__IMMERSIVE_TUTORIAL_ACTIVE__ = !1));
const H = new Ut;
window.game = H;
window.stockScreen = H.stockScreen;
window.openMyInner = o => H.openMyInner(o);
Object.assign(window, {
    playClick: S,
    playSuccess: Je,
    playError: v,
    playAlert: Ye,
    soundManager: He
});
window.getGamePanel = () => {
    var s;
    const o = document.getElementById("tab-panel-inner")
      , e = document.getElementById("phone-tab-panel-inner")
      , t = (s = window.game) == null ? void 0 : s.gameScreen;
    return t && (t.phoneMain === "profile" || t.phoneMain === "phone" && ["hub", "guide", "action-guide", "map", "housing", "shop", "hospital", "stocks", "social", "dating", "contacts", "resume", "linkedin", "my"].includes(t.phoneSub)) ? e : o || e
}
;
window.showStatistics = () => {
    window.game && window.game.navigateSub("profile", "settings")
}
;
window.exportSave = () => {
    const o = localStorage.getItem("study_abroad_autosave") || localStorage.getItem("studyAbroadAutosave");
    if (!o) {
        alert("没有存档可导出");
        return
    }
    const e = new Blob([o],{
        type: "application/json"
    })
      , t = URL.createObjectURL(e)
      , s = document.createElement("a");
    s.href = t,
    s.download = "study_abroad_save_" + new Date().toISOString().split("T")[0] + ".json",
    s.click(),
    URL.revokeObjectURL(t)
}
;
window.importSave = () => {
    const o = document.createElement("input");
    o.type = "file",
    o.accept = ".json",
    o.onchange = e => {
        const t = e.target.files[0];
        if (!t)
            return;
        const s = new FileReader;
        s.onload = a => {
            try {
                localStorage.setItem("study_abroad_autosave", a.target.result),
                window.hasAutoSave = !0,
                alert("存档导入成功！")
            } catch (n) {
                alert("导入失败：" + n.message)
            }
        }
        ,
        s.readAsText(t)
    }
    ,
    o.click()
}
;
window.openStockTrade = (o, e) => {
    window.game && window.game.stockScreen && window.game.stockScreen.showTradeModal(o, e)
}
;
window.meetNewPartner = () => {
    var t;
    const o = window.game;
    if (!((t = o == null ? void 0 : o.datingSystem) != null && t.modal))
        return;
    const e = o.datingSystem.meetNewPartner();
    if (!e.success) {
        o.modal.show("提示", e.error || "无法邂逅");
        return
    }
    o.modal.showCustom("💕 邂逅", e.previewHtml, [{
        text: "愿意，正式交往",
        cb: () => {
            o.gameState.updateHistory("set", ["hadPartnerEver", !0]),
            o.gameState.update({
                partner: e.partner
            }),
            o.logger.log(e.message, "log-good"),
            o.datingScreen.render(window.getGamePanel())
        }
    }, {
        text: "还是算了",
        secondary: !0,
        cb: () => {}
    }])
}
;
window.propose = () => {
    const o = window.game;
    if (!(o != null && o.datingSystem))
        return;
    const e = o.datingSystem.propose();
    e.success ? (o.gameState.updateHistory("set", ["missionProposalSuccessEver", !0]),
    alert(e.message),
    o.datingScreen.render(window.getGamePanel())) : alert(e.error)
}
;
window.planWedding = () => {
    const o = window.game;
    if (!(o != null && o.datingSystem))
        return;
    const e = o.datingSystem.planWedding();
    e.success ? (alert(e.message),
    o.datingScreen.render(window.getGamePanel())) : alert(e.error)
}
;
window.date = o => {
    if (window.game && window.game.datingSystem) {
        const e = window.game.datingSystem.date(o);
        e.success ? (alert(e.message),
        window.game.datingScreen.render(window.getGamePanel())) : alert(e.error)
    }
}
;
window.giveGift = o => {
    if (window.game && window.game.datingSystem) {
        const e = window.game.datingSystem.giveGift(o);
        e.success ? (alert(e.message),
        window.game.datingScreen.render(window.getGamePanel())) : alert(e.error)
    }
}
;
window.breakUp = () => {
    if (window.game && window.game.datingSystem && confirm("确定要分手吗？分手后心情会低落。")) {
        const o = window.game.datingSystem.breakUp();
        o.success && (alert(o.message),
        window.game.datingScreen.render(window.getGamePanel()))
    }
}
;
window.unlockSkill = (o, e) => {
    if (window.game && window.game.skillTreeSystem) {
        const t = window.game.skillTreeSystem.unlock(o, e);
        t.success ? (alert(t.message),
        window.game.skillTreeScreen.render(window.getGamePanel())) : alert(t.reason)
    }
}
;
window.rent = o => {
    var e, t;
    if (window.game && window.game.housingSystem) {
        const s = window.game.housingSystem.rent(o);
        s.success ? ((t = (e = window.game.missionSystem) == null ? void 0 : e.evaluateAndSync) == null || t.call(e),
        window.game.refreshUI(),
        alert(s.message),
        window.game.housingScreen.render(window.getGamePanel())) : alert(s.error)
    }
}
;
window.moveOut = () => {
    var o, e;
    if (window.game && window.game.housingSystem && confirm("确定要退租吗？退租后需要重新找房。")) {
        const t = window.game.housingSystem.moveOut();
        t.success && ((e = (o = window.game.missionSystem) == null ? void 0 : o.evaluateAndSync) == null || e.call(o),
        window.game.refreshUI(),
        alert(t.message),
        window.game.housingScreen.render(window.getGamePanel()))
    }
}
;
function b() {
    var e, t, s;
    const o = (s = (t = (e = window.game) == null ? void 0 : e.gameState) == null ? void 0 : t.state) == null ? void 0 : s.mental;
    return o == null || o > 0
}
window.gameActions = {
    study: () => {
        if (S(),
        !b()) {
            v();
            return
        }
        window.game && window.game.academicActions && window.game.academicActions.study()
    }
    ,
    academicHomework: () => {
        var o, e, t;
        if (S(),
        !b()) {
            v();
            return
        }
        (t = (e = (o = window.game) == null ? void 0 : o.academicActions) == null ? void 0 : e.homeworkDue) == null || t.call(e)
    }
    ,
    academicPre: () => {
        var o, e, t;
        if (S(),
        !b()) {
            v();
            return
        }
        (t = (e = (o = window.game) == null ? void 0 : o.academicActions) == null ? void 0 : e.prepPre) == null || t.call(e)
    }
    ,
    academicQuiz: () => {
        var o, e, t;
        if (S(),
        !b()) {
            v();
            return
        }
        (t = (e = (o = window.game) == null ? void 0 : o.academicActions) == null ? void 0 : e.takeQuiz) == null || t.call(e)
    }
    ,
    academicCram: () => {
        var o, e, t;
        if (S(),
        !b()) {
            v();
            return
        }
        (t = (e = (o = window.game) == null ? void 0 : o.academicActions) == null ? void 0 : e.libraryCram) == null || t.call(e)
    }
    ,
    academicReview: () => {
        var o, e, t;
        if (S(),
        !b()) {
            v();
            return
        }
        (t = (e = (o = window.game) == null ? void 0 : o.academicActions) == null ? void 0 : e.normalReview) == null || t.call(e)
    }
    ,
    internship: () => {
        var o, e, t;
        if (S(),
        !b()) {
            v();
            return
        }
        (t = (e = (o = window.game) == null ? void 0 : o.academicActions) == null ? void 0 : e.internship) == null || t.call(e)
    }
    ,
    research: () => {
        if (S(),
        !b()) {
            v();
            return
        }
        window.game && window.game.academicActions && window.game.academicActions.research()
    }
    ,
    slack: () => {
        if (S(),
        !b()) {
            v();
            return
        }
        window.game && window.game.academicActions && window.game.academicActions.slack()
    }
    ,
    work: o => {
        if (S(),
        !b()) {
            v();
            return
        }
        window.game && window.game.academicActions && window.game.academicActions.work(o)
    }
    ,
    workCurrentJob: () => {
        var o, e;
        if (S(),
        !b()) {
            v();
            return
        }
        (e = (o = window.game) == null ? void 0 : o.academicActions) != null && e.workCurrentJob && window.game.academicActions.workCurrentJob()
    }
    ,
    applyForJob: o => {
        var t;
        S();
        const e = window.game;
        (t = e == null ? void 0 : e.academicActions) != null && t.applyForJob && e.academicActions.applyForJob(o) && e.refreshUI()
    }
    ,
    linkedInRequestRaise: () => {
        S();
        const o = window.game;
        if (!(o != null && o.gameState))
            return;
        const e = o.gameState.state
          , t = e.current_job;
        if (!(t != null && t.workTypeId)) {
            alert("无有效在职岗位，请打开手机「领英」投递职位。");
            return
        }
        if ((t.proficiency ?? 0) < 50) {
            alert("岗位熟练度需 ≥ 50 才能申请加薪。");
            return
        }
        if (t.raiseUsed) {
            alert("该岗位已申请过加薪，每个岗位仅可加薪一次。");
            return
        }
        const a = (t.raiseMultiplier || 1) * 1.15
          , n = e.region === "HKSG" ? "HK" : e.region
          , i = t.salaryBaseLocal != null && t.salaryBaseLocal > 0 ? t.salaryBaseLocal : ee(t.workTypeId, n, {
            major: t.major || e.major,
            jobLevel: t.jobLevel
        })
          , r = Math.floor(i * a);
        o.gameState.update({
            current_job: {
                ...t,
                raiseMultiplier: a,
                raiseUsed: !0,
                salaryBaseLocal: i,
                salary: r
            }
        }),
        o.gameState.updateHistory("set", ["missionRaiseAppliedEver", !0]),
        o.logger.log("📈 加薪已通过：底薪上调 15%。", "log-good"),
        o.refreshUI()
    }
    ,
    linkedInRequestPromotion: () => {
        S();
        const o = window.game;
        if (!(o != null && o.gameState))
            return;
        const e = o.gameState.state
          , t = e.current_job;
        if (!(t != null && t.workTypeId)) {
            alert("无有效在职岗位，请打开手机「领英」投递职位。");
            return
        }
        if ((t.proficiency ?? 0) < 80) {
            alert("岗位熟练度需 ≥ 80 才能申请晋升。");
            return
        }
        const a = Math.min(4, Math.max(1, Math.floor(t.jobLevel || 1)));
        if (a >= 4) {
            alert("已达到最高职级。");
            return
        }
        const n = a + 1
          , i = e.region === "HKSG" ? "HK" : e.region
          , r = ee(t.workTypeId, i, {
            major: t.major || e.major,
            jobLevel: n
        })
          , l = Math.floor(r);
        o.gameState.update({
            current_job: {
                ...t,
                jobLevel: n,
                raiseMultiplier: 1,
                salaryBaseLocal: r,
                salary: l,
                positionTitle: pe(t.workTypeId, n)
            }
        }),
        o.logger.log(`🚀 晋升成功：职级 Lv.${n}，薪资已按新职级重算。`, "log-good"),
        o.refreshUI()
    }
    ,
    party: () => {
        if (S(),
        !b()) {
            v();
            return
        }
        window.game && window.game.lifeActions && window.game.lifeActions.party()
    }
    ,
    travel: () => {
        if (S(),
        !b()) {
            v();
            return
        }
        window.game && window.game.lifeActions && window.game.lifeActions.travel()
    }
    ,
    gym: () => {
        if (S(),
        !b()) {
            v();
            return
        }
        window.game && window.game.lifeActions && window.game.lifeActions.gym()
    }
    ,
    game: () => {
        if (S(),
        !b()) {
            v();
            return
        }
        window.game && window.game.lifeActions && window.game.lifeActions.playGame()
    }
    ,
    focusTask: o => {
        var n, i, r;
        S();
        const e = window.game;
        if (!e || !o)
            return;
        const t = (i = (n = e.missionSystem) == null ? void 0 : n.getChecklistForCurrentYear) == null ? void 0 : i.call(n)
          , a = (Array.isArray(t == null ? void 0 : t.items) ? t.items : []).findIndex(l => String(l.id) === String(o));
        a >= 0 && ((r = e.setCurrentYearTaskIndex) == null || r.call(e, a))
    }
    ,
    switchCurrentYearTask: o => {
        var t;
        S();
        const e = window.game;
        e && ((t = e.setCurrentYearTaskIndex) == null || t.call(e, o))
    }
    ,
    buy: o => {
        S(),
        window.game && window.game.lifeActions && window.game.lifeActions.buyItem(o)
    }
};
window.testGraduation = () => H.handleEndGame(!0);
