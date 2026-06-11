const __vite__mapDeps = (i, m=__vite__mapDeps, d=(m.f || (m.f = ["./mount-B7iPV4Lx.js", "./vendor-qLuxF4mg.js", "./vendor-three-3KIZMzaY.js", "./vendor-r3f-CTrBJpCb.js", "./vendor-globe-BM2FFxQI.js", "./vendor-three-extras-D6ucPEdO.js", "./vendor-drei-DuvdXHQS.js", "./vendor-driver-nkxtR9G_.js", "./vendor-driver-CrzEKIjI.css", "./mount-ZKMm2XPw.css"]))) => i.map(i => d[i]);
var Cs = Object.defineProperty;
var Rs = (i, e, t) => e in i ? Cs(i, e, {
    enumerable: !0,
    configurable: !0,
    writable: !0,
    value: t
}) : i[e] = t;
var Te = (i, e, t) => Rs(i, typeof e != "symbol" ? e + "" : e, t);
import {b as Be} from "./vendor-driver-nkxtR9G_.js";
const te = {
    PARENT_SUPPORT_RMB: 39e4,
    STARTING_LIQUIDITY_RMB: 8e4,
    tuitionMonth: 11,
    gpaDecayBase: .02,
    maxMonths: 48,
    maxDebtMonths: 3,
    eventProbability: .9,
    actionLinkedEventProbability: .35,
    initialEnergy: 100,
    initialGPA: 3,
    initialMental: 100,
    initialHealth: 100,
    maxStat: 100,
    minGPA: 2,
    maxLogs: 50,
    maxFeedPosts: 80,
    maxTickerMessages: 10,
    ECONOMY_VERSION: 2
}
  , ut = 7.2
  , I = {
    US: {
        name: "🇺🇸 美国",
        startFlag: "🇺🇸",
        startTitle: "美国 US",
        startTag: "高薪 · 枪击",
        desc: `【高风险高回报】
⚠️ 风险：枪击、天价医疗
✅ 优势：兼职收入高，地广人稀`,
        events: ["gunshot", "bill"],
        currencyName: "USD",
        symbol: "$",
        rateToRMB: 7.2,
        tuitionLocal: 43e3,
        rentLocal: {
            low: 800,
            mid: 1500,
            high: 3e3
        },
        livingCostLocal: 1200,
        feature: "兼职收入高，但医疗费用昂贵",
        jobs: {
            dish: 1200,
            tutor: 1800,
            ta: 1600,
            tech: 4500
        },
        maxMonths: 48
    },
    UK: {
        name: "🇬🇧 英国",
        startFlag: "🇬🇧",
        startTitle: "英国 UK",
        startTag: "三年制 · SAD",
        desc: `【腐国深造】
⚠️ 风险：性取向改变
✅ 优势：本科三年制（与游戏内 36 个月一致），文化底蕴`,
        events: ["rain", "gay_moment"],
        currencyName: "GBP",
        symbol: "£",
        rateToRMB: 9,
        tuitionLocal: 29500,
        rentLocal: {
            low: 900,
            mid: 1400,
            high: 2300
        },
        livingCostLocal: 1050,
        feature: "伦敦房租极高，其他城市相对便宜",
        jobs: {
            dish: 850,
            tutor: 1200,
            ta: 1400,
            tech: 3e3
        },
        maxMonths: 36
    },
    AU: {
        name: "🇦🇺 澳洲",
        startFlag: "🇦🇺",
        startTitle: "澳洲 AU",
        startTag: "三年制 · 宜居",
        desc: `【土澳生存】
⚠️ 风险：Teenager 袭击
✅ 优势：体力活收入高，饿不死`,
        events: ["teenager", "kangaroo"],
        currencyName: "AUD",
        symbol: "A$",
        rateToRMB: 4.8,
        tuitionLocal: 62e3,
        rentLocal: {
            low: 1300,
            mid: 1900,
            high: 2800
        },
        livingCostLocal: 1500,
        feature: "悉尼墨尔本较贵，生活质量高",
        jobs: {
            dish: 1800,
            tutor: 2400,
            ta: 3e3,
            tech: 5500
        },
        maxMonths: 36
    },
    HK: {
        name: "🇭🇰 香港",
        startFlag: "🇭🇰",
        startTitle: "香港 HK",
        startTag: "房租刺客",
        desc: `【卷王地狱】
⚠️ 风险：高压、空间小
✅ 优势：离家近，美食多`,
        events: ["stress", "rent_hike"],
        currencyName: "HKD",
        symbol: "HK$",
        rateToRMB: .9,
        tuitionLocal: 26e4,
        rentLocal: {
            low: 10500,
            mid: 15500,
            high: 27500
        },
        livingCostLocal: 11500,
        initialMental: 80,
        feature: "世界房租最高，居住空间极小",
        jobs: {
            dish: 4e3,
            tutor: 12e3,
            ta: 18e3,
            tech: 25e3
        },
        maxMonths: 48
    },
    SG: {
        name: "🇸🇬 新加坡",
        startFlag: "🇸🇬",
        startTitle: "新加坡 SG",
        startTag: "花园城 · 卷",
        desc: `【花园城市】
⚠️ 风险：房租高，压力大
✅ 优势：安全，干净，离家近`,
        events: ["stress", "competition"],
        currencyName: "SGD",
        symbol: "S$",
        rateToRMB: 5.4,
        tuitionLocal: 52e3,
        rentLocal: {
            low: 1300,
            mid: 1900,
            high: 3100
        },
        livingCostLocal: 1600,
        initialMental: 85,
        feature: "房租高但质量好，组屋性价比高",
        jobs: {
            dish: 800,
            tutor: 2400,
            ta: 1500,
            tech: 3500
        },
        maxMonths: 48
    }
};
function Fe(i) {
    const t = I[i === "HKSG" ? "HK" : i];
    return (t == null ? void 0 : t.maxMonths) ?? 48
}
const ka = {
    dishwash: "dish",
    tutor: "tutor",
    ta: "ta",
    big_intern: "tech"
};
function Sa(i) {
    const e = I[i];
    return e != null && e.rentLocal ? e.rentLocal.low : 800
}
function xa(i) {
    const e = I[i];
    return e ? e.livingCostLocal ?? 1e3 : 1e3
}
function $t(i) {
    const e = I[i];
    return e ? e.tuitionLocal ?? 45e3 : 45e3
}
function w(i, e) {
    const s = (I[e] || I.US).symbol
      , n = Math.round(Number(i));
    if (Number.isNaN(n))
        return `${s}0`;
    const a = Math.abs(n)
      , o = n < 0;
    if (a < 1e4)
        return `${o ? "-" : ""}${s}${a.toLocaleString("en-US")}`;
    const r = a / 1e3;
    return `${o ? "-" : ""}${s}${r.toFixed(1)}k`
}
function Ta(i, e) {
    var s;
    const t = ((s = I[e]) == null ? void 0 : s.rateToRMB) ?? ut;
    return Math.round(i * ut / t)
}
function A(i, e) {
    var n;
    const t = ((n = I[e]) == null ? void 0 : n.rateToRMB) ?? ut
      , s = Number(i);
    return Number.isNaN(s) ? 0 : s >= 0 ? Math.floor(s / t) : -Math.floor(-s / t)
}
function st(i, e) {
    return A(i * 1e3, e)
}
function $a(i) {
    return A(te.PARENT_SUPPORT_RMB, i)
}
function ke(i, e, t=2) {
    const n = (I[e] || I.US).symbol
      , a = Number(i);
    return Number.isNaN(a) ? `${n}0` : `${n}${a.toLocaleString("en-US", {
        minimumFractionDigits: t,
        maximumFractionDigits: t
    })}`
}
function Ns(i, e, t) {
    const n = (I[t === "HKSG" ? "HK" : t] || I.US).symbol
      , a = l => {
        const c = Math.round(Number(l));
        if (Number.isNaN(c))
            return `${n}0`;
        const d = c / 1e3;
        return Math.abs(c) >= 1e3 ? `${n}${d.toFixed(1)}k` : `${n}${c.toLocaleString("en-US")}`
    }
      , o = Math.round(Number(i))
      , r = Math.round(Number(e));
    return Number.isFinite(o) && Number.isFinite(r) && o === r ? `${a(o)}/月` : `${a(i)} - ${a(e)}/月`
}
const Yt = 30
  , Is = .15
  , Wt = {
    "婕敾_collection": "漫画_collection"
}
  , Pe = {
    coffee_machine: {
        id: "coffee_machine",
        name: "咖啡续命套装",
        basePriceRMB: 18e3,
        icon: "☕",
        category: "study",
        desc: "咖啡机、胶囊和保温杯一整套，学业行动体力消耗 -2",
        effect: "study_cost_reduction",
        balanceTier: "route",
        paybackMonths: 14,
        powerBudget: 2,
        effectPayload: {
            academicEnergyReduction: 2
        },
        effectSummary: "学业行动体力消耗减少 2",
        effectTags: ["学业体力 -2", "不加 GPA"],
        monthlyEffect: "无自动收益，学业行动时生效",
        upkeep: "无维护费"
    },
    textbook: {
        id: "textbook",
        name: "二手教材资料包",
        basePriceRMB: 3e4,
        icon: "📚",
        category: "study",
        desc: "教材、题库和往年笔记打包，月度本学期分数自然衰减少 1 点",
        effect: "gpa_decay_reduction",
        balanceTier: "route",
        paybackMonths: 18,
        powerBudget: 2,
        effectPayload: {
            semesterDecayReduction: 1
        },
        effectSummary: "月度本学期分数自然衰减少 1",
        effectTags: ["月衰减 -1", "长期保分"],
        monthlyEffect: "每月 GPA 自然滑坡减少 1 点",
        upkeep: "无维护费"
    },
    laptop: {
        id: "laptop",
        name: "科研工作站",
        basePriceRMB: 9e4,
        icon: "💻",
        category: "study",
        desc: "电脑、外设和云算力预算，科研体力 -4，熟练 +1",
        effect: "research_boost",
        balanceTier: "route",
        paybackMonths: 20,
        powerBudget: 4,
        effectPayload: {
            researchEnergyReduction: 4,
            researchProficiencyBonus: 1
        },
        effectSummary: "科研体力 -4，熟练 +1",
        effectTags: ["科研体力 -4", "科研熟练 +1"],
        monthlyEffect: "无自动收益，科研行动时生效",
        upkeep: "无维护费"
    },
    table_lamp: {
        id: "table_lamp",
        name: "护眼台灯",
        basePriceRMB: 8e3,
        icon: "💡",
        category: "study",
        desc: "终于不用在顶灯阴影里写作业，普通学习类行动本学期分数 +1",
        effect: "study_efficiency_bonus",
        balanceTier: "survival",
        paybackMonths: 10,
        powerBudget: 1,
        effectPayload: {
            normalStudyScoreBonus: 1
        },
        effectSummary: "普通学习类行动本学期分数 +1",
        effectTags: ["普通学习 +1"],
        monthlyEffect: "无自动收益，通宵复习不生效",
        upkeep: "无维护费"
    },
    study_desk: {
        id: "study_desk",
        name: "人体工学学习角",
        basePriceRMB: 24e3,
        icon: "🪑",
        category: "study",
        desc: "升降桌、椅子和收纳一套，学习类行动体力消耗 -1",
        effect: "study_energy_reduction",
        balanceTier: "survival",
        paybackMonths: 16,
        powerBudget: 1,
        effectPayload: {
            academicEnergyReduction: 1
        },
        effectSummary: "学习类行动体力消耗减少 1",
        effectTags: ["学习体力 -1"],
        monthlyEffect: "无自动收益，学习行动时生效",
        upkeep: "无维护费"
    },
    study_software: {
        id: "study_software",
        name: "学术软件年订阅",
        basePriceRMB: 36e3,
        monthlyUpkeepRMB: 1200,
        icon: "📫",
        category: "study",
        desc: "文献管理、语法检查和云同步，维护 ¥1,200/月，月度分数自然衰减少 1 点",
        effect: "gpa_decay_bonus",
        balanceTier: "route",
        paybackMonths: 18,
        powerBudget: 2,
        effectPayload: {
            semesterDecayReduction: 1
        },
        effectSummary: "维护 ¥1,200/月，月度分数衰减少 1",
        effectTags: ["月衰减 -1", "维护 ¥1,200/月"],
        monthlyEffect: "每月 GPA 自然滑坡减少 1 点",
        upkeep: "每月 ¥1,200"
    },
    printer: {
        id: "printer",
        name: "打印扫描套装",
        basePriceRMB: 1e4,
        icon: "🖨️",
        category: "study",
        desc: "打印、扫描、装订耗材打包，肝 Due 本学期分数 +1",
        effect: "assignment_bonus",
        balanceTier: "route",
        paybackMonths: 10,
        powerBudget: 1,
        effectPayload: {
            homeworkScoreBonus: 1
        },
        effectSummary: "肝 Due 本学期分数 +1",
        effectTags: ["肝Due +1"],
        monthlyEffect: "无自动收益，肝 Due 时生效",
        upkeep: "无维护费"
    },
    gym_membership: {
        id: "gym_membership",
        name: "校园健身年卡",
        basePriceRMB: 24e3,
        monthlyUpkeepRMB: 1500,
        icon: "💪",
        category: "life",
        desc: "年卡加私教体验课，健身现金花费 -40%，健身健康 +2",
        effect: "gym_boost",
        balanceTier: "route",
        paybackMonths: 14,
        powerBudget: 3,
        effectPayload: {
            gymCostMultiplier: .6,
            gymHealthBonus: 2
        },
        effectSummary: "健身花费 -40%，健康收益 +2",
        effectTags: ["健身花费 -40%", "健康 +2"],
        monthlyEffect: "无自动收益，健身时生效",
        upkeep: "每月 ¥1,500"
    },
    therapy: {
        id: "therapy",
        name: "心理咨询疗程",
        basePriceRMB: 65e3,
        icon: "🩺",
        category: "life",
        desc: "一组正式咨询疗程，心态上限 +12，心态上限类总加成最多 +30",
        effect: "mental_cap_boost",
        balanceTier: "luxury",
        paybackMonths: 24,
        powerBudget: 4,
        effectPayload: {
            mentalCapBonus: 12
        },
        effectSummary: "心态上限 +12，购买不回血",
        effectTags: ["心态上限 +12", "总上限 +30"],
        monthlyEffect: "无自动回复，只提高可恢复上限",
        upkeep: "无维护费"
    },
    microwave: {
        id: "microwave",
        name: "合租厨房升级",
        basePriceRMB: 8e3,
        icon: "🍔",
        category: "life",
        desc: "微波炉、锅具和保鲜盒，自己做饭后每月生活费减少 ¥300",
        effect: "living_cost_reduction",
        balanceTier: "survival",
        paybackMonths: 27,
        powerBudget: 1,
        effectPayload: {
            livingCostReductionRMB: 300
        },
        effectSummary: "每月生活费减少 ¥300",
        effectTags: ["生活费 -¥300/月"],
        monthlyEffect: "每月固定减少生活支出",
        upkeep: "无维护费"
    },
    washing_machine: {
        id: "washing_machine",
        name: "洗烘一体方案",
        basePriceRMB: 12e3,
        icon: "🧺",
        category: "life",
        desc: "洗烘设备加洗衣用品，不再深夜抱衣服排队，月结体力 +2",
        effect: "energy_recovery_bonus",
        balanceTier: "survival",
        paybackMonths: 18,
        powerBudget: 1,
        effectPayload: {
            monthlyEnergyRecovery: 2
        },
        effectSummary: "每月结算后体力 +2",
        effectTags: ["月结体力 +2"],
        monthlyEffect: "每月结算后额外恢复体力 +2",
        upkeep: "无维护费"
    },
    robot_vacuum: {
        id: "robot_vacuum",
        name: "懒人清洁方案",
        basePriceRMB: 18e3,
        icon: "🧹",
        category: "life",
        desc: "扫地机器人和清洁耗材，房间少一点灾难现场，月结心态 +1",
        effect: "mental_bonus",
        balanceTier: "survival",
        paybackMonths: 20,
        powerBudget: 1,
        effectPayload: {
            monthlyMentalRecovery: 1
        },
        effectSummary: "每月结算后心态 +1",
        effectTags: ["月结心态 +1"],
        monthlyEffect: "每月结算后心态 +1",
        upkeep: "无维护费"
    },
    air_purifier: {
        id: "air_purifier",
        name: "过敏救命套装",
        basePriceRMB: 16e3,
        icon: "🌬️",
        category: "life",
        desc: "净化器、滤芯和除湿用品，月结健康 +1",
        effect: "health_bonus",
        balanceTier: "survival",
        paybackMonths: 18,
        powerBudget: 1,
        effectPayload: {
            monthlyHealthRecovery: 1
        },
        effectSummary: "每月结算后健康 +1",
        effectTags: ["月结健康 +1"],
        monthlyEffect: "每月结算后健康 +1",
        upkeep: "无维护费"
    },
    used_car: {
        id: "used_car",
        name: "二手通勤车",
        basePriceRMB: 95e3,
        monthlyUpkeepRMB: 6e3,
        icon: "🚗",
        category: "transport",
        desc: "车、保险和基础维修预留，打工收入 +8%，维护 ¥6,000/月",
        effect: "work_income_boost",
        balanceTier: "luxury",
        paybackMonths: 28,
        powerBudget: 4,
        effectPayload: {
            workIncomeBonusPct: .08
        },
        effectSummary: "打工收入 +8%，维护 ¥6,000/月",
        effectTags: ["打工收入 +8%", "维护 ¥6,000/月"],
        monthlyEffect: "每月扣除固定养车成本",
        upkeep: "每月 ¥6,000"
    },
    bike: {
        id: "bike",
        name: "通勤自行车",
        basePriceRMB: 12e3,
        icon: "🚲",
        category: "transport",
        desc: "车、锁、灯和头盔一套，打工体力消耗 -3%",
        effect: "energy_reduction",
        balanceTier: "survival",
        paybackMonths: 14,
        powerBudget: 1,
        effectPayload: {
            workEnergyMultiplier: .97
        },
        effectSummary: "打工体力消耗减少 3%",
        effectTags: ["打工体力 -3%"],
        monthlyEffect: "无自动收益，打工行动时生效",
        upkeep: "无维护费"
    },
    tv: {
        id: "tv",
        name: "流媒体娱乐套装",
        basePriceRMB: 2e4,
        monthlyUpkeepRMB: 800,
        icon: "📺",
        category: "entertainment",
        desc: "电视、会员和游戏手柄，娱乐/躺平类行动心态收益 +1",
        effect: "entertainment_bonus",
        balanceTier: "luxury",
        paybackMonths: 18,
        powerBudget: 1,
        effectPayload: {
            entertainmentMentalBonus: 1
        },
        effectSummary: "娱乐/躺平心态收益 +1",
        effectTags: ["娱乐心态 +1", "维护 ¥800/月"],
        monthlyEffect: "无自动收益，娱乐行动时生效",
        upkeep: "每月 ¥800"
    },
    fitness_equipment: {
        id: "fitness_equipment",
        name: "居家健身套装",
        basePriceRMB: 32e3,
        icon: "🏋️",
        category: "entertainment",
        desc: "哑铃、瑜伽垫和弹力带，健身健康 +2",
        effect: "gym_effect_bonus",
        balanceTier: "route",
        paybackMonths: 16,
        powerBudget: 2,
        effectPayload: {
            gymHealthBonus: 2
        },
        effectSummary: "健身健康收益 +2",
        effectTags: ["健身健康 +2"],
        monthlyEffect: "无自动收益，健身时生效",
        upkeep: "无维护费"
    },
    漫画_collection: {
        id: "漫画_collection",
        name: "精神避难书架",
        basePriceRMB: 12e3,
        icon: "📖",
        category: "entertainment",
        desc: "漫画、轻小说和一个不被论文审判的角落，心态上限 +4",
        effect: "mental_cap_bonus",
        balanceTier: "survival",
        paybackMonths: 18,
        powerBudget: 1,
        effectPayload: {
            mentalCapBonus: 4
        },
        effectSummary: "心态上限 +4，购买不回血",
        effectTags: ["心态上限 +4", "总上限 +30"],
        monthlyEffect: "无自动回复，只提高可恢复上限",
        upkeep: "无维护费"
    },
    lucky_charm: {
        id: "lucky_charm",
        name: "好运护身包",
        basePriceRMB: 18e3,
        icon: "🍀",
        category: "special",
        desc: "护身符、备用伞和应急药包，随机事件负面影响降低 8%",
        effect: "luck_boost",
        balanceTier: "survival",
        paybackMonths: 20,
        powerBudget: 2,
        effectPayload: {
            negativeEventReductionPct: .08,
            negativeEventReductionCap: 2
        },
        effectSummary: "随机事件负面影响小幅减免",
        effectTags: ["负面事件 -8%", "单项最多 2"],
        monthlyEffect: "无固定收益，随机事件选择时生效",
        upkeep: "无维护费"
    },
    membership_card: {
        id: "membership_card",
        name: "打工通勤会员",
        basePriceRMB: 45e3,
        monthlyUpkeepRMB: 1500,
        icon: "🎟️",
        category: "special",
        desc: "通勤折扣和工时消息渠道，打工收入 +4%，与二手车合计封顶 +15%",
        effect: "work_income_bonus",
        balanceTier: "route",
        paybackMonths: 20,
        powerBudget: 2,
        effectPayload: {
            workIncomeBonusPct: .04
        },
        effectSummary: "打工收入 +4%，维护 ¥1,500/月",
        effectTags: ["打工收入 +4%", "总加成封顶 +15%"],
        monthlyEffect: "无自动收益，打工行动时生效",
        upkeep: "每月 ¥1,500"
    },
    networking_course: {
        id: "networking_course",
        name: "导师沟通训练",
        basePriceRMB: 4e4,
        icon: "🗣️",
        category: "special",
        desc: "邮件模板、Office Hour 训练和推荐信话术，导师关系月衰减从 -10 降到 -6",
        effect: "prof_relation_reduction",
        balanceTier: "route",
        paybackMonths: 18,
        powerBudget: 2,
        effectPayload: {
            profRelationshipDecayReduction: 4
        },
        effectSummary: "导师关系月衰减减少 4",
        effectTags: ["导师衰减 -4"],
        monthlyEffect: "每月导师关系自然衰减减少 4",
        upkeep: "无维护费"
    },
    time_management: {
        id: "time_management",
        name: "时间管理训练营",
        basePriceRMB: 55e3,
        icon: "⏱️",
        category: "special",
        desc: "日程系统、番茄钟和自救训练，月结体力 +3",
        effect: "energy_bonus",
        balanceTier: "luxury",
        paybackMonths: 20,
        powerBudget: 2,
        effectPayload: {
            monthlyEnergyRecovery: 3
        },
        effectSummary: "每月结算后体力 +3",
        effectTags: ["月结体力 +3"],
        monthlyEffect: "每月结算后体力额外恢复 +3",
        upkeep: "无维护费"
    }
};
function Jt(i) {
    return Array.isArray(i) ? i : Array.isArray(i == null ? void 0 : i.inventory) ? i.inventory : []
}
function q(i, e, t) {
    const s = Number(t) || 0;
    s !== 0 && (i[e] = (Number(i[e]) || 0) + s)
}
function Qe(i) {
    const e = Jt(i)
      , t = {
        academicEnergyReduction: 0,
        normalStudyScoreBonus: 0,
        homeworkScoreBonus: 0,
        researchEnergyReduction: 0,
        researchProficiencyBonus: 0,
        researchProfRelationBonus: 0,
        semesterDecayReduction: 0,
        livingCostReductionRMB: 0,
        monthlyUpkeepRMB: 0,
        monthlyEnergyRecovery: 0,
        monthlyMentalRecovery: 0,
        monthlyHealthRecovery: 0,
        workEnergyMultiplier: 1,
        workIncomeBonusPct: 0,
        gymCostMultiplier: 1,
        gymHealthBonus: 0,
        entertainmentMentalBonus: 0,
        mentalCapBonus: 0,
        negativeEventReductionPct: 0,
        negativeEventReductionCap: 0,
        profRelationshipDecayReduction: 0
    };
    for (const s of e) {
        const n = Wt[s] || s
          , a = Pe[n];
        if (!a)
            continue;
        const o = a.effectPayload || {};
        q(t, "academicEnergyReduction", o.academicEnergyReduction),
        q(t, "normalStudyScoreBonus", o.normalStudyScoreBonus),
        q(t, "homeworkScoreBonus", o.homeworkScoreBonus),
        q(t, "researchEnergyReduction", o.researchEnergyReduction),
        q(t, "researchProficiencyBonus", o.researchProficiencyBonus),
        q(t, "researchProfRelationBonus", o.researchProfRelationBonus),
        q(t, "semesterDecayReduction", o.semesterDecayReduction),
        q(t, "livingCostReductionRMB", o.livingCostReductionRMB),
        q(t, "monthlyEnergyRecovery", o.monthlyEnergyRecovery),
        q(t, "monthlyMentalRecovery", o.monthlyMentalRecovery),
        q(t, "monthlyHealthRecovery", o.monthlyHealthRecovery),
        q(t, "gymHealthBonus", o.gymHealthBonus),
        q(t, "entertainmentMentalBonus", o.entertainmentMentalBonus),
        q(t, "mentalCapBonus", o.mentalCapBonus),
        q(t, "negativeEventReductionPct", o.negativeEventReductionPct),
        q(t, "negativeEventReductionCap", o.negativeEventReductionCap),
        q(t, "profRelationshipDecayReduction", o.profRelationshipDecayReduction),
        q(t, "monthlyUpkeepRMB", a.monthlyUpkeepRMB),
        o.workEnergyMultiplier && (t.workEnergyMultiplier *= o.workEnergyMultiplier),
        o.gymCostMultiplier && (t.gymCostMultiplier *= o.gymCostMultiplier),
        q(t, "workIncomeBonusPct", o.workIncomeBonusPct)
    }
    return t.semesterDecayReduction = Math.min(3, Math.max(0, t.semesterDecayReduction)),
    t.workIncomeBonusPct = Math.min(Is, Math.max(0, t.workIncomeBonusPct)),
    t.mentalCapBonus = Math.min(Yt, Math.max(0, t.mentalCapBonus)),
    t.negativeEventReductionPct = Math.min(.1, Math.max(0, t.negativeEventReductionPct)),
    t.negativeEventReductionCap = Math.min(3, Math.max(0, t.negativeEventReductionCap)),
    t
}
function Mt(i, e) {
    if (!i || typeof i != "object")
        return i || {};
    const t = Qe(e);
    if (!t.negativeEventReductionPct || !t.negativeEventReductionCap)
        return i;
    const s = {
        ...i
    };
    for (const n of ["mental", "health", "energy"]) {
        const a = Number(s[n]);
        if (!Number.isFinite(a) || a >= 0)
            continue;
        const o = Math.min(t.negativeEventReductionCap, Math.max(1, Math.ceil(Math.abs(a) * t.negativeEventReductionPct)));
        s[n] = Math.min(0, a + o)
    }
    return s
}
function Bs(i, e) {
    const t = Pe[i];
    return t != null && t.basePriceRMB ? A(t.basePriceRMB, e) : 0
}
function Ma(i, e) {
    return A(Qe(i).monthlyUpkeepRMB, e)
}
function qs(i, e) {
    const t = Jt(i);
    return t.length ? e === "therapy" || e === "漫画_collection" ? Qt(i) >= Yt : t.some(s => (Wt[s] || s) === e) : !1
}
function Qt(i) {
    return Qe(i).mentalCapBonus
}
function Hs(i, e, t=e == null ? void 0 : e.region) {
    if (!Pe[i])
        return {
            owned: !1,
            canBuy: !1,
            capped: !1,
            affordable: !1,
            statusText: "不存在"
        };
    const n = Bs(i, t)
      , a = qs(e, i)
      , r = Number((e == null ? void 0 : e.money) ?? 0) >= n
      , l = a && (i === "therapy" || i === "漫画_collection");
    let c = "可购买";
    return l ? c = "上限已满" : a ? c = "已拥有" : r || (c = "资金不足"),
    {
        owned: a,
        canBuy: r && !a,
        capped: l,
        affordable: r,
        priceLocal: n,
        statusText: c,
        mentalCapBonus: Qt(e)
    }
}
function Xt(i) {
    var n;
    const e = i.region === "HKSG" ? "HK" : i.region
      , t = ((n = I[e]) == null ? void 0 : n.rateToRMB) ?? 7.2
      , s = Number(i.money);
    return (Number.isFinite(s) ? s : 0) * t
}
const Zt = [{
    id: "dragon",
    minRmb: 8e5,
    title: "天龙人",
    color: "#fbbf24",
    hint: "",
    glow: !0
}, {
    id: "bourgeois",
    minRmb: 3e5,
    title: "小资生活",
    color: "#c084fc",
    hint: ""
}, {
    id: "student",
    minRmb: 1e5,
    title: "普通留子",
    color: "#38bdf8",
    hint: "交完学费后通常处于此阶段"
}, {
    id: "struggler",
    minRmb: 2e4,
    title: "生存挣扎者",
    color: "#f87171",
    hint: ""
}]
  , Ue = {
    id: "refugee",
    title: "挂壁难民",
    color: "#94a3b8",
    hint: "连下个月饭钱都成问题。"
};
function Ds(i) {
    const e = Number(i)
      , t = Number.isFinite(e) ? e : 0;
    for (const s of Zt)
        if (t >= s.minRmb)
            return {
                id: s.id,
                title: s.title,
                color: s.color,
                hint: s.hint,
                glow: !!s.glow
            };
    return {
        ...Ue,
        glow: !1
    }
}
function Aa(i) {
    return Ds(Xt(i))
}
function es(i) {
    if (i === Ue.id)
        return {
            ...Ue,
            glow: !1
        };
    const e = Zt.find(t => t.id === i);
    return e ? {
        id: e.id,
        title: e.title,
        color: e.color,
        hint: e.hint,
        glow: !!e.glow
    } : {
        ...Ue,
        glow: !1
    }
}
const At = {
    1: 7e3,
    2: 12500,
    3: 24e3,
    4: 48e3
}
  , Us = {
    dishwash: 1,
    tutor: 2,
    ta: 3,
    big_intern: 4
}
  , nt = {
    CS: 1.35,
    business: 1.2,
    media: .95,
    arts: .85
}
  , Et = {
    US: 1.2,
    UK: 1,
    AU: .9,
    HK: 1,
    SG: .95
}
  , Gs = "CS";
function Os(i) {
    return i != null && Object.prototype.hasOwnProperty.call(nt, i) ? nt[i] : nt[Gs]
}
function js(i) {
    const e = i === "HKSG" ? "HK" : i;
    return e != null && Object.prototype.hasOwnProperty.call(Et, e) ? Et[e] : 1
}
function Xe(i) {
    return Us[i] ?? 1
}
function Ze(i, e, t={}) {
    const s = Xe(i)
      , n = t.jobLevel != null && t.jobLevel !== "" ? Number(t.jobLevel) : s
      , a = Math.min(4, Math.max(1, Math.floor(Number.isFinite(n) ? n : 1)))
      , o = At[a] ?? At[1]
      , r = Os(t.major)
      , l = js(e)
      , c = I[e === "HKSG" ? "HK" : e]
      , d = c == null ? void 0 : c.rateToRMB;
    if (d == null || d <= 0)
        return 0;
    const u = o * r * l / d;
    return Math.floor(u)
}
function ht(i) {
    const e = i.year || 1
      , t = i.month ?? 9;
    return !(e >= 2 || t >= 6 && t <= 8)
}
function se(i) {
    const e = i.year || 1
      , t = i.month ?? 9;
    return e >= 2 || e === 1 && t >= 6 && t <= 8
}
function me(i) {
    var e;
    return Math.min(100, Math.max(0, Math.floor(Number((e = i == null ? void 0 : i.current_job) == null ? void 0 : e.proficiency) || 0)))
}
const ts = "dish"
  , Fs = {
    dishwash: "dish",
    tutor: "tutor_private",
    ta: "ta_campus",
    big_intern: "cs_backend"
}
  , ss = {
    dish: [{
        key: "golden-wok",
        company: "金锅中餐馆",
        salaryMultiplier: .9
    }, {
        key: "lucky-bamboo",
        company: "幸运竹快餐",
        salaryMultiplier: 1
    }, {
        key: "dragon-noodle",
        company: "龙门面馆",
        salaryMultiplier: 1.08
    }],
    tutor_private: [{
        key: "math-mom",
        company: "焦虑亚裔家长群",
        salaryMultiplier: .94
    }, {
        key: "elite-family",
        company: "富人区私人家庭",
        salaryMultiplier: 1.08
    }],
    ta_campus: [{
        key: "math-dept",
        company: "数学系办公室",
        salaryMultiplier: .96
    }, {
        key: "cs-lab",
        company: "本校实验室",
        salaryMultiplier: 1.06
    }],
    cs_frontend: [{
        key: "pitchdeck-ai",
        company: "PitchDeck AI",
        salaryMultiplier: .92
    }, {
        key: "garage-saas",
        company: "Garage SaaS",
        salaryMultiplier: 1.04
    }, {
        key: "crypto-leftovers",
        company: "Web3 遗址维护组",
        salaryMultiplier: 1.12
    }],
    cs_backend: [{
        key: "bytedance",
        company: "ByteDance",
        salaryMultiplier: 1.08
    }, {
        key: "zoom",
        company: "Zoom",
        salaryMultiplier: 1
    }, {
        key: "stripe-vendor",
        company: "Stripe 外包项目组",
        salaryMultiplier: 1.12
    }],
    cs_algo: [{
        key: "google",
        company: "Google",
        salaryMultiplier: 1.1
    }, {
        key: "meta",
        company: "Meta",
        salaryMultiplier: 1.06
    }, {
        key: "openai-adjacent",
        company: "AI 独角兽邻桌",
        salaryMultiplier: 1.14
    }],
    biz_accounting: [{
        key: "chinatown-law",
        company: "华人小律所",
        salaryMultiplier: .92
    }, {
        key: "family-office",
        company: "本地 Family Office",
        salaryMultiplier: 1.08
    }],
    biz_audit: [{
        key: "kpmg",
        company: "KPMG",
        salaryMultiplier: 1
    }, {
        key: "deloitte",
        company: "Deloitte",
        salaryMultiplier: 1.05
    }, {
        key: "pwc",
        company: "PwC",
        salaryMultiplier: .98
    }],
    biz_ib: [{
        key: "goldman",
        company: "Goldman Sachs",
        salaryMultiplier: 1.1
    }, {
        key: "morgan-stanley",
        company: "Morgan Stanley",
        salaryMultiplier: 1.04
    }, {
        key: "boutique-ib",
        company: "精品投行",
        salaryMultiplier: .96
    }],
    media_ops: [{
        key: "mcn",
        company: "本地 MCN 工作室",
        salaryMultiplier: .94
    }, {
        key: "campus-media",
        company: "校园媒体项目组",
        salaryMultiplier: 1.02
    }],
    media_brand: [{
        key: "regional-brand",
        company: "区域品牌市场部",
        salaryMultiplier: 1
    }, {
        key: "streaming-team",
        company: "流媒体增长组",
        salaryMultiplier: 1.1
    }],
    media_4a: [{
        key: "ogilvy",
        company: "Ogilvy",
        salaryMultiplier: 1.04
    }, {
        key: "publicis",
        company: "Publicis",
        salaryMultiplier: 1
    }, {
        key: "burnout-agency",
        company: "不眠广告厂",
        salaryMultiplier: 1.12
    }],
    arts_gallery: [{
        key: "white-cube",
        company: "白盒子画廊",
        salaryMultiplier: .9
    }, {
        key: "warehouse-art",
        company: "仓库艺术空间",
        salaryMultiplier: 1.03
    }],
    arts_design: [{
        key: "indie-studio",
        company: "独立设计工作室",
        salaryMultiplier: .98
    }, {
        key: "ux-boutique",
        company: "UX Boutique",
        salaryMultiplier: 1.1
    }],
    arts_curator: [{
        key: "city-museum",
        company: "市立美术馆联盟",
        salaryMultiplier: 1
    }, {
        key: "private-foundation",
        company: "私人艺术基金会",
        salaryMultiplier: 1.12
    }]
};
function Ks(i) {
    const [e,t] = String(i || "").split("__");
    return {
        baseId: e,
        companyKey: t
    }
}
function ns(i, e) {
    return e ? {
        ...i,
        id: `${i.id}__${e.key}`,
        baseJobId: i.id,
        company: e.company,
        companyKey: e.key,
        salaryMultiplier: e.salaryMultiplier
    } : i
}
function as(i) {
    const e = ss[i.id];
    return !Array.isArray(e) || !e.length ? [i] : e.map(t => ns(i, t))
}
function is(i) {
    const e = i.region === "HKSG" ? "HK" : i.region;
    return e && I[e] ? e : "US"
}
function Vs(i, e) {
    const t = is(e)
      , s = i.jobLevel ?? Xe(i.mechanicId)
      , n = Math.min(4, Math.max(1, Math.floor(s)))
      , a = Ze(i.mechanicId, t, {
        major: e.major,
        jobLevel: n
    })
      , o = Math.floor(a * (Number(i.salaryMultiplier) || 1));
    return {
        id: i.id,
        baseJobId: i.baseJobId || i.id,
        companyKey: i.companyKey || null,
        title: i.title,
        company: i.company,
        tier: i.tier,
        workTypeId: i.mechanicId,
        jobLevel: n,
        major: e.major,
        proficiency: 0,
        raiseMultiplier: 1,
        raiseUsed: !1,
        salaryBaseLocal: o,
        salary: Math.floor(o),
        companyName: i.company,
        positionTitle: i.title,
        freshmanVisaExempt: !!i.freshmanVisaExempt,
        lastPayLocal: 0,
        lastWorkedMonthTotal: e.monthTotal
    }
}
function Ea(i) {
    const e = as(_t[ts])[0];
    return e ? Vs(e, i) : null
}
function pt(i) {
    var t;
    const e = (t = i == null ? void 0 : i.current_job) == null ? void 0 : t.jobLevel;
    return e != null && Number.isFinite(Number(e)) ? Math.min(4, Math.max(1, Math.floor(Number(e)))) : 1
}
function zs(i, e) {
    if (!i || typeof i != "object")
        return;
    !i.id && i.workTypeId && (i.id = Fs[i.workTypeId] || ts);
    const t = i.id ? os(i.id) : null;
    t && (i.title || (i.title = t.title),
    i.company || (i.company = t.company),
    i.tier || (i.tier = t.tier),
    i.workTypeId || (i.workTypeId = t.mechanicId),
    i.freshmanVisaExempt == null && (i.freshmanVisaExempt = !!t.freshmanVisaExempt),
    i.companyName || (i.companyName = i.company),
    i.positionTitle || (i.positionTitle = i.title))
}
const _t = {
    dish: {
        id: "dish",
        title: "后厨杂工",
        company: "唐人街餐厅",
        tier: "黑工",
        mechanicId: "dishwash",
        jobLevel: 1,
        basePassRate: .98,
        freshmanVisaExempt: !0,
        scope: "general",
        unlock: () => !0,
        lockHint: ""
    },
    tutor_private: {
        id: "tutor_private",
        title: "家教",
        company: "个人雇主",
        tier: "兼职",
        mechanicId: "tutor",
        jobLevel: 2,
        basePassRate: .72,
        scope: "general",
        unlock: i => se(i) && ((i.cumulative_gpa ?? i.gpa) || 0) > 3,
        lockHint: "需大二或大一暑假，且累计 GPA > 3.0"
    },
    ta_campus: {
        id: "ta_campus",
        title: "校内 TA / RA",
        company: "本校实验室 / 院系",
        tier: "校内",
        mechanicId: "ta",
        jobLevel: 3,
        basePassRate: .55,
        scope: "general",
        unlock: i => {
            var s;
            const e = i.cumulative_gpa ?? i.gpa ?? 0
              , t = ((s = i.work_counts) == null ? void 0 : s.research) || 0;
            return se(i) && e >= 3.5 && t >= 1
        }
        ,
        lockHint: "需大二或大一暑假、累计 GPA ≥ 3.5 且至少有 1 次科研"
    },
    cs_frontend: {
        id: "cs_frontend",
        title: "前端切图外包",
        company: "某不知名初创",
        tier: "初创公司",
        mechanicId: "tutor",
        jobLevel: 2,
        basePassRate: .68,
        scope: "major",
        major: "CS",
        unlock: i => se(i) && ((i.cumulative_gpa ?? i.gpa) || 0) >= 3,
        lockHint: "需大二或大一暑假且 GPA 达标"
    },
    cs_backend: {
        id: "cs_backend",
        title: "后端开发实习生",
        company: "ByteDance / Zoom 等",
        tier: "中厂",
        mechanicId: "big_intern",
        jobLevel: 3,
        basePassRate: .42,
        scope: "major",
        major: "CS",
        unlock: i => {
            const e = i.work_counts || {};
            return se(i) && me(i) >= 35 && ((e.ta || 0) >= 1 || (e.research || 0) >= 1)
        }
        ,
        lockHint: "需大二或大一暑假、岗位熟练度≥35 且有 TA 或科研经历"
    },
    cs_algo: {
        id: "cs_algo",
        title: "核心算法 / SDE",
        company: "Google / Meta 等",
        tier: "顶级大厂",
        mechanicId: "big_intern",
        jobLevel: 4,
        basePassRate: .22,
        scope: "major",
        major: "CS",
        unlock: i => {
            const e = i.work_counts || {};
            return me(i) >= 45 && (e.ta || 0) >= 1 && (e.research || 0) >= 2 && (i.monthTotal || 0) > 12
        }
        ,
        lockHint: "高岗位熟练度、TA+科研履历、非新生学期数"
    },
    biz_accounting: {
        id: "biz_accounting",
        title: "财务代账",
        company: "某华人小律所",
        tier: "初创公司",
        mechanicId: "tutor",
        jobLevel: 2,
        basePassRate: .7,
        scope: "major",
        major: "business",
        unlock: i => se(i) && ((i.cumulative_gpa ?? i.gpa) || 0) >= 3,
        lockHint: "需大二或大一暑假且 GPA 达标"
    },
    biz_audit: {
        id: "biz_audit",
        title: "审计实习生",
        company: "KPMG 等四大",
        tier: "知名企业",
        mechanicId: "ta",
        jobLevel: 3,
        basePassRate: .38,
        scope: "major",
        major: "business",
        unlock: i => {
            const e = i.cumulative_gpa ?? i.gpa ?? 0;
            return se(i) && e >= 3.5 && me(i) >= 25
        }
        ,
        lockHint: "需大二或大一暑假、GPA≥3.5、岗位熟练度≥25"
    },
    biz_ib: {
        id: "biz_ib",
        title: "投行分析师",
        company: "高盛 / 摩根士丹利 等",
        tier: "顶级投行",
        mechanicId: "big_intern",
        jobLevel: 4,
        basePassRate: .18,
        scope: "major",
        major: "business",
        unlock: i => {
            const e = i.work_counts || {};
            return me(i) >= 42 && (e.tutor || 0) >= 2 && (i.monthTotal || 0) > 14
        }
        ,
        lockHint: "高岗位熟练度、多段家教/咨询经历"
    },
    media_ops: {
        id: "media_ops",
        title: "新媒体运营实习",
        company: "本地 MCN 工作室",
        tier: "初创公司",
        mechanicId: "tutor",
        jobLevel: 2,
        basePassRate: .65,
        scope: "major",
        major: "media",
        unlock: i => se(i),
        lockHint: "需大二或大一暑假"
    },
    media_brand: {
        id: "media_brand",
        title: "内容营销专员",
        company: "区域品牌市场部",
        tier: "中厂",
        mechanicId: "ta",
        jobLevel: 3,
        basePassRate: .4,
        scope: "major",
        major: "media",
        unlock: i => se(i) && ((i.cumulative_gpa ?? i.gpa) || 0) >= 3.3,
        lockHint: "需大二或大一暑假且 GPA≥3.3"
    },
    media_4a: {
        id: "media_4a",
        title: "4A 客户执行",
        company: "奥美 / 阳狮 等",
        tier: "顶级代理",
        mechanicId: "big_intern",
        jobLevel: 4,
        basePassRate: .2,
        scope: "major",
        major: "media",
        unlock: i => me(i) >= 40 && (i.monthTotal || 0) > 10,
        lockHint: "高岗位熟练度与学期积累"
    },
    arts_gallery: {
        id: "arts_gallery",
        title: "画廊助理",
        company: "当代艺术画廊",
        tier: "初创公司",
        mechanicId: "dishwash",
        jobLevel: 1,
        basePassRate: .75,
        scope: "major",
        major: "arts",
        unlock: i => se(i),
        lockHint: "需大二或大一暑假"
    },
    arts_design: {
        id: "arts_design",
        title: "设计实习",
        company: "独立设计工作室",
        tier: "中厂",
        mechanicId: "tutor",
        jobLevel: 3,
        basePassRate: .45,
        scope: "major",
        major: "arts",
        unlock: i => se(i) && me(i) >= 28,
        lockHint: "需大二或大一暑假且岗位熟练度≥28"
    },
    arts_curator: {
        id: "arts_curator",
        title: "艺术机构策展助理",
        company: "市立美术馆联盟",
        tier: "顶级机构",
        mechanicId: "big_intern",
        jobLevel: 4,
        basePassRate: .2,
        scope: "major",
        major: "arts",
        unlock: i => me(i) >= 38 && ((i.cumulative_gpa ?? i.gpa) || 0) >= 3.4,
        lockHint: "高岗位熟练度与高 GPA"
    }
};
function os(i) {
    const {baseId: e, companyKey: t} = Ks(i)
      , s = _t[e];
    if (!s)
        return;
    if (!t)
        return s;
    const n = (ss[e] || []).find(a => a.key === t);
    return ns(s, n)
}
function Ys(i) {
    const e = i.major || "CS";
    return Object.values(_t).filter(s => s.scope === "general" ? !0 : s.major === e).flatMap(as)
}
function rs(i, e) {
    return e.freshmanVisaExempt ? !1 : ht(i)
}
function Ws(i, e) {
    return rs(i, e) ? "visa_freshman" : e.unlock(i) ? null : "requirements"
}
function Js(i, e) {
    const t = is(e)
      , s = i.jobLevel ?? Xe(i.mechanicId)
      , n = Math.min(4, Math.max(1, Math.floor(s)))
      , a = Ze(i.mechanicId, t, {
        major: e.major,
        jobLevel: n
    })
      , o = Math.floor(a * (Number(i.salaryMultiplier) || 1));
    return {
        low: o,
        high: o,
        base: o
    }
}
const Qs = {
    dishwash: "环球餐饮集团",
    tutor: "启明教育科技",
    ta: "州立大学",
    big_intern: "Nexus Tech"
}
  , Xs = {
    dishwash: ["后厨见习", "值班组长", "区域督导", "运营副总监"],
    tutor: ["家教助教", "课程顾问", "教学主管", "学术总监"],
    ta: ["本科生助教", "高级助教", "课程协调员", "教学研究员"],
    big_intern: ["实习工程师", "中级开发", "高级工程师", "技术专家"]
}
  , mt = {
    CS: "计算机科学",
    business: "商科",
    media: "传媒",
    arts: "艺术"
}
  , La = Object.keys(mt);
function Zs(i) {
    return i != null && Object.prototype.hasOwnProperty.call(mt, i) ? mt[i] : i || "—"
}
function en(i) {
    return Qs[i] || "本地企业"
}
function tn(i, e) {
    const t = Math.min(4, Math.max(1, Math.floor(e || 1)))
      , s = Xs[i];
    return !s || !s.length ? "员工" : s[t - 1] || s[0]
}
function Pa(i, e) {
    if (!i || typeof i != "object" || (zs(i),
    !i.workTypeId))
        return;
    (i.raiseMultiplier == null || i.raiseMultiplier <= 0) && (i.raiseMultiplier = 1),
    typeof i.raiseUsed != "boolean" && (i.raiseUsed = !1),
    !i.raiseUsed && Number(i.raiseMultiplier) > 1.001 && (i.raiseUsed = !0),
    i.proficiency == null && (i.proficiency = 0),
    i.proficiency = Math.min(100, Math.max(0, Math.floor(Number(i.proficiency) || 0))),
    (i.major == null || i.major === "") && (i.major = e.major || "CS");
    const t = i.jobLevel != null ? Number(i.jobLevel) : Xe(i.workTypeId);
    i.jobLevel = Math.min(4, Math.max(1, Math.floor(Number.isFinite(t) ? t : 1))),
    i.companyName || (i.companyName = i.company || en(i.workTypeId)),
    i.positionTitle || (i.positionTitle = i.title || tn(i.workTypeId, i.jobLevel));
    const s = e.region === "HKSG" ? "HK" : e.region
      , n = Ze(i.workTypeId, s, {
        major: i.major,
        jobLevel: i.jobLevel
    });
    (i.salaryBaseLocal == null || i.salaryBaseLocal <= 0) && (i.salaryBaseLocal = n),
    (i.salary == null || i.salary < 0) && (i.salary = Math.floor(i.salaryBaseLocal * i.raiseMultiplier))
}
const sn = {
    "academic:homeworkDue": "消耗大量体力，为了那点绩点安全感。",
    "academic:takeQuiz": "稳分，但心态会慢慢掉。",
    "academic:prepPre": "降低临时抱佛脚成本。",
    "academic:libraryCram": "猛冲成绩，代价是透支自己。",
    "academic:normalReview": "稳扎稳打，慢慢把分数抬回来。",
    "academic:research": "短期很累，长期可能换来逆袭筹码。",
    "academic:slack": "短暂回血，但会错过推进节奏。",
    "academic:internship": "假期换履历，也换一点黑眼圈。",
    "work:dishwash": "现金来得快，尊严磨损也很稳定。",
    "work:tutor": "把别人孩子教明白，顺便证明自己还没废。",
    "work:ta": "校内岗位体面一点，但体面也要扣体力。",
    "work:big_intern": "履历镀金，睡眠缩水。",
    "life:playGame": "逃进游戏世界，现实不会自动存档。",
    "life:drink": "一杯下去，问题没有消失，只是声音小了。",
    "life:party": "花钱买热闹，第二天可能更空。",
    "life:gym": "身体先扛住，别让崩盘来太快。",
    "life:travel": "用距离假装生活还有选择。",
    "life:sleep": "补觉不是摆烂，是系统重启。",
    "life:slack": "躺平回血，但债和 Due 都没睡着。"
}
  , Lt = {
    0: "",
    1: "刚做过一次，同月再来会开始变钝。",
    2: "疲劳明显上头，收益会缩水。",
    3: "身体和精神都在报警，但你仍然可以硬撑。"
}
  , Pt = {
    good: {
        resultKind: "gain",
        statusLine: "你今天状态在线，推进效率非常稳定。"
    },
    mid: {
        resultKind: "turn",
        statusLine: "连续重复导致疲态上升，节奏开始变慢。"
    },
    bad: {
        resultKind: "loss",
        statusLine: "你几乎在硬撑，注意力和执行力都在下滑。"
    }
}
  , Ca = {
    classUp: "[阶级突破] 你终于可以不看价格买下那盒最贵的有机草莓了。",
    classDown: "[阶级回落] 你重新学会了看打折贴纸，人生突然朴素。"
};
function Ra(i) {
    return i <= 1 ? 1 : i === 2 ? .8 : i === 3 ? .6 : .5
}
function Na(i) {
    return i === 3 ? {
        mentalPenalty: 10,
        energyPenalty: 0
    } : i >= 4 ? {
        mentalPenalty: 12,
        energyPenalty: 10
    } : {
        mentalPenalty: 0,
        energyPenalty: 0
    }
}
function nn(i) {
    return i >= 1 ? "good" : i >= .6 ? "mid" : "bad"
}
function Ia(i) {
    return Pt[nn(i)] || Pt.mid
}
function an(i, e="") {
    return sn[i] || e || "这会改变本月的状态。"
}
function on(i) {
    return i >= 3 ? Lt[3] : Lt[i] || ""
}
function rn(i) {
    return i >= 3 ? "danger" : i >= 2 ? "warn" : i >= 1 ? "soft" : "none"
}
function Ba(i) {
    return i < .5 && Math.random() < .35
}
function qa(i) {
    const e = String(i || "");
    return e.startsWith("work:") ? {
        mental: -4,
        health: -2,
        sentence: "你手一抖出了点小差错，老板没骂太狠，但你已经想下班。"
    } : e.startsWith("academic:") ? {
        mental: -5,
        sentence: "脑子像浏览器开了 80 个标签，最后一个都没加载完。"
    } : {
        mental: -4,
        sentence: "你试图恢复状态，结果状态也在试图离开你。"
    }
}
const ue = {
    flu: {
        name: "重感冒",
        decay: 2,
        cost: 2,
        cure: .9,
        desc: "持续掉健康 -2/月",
        mentalCapReduction: 0,
        category: "random_event"
    },
    gastro: {
        name: "肠胃炎",
        decay: 5,
        cost: 5,
        cure: .8,
        desc: "持续掉健康 -5/月",
        mentalCapReduction: 0,
        category: "random_event"
    },
    allergy: {
        name: "过敏",
        decay: 1,
        cost: 1,
        cure: .95,
        desc: "轻微过敏，健康 -1/月",
        mentalCapReduction: 0,
        category: "random_event",
        severity: "mild"
    },
    insomnia: {
        name: "失眠",
        decay: 0,
        cost: 3,
        cure: .85,
        desc: "难以入睡，心态 -3/月，精力恢复减半",
        mentalCapReduction: 0,
        category: "random_event",
        severity: "moderate",
        energyRecoveryRate: .5
    },
    cervical_spondylosis: {
        name: "颈椎病",
        decay: 1,
        cost: 5,
        cure: .8,
        desc: "长期伏案导致，久坐不适与效率下降",
        mentalCapReduction: 0,
        category: "random_event",
        severity: "moderate"
    },
    anxiety: {
        name: "焦虑症",
        decay: 1,
        cost: 15,
        cure: .7,
        desc: "持续焦虑，心态上限 -20",
        mentalCapReduction: 20,
        category: "random_event",
        severity: "severe"
    },
    hiv: {
        name: "HIV",
        decay: 10,
        cost: 50,
        cure: 0,
        desc: "无法治愈! 持续掉健康 -10/月",
        mentalCapReduction: 0,
        category: "party"
    },
    syphilis: {
        name: "梅毒",
        decay: 4,
        cost: 8,
        cure: .7,
        desc: "持续掉健康 -4/月",
        mentalCapReduction: 0,
        category: "party"
    },
    condyloma: {
        name: "尖锐湿疣",
        decay: 3,
        cost: 6,
        cure: .75,
        desc: "持续掉健康 -3/月",
        mentalCapReduction: 0,
        category: "party"
    },
    depression: {
        name: "抑郁症",
        decay: 3,
        cost: 10,
        cure: .5,
        desc: "持续掉健康 -3/月, 心态上限减半",
        mentalCapReduction: .5,
        category: "random_event"
    }
}
  , ln = ["flu", "gastro", "depression", "allergy", "insomnia", "cervical_spondylosis", "anxiety"]
  , cn = ["hiv", "syphilis", "condyloma"]
  , dn = 25;
function ls(i, e) {
    const t = Number(i)
      , s = Number.isFinite(t) ? t : 80;
    return Math.min(100, Math.max(0, s + e * dn))
}
function un(i) {
    const e = Number(i);
    return Number.isFinite(e) ? Math.max(0, Math.min(4, e / 25)) : 0
}
function Ha(i, e, t) {
    const s = Math.max(0, Math.floor(Number(e)) || 0)
      , n = Number(i)
      , a = Number(t)
      , o = Number.isFinite(n) ? n : 3
      , r = Number.isFinite(a) ? a : 0;
    return (o * s + r) / (s + 1)
}
const ve = [{
    id: "evt_code_commission_seed",
    req_region: ["ALL"],
    req_tags: {
        academic_stress: 1
    },
    req_flags: [],
    exclude_flags: ["used_code_proxy"],
    base_weight: 60,
    title: "花钱买平安？",
    desc: "CS 课的期末 Project 难得离谱，同乡群里有人接单代写代码，保证能过 test case，要价 {currency}500。",
    choices: [{
        text: "付款代写（腾出时间睡觉）",
        result_text: "你把钱转了过去，第二天对方发来了完美的源代码。你久违地睡了个好觉，但总觉得哪里不对劲。",
        effects: {
            money: -.5,
            health: 10,
            mental: 5
        },
        add_flags: ["used_code_proxy"],
        remove_flags: [],
        social_post: {
            content: "金钱的力量，让我买到了今晚的睡眠。",
            comments: [{
                author: "同学",
                text: "你作业写完了？！教教我！"
            }]
        }
    }, {
        text: "硬着头皮自己啃 Document",
        result_text: "你熬了两个通宵，看着满屏的报错红字，终于勉强跑通了基础分。",
        effects: {
            health: -10,
            mental: -10,
            gpa: .05
        },
        add_tags: {
            academic_stress: 1
        },
        social_post: {
            content: "两个通宵换基础分，这学上的……",
            comments: [{
                author: "网友",
                text: "至少诚实。"
            }]
        }
    }]
}, {
    id: "evt_code_commission_harvest",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: ["used_code_proxy"],
    exclude_flags: [],
    base_weight: 800,
    title: "TA 的灵魂拷问",
    desc: "TA（助教）把你单独叫到旁边，指着你高分通过的代码问：“这段多线程的逻辑写得非常精妙，你能现场给我讲一下思路吗？”",
    choices: [{
        text: "强装镇定，临场瞎编糊弄过去（极耗心神）",
        result_text: "你凭借平时的积累，满头大汗地强行圆了过去。TA 狐疑地看了你一眼，勉强让你走了。你吓得心脏差点骤停。",
        effects: {
            mental: -15,
            health: -5
        },
        remove_flags: ["used_code_proxy"],
        social_post: {
            content: "今天体验了一把什么叫生死时速...",
            comments: [{
                author: "同学",
                text: "被抽查了？"
            }]
        }
    }, {
        text: "心理防线崩溃，坦白从宽",
        result_text: "你结结巴巴地承认了。TA 叹了口气：“看在你坦白的份上，这次算你零分，不上报委员会。”",
        effects: {
            gpa: -.2,
            mental: -5,
            rel_prof: -10
        },
        remove_flags: ["used_code_proxy"],
        add_flags: ["academic_warning"],
        social_post: {
            content: "诚实很贵，但至少不用装一辈子。",
            comments: [{
                author: "TA",
                text: "下次别再走捷径。"
            }]
        }
    }]
}, {
    id: "evt_sublet_livingroom_seed",
    req_region: ["US", "AU", "UK", "SG"],
    req_tags: {},
    req_flags: ["broke"],
    exclude_flags: ["illegal_sublet"],
    req_has_housing: !0,
    base_weight: 70,
    title: "二房东的诱惑",
    desc: "你租的公寓客厅空着，一个刚到 {region} 的新生想以每月 {currency}600 的低价租你的客厅。但公寓合同严禁私自转租。",
    choices: [{
        text: "接纳新生，签私人协议（缓解经济）",
        result_text: "新生把折叠床搬进了客厅。你每个月的房租压力大减，但家里总多了一个人，让你感到一丝不安。",
        effects: {
            money: .6,
            mental: -5
        },
        add_flags: ["illegal_sublet"],
        social_post: {
            content: "客厅多了一张床，希望别被物业发现……",
            comments: [{
                author: "室友…",
                text: "合同上写不能转租吧？"
            }]
        }
    }, {
        text: "遵纪守法，拒绝转租",
        result_text: "你拒绝了新生。看着空荡荡的客厅和干瘪的钱包，你默默叹了口气。",
        effects: {
            mental: -5
        },
        social_post: {
            content: "穷归穷，合同还是不敢碰。",
            comments: [{
                author: "朋友",
                text: "稳一点好。"
            }]
        }
    }]
}, {
    id: "evt_sublet_livingroom_harvest",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: ["illegal_sublet"],
    exclude_flags: [],
    req_has_housing: !0,
    base_weight: 800,
    title: "物业突击检查",
    desc: "公寓的物业突然来敲门查防火烟雾报警器。而你的客厅里正摆着那位新生的床铺和满地的行李。",
    choices: [{
        text: "塞现金给物业求通融（破财消灾）",
        result_text: "你把人拉到门外，心痛地塞过去几张大钞。对方睁一只眼闭一只眼走了，但你这几个月转租的钱几乎全赔了进去。",
        effects: {
            money: -.8,
            mental: -15
        },
        remove_flags: ["illegal_sublet"],
        social_post: {
            content: "花钱消灾，心都在滴血。",
            comments: [{
                author: "网友",
                text: "二房东高危。"
            }]
        }
    }, {
        text: "硬说是朋友借宿几天",
        result_text: "对方根本不信，第二天门缝底下塞进了一张严厉的警告信和违约罚单。",
        effects: {
            money: -1.5,
            mental: -15
        },
        remove_flags: ["illegal_sublet"],
        social_post: {
            content: "在 {region} 租房，简直步步是坑...",
            comments: [{
                author: "中介",
                text: "早说了别私自转租。"
            }]
        }
    }]
}, {
    id: "evt_phd_help_seed",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: [],
    exclude_flags: ["helped_phd"],
    base_weight: 50,
    title: "崩溃的学长",
    desc: "深夜的实验室里，一个博士学长因为数据跑不出结果正揪着头发崩溃。你虽然很累，但正好懂这块的算法。",
    choices: [{
        text: "牺牲睡眠，坐下来帮他排查（结下善缘）",
        result_text: "你陪他熬到了天亮，终于找出了那个致命的 Bug。学长拍了拍你的肩膀，眼睛里满是感激。",
        effects: {
            health: -10,
            mental: -5,
            rel_prof: 5
        },
        add_flags: ["helped_phd"],
        social_post: {
            content: "通宵 debug，实验室的咖啡味已经腌入味了。",
            comments: [{
                author: "学长",
                text: "欠你一顿大的。"
            }]
        }
    }, {
        text: "假装没看见，赶紧回宿舍睡觉",
        result_text: "事不关己高高挂起，你回宿舍美美地睡了一觉。",
        effects: {
            health: 5
        },
        social_post: {
            content: "今晚我选择当凡人，博士的崩溃明天再说。",
            comments: [{
                author: "自己",
                text: "……有点内疚。"
            }]
        }
    }]
}, {
    id: "evt_phd_help_harvest",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: ["helped_phd"],
    exclude_flags: [],
    base_weight: 800,
    title: "迟来的福报",
    desc: "你正发愁兼职收入，那位之前被你捞过一把的博士学长突然联系你。",
    choices: [{
        text: "去见学长",
        result_text: "学长拿到了一个企业横向项目，手里有经费，给你安排了一份时间弹性、时薪不错的助研协助。",
        effects: {
            money: 1.5,
            proficiency: 10,
            mental: 15
        },
        remove_flags: ["helped_phd"],
        social_post: {
            content: "好人有好报，至少这次像真的。",
            comments: [{
                author: "学长",
                text: "这是你应得的，好好干。"
            }]
        }
    }]
}, {
    id: "evt_lie_to_partner_seed",
    req_region: ["ALL"],
    req_tags: {
        party_animal: 1
    },
    req_flags: ["has_partner"],
    exclude_flags: ["lied_to_partner"],
    base_weight: 60,
    title: "午夜局的诱惑",
    desc: "朋友叫你去一个午夜酒局，据说有不少人脉。但 {partner} 今晚情绪低落，希望你能打视频陪 TA。",
    choices: [{
        text: "骗 {partner} 说太累睡了，偷偷去酒局",
        result_text: "你在酒局上加了不少微信。回到家看着 {partner} 关心的留言，你心里有点发虚。",
        effects: {
            mental: 10,
            rel_partner: -5
        },
        add_flags: ["lied_to_partner"],
        social_post: {
            content: "今晚的 networking 很吵，心里很空。",
            comments: [{
                author: "朋友",
                text: "早点回家吧。"
            }]
        }
    }, {
        text: "拒绝酒局，老老实实陪 {partner}",
        result_text: "你听着电话那头 {partner} 的碎碎念，虽然有点枯燥，但关系更近了一点。",
        effects: {
            mental: -5,
            rel_partner: 10
        },
        social_post: {
            content: "选择了视频通话而不是 FOMO。",
            comments: [{
                author: "{partner}",
                text: "谢谢你陪我。"
            }]
        }
    }]
}, {
    id: "evt_lie_to_partner_harvest",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: ["has_partner", "lied_to_partner"],
    exclude_flags: [],
    base_weight: 800,
    title: "背景板里的你",
    desc: "{partner} 突然发来一张别人朋友圈的截图。那是一张酒局的合影，而你正端着酒杯坐在角落的背景里。",
    choices: [{
        text: "极力否认，说是长得像（消耗信任）",
        result_text: "你发挥了毕生演技死不承认。{partner} 似乎被你绕晕了，没有再追究，但你看得出 TA 眼里的怀疑。",
        effects: {
            mental: -15,
            rel_partner: -10
        },
        remove_flags: ["lied_to_partner"],
        add_flags: ["relationship_crisis"],
        social_post: {
            content: "圆谎比写论文还累。",
            comments: [{
                author: "网友",
                text: "迟早要翻车。"
            }]
        }
    }, {
        text: "果断滑跪认错",
        result_text: "你老老实实交代了。大吵一架之后，至少没有继续装下去。",
        effects: {
            mental: -15,
            rel_partner: -5
        },
        remove_flags: ["lied_to_partner"],
        social_post: {
            content: "认错很丑，但比装睡体面一点。",
            comments: [{
                author: "{partner}",
                text: "我需要时间消化。"
            }]
        }
    }]
}, {
    id: "evt_scapegoat_seed",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: [],
    exclude_flags: ["took_blame"],
    base_weight: 50,
    title: "职场黑锅",
    desc: "打工时一位正式员工因粗心捅了小篓子，主管在群里追问。对方私信求你临时扛一下，说以后会照应你。",
    choices: [{
        text: "背下黑锅（委曲求全）",
        result_text: "你被主管当众数落，还被扣了当日工时收入。对方松了口气，请你喝了杯咖啡。",
        effects: {
            money: -.3,
            mental: -15,
            proficiency: -2
        },
        add_flags: ["took_blame"],
        social_post: {
            content: "今天学会了什么叫职场人情债。",
            comments: [{
                author: "同事",
                text: "你人真好……"
            }]
        }
    }, {
        text: "果断拒绝，不关我事",
        result_text: "真相很快厘清，对方被处理，但之后排班你总觉得被穿小鞋。",
        effects: {
            mental: -5
        },
        social_post: {
            content: "背锅不是我的实习 KPI。",
            comments: [{
                author: "朋友",
                text: "保护好自己。"
            }]
        }
    }]
}, {
    id: "evt_scapegoat_harvest",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: ["took_blame"],
    exclude_flags: [],
    base_weight: 800,
    title: "内推的名额",
    desc: "你想换一份更对口的实习。之前那位被你扛过锅的同事听说后，愿意帮你把简历递给主管。",
    choices: [{
        text: "接受推荐",
        result_text: "推荐信帮你跳过了海投简历的冷启动，你对岗位流程也熟悉了不少。",
        effects: {
            proficiency: 10,
            mental: 15,
            money: .5
        },
        remove_flags: ["took_blame"],
        social_post: {
            content: "职场上的人情世故，有时候比代码还管用。",
            comments: [{
                author: "同事",
                text: "苟富贵，勿相忘。"
            }]
        }
    }]
}, {
    id: "evt_campus_job_seed",
    req_region: ["US", "UK", "AU"],
    req_tags: {},
    req_flags: [],
    exclude_flags: [],
    base_weight: 70,
    title: "校园兼职申请",
    desc: "你在 {region} 的学校公告栏看到图书馆招募学生助理，时薪约 {currency}12，每周工时上限需符合学生签证常见规定。",
    choices: [{
        text: "认真写动机信并提交申请",
        result_text: "你花了两小时润色动机信，强调细心与时间管理能力。申请已提交，几天后收到面试通知。",
        effects: {
            mental: -3
        },
        add_flags: ["campus_job_applied"],
        social_post: {
            content: "刚投了图书馆学生助理，希望能赚点零花钱，面试加油。",
            comments: [{
                author: "学长",
                text: "图书馆工作相对安静，还能蹭自习。"
            }, {
                author: "同学",
                text: "我也投了，别内卷啊哈哈。"
            }]
        }
    }, {
        text: "觉得麻烦，放弃申请",
        result_text: "你把时间留给课业，兼职以后再说。",
        effects: {
            mental: 2
        },
        social_post: {
            content: "图书馆兼职申请先放一放，先把 GPA 稳住。目前 {gpa}",
            comments: [{
                author: "父母",
                text: "学习第一，支持你。"
            }, {
                author: "同学",
                text: "其实流程不复杂，下学期可以试试。"
            }]
        }
    }]
}, {
    id: "evt_campus_job_harvest",
    req_region: ["US", "UK", "AU"],
    req_tags: {},
    req_flags: ["campus_job_applied"],
    exclude_flags: [],
    base_weight: 800,
    title: "图书馆面试结果",
    desc: "你之前申请的图书馆学生助理岗位有了回音。对方问你什么时候方便开始排班。",
    choices: [{
        text: "接受这份工作",
        result_text: "你接受了 offer，每周约十余小时，时薪按当地标准发放，工间还能抽空看书。现金流稳了一点。",
        effects: {
            money: 1.2,
            mental: 5,
            proficiency: 3
        },
        add_flags: ["has_campus_job"],
        social_post: {
            content: "拿到图书馆学生助理的 offer，在书堆里打工也挺治愈。",
            comments: [{
                author: "朋友",
                text: "恭喜，请我喝咖啡吗？"
            }, {
                author: "同学",
                text: "排班别和期中撞车就好。"
            }]
        }
    }, {
        text: "婉拒，专注学业",
        result_text: "你礼貌婉拒，决定以课业为先。对方表示理解，说下学期可能再开放名额。",
        effects: {
            gpa: .03,
            mental: 2
        },
        social_post: {
            content: "婉拒了图书馆工位，这学期先冲一把 GPA。目前 {gpa}",
            comments: [{
                author: "同学",
                text: "压力大时别硬扛。"
            }, {
                author: "朋友",
                text: "支持你先把课修稳。"
            }]
        }
    }]
}, {
    id: "evt_volunteer_teaching_seed",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: [],
    exclude_flags: [],
    base_weight: 60,
    title: "周末支教活动",
    desc: "学生会邮件介绍一个面向社区孩子的免费课业辅导项目，每周固定时段在社区中心进行。",
    choices: [{
        text: "报名成为志愿者教师",
        result_text: "你完成报名与简短培训，被分配辅导一位基础薄弱的小朋友。很累，但心里挺暖。",
        effects: {
            mental: 5,
            health: 2,
            gpa: -.02
        },
        add_flags: ["volunteer_teaching"],
        social_post: {
            content: "报名了周末社区辅导，占用一点复习时间，但值得。",
            comments: [{
                author: "家人",
                text: "愿意付出时间，很棒。"
            }, {
                author: "朋友",
                text: "我也想了解怎么参加。"
            }]
        }
    }, {
        text: "不参加，周末需要休息",
        result_text: "你决定把周末留给补觉和赶 due，志愿者下次再说。",
        effects: {
            mental: 3,
            health: 1
        },
        social_post: {
            content: "这周先保命赶 due，志愿活动下次一定。",
            comments: [{
                author: "同学",
                text: "理解，作业堆成山。"
            }, {
                author: "学长",
                text: "学期中后再看机会。"
            }]
        }
    }]
}, {
    id: "evt_volunteer_teaching_harvest",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: ["volunteer_teaching"],
    exclude_flags: [],
    base_weight: 800,
    title: "教学成果展示",
    desc: "一学期下来，你辅导的孩子成绩有肉眼可见的进步。社区中心办了小型分享会，家长连连道谢。",
    choices: [{
        text: "接受感谢与推荐信",
        result_text: "家长愿意为你写推荐信，社区负责人也在邮件里点名表扬。简历上多了一行温度。",
        effects: {
            mental: 10,
            rel_prof: 8
        },
        add_flags: ["strong_recommendation"],
        social_post: {
            content: "小朋友进步了，还拿到推荐信，志愿服务的回报很实在。",
            comments: [{
                author: "社区工作人员",
                text: "谢谢你的耐心。"
            }, {
                author: "朋友",
                text: "向你学习。"
            }]
        }
    }, {
        text: "低调庆祝，继续辅导",
        result_text: "你婉拒了张扬，只收下孩子送的小画，准备下学期继续。",
        effects: {
            mental: 8,
            health: 3
        },
        social_post: {
            content: "收到小朋友的画，下学期继续当志愿者。",
            comments: [{
                author: "家人",
                text: "保持善心。"
            }, {
                author: "同学",
                text: "暖心。"
            }]
        }
    }]
}, {
    id: "evt_rental_dispute_housing",
    req_region: ["US", "UK", "AU"],
    req_tags: {},
    req_flags: [],
    exclude_flags: [],
    req_has_housing: !0,
    base_weight: 80,
    title: "合租矛盾",
    desc: "合租公寓里，一位室友常在深夜外放打游戏，沟通几次仍不愉快。",
    choices: [{
        text: "向房东或中介书面投诉",
        result_text: "房东或中介介入警告后，对方收敛了一些，但客厅气氛更僵了。",
        effects: {
            mental: -8,
            health: -2
        },
        add_flags: ["reported_roommate"],
        social_post: {
            content: "合租遇到噪音问题，只能走正式渠道，心累。",
            comments: [{
                author: "朋友",
                text: "休息不好最伤。"
            }, {
                author: "学长",
                text: "签约前最好写清作息规则。"
            }]
        }
    }, {
        text: "买降噪耳机先顶着",
        result_text: "你咬牙买了降噪耳机，夜里好受一点，但问题没从根上解决。",
        effects: {
            money: -.05,
            mental: -3,
            health: 1
        },
        social_post: {
            content: "先靠耳机续命，希望室友能自觉一点。",
            comments: [{
                author: "妈妈",
                text: "别委屈太久，不行就考虑换房。"
            }, {
                author: "同学",
                text: "求耳机型号。"
            }]
        }
    }]
}, {
    id: "evt_sublease_scam_housing",
    req_region: ["US", "UK", "AU", "SG"],
    req_tags: {},
    req_flags: [],
    exclude_flags: [],
    req_has_housing: !0,
    base_weight: 50,
    title: "转租陷阱",
    desc: "租房群里有人转租，价格低得反常。对方自称在国内，要求先付一笔定金到私人账户。",
    choices: [{
        text: "要求视频看房与正规合同",
        result_text: "对方支支吾吾最后失联。你意识到可能是诈骗，及时止损。",
        effects: {
            mental: 2
        },
        add_flags: ["avoided_scam"],
        social_post: {
            content: "差点踩转租坑：一定要看房、走合同，别先打定金。",
            comments: [{
                author: "同学",
                text: "谢谢提醒。"
            }, {
                author: "朋友",
                text: "我也收到过类似消息。"
            }]
        }
    }, {
        text: "贪便宜直接转账",
        result_text: "钱过去后人就消失。你报警备案，但追回希望渺茫，只能当学费。",
        effects: {
            money: -.5,
            mental: -15,
            health: -5
        },
        add_flags: ["scammed"],
        social_post: {
            content: "转租被骗定金，大家别信先款。已去报案。",
            comments: [{
                author: "朋友",
                text: "抱抱，当买教训。"
            }, {
                author: "网友",
                text: "以后只走正规平台。"
            }]
        }
    }]
}, {
    id: "evt_partner_support",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: ["has_partner"],
    exclude_flags: [],
    base_weight: 90,
    title: "伴侣的鼓励",
    desc: "最近课业压力大，{partner} 察觉你情绪低落，特意抽时间陪你吃饭散步。",
    choices: [{
        text: "倾诉压力，接受安慰",
        result_text: "你把焦虑说出来，{partner} 静静听。情绪泄洪之后，睡眠都好了一点。",
        effects: {
            mental: 12,
            health: 5,
            rel_partner: 10
        },
        social_post: {
            content: "今天被 {partner} 投喂又陪聊，感觉又能续命了。",
            comments: [{
                author: "朋友",
                text: "甜，羡慕。"
            }, {
                author: "家人",
                text: "互相照应最重要。"
            }]
        }
    }, {
        text: "嘴硬说没事，自己扛",
        result_text: "你强颜欢笑继续赶 due。{partner} 有点失落，但暂时没追问。",
        effects: {
            mental: -5,
            rel_partner: -5
        },
        social_post: {
            content: "压力大到爆炸，却不想让 {partner} 担心……先扛一扛。GPA {gpa}",
            comments: [{
                author: "网友",
                text: "偶尔也要说出来。"
            }, {
                author: "学长",
                text: "注意情绪，别硬撑。"
            }]
        }
    }]
}, {
    id: "evt_research_assistant_seed",
    req_region: ["US", "UK", "AU"],
    req_tags: {},
    req_flags: [],
    exclude_flags: [],
    base_weight: 55,
    title: "教授招募研究助理",
    desc: "教授邮件招募研究助理协助整理数据与文献，每周约十小时并有津贴。你当前 GPA 约 {gpa}，请自行对照课程要求。",
    choices: [{
        text: "认真申请并准备面试",
        result_text: "你提交材料并参加面试，表现稳定，拿到了 RA 名额。",
        effects: {
            mental: -3
        },
        add_flags: ["research_project"],
        social_post: {
            content: "申到了教授的 RA，希望能进实验室多学一点。",
            comments: [{
                author: "同学",
                text: "恭喜，我也想申。"
            }, {
                author: "朋友",
                text: "注意工时别爆。"
            }]
        }
    }, {
        text: "觉得自己不够格，放弃",
        result_text: "你没提交申请。后来听说同届有人拿下类似岗位，你有点后悔。",
        effects: {
            mental: -5
        },
        social_post: {
            content: "看到 RA 招聘却怂了，现在有点后悔。",
            comments: [{
                author: "朋友",
                text: "下次勇敢投。"
            }, {
                author: "学长",
                text: "教授其实看重态度。"
            }]
        }
    }]
}, {
    id: "evt_research_publication_harvest",
    req_region: ["US", "UK", "AU"],
    req_tags: {},
    req_flags: ["research_project"],
    exclude_flags: [],
    base_weight: 800,
    title: "论文被接收",
    desc: "你参与的课题组工作被学术会议接收，教授把你的名字写进作者列表。",
    choices: [{
        text: "庆祝并更新简历",
        result_text: "你把成果写进简历，教授也愿意在推荐信里重点提一笔。",
        effects: {
            mental: 15,
            rel_prof: 12,
            gpa: .05
        },
        add_flags: ["publication_author"],
        social_post: {
            content: "小组论文被会议接收，名字在作者里，开心到想请客。GPA 也要稳住 {gpa}",
            comments: [{
                author: "教授",
                text: "继续努力。"
            }, {
                author: "家人",
                text: "为你骄傲。"
            }]
        }
    }, {
        text: "低调感恩，继续干活",
        result_text: "你谢过团队，继续改下一版实验与投稿，教授更放心把任务交给你。",
        effects: {
            mental: 8,
            rel_prof: 10,
            proficiency: 5
        },
        social_post: {
            content: "论文中了，但先继续搬砖，下一篇再说。",
            comments: [{
                author: "同门",
                text: "恭喜。"
            }, {
                author: "朋友",
                text: "请客！"
            }]
        }
    }]
}, {
    id: "evt_startup_idea_seed",
    req_region: ["US", "UK", "SG"],
    req_tags: {},
    req_flags: [],
    exclude_flags: [],
    base_weight: 45,
    title: "校园创业大赛",
    desc: "创业中心举办比赛，有奖金与孵化资源。你有一个环保方向的小想法，但需要组队与调研。",
    choices: [{
        text: "组队参赛",
        result_text: "你和队友熬夜写 BP，虽然累，但路演前至少有个像样的版本。",
        effects: {
            mental: -8,
            health: -3
        },
        add_flags: ["startup_pitch"],
        social_post: {
            content: "组队打创业赛，先不管赢不赢，过程已经脱层皮。",
            comments: [{
                author: "导师",
                text: "注意验证需求。"
            }, {
                author: "队友",
                text: "冲。"
            }]
        }
    }, {
        text: "评估后放弃报名",
        result_text: "你担心时间成本太高，决定先把课修稳，创业以后再说。",
        effects: {
            mental: 2,
            gpa: .02
        },
        social_post: {
            content: "创业赛先不去了，把 {gpa} 稳住更重要。",
            comments: [{
                author: "父母",
                text: "学业优先。"
            }, {
                author: "朋友",
                text: "想法先记着也好。"
            }]
        }
    }]
}, {
    id: "evt_startup_funding_harvest",
    req_region: ["US", "UK", "SG"],
    req_tags: {},
    req_flags: ["startup_pitch"],
    exclude_flags: [],
    base_weight: 800,
    title: "赢得创业资金",
    desc: "你们项目进了后段评审，拿到一笔种子资金与孵化辅导机会。",
    choices: [{
        text: "接受资金，加重投入（高风险）",
        result_text: "你把更多课余时间押在项目上，团队租了共享工位，节奏像创业真人秀。",
        effects: {
            mental: 5,
            money: 1.8,
            proficiency: 8
        },
        add_flags: ["entrepreneur"],
        social_post: {
            content: "拿到种子资金，课余全砸项目里，年轻就要敢试。",
            comments: [{
                author: "导师",
                text: "注意学分别亮红灯。"
            }, {
                author: "队友",
                text: "一起扛。"
            }]
        }
    }, {
        text: "以学业为主，课余推进",
        result_text: "你把钱存进项目账户，但坚持不把课表掏空，慢慢迭代。",
        effects: {
            mental: 3,
            money: 1,
            gpa: -.03
        },
        social_post: {
            content: "奖金先落袋，课还是要上，项目周末推进。",
            comments: [{
                author: "家人",
                text: "这样我们更安心。"
            }, {
                author: "同学",
                text: "理智。"
            }]
        }
    }]
}, {
    id: "evt_language_exchange_seed",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: [],
    exclude_flags: [],
    base_weight: 65,
    title: "语言交换伙伴",
    desc: "国际学生办公室组织语言交换，你可以与母语者结对练口语，也分享中文。",
    choices: [{
        text: "报名，固定每周一次",
        result_text: "你匹配到一位健谈的语伴，约定在咖啡厅见面，话题从课表聊到文化梗。",
        effects: {
            mental: 5,
            gpa: .02
        },
        add_flags: ["language_buddy"],
        social_post: {
            content: "报了语言交换，希望口语别那么烫嘴。",
            comments: [{
                author: "语伴",
                text: "See you Thursday!"
            }, {
                author: "同学",
                text: "怎么报名？"
            }]
        }
    }, {
        text: "不参加，自学为主",
        result_text: "你觉得效率不如刷题，继续按自己的节奏背单词、精听。",
        effects: {
            gpa: .01
        },
        social_post: {
            content: "语言交换先不去了，自己刷题更可控。",
            comments: [{
                author: "老师",
                text: "口语也需要真实互动。"
            }, {
                author: "网友",
                text: "看个人习惯。"
            }]
        }
    }]
}, {
    id: "evt_language_fluency_harvest",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: ["language_buddy"],
    exclude_flags: [],
    base_weight: 800,
    title: "口语进步",
    desc: "几周下来，你在课堂与小组讨论里开口更顺，语伴也邀请你参加一次小型聚会。",
    choices: [{
        text: "参加聚会，多认识人",
        result_text: "你在聚会上认识了新朋友，话题从课业聊到本地生活，社恐指数下降。",
        effects: {
            mental: 10,
            rel_prof: 5
        },
        add_flags: ["local_network"],
        social_post: {
            content: "被语伴拉去聚会，口语被迫营业，但挺开心。",
            comments: [{
                author: "语伴",
                text: "You did great!"
            }, {
                author: "朋友",
                text: "多练就会顺。"
            }]
        }
    }, {
        text: "婉拒，期末优先",
        result_text: "你感谢邀请，但选择把周末留给复习。语伴表示理解。",
        effects: {
            mental: 2,
            gpa: .05
        },
        social_post: {
            content: "聚会先鸽了，期末要紧。GPA {gpa} 冲。",
            comments: [{
                author: "父母",
                text: "考完再玩。"
            }, {
                author: "同学",
                text: "一起渡劫。"
            }]
        }
    }]
}, {
    id: "evt_health_insurance_seed",
    req_region: ["US"],
    req_tags: {},
    req_flags: [],
    exclude_flags: ["has_health_insurance"],
    base_weight: 70,
    title: "美国医保选择",
    desc: "学校要求国际学生购买医疗保险。你可以在校方计划与校外计划之间权衡保费与免赔额。",
    choices: [{
        text: "购买学校推荐计划",
        result_text: "保费贵，但理赔路径相对清晰，你求个心安。",
        effects: {
            money: -2,
            mental: 5
        },
        add_flags: ["health_insurance"],
        social_post: {
            content: "咬牙买了学校医保，贵，但怕生病更贵。",
            comments: [{
                author: "校医",
                text: "保留好保险卡。"
            }, {
                author: "同学",
                text: "我也买的校计划。"
            }]
        }
    }, {
        text: "选择更便宜的校外计划",
        result_text: "你省下不少保费，但条款更绕，心里有点忐忑。",
        effects: {
            money: -.8,
            mental: -3
        },
        add_flags: ["cheap_insurance"],
        social_post: {
            content: "选了便宜校外险，免赔额高，希望别进急诊。",
            comments: [{
                author: "学长",
                text: "看清急诊与网络医院。"
            }, {
                author: "网友",
                text: "理赔扯皮很耗精力。"
            }]
        }
    }]
}, {
    id: "evt_medical_claim_harvest",
    req_region: ["US"],
    req_tags: {},
    req_flags: ["health_insurance"],
    exclude_flags: [],
    base_weight: 800,
    title: "突发急症",
    desc: "你半夜突发急症被送去急诊，账单数字触目惊心，幸好事先有保险。",
    choices: [{
        text: "走保险理赔，自付一部分",
        result_text: "保险覆盖大头，你仍要付自付额与杂费，但至少不是天价全款。",
        effects: {
            money: -2,
            health: -10,
            mental: -5
        },
        add_flags: ["recovered_from_surgery"],
        social_post: {
            content: "急诊走了一趟，保险救了大命，自付额依然很疼。",
            comments: [{
                author: "家人",
                text: "人没事就好。"
            }, {
                author: "同学",
                text: "好好休息。"
            }]
        }
    }, {
        text: "安心康复，把经历当警钟",
        result_text: "你按医嘱休息，复盘保险条款与就医路径，决定以后更关注身体信号。",
        effects: {
            mental: 8,
            health: -8
        },
        social_post: {
            content: "出院了，医保条款终于看懂了……大家一定买好保险。",
            comments: [{
                author: "室友",
                text: "作业我先帮你顶着。"
            }, {
                author: "教授",
                text: "身体第一，必要时申请延期。"
            }]
        }
    }]
}, {
    id: "evt_part_time_job_legal",
    req_region: ["AU", "UK"],
    req_tags: {},
    req_flags: [],
    exclude_flags: [],
    base_weight: 85,
    title: "校外兼职机会",
    desc: "学校附近店铺招兼职，时薪写在招聘启事上。入职前务必核对签证上允许的工时与类型（各国政策不同，以官方为准）。",
    choices: [{
        text: "确认合规后接受排班",
        result_text: "你与店主对齐工时上限，开始稳定排班，现金流改善。",
        effects: {
            money: 1.2,
            proficiency: 4,
            mental: -2
        },
        add_flags: ["has_part_time_job"],
        social_post: {
            content: "找到一份合规兼职，先把工时算清楚再签字。",
            comments: [{
                author: "老板",
                text: "欢迎加入。"
            }, {
                author: "同学",
                text: "求内推。"
            }]
        }
    }, {
        text: "担心合规风险，暂不接",
        result_text: "你决定先把政策问清，转向校内岗位或更明确的 CPT/许可路径。",
        effects: {
            mental: 3
        },
        social_post: {
            content: "校外兼职先观望，把签证条款研究透再说。",
            comments: [{
                author: "国际生办公室",
                text: "欢迎预约咨询。"
            }, {
                author: "学长",
                text: "别踩灰色地带。"
            }]
        }
    }]
}, {
    id: "evt_academic_integrity_warning",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: [],
    exclude_flags: [],
    base_weight: 60,
    title: "代写小广告",
    desc: "邮箱里出现代写论文广告，声称包过查重。你刚好有一篇大作业压着线。",
    choices: [{
        text: "转发给学校举报",
        result_text: "学校提醒学术诚信红线，你也顺手清空了 temptation。",
        effects: {
            mental: 5,
            rel_prof: 3
        },
        add_flags: ["reported_scam"],
        social_post: {
            content: "收到代写广告直接举报，学术诚信不能碰。",
            comments: [{
                author: "同学",
                text: "我也收到了。"
            }, {
                author: "朋友",
                text: "别拿学位开玩笑。"
            }]
        }
    }, {
        text: "心动又停手",
        result_text: "你差点联系对方，最后还是关掉对话框。心里仍有余悸。",
        effects: {
            mental: -8
        },
        social_post: {
            content: "压力大时差点走捷径，好在忍住了。",
            comments: [{
                author: "学长",
                text: "被抓就是停学起步。"
            }, {
                author: "朋友",
                text: "需要帮忙改提纲可以找我。"
            }]
        }
    }]
}, {
    id: "evt_housing_inspection_housing",
    req_region: ["US", "AU", "HK"],
    req_tags: {},
    req_flags: [],
    exclude_flags: [],
    req_has_housing: !0,
    base_weight: 70,
    title: "带看房突袭",
    desc: "房东或中介突然带人来看房，你穿着睡衣赶 due，感到隐私被冒犯。",
    choices: [{
        text: "当场说明「需提前预约」",
        result_text: "你坚持按合同/common practice 要求提前通知，对方改约明天。",
        effects: {
            mental: 5
        },
        add_flags: ["knows_tenant_rights"],
        social_post: {
            content: "租房也要守住边界：带看请提前预约。",
            comments: [{
                author: "朋友",
                text: "支持你。"
            }, {
                author: "学长",
                text: "邮件留痕很重要。"
            }]
        }
    }, {
        text: "忍一忍让他们看完",
        result_text: "你不想让关系变僵，快速收拾让路，但心里很别扭。",
        effects: {
            mental: -6,
            health: -2
        },
        social_post: {
            content: "房东突然带人看房，尴尬到脚趾抠地。",
            comments: [{
                author: "朋友",
                text: "其实可以拒绝当场进入。"
            }, {
                author: "同学",
                text: "写邮件投诉试试。"
            }]
        }
    }]
}, {
    id: "evt_action_research_pi_whisper_seed",
    action_hook: "research",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: [],
    exclude_flags: ["lab_pi_followup_pending"],
    base_weight: 62,
    title: "导师的「顺便」",
    desc: "你刚打开实验记录，PI 路过丢来一句：「下周组会你讲进度，顺便把对照组补了。」同门都在低头装忙。",
    choices: [{
        text: "硬着头皮答应（加班预定）",
        result_text: "你挤出微笑说没问题。PI 点点头走了，留下你在心里骂自己嘴快。笔记本上多了一串待办。",
        effects: {
            mental: -8,
            rel_prof: 3,
            proficiency: 2
        },
        add_flags: ["lab_pi_followup_pending"],
        social_post: {
            content: "实验室生存法则：PI 说顺便，通常意味着通宵。",
            comments: [{
                author: "师兄",
                text: "习惯就好。"
            }]
        }
    }, {
        text: "婉拒并说明手头已有 deadline",
        result_text: "你礼貌摆出现有任务清单。PI 皱眉看了两秒：「那你自己排期。」至少今晚不用立刻爆肝。",
        effects: {
            mental: 5,
            rel_prof: -3
        },
        social_post: {
            content: "学会对「顺便」说不了，虽然心跳很快。",
            comments: [{
                author: "同学",
                text: "勇。"
            }]
        }
    }]
}, {
    id: "evt_action_research_pi_whisper_harvest",
    action_hook: "research",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: ["lab_pi_followup_pending"],
    exclude_flags: [],
    base_weight: 780,
    title: "组会上的追问",
    desc: "组会轮到你了。PI 翻到某一页数据：「对照组你补了吗？异常点怎么解释？」全场安静。",
    choices: [{
        text: "坦白还在补，请求宽限两天",
        result_text: "PI 叹气，让你会后把原始数据发群里。虽然没有当场翻车，但压力写在你脸上。",
        effects: {
            mental: -10,
            gpa: .04,
            rel_prof: 2
        },
        remove_flags: ["lab_pi_followup_pending"],
        social_post: {
            content: "组会现场：活着回来了，但社死了一半。",
            comments: [{
                author: "同门",
                text: "至少没开除。"
            }]
        }
    }, {
        text: "硬撑讲解（赌他们听不太懂）",
        result_text: "你用术语糊了一层又一层。PI 半信半疑，让你「把图重画」。你走出会议室腿是软的。",
        effects: {
            mental: -15,
            gpa: -.06,
            rel_prof: -4
        },
        remove_flags: ["lab_pi_followup_pending"],
        social_post: {
            content: "PPT 糊弄学大师，今天差点露馅。",
            comments: [{
                author: "网友",
                text: "科研常态。"
            }]
        }
    }]
}, {
    id: "evt_action_research_senior_roll",
    action_hook: "research",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: [],
    exclude_flags: [],
    base_weight: 48,
    title: "师兄的工位",
    desc: "你卡在一段异常曲线，隔壁工位的师兄探头：「这段我上周也踩过坑——要么一起看五分钟？」",
    choices: [{
        text: "接受帮忙（欠人情）",
        result_text: "他三两下指出了问题，还顺手推了一篇参考。你效率暴涨，心里记下这份情。",
        effects: {
            mental: 8,
            proficiency: 4,
            rel_prof: 2
        },
        add_tags: {
            academic_stress: -1
        },
        social_post: {
            content: "实验室也有温暖五分钟，不是只有 PUA。",
            comments: [{
                author: "师兄",
                text: "下次请咖啡。"
            }]
        }
    }, {
        text: "嘴硬说我自己能搞定",
        result_text: "师兄耸耸肩缩回椅子。你又卡了半小时，终于自己绕出来，心态有点炸。",
        effects: {
            mental: -6,
            proficiency: 1
        },
        social_post: {
            content: "倔强税已缴纳。",
            comments: [{
                author: "自己",
                text: "……其实该问的。"
            }]
        }
    }]
}, {
    id: "evt_action_pre_freerider_seed",
    action_hook: "prep_pre",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: [],
    exclude_flags: ["pre_group_slack_pending"],
    base_weight: 58,
    title: "小组 Pre 的拖后腿",
    desc: "离上台还有两天，你的组员 A 突然说：「我这部分 PPT 还没动，能不能你合并一下顺便写演讲稿？」",
    choices: [{
        text: "自己扛下合并+讲稿（保分数）",
        result_text: "你熬夜把坑填平。A 在群里发了个玫瑰表情。你盯着屏幕，只想把玫瑰换成锤子。",
        effects: {
            mental: -12,
            gpa: .06
        },
        add_flags: ["pre_group_slack_pending"],
        social_post: {
            content: "小组作业：一个人干活，一组人领奖。",
            comments: [{
                author: "同学",
                text: "真实。"
            }]
        }
    }, {
        text: "群里公开摊牌分工（可能撕破脸）",
        result_text: "你把分工表截图甩群里，语气很硬。A 终于磨磨蹭蹭交了一版，但气氛很僵。",
        effects: {
            mental: -6,
            gpa: .02
        },
        add_tags: {
            academic_stress: 1
        },
        social_post: {
            content: "撕小组作业比写 Pre 还累。",
            comments: [{
                author: "朋友",
                text: "支持你硬刚。"
            }]
        }
    }]
}, {
    id: "evt_action_pre_freerider_harvest",
    action_hook: "prep_pre",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: ["pre_group_slack_pending"],
    exclude_flags: [],
    base_weight: 790,
    title: "台上的公开处刑",
    desc: "演讲到一半，A 负责的那页图表明显错了，老师抬头问：「这是谁做的？」全场目光扫过来。",
    choices: [{
        text: "当场点名事实，拒绝背锅",
        result_text: "你冷静指出分工记录。老师皱眉批评了整组协作。分数没当场判死刑，但小组群炸了。",
        effects: {
            mental: -8,
            rel_prof: 3,
            gpa: .03
        },
        remove_flags: ["pre_group_slack_pending"],
        social_post: {
            content: "Pre 现场：背锅不如甩锅，但社死共享。",
            comments: [{
                author: "同学",
                text: "狠人。"
            }]
        }
    }, {
        text: "先含糊过去，下课再算账",
        result_text: "你用过渡句糊过去，老师没再追问。你下台手还在抖，心里把 A 拉黑了一万次。",
        effects: {
            mental: -14,
            gpa: -.05
        },
        remove_flags: ["pre_group_slack_pending"],
        social_post: {
            content: "台上微笑，台下想退课。",
            comments: [{
                author: "网友",
                text: "小组作业害人。"
            }]
        }
    }]
}, {
    id: "evt_action_homework_lms_glitch",
    action_hook: "homework",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: [],
    exclude_flags: [],
    base_weight: 46,
    title: "系统提交惊魂",
    desc: "你点提交瞬间，LMS 转圈卡住。Deadline 还剩三分钟，页面显示「未知错误」。",
    choices: [{
        text: "疯狂刷新+换浏览器抢救",
        result_text: "最后一分钟你终于提交成功，心跳快得像刚跑完体测。文件名都来不及检查。",
        effects: {
            mental: -10,
            gpa: .02
        },
        social_post: {
            content: "LMS：留学生共同的 PTSD 来源。",
            comments: [{
                author: "同学",
                text: "我也卡过。"
            }]
        }
    }, {
        text: "立刻邮件 TA 说明并附草稿截图",
        result_text: "TA 十分钟后回：收到，按时间戳算你按时。你长舒一口气，决定以后提前一天交。",
        effects: {
            mental: 5,
            rel_prof: 2
        },
        social_post: {
            content: "留痕救命，邮件比祈祷有用。",
            comments: [{
                author: "TA",
                text: "下次早点交。"
            }]
        }
    }]
}, {
    id: "evt_action_quiz_neighbor_peek",
    action_hook: "quiz",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: [],
    exclude_flags: [],
    base_weight: 44,
    title: "邻座的动静",
    desc: "Quiz 进行中，你余光瞥见邻座在抖腿、小声叹气，还试图用眼神向你求助。",
    choices: [{
        text: "装没看见，专注自己的卷子",
        result_text: "你戴上心理耳塞，写完自己的。出门时邻座脸色很难看，但那是 TA 的事了。",
        effects: {
            mental: -3,
            gpa: .03
        },
        social_post: {
            content: "Quiz 现场：边界感也是生存技能。",
            comments: [{
                author: "朋友",
                text: "别把自己搭进去。"
            }]
        }
    }, {
        text: "考后私下提醒他别这样（风险社交）",
        result_text: "你小声说了句「下次别这样」。对方尴尬笑笑。你不知道这算不算多管闲事。",
        effects: {
            mental: 5
        },
        social_post: {
            content: "多嘴一句，希望别被记恨。",
            comments: [{
                author: "网友",
                text: "难评。"
            }]
        }
    }]
}, {
    id: "evt_action_cram_fire_alarm",
    action_hook: "cram",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: [],
    exclude_flags: [],
    base_weight: 52,
    title: "图书馆的警报",
    desc: "通宵复习正上头，火警突然大作。整栋楼疏散，寒风中你抱着笔记本怀疑人生。",
    choices: [{
        text: "在楼下继续用手机背提纲",
        result_text: "手指冻僵但意志还在。半小时后解除，你回去继续卷，心态有点裂。",
        effects: {
            mental: -8,
            health: -3,
            gpa: .04
        },
        social_post: {
            content: "期末季：火警都能当课间休息。",
            comments: [{
                author: "同学",
                text: "保重身体。"
            }]
        }
    }, {
        text: "趁机买热饮回魂（破财）",
        result_text: "你在便利店买了贵价热可可，暖手也暖心。回去效率反而高一点。",
        effects: {
            money: -.15,
            mental: 6,
            gpa: .03
        },
        social_post: {
            content: "热饮是通宵复习的合法兴奋剂。",
            comments: [{
                author: "朋友",
                text: "别猝死。"
            }]
        }
    }]
}, {
    id: "evt_action_review_room_noise",
    action_hook: "review",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: [],
    exclude_flags: [],
    base_weight: 47,
    title: "公寓里的噪音",
    desc: "期末复习夜，楼上像在开运动会。你戴着耳机仍挡不住低音炮。",
    choices: [{
        text: "礼貌上楼沟通",
        result_text: "对方道歉并调小音量。你回到桌前，终于能静下心背两页。",
        effects: {
            mental: 6,
            gpa: .04
        },
        social_post: {
            content: "沟通有效的时候，世界还是温柔的。",
            comments: [{
                author: "室友",
                text: "支持你。"
            }]
        }
    }, {
        text: "忍到两点，改去 24h 自习室",
        result_text: "你打包电脑出门，路费和时间都花了，但至少能学进去。",
        effects: {
            mental: -6,
            money: -.08,
            gpa: .05
        },
        social_post: {
            content: "租房隔音：留学生随机副本。",
            comments: [{
                author: "网友",
                text: "耳塞链接求一个。"
            }]
        }
    }]
}, {
    id: "evt_action_slack_flatmate",
    action_hook: "slack",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: [],
    exclude_flags: [],
    base_weight: 42,
    title: "室友的眼神",
    desc: "你摊在沙发上躺平刷手机，室友路过叹了句：「你 assignment 真写完了？」",
    choices: [{
        text: "实话实说：没写完，但今天需要充电",
        result_text: "室友愣了下，说那一起点外卖。你获得短暂免责，愧疚仍在。",
        effects: {
            mental: 8,
            health: 2
        },
        social_post: {
            content: "躺平可耻但有用……一点点。",
            comments: [{
                author: "室友",
                text: "加油啊。"
            }]
        }
    }, {
        text: "嘴硬说当然写完了",
        result_text: "你强撑面子。回到房间打开文档，焦虑翻倍。",
        effects: {
            mental: -5
        },
        social_post: {
            content: "说谎的代价是更焦虑。",
            comments: [{
                author: "自己",
                text: "别装了。"
            }]
        }
    }]
}, {
    id: "evt_action_party_bill",
    action_hook: "party",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: [],
    exclude_flags: [],
    base_weight: 45,
    title: "卡座账单",
    desc: "狂欢结束，服务员把账单递来——有人提议 AA，但有人已经醉到失联。",
    choices: [{
        text: "先垫付再群里催（破财换体面）",
        result_text: "你刷卡时心在滴血。第二天群里转账零零碎碎到账，总算没亏太多。",
        effects: {
            money: -.25,
            mental: 5
        },
        social_post: {
            content: "Party 后遗症：AA 讨债小游戏。",
            comments: [{
                author: "朋友",
                text: "下次别垫。"
            }]
        }
    }, {
        text: "坚持当场凑齐再付",
        result_text: "场面一度尴尬，但最终凑齐了。你觉得自己像财务。",
        effects: {
            mental: -5
        },
        social_post: {
            content: "当场 AA 才是正义。",
            comments: [{
                author: "同学",
                text: "硬核。"
            }]
        }
    }]
}, {
    id: "evt_action_gym_spot",
    action_hook: "gym",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: [],
    exclude_flags: [],
    base_weight: 40,
    title: "被占的器械",
    desc: "你想练深蹲架，有人占着玩手机刷短视频。",
    choices: [{
        text: "礼貌问还要几组",
        result_text: "对方不好意思地让给你。训练继续，心情还行。",
        effects: {
            health: 3,
            mental: 4
        },
        social_post: {
            content: "健身房社交：从问组数开始。",
            comments: [{
                author: "教练",
                text: "Good. "
            }]
        }
    }, {
        text: "换器械跳过（省冲突）",
        result_text: "你改了计划练别的，有点不爽但也练到了。",
        effects: {
            health: 2,
            mental: -2
        },
        social_post: {
            content: "今日训练：Plan B。",
            comments: [{
                author: "朋友",
                text: "别内耗。"
            }]
        }
    }]
}, {
    id: "evt_action_homework_group_conflict_harvest",
    action_hook: "homework",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: ["group_conflict_pending"],
    exclude_flags: [],
    base_weight: 780,
    title: "评分风波",
    desc: "小组作业成绩公布了，老师对缺席成员做出了处理。",
    choices: [{
        text: "查看成绩",
        result_text: "你的努力被认可，小组得了高分。",
        effects: {
            gpa: .06,
            mental: 5
        },
        remove_flags: ["group_conflict_pending"]
    }, {
        text: "不看成绩",
        result_text: "你暂时逃避，但焦虑依旧存在。",
        effects: {
            mental: -2
        },
        remove_flags: ["group_conflict_pending"]
    }]
}, {
    id: "evt_action_prep_pre_coffee_addiction_once",
    action_hook: "prep_pre",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: [],
    exclude_flags: ["coffee_addiction"],
    base_weight: 50,
    title: "咖啡救命",
    desc: "你开始依赖咖啡来应对早八和复习。",
    choices: [{
        text: "每天来一杯",
        result_text: "效率提高，但你开始睡不好。",
        effects: {
            gpa: .03,
            health: -5
        },
        add_flags: ["coffee_addiction"]
    }, {
        text: "忍住不喝",
        result_text: "你很困，但身体状态还行。",
        effects: {
            mental: -3
        }
    }]
}, {
    id: "evt_action_quiz_surprise_difficulty_once",
    action_hook: "quiz",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: [],
    exclude_flags: [],
    base_weight: 45,
    title: "突袭测验",
    desc: "老师突然加了一次quiz，难度超出预期。",
    choices: [{
        text: "硬着头皮做",
        result_text: "发挥一般，但至少写完了。",
        effects: {
            gpa: -.03,
            mental: -4
        }
    }, {
        text: "摆烂交白卷",
        result_text: "你轻松了，但成绩直接归零。",
        effects: {
            gpa: -.08,
            mental: 2
        }
    }]
}, {
    id: "evt_action_cram_all_nighter_seed",
    action_hook: "cram",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: [],
    exclude_flags: ["all_nighter_pending"],
    base_weight: 65,
    title: "通宵复习",
    desc: "考试临近，你决定是否通宵冲刺。",
    choices: [{
        text: "通宵刷题",
        result_text: "你效率爆表，但身体快撑不住了。",
        effects: {
            gpa: .04,
            health: -8,
            mental: -5
        },
        add_flags: ["all_nighter_pending"]
    }, {
        text: "正常作息",
        result_text: "你复习有限，但精神状态不错。",
        effects: {
            mental: 3
        }
    }]
}, {
    id: "evt_action_cram_all_nighter_harvest",
    action_hook: "cram",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: ["all_nighter_pending"],
    exclude_flags: [],
    base_weight: 800,
    title: "考试当天",
    desc: "你带着通宵后的状态走进考场。",
    choices: [{
        text: "拼一把",
        result_text: "短期记忆救了你一命。",
        effects: {
            gpa: .05,
            mental: -3
        },
        remove_flags: ["all_nighter_pending"]
    }, {
        text: "状态崩溃",
        result_text: "你在考场上发呆了很久。",
        effects: {
            gpa: -.06,
            mental: -6
        },
        remove_flags: ["all_nighter_pending"]
    }]
}, {
    id: "evt_action_research_prof_interest_seed",
    action_hook: "research",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: [],
    exclude_flags: ["prof_interest_pending"],
    base_weight: 55,
    title: "导师注意到你",
    desc: "你在实验室的表现引起了导师的注意。",
    choices: [{
        text: "主动请教",
        result_text: "导师对你印象不错。",
        effects: {
            rel_prof: 3,
            proficiency: 2
        },
        add_flags: ["prof_interest_pending"]
    }, {
        text: "低调做事",
        result_text: "你保持了稳定发挥。",
        effects: {
            proficiency: 1
        }
    }]
}, {
    id: "evt_action_research_prof_interest_harvest",
    action_hook: "research",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: ["prof_interest_pending"],
    exclude_flags: [],
    base_weight: 820,
    title: "科研机会",
    desc: "导师邀请你加入一个项目。",
    choices: [{
        text: "加入项目",
        result_text: "你获得了宝贵经验。",
        effects: {
            proficiency: 4,
            mental: -4,
            rel_prof: 3
        },
        remove_flags: ["prof_interest_pending"]
    }, {
        text: "拒绝",
        result_text: "你选择保留时间做其他事情。",
        effects: {
            mental: 2
        },
        remove_flags: ["prof_interest_pending"]
    }]
}, {
    id: "evt_action_party_social_burn_once",
    action_hook: "party",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: [],
    exclude_flags: [],
    base_weight: 40,
    title: "社交过载",
    desc: "你连续参加了几场聚会，开始感到疲惫。",
    choices: [{
        text: "继续嗨",
        result_text: "你认识了很多人，但精力被掏空。",
        effects: {
            mental: -5,
            health: -3
        }
    }, {
        text: "回家休息",
        result_text: "你错过了一些社交机会。",
        effects: {
            mental: 2
        }
    }]
}, {
    id: "evt_action_gym_minor_injury_once",
    action_hook: "gym",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: [],
    exclude_flags: [],
    base_weight: 45,
    title: "小伤",
    desc: "你在健身时不小心拉伤了肌肉。",
    choices: [{
        text: "坚持训练",
        result_text: "你咬牙坚持，但伤势加重。",
        effects: {
            health: -6,
            mental: -2
        }
    }, {
        text: "暂停休息",
        result_text: "恢复得不错，但有点不甘心。",
        effects: {
            health: 2,
            mental: -1
        }
    }]
}, {
    id: "evt_action_slack_procrastination_once",
    action_hook: "slack",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: [],
    exclude_flags: [],
    base_weight: 55,
    title: "拖延症发作",
    desc: "你打开了短视频，本来只想看5分钟。",
    choices: [{
        text: "继续刷",
        result_text: "两个小时过去了。",
        effects: {
            mental: 2,
            gpa: -.04
        }
    }, {
        text: "立刻关掉",
        result_text: "你成功自律了一次。",
        effects: {
            mental: 3
        }
    }]
}, {
    id: "evt_action_review_grade_surprise_once",
    action_hook: "review",
    req_region: ["ALL"],
    req_tags: {},
    req_flags: [],
    exclude_flags: [],
    base_weight: 45,
    title: "成绩复盘",
    desc: "你仔细分析了最近一次考试的成绩。",
    choices: [{
        text: "认真总结",
        result_text: "你找到了自己的弱点。",
        effects: {
            gpa: .03,
            proficiency: 2
        }
    }, {
        text: "简单看看",
        result_text: "你没有深入思考。",
        effects: {
            mental: -1
        }
    }]
}];
function gt(i, e={}) {
    const t = []
      , s = []
      , n = e.rel_parents || 80
      , a = e.rel_prof || 50
      , o = e.partner
      , r = o ? o.rel || 50 : 0
      , l = c => Math.random() < c;
    switch (i) {
    case "crypto_loss":
    case "negative":
        l(.6) && s.push({
            author: "妈妈",
            text: "缺钱跟家里说，别瞎折腾。"
        }),
        o && r > 40 && l(.5) && s.push({
            author: o.name,
            text: "才几万块至于吗，下次我请你。"
        }),
        l(.3) && s.push({
            author: "玩咖室友",
            text: "韭菜竟在我身边😂"
        }),
        a > 50 && l(.3) && s.push({
            author: "导师",
            text: "少碰投机，多搞科研。"
        });
        break;
    case "crypto_win":
    case "positive":
        l(.4) && t.push("导师"),
        o && l(.5) && t.push(o.name),
        l(.5) && s.push({
            author: "卷王同学",
            text: "牛逼，带带我！"
        });
        break;
    case "party":
        l(.5) && s.push({
            author: "妈妈",
            text: "注意身体，别玩太晚。"
        }),
        l(.6) && s.push({
            author: "玩咖室友",
            text: "出来嗨啊，写什么作业！"
        }),
        o && l(.4) && s.push({
            author: o.name,
            text: "下次带上我～"
        });
        break;
    case "sick":
        n > 30 && l(.7) && s.push({
            author: "妈妈",
            text: "注意身体，别太累。"
        }),
        a > 40 && l(.4) && s.push({
            author: "导师",
            text: "好好休息，作业可以晚交。"
        });
        break;
    case "love":
        n > 50 && l(.6) && t.push("妈妈"),
        l(.5) && s.push({
            author: "玩咖室友",
            text: "恭喜脱单！请吃饭！"
        });
        break;
    case "fail_course":
        n > 30 && l(.6) && s.push({
            author: "妈妈",
            text: "下次好好考，别灰心。"
        }),
        a > 40 && l(.5) && s.push({
            author: "导师",
            text: "来 office hour 聊聊。"
        }),
        l(.3) && s.push({
            author: "卷王同学",
            text: "我也挂过，重修就好。"
        });
        break;
    case "study":
    case "neutral":
        a > 50 && l(.4) && t.push("导师"),
        l(.3) && s.push({
            author: "妈妈",
            text: "注意身体，别太累。"
        });
        break;
    default:
        l(.3) && t.push("妈妈"),
        l(.2) && s.push({
            author: "玩咖室友",
            text: "出来嗨啊！"
        })
    }
    return {
        likes: t,
        comments: s
    }
}
let $e = null
  , be = null;
function he() {
    if (typeof window > "u")
        return null;
    try {
        if (!$e) {
            const i = window.AudioContext || window.webkitAudioContext;
            if (!i)
                return null;
            $e = new i
        }
        return $e.state === "suspended" && $e.resume().catch( () => {}
        ),
        $e
    } catch {
        return null
    }
}
const H = .12;
function cs() {
    if (typeof window > "u")
        return {};
    try {
        const i = localStorage.getItem("studyAbroadSettings");
        return i ? JSON.parse(i) : {}
    } catch {
        return {}
    }
}
function hn() {
    return cs().soundEnabled !== !1
}
function ds(i="sfx") {
    if (!hn())
        return 0;
    const e = cs()
      , t = i === "music" ? "musicVolume" : "sfxVolume"
      , s = i === "music" ? 50 : 70
      , n = Number(e[t])
      , a = Number.isFinite(n) ? n : s;
    return Math.max(0, Math.min(100, a)) / 100
}
function O({type: i="sine", freq: e, duration: t, startTime: s, gain: n=H, freqEnd: a, channel: o="sfx"}) {
    const r = he();
    if (!r)
        return;
    const l = ds(o);
    if (l <= 0)
        return;
    const c = s ?? r.currentTime
      , d = r.createOscillator()
      , u = r.createGain();
    d.type = i,
    d.frequency.setValueAtTime(e, c),
    a != null && a !== e && d.frequency.exponentialRampToValueAtTime(Math.max(20, a), c + t),
    u.gain.setValueAtTime(1e-4, c),
    u.gain.exponentialRampToValueAtTime(Math.max(1e-4, n * l), c + .008),
    u.gain.exponentialRampToValueAtTime(1e-4, c + t),
    d.connect(u),
    u.connect(r.destination),
    d.start(c),
    d.stop(c + t + .02)
}
const pn = {
    airportTerminal: "/audio/sfx/airport-terminal.mp3",
    flightTakeoff: "/audio/sfx/flight-takeoff.mp3",
    flightLanding: "/audio/sfx/flight-landing.mp3",
    ukRain: "/audio/sfx/uk-rain.mp3",
    usSiren: "/audio/sfx/us-siren.mp3"
};
function Ee(i, {channel: e="sfx", loop: t=!1, volumeScale: s=1}={}) {
    if (typeof Audio > "u")
        return null;
    const n = ds(e) * s;
    if (n <= 0)
        return null;
    const a = pn[i];
    if (!a)
        return null;
    try {
        const o = new Audio(a);
        return o.loop = t,
        o.volume = Math.max(0, Math.min(1, n)),
        o.preload = "auto",
        o.play().catch( () => {}
        ),
        o
    } catch {
        return null
    }
}
function Me() {
    const i = he();
    if (!i)
        return;
    const e = i.currentTime;
    O({
        type: "triangle",
        freq: 784,
        duration: .08,
        startTime: e,
        gain: H * .62,
        channel: "sfx"
    }),
    O({
        type: "triangle",
        freq: 587.33,
        duration: .11,
        startTime: e + .12,
        gain: H * .48,
        channel: "sfx"
    })
}
function us() {
    const i = he();
    if (!i)
        return;
    const e = i.currentTime;
    O({
        type: "square",
        freq: 1450,
        duration: .022,
        startTime: e,
        gain: H * .18,
        channel: "sfx"
    })
}
function Ge({restart: i=!1}={}) {
    i && Ke(),
    !be && (be = Ee("airportTerminal", {
        channel: "music",
        loop: !0,
        volumeScale: .45
    }))
}
function Ke() {
    if (be) {
        try {
            be.pause(),
            be.currentTime = 0
        } catch {}
        be = null
    }
}
function hs() {
    Ee("flightTakeoff", {
        channel: "sfx",
        volumeScale: .85
    })
}
function ps() {
    Ee("flightLanding", {
        channel: "sfx",
        volumeScale: .85
    })
}
function ms(i) {
    if (i === "UK") {
        Ee("ukRain", {
            channel: "sfx",
            volumeScale: .7
        });
        return
    }
    i === "US" && Ee("usSiren", {
        channel: "sfx",
        volumeScale: .65
    })
}
function Z() {
    try {
        O({
            type: "sine",
            freq: 920,
            duration: .045,
            gain: H * .9,
            channel: "sfx"
        })
    } catch {}
}
function Ve() {
    try {
        const i = he();
        if (!i)
            return;
        const e = i.currentTime;
        O({
            type: "sine",
            freq: 523.25,
            duration: .07,
            startTime: e,
            gain: H * 1.1,
            channel: "sfx"
        }),
        O({
            type: "sine",
            freq: 659.25,
            duration: .09,
            startTime: e + .075,
            gain: H * 1.15,
            channel: "sfx"
        })
    } catch {}
}
function Le() {
    try {
        O({
            type: "sawtooth",
            freq: 95,
            duration: .14,
            gain: H * .85,
            freqEnd: 70,
            channel: "sfx"
        })
    } catch {}
}
function ze() {
    try {
        const i = he();
        if (!i)
            return;
        const e = i.currentTime;
        O({
            type: "triangle",
            freq: 1320,
            duration: .055,
            startTime: e,
            gain: H,
            channel: "sfx"
        }),
        O({
            type: "sine",
            freq: 1760,
            duration: .06,
            startTime: e + .05,
            gain: H * .85,
            channel: "sfx"
        })
    } catch {}
}
function gs() {
    try {
        const i = he();
        if (!i)
            return;
        const e = i.currentTime;
        O({
            type: "triangle",
            freq: 587.33,
            duration: .1,
            startTime: e,
            gain: H * .9,
            channel: "sfx"
        }),
        O({
            type: "sine",
            freq: 783.99,
            duration: .12,
            startTime: e + .12,
            gain: H,
            channel: "sfx"
        }),
        O({
            type: "sine",
            freq: 987.77,
            duration: .16,
            startTime: e + .24,
            gain: H * 1.05,
            channel: "sfx"
        })
    } catch {}
}
function fs() {
    try {
        const i = he();
        if (!i)
            return;
        const e = i.currentTime;
        O({
            type: "triangle",
            freq: 220,
            duration: .16,
            startTime: e,
            gain: H * .6,
            freqEnd: 277.18,
            channel: "sfx"
        }),
        O({
            type: "sine",
            freq: 329.63,
            duration: .22,
            startTime: e + .1,
            gain: H * .72,
            freqEnd: 392,
            channel: "sfx"
        }),
        O({
            type: "sine",
            freq: 523.25,
            duration: .26,
            startTime: e + .24,
            gain: H * .85,
            channel: "sfx"
        })
    } catch {}
}
function ys() {
    try {
        const i = he();
        if (!i)
            return;
        const e = i.currentTime;
        O({
            type: "triangle",
            freq: 1046.5,
            duration: .04,
            startTime: e,
            gain: H * .28,
            channel: "sfx"
        }),
        O({
            type: "triangle",
            freq: 1318.51,
            duration: .06,
            startTime: e + .05,
            gain: H * .24,
            channel: "sfx"
        })
    } catch {}
}
const Da = {
    playClick: Z,
    playSuccess: Ve,
    playError: Le,
    playAlert: ze,
    playBoardingChime: gs,
    playLandingTone: fs,
    playNotification: ys,
    playBroadcastCue: Me,
    playTypeTick: us,
    playTakeoffSfx: hs,
    playLandingSfx: ps,
    playRegionalEventSfx: ms,
    startAirportAmbience: Ge,
    stopAirportAmbience: Ke
};
function _s(i) {
    return `${i}`
}
const mn = 2
  , gn = 12
  , fn = 4
  , yn = 1
  , _n = 900;
class C {
    constructor(e, t, s, n=null) {
        this.gameState = e,
        this.logger = t,
        this.modal = s,
        this.diseaseSystem = n,
        this.narrativeEventsFromSupabase = [],
        this.narrativeEventsSource = "local",
        this.narrativeEventsStats = null,
        this.narrativeLoaded = !1,
        this.narrativeLoadPromise = null,
        this.auditLogged = !1,
        this.narrativeModalQueue = [],
        this.narrativeModalActive = !1,
        this.narrativeModalDrainTimer = null,
        this.pendingActionEventKeys = new Set
    }
    async loadNarrativeEvents() {
        return this.narrativeLoadPromise ? this.narrativeLoadPromise : (this.narrativeLoadPromise = this._loadNarrativeEventsInternal(),
        this.narrativeLoadPromise)
    }
    async _loadNarrativeEventsInternal() {
        const e = typeof AbortController < "u" ? new AbortController : null
          , t = e && typeof window < "u" ? window.setTimeout( () => e.abort(), _n) : null;
        try {
            const s = await fetch(_s("/api/events/narrative"), {
                method: "GET",
                signal: e == null ? void 0 : e.signal
            });
            if (!s.ok) {
                const o = await s.text();
                throw new Error(o || `Narrative events API failed: ${s.status}`)
            }
            const n = await s.json()
              , a = (Array.isArray(n == null ? void 0 : n.events) ? n.events : []).filter(o => o && typeof o == "object" && String(o.id ?? "").trim() !== "").map(o => ({
                ...o,
                id: String(o.id)
            }));
            return this.narrativeEventsFromSupabase = a,
            this.narrativeEventsSource = (n == null ? void 0 : n.source) === "supabase" ? "supabase" : "local",
            this.narrativeEventsStats = (n == null ? void 0 : n.stats) || null,
            this.narrativeLoaded = !0,
            this._logNarrativeAudit(),
            this.narrativeEventsFromSupabase
        } catch (s) {
            return this.narrativeEventsFromSupabase = [],
            this.narrativeEventsSource = "local",
            this.narrativeEventsStats = null,
            this.narrativeLoaded = !0,
            this._logNarrativeAudit(s),
            this.narrativeEventsFromSupabase
        } finally {
            t != null && typeof window < "u" && window.clearTimeout(t)
        }
    }
    _logNarrativeAudit(e=null) {
        if (this.auditLogged)
            return;
        this.auditLogged = !0;
        const t = this._countActionHooks(ve)
          , s = this._countActionHooks(this.narrativeEventsFromSupabase)
          , n = Object.keys(t).filter(r => r !== "__none__" && (s[r] || 0) < t[r]).map(r => `${r}(${s[r] || 0}/${t[r]})`)
          , a = this._countRegions(ve)
          , o = this._countRegions(this.narrativeEventsFromSupabase);
        e ? console.warn(`[事件库] Supabase 加载失败，已回退本地 JSON：${e.message || e}`) : console.info(`[事件库] ${this.narrativeEventsSource === "supabase" ? "后端代理 Supabase" : "本地 JSON"} 事件 ${this.narrativeEventsFromSupabase.length} 条；本地 action 事件 ${Object.entries(t).filter( ([r]) => r !== "__none__").reduce( (r, [,l]) => r + l, 0)} 条。`),
        n.length > 0 && console.info(`[事件库审计] Supabase 缺失 action 事件：${n.join(", ")}`),
        this.narrativeEventsFromSupabase.length > 0 && console.info(`[事件库审计] 地区覆盖（Supabase）：${this._formatCountMap(o)}；本地：${this._formatCountMap(a)}`)
    }
    _countActionHooks(e) {
        const t = {};
        for (const s of e || []) {
            const n = s != null && s.action_hook ? String(s.action_hook).trim() : "__none__";
            t[n] = (t[n] || 0) + 1
        }
        return t
    }
    _countRegions(e) {
        const t = {};
        for (const s of e || [])
            for (const n of (s == null ? void 0 : s.req_region) || [])
                t[n] = (t[n] || 0) + 1;
        return t
    }
    _formatCountMap(e) {
        return Object.entries(e || {}).sort( (s, n) => n[1] - s[1]).map( ([s,n]) => `${s}:${n}`).join(" | ") || "空"
    }
    static injectDynamicData(e, t) {
        var h;
        if (e == null || typeof e != "string")
            return e;
        if (e === "")
            return "";
        const s = t || {}
          , n = s.region === "HKSG" ? "HK" : s.region
          , a = ((h = I[n]) == null ? void 0 : h.name) || n || "当地";
        let o;
        s.partner && s.partner.name ? o = String(s.partner.name) : o = (s.monthTotal || 0) % 2 === 0 ? "某个刚认识的留学生" : "群里的网友";
        const r = Number(s.money)
          , l = Number.isFinite(r) && r < 10 ? "干瘪的钱包" : "银行卡余额"
          , c = typeof s.gpa == "number" && !Number.isNaN(s.gpa) ? s.gpa.toFixed(2) : String(s.gpa ?? "")
          , u = (I[n] || I.US).symbol || "$";
        return e.replace(/\{region\}/g, a).replace(/\{partner\}/g, o).replace(/\{money\}/g, l).replace(/\{gpa\}/g, c).replace(/\{currency\}/g, u)
    }
    _injectDynamicEventTexts(e, t) {
        const s = ["title", "description", "story", "prelude", "moment_post"];
        for (const n of s)
            e[n] == null || e[n] === "" || (e[n] = C.injectDynamicData(String(e[n]), t));
        if (e.social_post && typeof e.social_post == "object") {
            const n = {
                ...e.social_post
            };
            n.content != null && n.content !== "" && (n.content = C.injectDynamicData(String(n.content), t)),
            Array.isArray(n.comments) && (n.comments = n.comments.map(a => ({
                author: (a == null ? void 0 : a.author) != null && a.author !== "" ? C.injectDynamicData(String(a.author), t) : "NPC",
                text: (a == null ? void 0 : a.text) != null && a.text !== "" ? C.injectDynamicData(String(a.text), t) : ""
            }))),
            e.social_post = n
        }
    }
    _recordSeenEventId(e) {
        const t = e == null ? void 0 : e.id
          , s = t != null ? String(t).trim() : "";
        if (!s)
            return;
        const n = this.gameState.state.seen_event_ids || [];
        n.includes(s) || this.gameState.update({
            seen_event_ids: [...n, s]
        })
    }
    async triggerRandomEvent() {
        await this.loadNarrativeEvents();
        const e = this.drawNarrativeEvent("month");
        if (!e) {
            this.logger("本月没有合适的随机事件。", "log-event");
            return
        }
        this._presentNarrativeEvent(e)
    }
    async maybeTriggerActionEvent(e) {
        const t = e != null ? String(e).trim() : "";
        if (!t || this.pendingActionEventKeys.has(t))
            return;
        const s = Number(te.actionLinkedEventProbability)
          , n = Number.isFinite(s) && s > 0 && s <= 1 ? s : .14;
        if (!(Math.random() >= n)) {
            this.pendingActionEventKeys.add(t);
            try {
                await this.loadNarrativeEvents();
                const a = this.gameState.state
                  , r = this.narrativeEventsSource === "supabase" ? this.narrativeEventsFromSupabase : ve;
                let l = this._filterNarrativeDeckForAction(a, t, r);
                if (l = this._filterNarrativeCooldown(a, l, {
                    forAction: !0
                }),
                !l.length)
                    return;
                const c = this._pickWeightedEvent(l, a);
                if (!c)
                    return;
                c._narrativeDrawMonthTotal = Number(a.monthTotal) || 0,
                this._presentNarrativeEvent(c)
            } catch (a) {
                console.warn(`[event-db] action event skipped for ${t}:`, a)
            } finally {
                this.pendingActionEventKeys.delete(t)
            }
        }
    }
    drawNarrativeEvent(e="month") {
        const t = this.gameState.state
          , n = e === "month" && this.narrativeEventsSource === "supabase" ? this.narrativeEventsFromSupabase : ve;
        let a = this._filterNarrativeDeck(t, n);
        if (a = this._filterNarrativeCooldown(t, a),
        !a.length)
            return null;
        const o = this._pickWeightedEvent(a, t);
        return o && (o._narrativeDrawMonthTotal = Number(t.monthTotal) || 0),
        o
    }
    _filterNarrativeCooldown(e, t, s={}) {
        const n = Number(e.monthTotal) || 0
          , a = e.narrative_event_stats || {}
          , o = s.forAction ? fn : mn
          , r = s.forAction ? yn : gn;
        return t.filter(l => {
            const c = l.id != null ? String(l.id) : "";
            if (!c)
                return !0;
            const d = a[c];
            return d ? !(d.count >= o || d.lastMonth != null && n - Number(d.lastMonth) < r) : !0
        }
        )
    }
    static _playerHasHousing() {
        var e;
        try {
            const t = typeof window < "u" ? window.housingSystem : null;
            return !!((e = t == null ? void 0 : t.getCurrentHousing) != null && e.call(t))
        } catch {
            return !1
        }
    }
    static _matchesRequirementValue(e, t) {
        if (e == null)
            return !0;
        const n = (Array.isArray(e) ? e : [e]).map(o => String(o ?? "").trim().toLowerCase()).filter(Boolean);
        if (n.length === 0 || n.includes("all"))
            return !0;
        const a = String(t ?? "").trim().toLowerCase();
        return a ? n.includes(a) : !1
    }
    static _matchesStateRequirements(e, t, s, n, a, o) {
        var r, l;
        if (!C._matchesRequirementValue(e.req_region, s) || !C._matchesRequirementValue(e.req_major, t.major) || !C._matchesRequirementValue(e.req_current_job_work_type, (r = t.current_job) == null ? void 0 : r.workTypeId) || !C._matchesRequirementValue(e.req_current_job_id, (l = t.current_job) == null ? void 0 : l.id) || e.req_has_housing === !0 && !n || e.req_has_housing === !1 && n)
            return !1;
        for (const c of e.exclude_flags || [])
            if (o.has(c))
                return !1;
        for (const c of e.req_flags || [])
            if (!o.has(c))
                return !1;
        for (const [c,d] of Object.entries(e.req_tags || {}))
            if ((a[c] || 0) < d)
                return !1;
        return !0
    }
    _filterNarrativeDeck(e, t=ve) {
        const s = e.tags || {}
          , n = new Set(e.flags || [])
          , a = e.region === "HKSG" ? "HK" : e.region
          , o = C._playerHasHousing();
        return t.filter(r => r.action_hook ? !1 : C._matchesStateRequirements(r, e, a, o, s, n))
    }
    _filterNarrativeDeckForAction(e, t, s=ve) {
        const n = e.tags || {}
          , a = new Set(e.flags || [])
          , o = e.region === "HKSG" ? "HK" : e.region
          , r = C._playerHasHousing()
          , l = String(t || "").trim();
        return l ? s.filter(c => String(c.action_hook || "").trim() !== l ? !1 : C._matchesStateRequirements(c, e, o, r, n, a)) : []
    }
    _weightForEvent(e, t) {
        const s = t.tags || {};
        let n = Number(e.base_weight) || 0;
        for (const a of Object.keys(e.req_tags || {}))
            n += (s[a] || 0) * 10;
        return Math.max(0, n)
    }
    _pickWeightedEvent(e, t) {
        const s = e.map(o => this._weightForEvent(o, t))
          , n = s.reduce( (o, r) => o + r, 0);
        if (n <= 0)
            return e[Math.floor(Math.random() * e.length)] || null;
        let a = Math.random() * n;
        for (let o = 0; o < e.length; o++)
            if (a -= s[o],
            a <= 0)
                return e[o];
        return e[e.length - 1]
    }
    _presentNarrativeEvent(e) {
        if (this._shouldQueueNarrativeModal()) {
            this.narrativeModalQueue.push(e),
            this._scheduleNarrativeModalDrain();
            return
        }
        this._showNarrativeEventNow(e)
    }
    _shouldQueueNarrativeModal() {
        var t;
        if (this.narrativeModalActive)
            return !0;
        const e = (t = this.modal) == null ? void 0 : t.modalElement;
        return e ? e.style.display && e.style.display !== "none" : !1
    }
    _scheduleNarrativeModalDrain() {
        this.narrativeModalDrainTimer || (this.narrativeModalDrainTimer = setTimeout( () => {
            if (this.narrativeModalDrainTimer = null,
            !this.narrativeModalQueue.length)
                return;
            if (this._shouldQueueNarrativeModal()) {
                this._scheduleNarrativeModalDrain();
                return
            }
            const e = this.narrativeModalQueue.shift();
            e && this._showNarrativeEventNow(e)
        }
        , 120))
    }
    _showNarrativeEventNow(e) {
        const t = this.gameState.state;
        this.narrativeModalActive = !0;
        const s = t.region === "HKSG" ? "HK" : t.region;
        (Array.isArray(e.req_region) ? e.req_region : []).includes(s) && (s === "UK" || s === "US") && ms(s);
        const a = C.injectDynamicData(e.title, t)
          , o = C.injectDynamicData(e.desc, t)
          , r = `<div class="story-text">${this._escapeModalHtml(o)}</div>`
          , l = (e.choices || []).map(c => ({
            text: C.injectDynamicData(c.text, t),
            keepOpen: !0,
            cb: () => this._openNarrativeConsequenceModal(e, c)
        }));
        this.modal.showCustom(`[事件] ${this._escapeModalHtml(a)}`, r, l)
    }
    _escapeModalHtml(e) {
        if (e == null)
            return "";
        const t = document.createElement("div");
        return t.textContent = e,
        t.innerHTML
    }
    _openNarrativeConsequenceModal(e, t) {
        const s = this.gameState.state
          , n = C.injectDynamicData(String(t.text || ""), s)
          , a = t.result_text != null && String(t.result_text).trim() !== "" ? C.injectDynamicData(String(t.result_text), s) : `你选择了「${n}」。伴随着时间的流逝，这产生了一些不可逆的后果……`
          , o = Mt(t.effects || {}, s)
          , r = this._buildNarrativeConsequenceEffectsHtml(o, s)
          , l = C._narrativeEffectsTone(o)
          , c = l === "bad" ? "type-negative" : l === "good" ? "type-positive" : "type-neutral"
          , d = t.result_title != null && String(t.result_title).trim() !== "" ? C.injectDynamicData(String(t.result_title), s) : "事已至此…";
        let u = "";
        if (t.social_post && typeof t.social_post == "object" && t.social_post.content) {
            const f = {
                social_post: {
                    ...t.social_post
                }
            };
            this._injectDynamicEventTexts(f, s);
            const b = f.social_post.content;
            u = `
            <div class="narrative-social-preview" role="region" aria-label="朋友圈预览">
                <div class="narrative-social-preview-label">📱 你在朋友圈发布了新动态</div>
                <div class="narrative-social-preview-content">${this._escapeModalHtml(b)}</div>
            </div>`
        }
        const h = `
            <div class="narrative-consequence">
                <div class="narrative-consequence-story story-text">${this._escapeModalHtml(a)}</div>
                ${r || '<p class="narrative-consequence-emptyfx">本次选择没有直接的数值变化。</p>'}
                ${u}
            </div>
        `
          , m = String(e.id || "").includes("_harvest")
          , p = t.social_post && typeof t.social_post == "object" && String(t.social_post.content || "").trim() !== ""
          , g = [{
            text: "[ 接受现实 ]",
            cb: () => this._commitNarrativeChoice(e, t)
        }];
        m && p && g.push({
            text: "看看评论区",
            cb: () => {
                var f;
                this._commitNarrativeChoice(e, t),
                typeof window < "u" && ((f = window.game) != null && f.navigateSub) && window.game.navigateSub("phone", "social")
            }
        }),
        this.modal.showCustom(`⏳ ${this._escapeModalHtml(d)}`, h, g, c)
    }
    _commitNarrativeChoice(e, t) {
        const s = Mt(t.effects || {}, this.gameState.state);
        this._applyRegularEffects({
            effects: s
        });
        const n = this.gameState.state
          , a = {
            ...n.tags || {}
        };
        for (const [d,u] of Object.entries(t.add_tags || {}))
            a[d] = (a[d] || 0) + u;
        let o = [...n.flags || []];
        for (const d of t.add_flags || [])
            o.includes(d) || o.push(d);
        for (const d of t.remove_flags || [])
            o = o.filter(u => u !== d);
        const r = {
            tags: a,
            flags: o
        }
          , l = t.add_buff;
        if (l && typeof l == "object" && String(l.id || "").trim()) {
            const d = Array.isArray(n.narrativeBuffs) ? n.narrativeBuffs : []
              , u = String(l.id).trim()
              , h = {
                id: u,
                name: String(l.name || u),
                desc: String(l.desc || ""),
                duration: Math.max(1, Math.floor(Number(l.duration) || 1)),
                type: l.type === "buff" ? "buff" : "debuff"
            };
            r.narrativeBuffs = [h, ...d.filter(m => String((m == null ? void 0 : m.id) || "") !== u)]
        }
        this.gameState.update(r),
        this.gameState.updateHistory("increment", ["eventsTriggered", 1]);
        const c = e.id != null ? String(e.id) : "";
        if (c) {
            const d = e._narrativeDrawMonthTotal != null ? Number(e._narrativeDrawMonthTotal) : Number(this.gameState.state.monthTotal) || 0
              , u = this.gameState.state.narrative_event_stats || {}
              , h = u[c] || {
                count: 0
            };
            this.gameState.update({
                narrative_event_stats: {
                    ...u,
                    [c]: {
                        count: h.count + 1,
                        lastMonth: d
                    }
                }
            })
        }
        if (this._recordSeenEventId(e),
        t.social_post && typeof t.social_post == "object" && t.social_post.content) {
            const d = {
                title: e.title,
                description: e.desc,
                story: e.desc,
                type: "neutral",
                effects: s,
                moment_post: null,
                social_post: t.social_post
            };
            this._injectDynamicEventTexts(d, this.gameState.state),
            this._postToFeed(d)
        }
        this._addNarrativeEventReceipt(e, t, s),
        this.modal.close(),
        this.narrativeModalActive = !1,
        this._scheduleNarrativeModalDrain(),
        this._playSettlementSound({
            effects: s
        }),
        window.game && typeof window.game.refreshUI == "function" && window.game.refreshUI()
    }
    _addNarrativeEventReceipt(e, t, s) {
        if (!this.gameState || typeof this.gameState.addOutcomeLogNarrative != "function")
            return;
        const n = this.gameState.state || {}
          , a = C.injectDynamicData(String((e == null ? void 0 : e.title) || "随机事件"), n)
          , o = C.injectDynamicData(String((t == null ? void 0 : t.text) || "接受现实"), n)
          , r = this._buildNarrativeReceiptEffectsTag(s, n);
        this.gameState.addOutcomeLogNarrative({
            actionKey: `narrative:${String((e == null ? void 0 : e.action_hook) || (e == null ? void 0 : e.id) || "event")}`,
            type: "event",
            summary: `随机事件：${a}`,
            statusLine: `你选择了：${o}`,
            effectsTag: r
        })
    }
    _buildNarrativeReceiptEffectsTag(e, t) {
        if (!e || typeof e != "object")
            return "";
        const s = t.region === "HKSG" ? "HK" : t.region
          , n = []
          , a = o => `${o > 0 ? "+" : ""}${o}`;
        if (e.money !== void 0 && e.money !== 0) {
            const o = st(e.money, s);
            n.push(`💰 ${o >= 0 ? "+" : ""}${w(o, s)}`)
        }
        return e.energy !== void 0 && e.energy !== 0 && n.push(`⚡ ${a(e.energy)}`),
        e.mental !== void 0 && e.mental !== 0 && n.push(`🧠 ${a(e.mental)}`),
        e.health !== void 0 && e.health !== 0 && n.push(`❤️ ${a(e.health)}`),
        e.gpa !== void 0 && e.gpa !== 0 && n.push(`🎓 GPA ${a(e.gpa)}`),
        e.proficiency !== void 0 && e.proficiency !== 0 && n.push(`💼 熟练 ${a(e.proficiency)}`),
        e.rel_prof !== void 0 && e.rel_prof !== 0 && n.push(`导师 ${a(e.rel_prof)}`),
        e.rel_parents !== void 0 && e.rel_parents !== 0 && n.push(`父母 ${a(e.rel_parents)}`),
        e.rel_partner !== void 0 && e.rel_partner !== 0 && n.push(`伴侣 ${a(e.rel_partner)}`),
        n.join(" | ")
    }
    _buildNarrativeConsequenceEffectsHtml(e, t) {
        if (!e || typeof e != "object")
            return "";
        const s = t.region === "HKSG" ? "HK" : t.region
          , n = []
          , a = (o, r, l) => {
            const c = l ? "eff-green" : "eff-red";
            n.push(`<span class="effect-tag narrative-fx-big ${c}">${o} ${r}</span>`)
        }
        ;
        if (e.money !== void 0 && e.money !== 0) {
            const o = st(e.money, s);
            a("💰", `${o >= 0 ? "+" : ""}${w(o, s)}`, o >= 0)
        }
        if (e.gpa !== void 0 && e.gpa !== 0) {
            const o = e.gpa;
            a("🎓", `GPA ${o > 0 ? "+" : ""}${o}`, o > 0)
        }
        if (e.mental !== void 0 && e.mental !== 0) {
            const o = e.mental;
            a("🧠", `心态 ${o > 0 ? "+" : ""}${o}`, o > 0)
        }
        if (e.energy !== void 0 && e.energy !== 0) {
            const o = e.energy;
            a("⚡", `体力 ${o > 0 ? "+" : ""}${o}`, o > 0)
        }
        if (e.health !== void 0 && e.health !== 0) {
            const o = e.health;
            a("❤️", `健康 ${o > 0 ? "+" : ""}${o}`, o > 0)
        }
        if (e.proficiency !== void 0 && e.proficiency !== 0) {
            const o = e.proficiency;
            a("💼", `岗位熟练度 ${o > 0 ? "+" : ""}${o}`, o > 0)
        }
        if (e.rel_prof !== void 0 && e.rel_prof !== 0) {
            const o = e.rel_prof;
            a("👨‍🏫", `导师 ${o > 0 ? "+" : ""}${o}`, o > 0)
        }
        if (e.rel_parents !== void 0 && e.rel_parents !== 0) {
            const o = e.rel_parents;
            a("👪", `父母 ${o > 0 ? "+" : ""}${o}`, o > 0)
        }
        if (e.rel_partner !== void 0 && e.rel_partner !== 0) {
            const o = e.rel_partner;
            a("💕", `伴侣 ${o > 0 ? "+" : ""}${o}`, o > 0)
        }
        return n.length === 0 ? "" : `<div class="narrative-consequence-effects">${n.join("")}</div>`
    }
    static _narrativeEffectsTone(e) {
        if (!e || typeof e != "object")
            return "neutral";
        const t = ["money", "mental", "energy", "health", "gpa", "proficiency", "rel_prof", "rel_parents", "rel_partner"];
        let s = 0
          , n = 0;
        for (const a of t) {
            const o = e[a];
            typeof o != "number" || o === 0 || (o > 0 ? s++ : n++)
        }
        return n > s ? "bad" : s > n ? "good" : "neutral"
    }
    _applyRegularEffects(e) {
        const t = this.gameState.state
          , s = e.effects || {}
          , n = {};
        if (s.gpa !== void 0 && (n.semester_score = ls(t.semester_score ?? 80, s.gpa)),
        s.money !== void 0) {
            const a = st(s.money, t.region);
            n.money = t.money + a
        }
        if (s.mental !== void 0 && (n.mental = t.mental + s.mental),
        s.energy !== void 0 && (n.energy = t.energy + s.energy),
        s.health !== void 0 && (n.health = t.health + s.health),
        s.proficiency !== void 0 && t.current_job && typeof t.current_job == "object") {
            const a = {
                ...t.current_job
            }
              , o = Math.min(100, Math.max(0, (Number(a.proficiency) || 0) + s.proficiency));
            a.proficiency = Math.floor(o),
            n.current_job = a
        }
        s.rel_prof !== void 0 && (n.rel_prof = Math.min(100, Math.max(0, t.rel_prof + s.rel_prof))),
        s.rel_parents !== void 0 && (n.rel_parents = Math.min(100, Math.max(0, t.rel_parents + s.rel_parents))),
        s.rel_partner !== void 0 && t.partner && (t.partner.rel || (t.partner.rel = 50),
        t.partner.rel = Math.min(100, Math.max(0, t.partner.rel + s.rel_partner))),
        Object.keys(n).length > 0 && this.gameState.update(n)
    }
    _playSettlementSound(e) {
        const t = e == null ? void 0 : e.effects;
        if (!t || typeof t != "object")
            return;
        if (t.disease || e.tragedy) {
            Le();
            return
        }
        const s = ["money", "mental", "energy", "health", "gpa", "proficiency", "rel_prof", "rel_parents", "rel_partner"];
        let n = !1
          , a = !1;
        for (const o of s) {
            const r = t[o];
            typeof r != "number" || r === 0 || (r > 0 && (n = !0),
            r < 0 && (a = !0))
        }
        a ? Le() : n && Ve()
    }
    _postToFeed(e) {
        const t = e.social_post;
        if (t && typeof t == "object" && t.content) {
            const c = Array.isArray(t.likes) ? t.likes : []
              , d = Array.isArray(t.comments) ? t.comments : [];
            this.gameState.addFeedPost({
                author: "me",
                content: String(t.content),
                likes: c,
                comments: d
            });
            return
        }
        const s = e.moment_post || e.momentPost
          , n = this.gameState.state
          , a = s || (e.type === "negative" ? `呜呜呜${e.title}……` : e.type === "positive" ? `哈哈哈${e.title}！` : `唉，${e.title}。`)
          , o = e.tragedy === "failed" ? "fail_course" : e.type
          , {likes: r, comments: l} = gt(o, n);
        this.gameState.addFeedPost({
            author: "me",
            content: a,
            likes: r,
            comments: l
        })
    }
}
function Ct(i, e) {
    return !i || i.cost === void 0 ? 0 : A(i.cost * 1e3, e)
}
class Ua {
    constructor(e, t) {
        this.gameState = e,
        this.modal = t,
        this.curedDiseases = []
    }
    infectRandom(e="random") {
        const t = e === "party" ? cn : ln
          , s = t[Math.floor(Math.random() * t.length)]
          , n = ue[s];
        if (n && !this.gameState.state.diseases.includes(s)) {
            this.gameState.state.diseases.push(s),
            this.gameState.updateHistory("addToArray", ["diseasesGot", s]),
            this.gameState.state.tragedies && s === "hiv" && (this.gameState.state.tragedies.hiv = !0);
            const a = e === "party" ? "在狂欢中感染了" : "感染了";
            this.modal.show("🏥 确诊通知", `很遗憾，你${a}：<b style="color:var(--warn)">${n.name}</b>。<br>${n.desc}`);
            const {likes: o, comments: r} = gt("sick", this.gameState.state);
            this.gameState.addFeedPost({
                author: "me",
                content: `生病了😷 ${n.name}`,
                likes: o,
                comments: r
            })
        }
    }
    infect(e) {
        const t = ue[e];
        if (!t || this.gameState.state.diseases.includes(e))
            return;
        this.gameState.state.diseases.push(e),
        this.gameState.updateHistory("addToArray", ["diseasesGot", e]),
        this.gameState.state.tragedies && e === "hiv" && (this.gameState.state.tragedies.hiv = !0),
        this.modal.show("🏥 确诊通知", `很遗憾，你感染了：<b style="color:var(--warn)">${t.name}</b>。<br>${t.desc}`);
        const {likes: s, comments: n} = gt("sick", this.gameState.state);
        this.gameState.addFeedPost({
            author: "me",
            content: `生病了😷 ${t.name}`,
            likes: s,
            comments: n
        })
    }
    cure(e) {
        const t = ue[e];
        if (!t)
            return;
        const s = this.gameState.state;
        if (!s.diseases.includes(e)) {
            alert("你没有这个疾病！");
            return
        }
        const n = Ct(t, s.region);
        if (s.money < n) {
            alert("钱不够！需要 " + w(n, s.region));
            return
        }
        this.gameState.update({
            money: s.money - n
        }),
        t.cure === 0 ? this.modal.show("❌ 无法治愈", `${t.name} 目前无法治愈，只能控制症状。`) : Math.random() < t.cure ? (this.gameState.state.diseases = s.diseases.filter(a => a !== e),
        this.curedDiseases.includes(e) || this.curedDiseases.push(e),
        this.modal.show("✨ 康复", `${t.name} 已治愈！`)) : this.modal.show("❌ 治疗失败", "花了钱但没治好，医生建议转院。")
    }
    cureAll() {
        const e = this.gameState.state;
        if (e.diseases.length === 0) {
            alert("你没有患病，无需治疗。");
            return
        }
        const t = e.diseases.reduce( (a, o) => a + Ct(ue[o], e.region), 0);
        if (e.money < t) {
            alert(`钱不够！需要 ${w(t, e.region)} 才能全部治疗。`);
            return
        }
        this.gameState.update({
            money: e.money - t
        });
        let s = 0;
        const n = [...e.diseases];
        for (const a of n) {
            const o = ue[a];
            o.cure !== 0 && Math.random() < o.cure && (e.diseases = e.diseases.filter(r => r !== a),
            this.curedDiseases.includes(a) || this.curedDiseases.push(a),
            s++)
        }
        s > 0 ? this.modal.show("✨ 康复", `成功治愈 ${s} 种疾病！`) : this.modal.show("❌ 全部失败", "全部治疗都失败了...")
    }
    hasDisease(e) {
        return this.gameState.state.diseases.includes(e)
    }
}
const G = class G {
    constructor(e, t) {
        this.gameState = e,
        this.achievementSystem = t,
        this.currentVersion = "5.0.0"
    }
    static detectHasSeamlessAutoSave() {
        try {
            return localStorage.getItem(G.SEAMLESS_KEY) != null || localStorage.getItem(G.LEGACY_AUTO_KEY) != null
        } catch {
            return !1
        }
    }
    static peekSeamlessAutoSaveProgress() {
        var e, t;
        try {
            let s = localStorage.getItem(G.SEAMLESS_KEY);
            if (s || (s = localStorage.getItem(G.LEGACY_AUTO_KEY)),
            !s)
                return null;
            const n = JSON.parse(s)
              , a = (e = n == null ? void 0 : n.state) == null ? void 0 : e.year
              , o = (t = n == null ? void 0 : n.state) == null ? void 0 : t.month;
            return typeof a != "number" || typeof o != "number" ? null : {
                year: a,
                month: o
            }
        } catch {
            return null
        }
    }
    static clearSeamlessAutoSave() {
        try {
            return localStorage.removeItem(G.SEAMLESS_KEY),
            localStorage.removeItem(G.LEGACY_AUTO_KEY),
            !0
        } catch {
            return !1
        }
    }
    parseVersion(e) {
        const t = (e || "0.0.0").split(".").map(Number);
        return {
            major: t[0] || 0,
            minor: t[1] || 0,
            patch: t[2] || 0
        }
    }
    migrateState(e) {
        const t = this.parseVersion(e.version)
          , s = this.parseVersion(this.currentVersion);
        if (t.major > s.major || t.major === s.major && t.minor >= s.minor)
            return e;
        const n = JSON.parse(JSON.stringify(e));
        return t.major < 5 && (n.state.inventory || (n.state.inventory = []),
        n.state.tragedies || (n.state.tragedies = {
            hiv: !1,
            robbed: !1,
            failed: !1,
            bankrupt: !1
        }),
        n.state.history || (n.state.history = {})),
        n.version = this.currentVersion,
        n
    }
    writeSeamlessAutoSave() {
        var e, t;
        try {
            const s = {
                state: this.gameState.getSnapshot(),
                achievements: this.achievementSystem.getUnlockedAchievements(),
                timestamp: Date.now(),
                version: this.currentVersion,
                portfolio: typeof window < "u" && ((e = window.stockSystem) != null && e.getPortfolioForSave) ? window.stockSystem.getPortfolioForSave() : void 0,
                stockState: typeof window < "u" && ((t = window.stockSystem) != null && t.getStateForSave) ? window.stockSystem.getStateForSave() : void 0
            };
            localStorage.setItem(G.SEAMLESS_KEY, JSON.stringify(s));
            try {
                localStorage.getItem(G.LEGACY_AUTO_KEY) && localStorage.removeItem(G.LEGACY_AUTO_KEY)
            } catch {}
            return !0
        } catch (s) {
            return console.error("无缝自动存档失败:", s),
            !1
        }
    }
    loadSeamlessAutoSave() {
        var e, t, s;
        try {
            let n = localStorage.getItem(G.SEAMLESS_KEY);
            if (n || (n = localStorage.getItem(G.LEGACY_AUTO_KEY),
            n && (localStorage.setItem(G.SEAMLESS_KEY, n),
            localStorage.removeItem(G.LEGACY_AUTO_KEY))),
            !n)
                return null;
            const a = JSON.parse(n)
              , o = this.migrateState(a);
            return this.gameState.loadState(o.state),
            o.achievements && this.achievementSystem.loadAchievements(o.achievements),
            typeof window < "u" && ((e = window.stockSystem) != null && e.loadPortfolioFromSave) && (o.portfolio ? window.stockSystem.loadPortfolioFromSave(o.portfolio) : window.stockSystem.resetPortfolioForNewRun(),
            o.stockState && typeof o.stockState == "object" && Object.keys(o.stockState).length > 0 && ((t = window.stockSystem) != null && t.loadStateFromSave) ? window.stockSystem.loadStateFromSave(o.stockState) : typeof ((s = window.stockSystem) == null ? void 0 : s.syncPricesFromRegion) == "function" && window.stockSystem.syncPricesFromRegion()),
            o
        } catch (n) {
            return console.error("读取自动存档失败:", n),
            null
        }
    }
}
;
Te(G, "SEAMLESS_KEY", "study_abroad_autosave"),
Te(G, "LEGACY_AUTO_KEY", "studyAbroadAutosave");
let Ye = G;
class Ga {
    constructor(e) {
        this.gameState = e,
        this.unlockedAchievements = new Set,
        this.achievementProgress = {},
        this.achievements = this.initAchievements()
    }
    initAchievements() {
        return {
            survivor_1: {
                id: "survivor_1",
                name: "刚下飞机，还没被生活打脸",
                desc: "完成第一个月。恭喜，你已经知道超市牛奶放哪了。",
                type: "survival",
                rarity: "common",
                rate: 72.4,
                check: () => this.gameState.get("monthTotal") >= 1
            },
            survivor_12: {
                id: "survivor_12",
                name: "一年级生存者",
                desc: "完成第一学年。签证、房租、due date 都没能杀死你。",
                type: "survival",
                rarity: "common",
                rate: 41.6,
                check: () => this.gameState.get("year") >= 2
            },
            survivor_48: {
                id: "survivor_48",
                name: "毕业，或者说刑满释放",
                desc: "完成本地区学制总月数。",
                type: "survival",
                rarity: "rare",
                rate: 13.2,
                check: () => this.gameState.get("monthTotal") > Fe(this.gameState.get("region"))
            },
            collect_all_diseases: {
                id: "collect_all_diseases",
                name: "校医院集邮册",
                desc: "集齐多种疾病。你的保险公司已经开始沉默。",
                type: "collection",
                rarity: "rare",
                rate: 5.8,
                check: () => this.gameState.get("diseases").length >= 5
            },
            collect_partner_types: {
                id: "collect_partner_types",
                name: "Tinder 田野调查员",
                desc: "遇见多种对象类型。论文选题可以叫《异国亲密关系灾难样本》。",
                type: "collection",
                rarity: "rare",
                rate: 9.9,
                check: () => (this.gameState.getHistory().partnersMet || []).length >= 4
            },
            gpa_perfect: {
                id: "gpa_perfect",
                name: "绩点洁癖晚期",
                desc: "GPA 达到 4.0。你不是来留学的，你是来羞辱 curve 的。",
                type: "value",
                rarity: "legendary",
                rate: 2.1,
                check: () => this.gameState.get("gpa") >= 4
            },
            money_rich: {
                id: "money_rich",
                name: "父母以为你在省钱",
                desc: "存款达到 RMB 100 万等价。留学模拟器被你玩成现金流游戏。",
                type: "value",
                rarity: "legendary",
                rate: 1.4,
                check: () => this.gameState.get("money") >= A(1e6, this.gameState.get("region"))
            },
            proficiency_max: {
                id: "proficiency_max",
                name: "这班你来带新人吧",
                desc: "当前签约岗位熟练度达到 100。",
                type: "value",
                rarity: "rare",
                rate: 8.7,
                check: () => {
                    var e;
                    return Math.min(100, Math.floor(Number((e = this.gameState.state.current_job) == null ? void 0 : e.proficiency) || 0)) >= 100
                }
            },
            no_disease: {
                id: "no_disease",
                name: "免疫系统留学归来",
                desc: "目前没有感染任何疾病。",
                type: "event",
                rarity: "common",
                rate: 34.5,
                check: () => this.gameState.get("diseases").length === 0
            },
            never_work: {
                id: "never_work",
                name: "没打过工，但被生活打过",
                desc: "从未打过工。钱包在哭，但履历很干净。",
                type: "event",
                rarity: "common",
                rate: 28.3,
                check: () => (this.gameState.getHistory().jobsWorked || 0) === 0
            },
            perfect_graduation: {
                id: "perfect_graduation",
                name: "完美毕业，疑似非人类",
                desc: "以 GPA 4.0、岗位熟练度 100、健康 100 毕业。",
                type: "event",
                rarity: "legendary",
                rate: .6,
                check: () => {
                    var s;
                    const e = this.gameState.state
                      , t = Math.min(100, Math.floor(Number((s = e.current_job) == null ? void 0 : s.proficiency) || 0));
                    return e.monthTotal > Fe(e.region) && e.gpa >= 4 && t >= 100 && e.health >= 100
                }
            },
            tragedy_quad: {
                id: "tragedy_quad",
                name: "四大悲剧全收集",
                desc: "确诊、被抢、挂科、破产齐活。你不是倒霉，你是内容密度高。",
                type: "event",
                rarity: "legendary",
                rate: .4,
                check: () => {
                    const e = this.gameState.state.tragedies;
                    return e && e.hiv && e.robbed && e.failed && e.bankrupt
                }
            }
        }
    }
    checkAchievements() {
        const e = [];
        for (const [t,s] of Object.entries(this.achievements))
            !this.unlockedAchievements.has(t) && s.check() && (this.unlockedAchievements.add(t),
            e.push(s));
        return e
    }
    getUnlockedAchievements() {
        return Array.from(this.unlockedAchievements)
    }
    loadAchievements(e) {
        this.unlockedAchievements = new Set(e)
    }
    isUnlocked(e) {
        return this.unlockedAchievements.has(e)
    }
    getAchievement(e) {
        return this.achievements[e]
    }
    getAllAchievements() {
        return Object.values(this.achievements)
    }
    getAchievementProgress(e) {
        return this.achievementProgress[e]
    }
    setAchievementProgress(e, t, s) {
        this.achievementProgress[e] = {
            current: t,
            target: s
        }
    }
}
const vn = [{
    id: "ending_elite_overlord",
    req_gpa_min: 3.8,
    req_job_level_min: 4,
    req_money_min: 30,
    req_flags: [],
    exclude_flags: ["caught_cheating"],
    priority: 95,
    title: "卷王之王",
    summary: "你以近乎完美的成绩与较高的签约职级在 {region} 成功拿到核心技术岗 Offer，成为少数真正“卷赢”的人。",
    epilogue: "五年后，你的 LinkedIn 光鲜亮丽，但每天凌晨两点还在改代码。你的 Apple Watch 提醒你心率异常，而你已经忘记上一次真正开心是什么时候。"
}, {
    id: "ending_trust_fund_god",
    req_gpa_min: 2.5,
    req_job_level_min: 2,
    req_money_min: 80,
    req_flags: ["rich_parents"],
    exclude_flags: [],
    priority: 100,
    title: "资本之子",
    summary: "你几乎没有经历求职焦虑，靠家庭资源直接进入高端圈层，实现阶级跃迁闭环。",
    epilogue: "五年后，你在私人游艇上看日落，朋友圈全是投资与度假。但你偶尔会发现，身边没有一个人真正关心你，只关心你的钱。"
}, {
    id: "ending_startup_legend",
    req_gpa_min: 3.3,
    req_job_level_min: 4,
    req_money_min: 20,
    req_flags: [],
    exclude_flags: ["broke"],
    priority: 90,
    title: "创业神话",
    summary: "你凭借扎实的履历与高职级签约，在毕业后创立初创公司，获得第一轮融资。",
    epilogue: "五年后，公司估值暴涨，但你每天睡在办公室沙发上。投资人电话不断，而你最大的奢望是完整睡一觉。"
}, {
    id: "ending_love_survival",
    req_gpa_min: 2.5,
    req_job_level_min: 2,
    req_money_min: 5,
    req_flags: ["has_partner"],
    exclude_flags: [],
    priority: 60,
    title: "穷但有爱",
    summary: "你和 {partner} 一起在 {region} 苟活，虽然经济拮据，但彼此扶持。",
    epilogue: "五年后，你们挤在小公寓里分担房租。生活依旧艰难，但晚饭时的笑声是真实的。"
}, {
    id: "ending_return_home_couple",
    req_gpa_min: 2.5,
    req_job_level_min: 3,
    req_money_min: 5,
    req_flags: ["has_partner"],
    exclude_flags: [],
    priority: 55,
    title: "双双回国",
    summary: "你和 {partner} 选择回国发展，结束留学漂泊生活。",
    epilogue: "五年后，你们在一线城市通勤两小时，房贷压顶。偶尔翻看留学照片，会怀疑那段日子是不是一场梦。"
}, {
    id: "ending_marriage_escape",
    req_gpa_min: 2,
    req_job_level_min: 2,
    req_money_min: 0,
    req_flags: ["has_partner"],
    exclude_flags: [],
    priority: 50,
    title: "婚姻上岸",
    summary: "你通过与 {partner} 的婚姻获得长期留下的机会。",
    epilogue: "五年后，你稳定留下，但关系逐渐平淡。你们像室友一样生活，偶尔怀疑当初是爱情还是生存策略。"
}, {
    id: "ending_corporate_cog",
    req_gpa_min: 3,
    req_job_level_min: 3,
    req_money_min: 5,
    req_flags: [],
    exclude_flags: [],
    priority: 40,
    title: "大厂螺丝钉",
    summary: "你进入互联网公司，成为稳定输出的基层员工。",
    epilogue: "五年后，你熟练写周报、开会、背锅。你不再焦虑未来，因为你已经成为未来的一部分。"
}, {
    id: "ending_exam_machine",
    req_gpa_min: 2.8,
    req_job_level_min: 2,
    req_money_min: 2,
    req_flags: [],
    exclude_flags: [],
    priority: 35,
    title: "考公上岸",
    summary: "你选择回国考公，成功进入体制。",
    epilogue: "五年后，你每天准时下班，稳定但无波澜。你偶尔会想，如果当初再拼一点，会不会不一样。"
}, {
    id: "ending_chinatown_survivor",
    req_gpa_min: 2,
    req_job_level_min: 2,
    req_money_min: 0,
    req_flags: [],
    exclude_flags: [],
    priority: 30,
    title: "唐人街生存者",
    summary: "你未能进入主流职场，只能在华人圈子中谋生。",
    epilogue: "五年后，你在餐馆和代购之间来回切换。你不再谈梦想，只谈汇率。"
}, {
    id: "ending_freelance_drifter",
    req_gpa_min: 2.5,
    req_job_level_min: 3,
    req_money_min: 1,
    req_flags: [],
    exclude_flags: [],
    priority: 32,
    title: "自由职业漂流者",
    summary: "你依靠接单与岗位积累维生，生活不稳定但相对自由。",
    epilogue: "五年后，你仍在不同城市流动，收入忽高忽低。你有时间，但不知道该用来做什么。"
}, {
    id: "ending_deported_cheater",
    req_gpa_min: 0,
    req_job_level_min: null,
    req_money_min: 0,
    req_flags: ["caught_cheating"],
    exclude_flags: [],
    priority: 100,
    title: "学术不端遣返",
    summary: "你因学术不端被学校处理，签证被取消。",
    epilogue: "五年后，你不再提起留学经历。那段时间被你称为“那几年”。"
}, {
    id: "ending_bankrupt_return",
    req_gpa_min: 0,
    req_job_level_min: null,
    req_money_min: -5,
    req_flags: ["broke"],
    exclude_flags: [],
    priority: 95,
    title: "负债回国",
    summary: "你在留学期间严重透支，最终被迫回国。",
    epilogue: "五年后，你仍在还债。每个月工资到账的瞬间就被扣光，你开始理解什么叫“人生重开也解决不了”。"
}, {
    id: "ending_illegal_shadow",
    req_gpa_min: 1.5,
    req_job_level_min: 1,
    req_money_min: 0,
    req_flags: ["illegal_record"],
    exclude_flags: [],
    priority: 90,
    title: "灰色边缘人",
    summary: "你因非法打工记录无法获得合法身份，只能在灰色地带生存。",
    epilogue: "五年后，你习惯了躲避检查。你的人生没有稳定，只有“今天没被抓”。"
}, {
    id: "ending_uk_sponsored_return_offer",
    req_gpa_min: 2.5,
    req_job_level_min: 2,
    req_money_min: 3,
    req_flags: ["region_UK", "return_offer"],
    exclude_flags: [],
    priority: 85,
    title: "工签与 Offer 轨道",
    summary: "你凭借大厂 Return Offer 与雇主担保路径，在英国稳住脚跟，避开「毕业即失签」的典型剧本。",
    epilogue: "五年后，你仍在伦敦通勤，偶尔加班，但签证与合同让你有底气规划明年。你记得拿到担保那一刻——比毕业典礼还踏实。"
}, {
    id: "ending_uk_forced_return",
    req_gpa_min: 2.5,
    req_job_level_min: 2,
    req_money_min: 3,
    req_flags: ["region_UK"],
    exclude_flags: ["return_offer"],
    priority: 70,
    title: "签证到期送中",
    summary: "你未能在英国找到担保工作，签证到期被迫回国。",
    epilogue: "五年后，你在国内公司加班到深夜，窗外下着雨。你突然想起英国的雨，好像也没那么讨厌。"
}, {
    id: "ending_au_local_marriage",
    req_gpa_min: 2,
    req_job_level_min: 2,
    req_money_min: 5,
    req_flags: ["region_AU", "has_partner"],
    exclude_flags: [],
    priority: 75,
    title: "土澳躺平人生",
    summary: "你在澳洲与本地伴侣稳定下来，过上相对轻松的生活。",
    epilogue: "五年后，你在阳光下烧烤，看袋鼠发呆。生活没有大起大落，但也没有故事。"
}]
  , bn = {
    id: "ending_fallback_mediocre",
    req_gpa_min: null,
    req_job_level_min: null,
    req_money_min: null,
    req_flags: [],
    exclude_flags: [],
    priority: -9999,
    title: "平庸的海归",
    summary: "你在海外完成了学业，没有惊艳的故事，也没有彻底的失败。回国后，你汇入求职的人潮，过着不好不坏的日子。",
    epilogue: "五年后，你很少主动提起留学那几年。它们像一本翻旧的小说，情节模糊，结局平淡。"
};
class Oa {
    constructor(e, t) {
        this.gameState = e,
        this.achievementSystem = t,
        this.remoteEndings = [],
        this.remoteEndingsLoaded = !1,
        this.remoteEndingsPromise = null
    }
    async loadRemoteEndings() {
        return this.remoteEndingsPromise ? this.remoteEndingsPromise : (this.remoteEndingsPromise = this._loadRemoteEndingsInternal(),
        this.remoteEndingsPromise)
    }
    async _loadRemoteEndingsInternal() {
        try {
            const e = await fetch(_s("/api/events/endings"), {
                method: "GET"
            });
            if (!e.ok) {
                const n = await e.text();
                throw new Error(n || `Endings API failed: ${e.status}`)
            }
            const t = await e.json()
              , s = (Array.isArray(t == null ? void 0 : t.endings) ? t.endings : []).filter(n => n && typeof n == "object" && String(n.id ?? "").trim() !== "").map(n => ({
                ...n,
                id: String(n.id)
            }));
            return this.remoteEndings = s,
            this.remoteEndingsLoaded = !0,
            console.info(`[结局库] 后端代理 Supabase endings ${s.length} 条。`),
            s
        } catch (e) {
            return this.remoteEndings = [],
            this.remoteEndingsLoaded = !0,
            console.warn(`[结局库] Supabase 加载失败，已回退本地 endingsDB：${e.message || e}`),
            this.remoteEndings
        }
    }
    async generateEndingAsync() {
        return await this.loadRemoteEndings(),
        this.generateEnding()
    }
    processGlobalAchievements(e, t, s="") {
        return e.processEndOfRun(this.gameState.state, this.gameState.getHistory(), t, s)
    }
    generateEnding() {
        var k, P, L;
        const e = this.gameState.state
          , t = this.achievementSystem.getUnlockedAchievements()
          , s = e.partner ? e.partner.rel ?? 50 : 0
          , n = (k = e.partner) == null ? void 0 : k.stage
          , a = (P = e.partner) == null ? void 0 : P.origin
          , o = e.current_job || {}
          , r = pt(e)
          , l = String(o.positionTitle || o.title || "").trim()
          , c = Math.min(100, Math.max(0, Number(o.proficiency) || 0))
          , d = {
            gpa: e.gpa,
            jobLevel: r,
            jobTitle: l,
            jobProficiency: c,
            money: e.money,
            health: e.health,
            mental: e.mental,
            partner: e.partner ? 1 : 0,
            partnerRel: s,
            partnerName: ((L = e.partner) == null ? void 0 : L.name) ?? null,
            partnerStage: n ?? null,
            partnerOrigin: a ?? null,
            partnerMarried: n === "married" ? 1 : 0,
            region: e.region,
            achievements: t.length,
            monthTotal: e.monthTotal,
            returnOfferUnlocked: !!e.returnOfferUnlocked
        };
        if (d.health <= 0) {
            const y = "death"
              , M = this.generateReport(y, d);
            return {
                type: y,
                factors: d,
                report: M,
                score: this.calculateScore(d)
            }
        }
        const u = Fe(e.region)
          , m = e.region === "UK" || e.region === "AU" ? 3 : 4;
        if (!(d.monthTotal >= u || e.year > m || e.year === m && e.month >= 6)) {
            const y = "dropout"
              , M = this.generateReport(y, d);
            return {
                type: y,
                factors: d,
                report: M,
                score: this.calculateScore(d)
            }
        }
        const g = this.pickEndingFromDB(e)
          , f = y => C.injectDynamicData(y, e)
          , b = {
            title: f(g.title),
            summary: f(g.summary),
            future: f(g.epilogue),
            details: this.buildGraduationStatDetails(d),
            fromEndingsDB: !0
        };
        return {
            type: g.id,
            source: this.remoteEndings.length > 0 ? "supabaseEndings" : "endingsDB",
            factors: d,
            report: b,
            score: this.calculateScore(d)
        }
    }
    collectEffectiveFlags(e) {
        const t = new Set(Array.isArray(e.flags) ? e.flags : []);
        e.partner && t.add("has_partner");
        const s = e.region === "HKSG" ? "HK" : e.region;
        return s === "UK" && t.add("region_UK"),
        s === "AU" && t.add("region_AU"),
        e.returnOfferUnlocked && t.add("return_offer"),
        !e.parentsCutOff && (e.rel_parents ?? 0) >= 65 && t.add("rich_parents"),
        t
    }
    matchesEndingRecord(e, t, s, n, a) {
        const o = e.req_gpa_min != null ? Number(e.req_gpa_min) : 0;
        if (t < o)
            return !1;
        if (e.req_job_level_min != null) {
            const c = Number(e.req_job_level_min);
            if (s < c)
                return !1
        }
        if (e.req_money_min != null) {
            const c = Number(e.req_money_min) * 1e3;
            if (n < c)
                return !1
        }
        const r = Array.isArray(e.req_flags) ? e.req_flags : [];
        for (const c of r)
            if (!a.has(c))
                return !1;
        const l = Array.isArray(e.exclude_flags) ? e.exclude_flags : [];
        for (const c of l)
            if (a.has(c))
                return !1;
        return !0
    }
    pickEndingFromDB(e) {
        const t = Number(e.gpa) || 0
          , s = pt(e)
          , n = Number(e.money) || 0
          , a = this.collectEffectiveFlags(e)
          , r = (this.remoteEndings.length > 0 ? this.remoteEndings : vn).filter(l => this.matchesEndingRecord(l, t, s, n, a));
        return r.length === 0 ? bn : (r.sort( (l, c) => (c.priority ?? 0) - (l.priority ?? 0)),
        r[0])
    }
    buildGraduationStatDetails(e) {
        var r;
        const t = ((r = I[e.region]) == null ? void 0 : r.name) || "未知地区"
          , s = e.partner ? "有伴侣陪伴" : "单身"
          , n = l => w(l, e.region)
          , a = e.jobLevel ?? 1
          , o = e.jobTitle ? ` · ${e.jobTitle}` : "";
        return [`地区: ${t}`, `GPA: ${e.gpa.toFixed(2)}/4.0`, `岗位职级: L${a}/4${o}`, `心态: ${e.mental}/100`, `存款: ${n(e.money)}`, `健康: ${e.health}/100`, `成就: ${e.achievements}个`, `状态: ${s}${e.partner ? ` (关系${e.partnerRel}/100)` : ""}`]
    }
    getFutureOutcome(e) {
        const {jobLevel: t, mental: s, partner: n, partnerRel: a, partnerName: o, partnerStage: r, partnerOrigin: l, returnOfferUnlocked: c} = e
          , d = []
          , u = Number(t) || 1;
        return c ? d.push("你手握大厂 Return Offer，毕业后直接进入海外高薪岗位，起薪与签证路径都优于多数同龄人。") : u >= 4 ? d.push("你的签约职级与履历在求职市场上很能打，收到了多家不错的 offer，最终选择了一条更稳或更高的路径。") : u >= 3 ? d.push("凭借扎实的岗位积累，你顺利找到了心仪的工作，薪资和发展都不错。") : u >= 2 ? d.push("你的履历足以胜任一般岗位，经过几轮面试后找到了一份稳定的工作。") : d.push("签约职级偏基础，你决定先从小公司或基础岗起步，积累经验后再跳槽。"),
        s >= 80 ? d.push("心态积极阳光，你很快适应了职场生活，同事关系融洽，周末也会出去放松。") : s >= 60 ? d.push("心态还算平稳，虽然工作有时会累，但你能调节好节奏。") : s >= 40 ? d.push("心态有些疲惫，你偶尔会怀疑自己的选择，但仍在坚持。") : d.push("心态接近崩溃边缘，你考虑过辞职休息一段时间，最终决定先撑过试用期再说。"),
        n && r === "married" ? d.push(`你与${o}已结为夫妻。` + (l === "local" ? "TA 是本地人，你们更倾向在留学国扎根发展，把这里当成第二故乡。" : "你们同为异乡人，毕业后一起规划去向：可能留当地、回国或第三国，但彼此是最稳的支点。")) : n && a >= 80 ? d.push(`你和${o}的关系非常稳固，毕业后你们决定一起打拼，不久后开始谈婚论嫁。`) : n && a >= 60 ? d.push(`你和${o}感情稳定，两人商量着先各自发展事业，等稳定后再考虑下一步。`) : n && a >= 40 ? d.push(`你和${o}的关系有些微妙，毕业后的异地或忙碌让你们若即若离，未来能否走下去还是个未知数。`) : n && a > 0 ? d.push(`你和${o}的关系已经岌岌可危，毕业后没多久，你们平静地分了手。`) : d.push("单身毕业的你，把精力都放在了事业上，偶尔也会期待遇到对的人。"),
        d.join("<br><br>")
    }
    generateReport(e, t) {
        var r;
        const s = ((r = I[t.region]) == null ? void 0 : r.name) || "未知地区"
          , n = t.partner ? "有伴侣陪伴" : "单身"
          , a = l => w(l, t.region)
          , o = {
            perfect: {
                title: "🎓 完美毕业",
                summary: `你在${s}度过了完美的4年留学生活！`,
                details: [`GPA: ${t.gpa.toFixed(2)}/4.0 - 学神级别`, `岗位职级: L${t.jobLevel}/4 - 高职级签约`, `心态: ${t.mental}/100`, `存款: ${a(t.money)} - 财务自由`, `健康: ${t.health}/100 - 身体倍棒`, `成就: ${t.achievements}个 - 人生赢家`, `状态: ${n}${t.partner ? ` (关系${t.partnerRel}/100)` : ""}`],
                future: ""
            },
            excellent: {
                title: "🎓 优秀毕业",
                summary: `你在${s}的留学生活非常成功！`,
                details: [`GPA: ${t.gpa.toFixed(2)}/4.0 - 优秀学生`, `岗位职级: L${t.jobLevel}/4`, `心态: ${t.mental}/100`, `存款: ${a(t.money)}`, `健康: ${t.health}/100`, `成就: ${t.achievements}个`, `状态: ${n}${t.partner ? ` (关系${t.partnerRel}/100)` : ""}`],
                future: ""
            },
            normal: {
                title: "🎓 顺利毕业",
                summary: `你在${s}完成了学业，顺利毕业。`,
                details: [`GPA: ${t.gpa.toFixed(2)}/4.0`, `岗位职级: L${t.jobLevel}/4`, `心态: ${t.mental}/100`, `存款: ${a(t.money)}`, `健康: ${t.health}/100`, `成就: ${t.achievements}个`, `状态: ${n}${t.partner ? ` (关系${t.partnerRel}/100)` : ""}`],
                future: ""
            },
            barely: {
                title: "🎓 勉强毕业",
                summary: `你在${s}勉强完成了学业。`,
                details: [`GPA: ${t.gpa.toFixed(2)}/4.0 - 低空飞过`, `岗位职级: L${t.jobLevel}/4`, `心态: ${t.mental}/100`, `存款: ${a(t.money)}`, `健康: ${t.health}/100`, `成就: ${t.achievements}个`, `状态: ${n}${t.partner ? ` (关系${t.partnerRel}/100)` : ""}`],
                future: ""
            },
            failed: {
                title: "💀 肄业",
                summary: `你在${s}未能完成学业。`,
                details: [`GPA: ${t.gpa.toFixed(2)}/4.0 - 未达到毕业要求`, `岗位职级: L${t.jobLevel}/4`, `存款: ${a(t.money)}`, `健康: ${t.health}/100`, `成就: ${t.achievements}个`, `状态: ${n}`],
                future: "你回到了家乡，重新规划人生。"
            },
            dropout: {
                title: "💀 中途退学",
                summary: `你在${s}未能完成学业就离开了。`,
                details: [`完成时间: ${t.monthTotal}个月`, `GPA: ${t.gpa.toFixed(2)}/4.0`, `岗位职级: L${t.jobLevel}/4`, `存款: ${a(t.money)}`, `健康: ${t.health}/100`],
                future: "你选择了另一条人生道路。"
            },
            death: {
                title: "💀 不幸去世",
                summary: `你在${s}的留学生活不幸结束。`,
                details: [`完成时间: ${t.monthTotal}个月`, `GPA: ${t.gpa.toFixed(2)}/4.0`, `岗位职级: L${t.jobLevel}/4`, `存款: ${a(t.money)}`],
                future: "你的故事在这里画上了句号。"
            },
            entrepreneur: {
                title: "🚀 创业成功",
                summary: `你在${s}毕业后创业成功，成为企业家！`,
                details: [`岗位职级: L${t.jobLevel}/4`, `存款: ${a(t.money)} - 初始资金充足`, `成就: ${t.achievements}个`, `状态: ${n}${t.partner ? ` (关系${t.partnerRel}/100)` : ""}`],
                future: "你创建了自己的公司，专注于人工智能领域。公司发展迅速，3年内估值超过1亿美元。"
            },
            academic: {
                title: "📚 学术大牛",
                summary: `你在${s}学术成就斐然，成为大学教授！`,
                details: [`GPA: ${t.gpa.toFixed(2)}/4.0 - 完美`, `岗位职级: L${t.jobLevel}/4`, `成就: ${t.achievements}个`, `状态: ${n}`],
                future: "你获得了全额奖学金，继续攻读博士学位。毕业后成为大学教授，致力于人工智能研究。"
            },
            lover: {
                title: "❤️ 情圣",
                summary: `你在${s}收获了幸福的爱情，与伴侣幸福生活！`,
                details: [`GPA: ${t.gpa.toFixed(2)}/4.0`, `岗位职级: L${t.jobLevel}/4`, `存款: ${a(t.money)}`, "_partnerRel_: 100 - 至死不渝", `成就: ${t.achievements}个`],
                future: `你和${t.partnerName}的感情坚如磐石，毕业后不久就步入了婚姻殿堂。`
            },
            investor: {
                title: "📈 投资大师",
                summary: `你在${s}Become了一个职业投资者！`,
                details: [`存款: ${a(t.money)} - 投资收益`, `岗位职级: L${t.jobLevel}/4`, `成就: ${t.achievements}个`, `状态: ${n}`],
                future: "你辞去了工作，全职进行投资。凭借敏锐的市场嗅觉，你的财富不断增值。"
            },
            躺平王: {
                title: "慵 懒人",
                summary: `你在${s}快乐留学，轻松毕业的躺平王！`,
                details: [`GPA: ${t.gpa.toFixed(2)}/4.0 - 低空飞过`, `心态: ${t.mental}/100 - 心态满分`, `岗位职级: L${t.jobLevel}/4`, `存款: ${a(t.money)}`, `成就: ${t.achievements}个`],
                future: "你决定在$regionName当地工作生活，追求快乐和平淡的生活。"
            }
        };
        return o[e] || o.normal
    }
    calculateScore(e) {
        let t = 0;
        return t += e.gpa * 50,
        t += (e.jobLevel ?? 1) * 25,
        t += e.money * .1,
        t += e.health * .5,
        t += e.mental * .3,
        t += e.partner * 20,
        t += e.achievements * 10,
        t += e.monthTotal * 2,
        Math.round(t)
    }
}
const Rt = {
    common: {
        label: "普通",
        className: "common",
        modalClass: "type-ach-common"
    },
    rare: {
        label: "稀有",
        className: "rare",
        modalClass: "type-ach-rare"
    },
    legendary: {
        label: "传说",
        className: "legendary",
        modalClass: "type-ach-legendary"
    }
}
  , we = [{
    id: "academic_god",
    icon: "👑",
    rarity: "legendary",
    rate: 1.8,
    name: "全 A 战神，头发已献祭",
    desc: "以 4.0 GPA 顺利毕业。教授看了沉默，同学看了转专业。",
    condition_hint: "毕业时 GPA >= 4.0"
}, {
    id: "academic_trash",
    icon: "🧯",
    rarity: "rare",
    rate: 8.6,
    name: "Academic Probation 体验卡",
    desc: "GPA 跌破 2.0，学校邮件比爸妈微信还先到。",
    condition_hint: "期末结算时 GPA < 2.0，或因 GPA 过低退学"
}, {
    id: "prof_pet",
    icon: "🐂",
    rarity: "rare",
    rate: 9.4,
    name: "导师门口的常驻 NPC",
    desc: "科研和 TA 做到导师看见你都开始心虚。",
    condition_hint: "科研 + TA 次数 >= 15"
}, {
    id: "library_ghost",
    icon: "👻",
    rarity: "common",
    rate: 31.2,
    name: "图书馆地缚灵",
    desc: "连续期末通宵复习，你和自习室插座建立了稳定关系。",
    condition_hint: "连续通宵复习 3 次"
}, {
    id: "wall_street_wolf",
    icon: "🐺",
    rarity: "legendary",
    rate: 2.3,
    name: "留学不是烧钱，是印钱",
    desc: "毕业时净资产高到可以反向给家里打生活费。",
    condition_hint: "毕业时净资产 RMB 等价 >= 150 万"
}, {
    id: "homeless_survival",
    icon: "🧳",
    rarity: "rare",
    rate: 7.1,
    name: "沙发冲浪奥运冠军",
    desc: "无家可归的边缘也撑过去了，宜家样板间看了都想收留你。",
    condition_hint: "触发无家可归/极限住房挣扎"
}, {
    id: "dish_master",
    icon: "🍽️",
    rarity: "common",
    rate: 26.5,
    name: "唐人街洗碗机成精",
    desc: "刷盘子超过 20 次，洗洁精开始主动叫你师傅。",
    condition_hint: "洗碗工打工次数 >= 20"
}, {
    id: "silicon_valley_elite",
    icon: "💻",
    rarity: "legendary",
    rate: 3.6,
    name: "LinkedIn 终于像个人了",
    desc: "拿到顶级岗位或 Return Offer，简历不再需要用形容词硬撑。",
    condition_hint: "毕业时当前岗位职级 L4，或拿到 Return Offer"
}, {
    id: "scammed_leek",
    icon: "🥬",
    rarity: "common",
    rate: 22.4,
    name: "异国韭菜，新鲜现割",
    desc: "被诈骗、黑心房东或天价罚单教育了一次，学费之外又交学费。",
    condition_hint: "触发 scammed 或被骗相关 flag"
}, {
    id: "life_winner",
    icon: "💍",
    rarity: "legendary",
    rate: 1.1,
    name: "爱情事业双 offer",
    desc: "毕业时钱和对象都在，堪称留学圈都市传说。",
    condition_hint: "毕业时净资产极高且伴侣阶段为已婚"
}, {
    id: "ultimate_simp",
    icon: "🤡",
    rarity: "rare",
    rate: 6.9,
    name: "ATM 型人格",
    desc: "为了爱情花光钱、掉了 GPA，最后只剩账单陪你跨年。",
    condition_hint: "触发终极舔狗历史记录"
}, {
    id: "lone_wolf",
    icon: "🐺",
    rarity: "rare",
    rate: 11.7,
    name: "四年无暧昧保研体质",
    desc: "整段留学没有恋爱，朋友圈只有 due、雨和咖啡。",
    condition_hint: "毕业时恋爱记录为 0"
}, {
    id: "party_legend",
    icon: "🪩",
    rarity: "common",
    rate: 18.8,
    name: "夜店门口免检人员",
    desc: "蹦迪超过 20 次，保安认识你比导师还早。",
    condition_hint: "蹦迪次数 >= 20"
}, {
    id: "time_master",
    icon: "⏱️",
    rarity: "legendary",
    rate: .9,
    name: "时间管理到不像人类",
    desc: "高 GPA、大厂 Offer、还有对象。系统怀疑你开了二周目。",
    condition_hint: "毕业时高 GPA + Return Offer + 有伴侣"
}, {
    id: "iron_body",
    icon: "💪",
    rarity: "common",
    rate: 19.5,
    name: "被健身房年卡反向驯化",
    desc: "健身次数足够多，身体比你的论文结构还稳定。",
    condition_hint: "健身次数 >= 15 且很少生病"
}, {
    id: "hospital_vip",
    icon: "🏥",
    rarity: "rare",
    rate: 5.4,
    name: "急诊室熟客卡",
    desc: "生病次数多到护士看到你已经不用问姓名。",
    condition_hint: "染病次数 >= 5"
}, {
    id: "walking_dead",
    icon: "🧟",
    rarity: "rare",
    rate: 7.8,
    name: "心态归零但还在交作业",
    desc: "心态低到像坏掉的手机电池，但你仍然活着推进月份。",
    condition_hint: "mental < 10 持续 3 回合"
}, {
    id: "green_card",
    icon: "🛂",
    rarity: "legendary",
    rate: 1.5,
    name: "从留学生到本地传说",
    desc: "通过本地婚姻或定居结局留下来，租房合同终于不用每年续命。",
    condition_hint: "触发本地婚姻/定居相关结局"
}, {
    id: "family_rebel",
    icon: "🚧",
    rarity: "rare",
    rate: 6.2,
    name: "爸妈转账已读不回",
    desc: "亲子关系破裂，经济断供。你开始认真研究超市临期区。",
    condition_hint: "触发 parentsCutOff"
}, {
    id: "survivor",
    icon: "🪫",
    rarity: "rare",
    rate: 4.7,
    name: "低空擦线毕业奇迹",
    desc: "GPA 和存款都贴地飞行，但你真的毕业了。",
    condition_hint: "毕业时 GPA < 2.5 且存款极低"
}];
function wn(i) {
    const e = (i == null ? void 0 : i.rarity) || "common";
    return Rt[e] || Rt.common
}
const Nt = "global_achievements";
class ja {
    constructor() {
        this._cache = null
    }
    readUnlockedIds() {
        if (this._cache)
            return [...this._cache];
        try {
            const e = localStorage.getItem(Nt);
            if (!e)
                return this._cache = [],
                [];
            const t = JSON.parse(e);
            return this._cache = Array.isArray(t) ? t.map(String) : [],
            [...this._cache]
        } catch {
            return this._cache = [],
            []
        }
    }
    persistUnlockedIds(e) {
        const t = [...new Set(e.map(String))];
        this._cache = t;
        try {
            localStorage.setItem(Nt, JSON.stringify(t))
        } catch (s) {
            console.warn("global_achievements 写入失败", s)
        }
    }
    getTotalDefined() {
        return we.length
    }
    processEndOfRun(e, t, s, n="") {
        const a = {
            state: e,
            history: t || {},
            ending: s,
            gameOverReason: String(n || "")
        }
          , o = new Set(this.readUnlockedIds())
          , r = [];
        for (const d of we)
            o.has(d.id) || this._check(d.id, a) && (r.push(d.id),
            o.add(d.id));
        const l = [...o];
        r.length > 0 && this.persistUnlockedIds(l);
        const c = r.map(d => we.find(u => u.id === d)).filter(Boolean);
        return {
            newlyUnlocked: r,
            newlyUnlockedDetails: c,
            totalUnlocked: l.length,
            totalDefined: we.length
        }
    }
    _check(e, t) {
        const {state: s, history: n, ending: a, gameOverReason: o} = t
          , r = n || {}
          , l = Number(s.monthTotal) || 0
          , c = Number(s.cumulative_gpa ?? s.gpa) || 0
          , d = a.type
          , u = Fe(s.region)
          , h = l > u && d !== "dropout" && d !== "death"
          , m = Array.isArray(s.flags) ? s.flags : []
          , p = s.work_counts || {}
          , g = Number(p.dish) || 0
          , f = Number(p.ta) || 0
          , b = Number(p.research) || 0
          , k = Number(r.partyTimes) || 0
          , P = Number(r.gymTimes) || 0
          , L = Array.isArray(r.diseasesGot) ? r.diseasesGot : []
          , y = Xt(s)
          , M = pt(s);
        switch (e) {
        case "academic_god":
            return h && c >= 3.995;
        case "academic_trash":
            return !!r.gpaTermBelow2Ever || !!r.gpaCumulativeBelow2Ever || String(o).includes("GPA") && c < 2;
        case "prof_pet":
            return f + b >= 15;
        case "library_ghost":
            return Number(r.maxLibraryCramStreak) >= 3;
        case "wall_street_wolf":
            return h && y >= 15e5;
        case "homeless_survival":
            return !!r.homelessStruggle || m.includes("homeless");
        case "dish_master":
            return g >= 20;
        case "silicon_valley_elite":
            return h && (M >= 4 || !!s.returnOfferUnlocked);
        case "scammed_leek":
            return m.includes("scammed");
        case "life_winner":
            return h && y >= 8e5 && s.partner && s.partner.stage === "married";
        case "ultimate_simp":
            return !!r.ultimateSimpUnlocked;
        case "lone_wolf":
            return h && !r.hadPartnerEver;
        case "party_legend":
            return k >= 20;
        case "time_master":
            return h && c > 3.8 && !!s.returnOfferUnlocked && !!s.partner;
        case "iron_body":
            return P >= 15 && L.length <= 2;
        case "hospital_vip":
            return L.length >= 5;
        case "walking_dead":
            return Number(r.mentalLowConsecutiveMonths) >= 3;
        case "green_card":
            return d === "ending_au_local_marriage" || h && s.partner && s.partner.origin === "local" && s.partner.stage === "married";
        case "family_rebel":
            return !!s.parentsCutOff;
        case "survivor":
            return h && c >= 2 && c < 2.5 && y < 12e4;
        default:
            return !1
        }
    }
}
class Fa {
    constructor(e, t, s) {
        this.gameState = e,
        this.logger = t,
        this.modal = s
    }
    checkRelationships() {
        const e = this.gameState.state;
        let t = !1;
        return e.rel_parents < 30 ? Math.random() < .3 && (e.parentsCutOff || (this.gameState.update({
            parentsCutOff: !0
        }),
        this.modal.show("💔 父母断供", "父母对你非常失望，表示在新学年开始前不会再给你打生活费，直到你主动修复关系。")),
        this.logger("💔 父母对你失望，决定断供。", "log-bad"),
        t = !0) : e.rel_parents >= 55 && e.parentsCutOff && (this.gameState.update({
            parentsCutOff: !1
        }),
        this.logger("父母态度缓和，恢复每年资助的可能。", "log-good")),
        e.rel_prof < 30 && (this.gameState.update({
            semester_score: ls(e.semester_score ?? 80, -.2)
        }),
        this.logger(`📉 导师对你失望，本学期百分制等价 GPA -${.2}`, "log-bad"),
        t = !0),
        t
    }
}
class Ka {
    constructor(e) {
        Te(this, "_workTypeMap", {
            dishwash: "刷盘子",
            tutor: "家教",
            ta: "TA",
            big_intern: "大厂实习"
        });
        this.gameState = e,
        this.stats = this.loadStats()
    }
    loadStats() {
        const e = {
            totalPlayTime: 0,
            gamesPlayed: 0,
            deaths: 0,
            graduations: 0,
            bestScore: 0,
            bestEnding: "",
            totalMonthsPlayed: 0,
            totalYearsPlayed: 0,
            diseasesInfected: 0,
            diseasesCured: 0,
            maxDiseaseCount: 0,
            studyTimes: 0,
            workTimes: {
                dishwash: 0,
                tutor: 0,
                ta: 0,
                big_intern: 0
            },
            workedTotal: 0,
            entertainmentTimes: 0,
            gymTimes: 0,
            travelTimes: 0,
            moneyEarned: 0,
            moneySpent: 0,
            maxMoney: 0,
            minMoney: 0,
            maxGPA: 0,
            minGPA: 4,
            relationships: 0,
            partnerCount: 0,
            achievementsUnlocked: 0,
            achievementsTypesUnlocked: [],
            startTime: null,
            lastPlayDate: null
        };
        try {
            const t = localStorage.getItem("studyAbroadStats");
            if (t) {
                const s = JSON.parse(t);
                return {
                    ...e,
                    ...s
                }
            }
        } catch (t) {
            console.warn("加载统计数据失败:", t)
        }
        return e
    }
    saveStats() {
        try {
            localStorage.setItem("studyAbroadStats", JSON.stringify(this.stats))
        } catch (e) {
            console.warn("保存统计数据失败:", e)
        }
    }
    update(e) {
        e.gpa && e.gpa > this.stats.maxGPA && (this.stats.maxGPA = e.gpa),
        e.gpa && e.gpa < this.stats.minGPA && (this.stats.minGPA = e.gpa),
        e.money !== void 0 && (e.money > this.stats.maxMoney && (this.stats.maxMoney = e.money),
        e.money < this.stats.minMoney && (this.stats.minMoney = e.money)),
        e.workType && (this.stats.workTimes[e.workType] || (this.stats.workTimes[e.workType] = 0),
        this.stats.workTimes[e.workType]++,
        this.stats.workedTotal++),
        e.entertainment && this.stats.entertainmentTimes++,
        e.gym && this.stats.gymTimes++,
        e.travel && this.stats.travelTimes++,
        e.relationship && (this.stats.relationships++,
        this.stats.partnerCount ? this.stats.partnerCount++ : this.stats.partnerCount = 1),
        e.achievementType && !this.stats.achievementsTypesUnlocked.includes(e.achievementType) && this.stats.achievementsTypesUnlocked.push(e.achievementType),
        Object.assign(this.stats, e),
        this.saveStats()
    }
    increment(e, t=1) {
        typeof this.stats[e] == "number" && (this.stats[e] += t,
        e === "totalMonthsPlayed" && (this.stats.totalYearsPlayed = Math.floor(this.stats.totalMonthsPlayed / 12)),
        this.saveStats())
    }
    recordGameEnd(e) {
        var t;
        this.increment("gamesPlayed"),
        e.reason === "health_zero" && this.increment("deaths"),
        e.graduated && this.increment("graduations"),
        e.score > this.stats.bestScore && (this.stats.bestScore = e.score,
        this.stats.bestEnding = ((t = e.report) == null ? void 0 : t.title) || ""),
        this.saveStats()
    }
    getCurrentPlayTime() {
        if (!this.stats.startTime)
            return 0;
        const e = Date.now();
        return Math.floor((e - this.stats.startTime) / 6e4)
    }
    getFormattedStats() {
        var o;
        const e = Math.floor(this.stats.totalPlayTime / 3600)
          , t = Math.floor(this.stats.totalPlayTime % 3600 / 60)
          , s = this.getCurrentPlayTime()
          , n = this.stats.gamesPlayed > 0 ? Math.floor((this.stats.totalPlayTime + s * 60) / this.stats.gamesPlayed / 60) : 0
          , a = this.gameState.state.region || "US";
        return {
            totalPlayTime: `${e}小时${t}分钟 + 本局 ${s}分钟`,
            avgPlayTime: `${n}分钟/局`,
            gamesPlayed: this.stats.gamesPlayed,
            deaths: this.stats.deaths,
            graduations: this.stats.graduations,
            bestScore: this.stats.bestScore,
            bestEnding: this.stats.bestEnding || "无",
            maxGPA: (this.stats.maxGPA || 0).toFixed(2),
            maxMoney: w(this.stats.maxMoney || 0, a),
            totalMonthsPlayed: this.stats.totalMonthsPlayed,
            totalYearsPlayed: this.stats.totalYearsPlayed,
            studyTimes: this.stats.studyTimes || 0,
            workTimes: this.stats.workedTotal || 0,
            workTypes: Object.entries(this.stats.workTimes || {}).map( ([r,l]) => this._workTypeMap[r] ? `${this._workTypeMap[r]}: ${l}` : "").filter(Boolean).join(", "),
            entertainmentTimes: this.stats.entertainmentTimes || 0,
            gymTimes: this.stats.gymTimes || 0,
            moneyEarned: w(this.stats.moneyEarned || 0, a),
            moneySpent: w(this.stats.moneySpent || 0, a),
            diseasesInfected: this.stats.diseasesInfected || 0,
            diseasesCured: this.stats.diseasesCured || 0,
            maxDiseaseCount: this.stats.maxDiseaseCount || 0,
            relationships: this.stats.relationships || 0,
            achievementsUnlocked: this.stats.achievementsUnlocked || 0,
            achievementsTypes: ((o = this.stats.achievementsTypesUnlocked) == null ? void 0 : o.length) || 0,
            lastPlayDate: this.stats.lastPlayDate || "从未"
        }
    }
    getAllStats() {
        return {
            ...this.stats
        }
    }
    reset() {
        this.stats = this.loadStats(),
        this.saveStats()
    }
}
class Va {
    constructor() {
        this.settings = this.loadSettings()
    }
    loadSettings() {
        const e = {
            soundEnabled: !0,
            fastMode: !1,
            musicVolume: 50,
            sfxVolume: 70,
            showTips: !0,
            language: "zh-CN"
        };
        try {
            const t = localStorage.getItem("studyAbroadSettings");
            if (t) {
                const s = JSON.parse(t);
                return {
                    ...e,
                    ...s
                }
            }
        } catch (t) {
            console.warn("加载设置失败:", t)
        }
        return e
    }
    saveSettings() {
        try {
            localStorage.setItem("studyAbroadSettings", JSON.stringify(this.settings))
        } catch (e) {
            console.warn("保存设置失败:", e)
        }
    }
    get(e) {
        return this.settings[e]
    }
    set(e, t) {
        this.settings[e] = t,
        this.saveSettings()
    }
    toggle(e) {
        return typeof this.settings[e] == "boolean" ? (this.settings[e] = !this.settings[e],
        this.saveSettings(),
        this.settings[e]) : this.settings[e]
    }
    isSoundEnabled() {
        return this.settings.soundEnabled
    }
    isFastMode() {
        return this.settings.fastMode
    }
    getAnimationDelay(e=300) {
        return this.settings.fastMode ? 0 : e
    }
    playSfx(e) {
        this.settings.soundEnabled && console.log(`🔊 播放音效：${e}`)
    }
}
const It = "studyAbroadPortfolio"
  , kn = {
    TECH: 12e3,
    STABLE: 6e3,
    RISK: 24e3
}
  , Bt = {
    TECH: {
        symbol: "TECH",
        name: "科技基金",
        risk: "tech"
    },
    STABLE: {
        symbol: "STABLE",
        name: "稳健基金",
        risk: "stable"
    },
    RISK: {
        symbol: "RISK",
        name: "高波动基金",
        risk: "risk"
    }
}
  , qe = ["accumulation", "drawdown", "rebound", "distribution"]
  , Sn = {
    stable: {
        accumulation: [-.016, .024],
        drawdown: [-.09, -.012],
        rebound: [.004, .04],
        distribution: [-.03, .018]
    },
    tech: {
        accumulation: [-.03, .04],
        drawdown: [-.16, -.02],
        rebound: [.01, .07],
        distribution: [-.05, .03]
    },
    risk: {
        accumulation: [-.06, .055],
        drawdown: [-.28, -.04],
        rebound: [.03, .13],
        distribution: [-.08, .05]
    }
}
  , xn = {
    stable: {
        chance: .12,
        up: [.005, .02],
        down: [-.05, -.015]
    },
    tech: {
        chance: .18,
        up: [.01, .045],
        down: [-.1, -.03]
    },
    risk: {
        chance: .26,
        up: [.015, .08],
        down: [-.2, -.05]
    }
}
  , Tn = {
    accumulation: [2, 6],
    drawdown: [2, 7],
    rebound: [1, 5],
    distribution: [2, 6]
};
function at(i, e) {
    return i + Math.random() * (e - i)
}
function it(i) {
    return i[Math.floor(Math.random() * i.length)]
}
function $n(i, e, t) {
    return Math.min(t, Math.max(e, i))
}
function v(i, e=0) {
    const t = Number(i);
    return Number.isFinite(t) ? t : e
}
class za {
    constructor(e) {
        this.gameState = e,
        this.stocks = this.initStocks(),
        this.portfolio = this.loadPortfolio()
    }
    initStocks() {
        const e = {};
        for (const t of Object.keys(Bt)) {
            const s = Bt[t];
            e[t] = {
                symbol: t,
                name: s.name,
                risk: s.risk,
                price: 1,
                prevPrice: 1,
                change: "0.00",
                phase: it(qe),
                phaseMonthsLeft: 0,
                history: []
            },
            e[t].phaseMonthsLeft = this._pickPhaseMonths(e[t].phase)
        }
        return e
    }
    loadPortfolio() {
        var t, s, n, a, o, r, l, c, d;
        const e = {
            cash: 0,
            holdings: {
                TECH: 0,
                STABLE: 0,
                RISK: 0
            },
            avgCost: {
                TECH: 0,
                STABLE: 0,
                RISK: 0
            },
            realizedPnL: {
                TECH: 0,
                STABLE: 0,
                RISK: 0
            }
        };
        try {
            const u = localStorage.getItem(It);
            if (!u)
                return e;
            const h = JSON.parse(u);
            return {
                cash: v(h.cash, 0),
                holdings: {
                    TECH: v((t = h.holdings) == null ? void 0 : t.TECH, 0),
                    STABLE: v((s = h.holdings) == null ? void 0 : s.STABLE, 0),
                    RISK: v((n = h.holdings) == null ? void 0 : n.RISK, 0)
                },
                avgCost: {
                    TECH: v((a = h.avgCost) == null ? void 0 : a.TECH, 0),
                    STABLE: v((o = h.avgCost) == null ? void 0 : o.STABLE, 0),
                    RISK: v((r = h.avgCost) == null ? void 0 : r.RISK, 0)
                },
                realizedPnL: {
                    TECH: v((l = h.realizedPnL) == null ? void 0 : l.TECH, 0),
                    STABLE: v((c = h.realizedPnL) == null ? void 0 : c.STABLE, 0),
                    RISK: v((d = h.realizedPnL) == null ? void 0 : d.RISK, 0)
                }
            }
        } catch (u) {
            return console.warn("[StockSystem] loadPortfolio failed", u),
            e
        }
    }
    savePortfolio() {
        try {
            localStorage.setItem(It, JSON.stringify(this.portfolio))
        } catch (e) {
            console.warn("[StockSystem] savePortfolio failed", e)
        }
    }
    syncPricesFromRegion() {
        var s;
        const e = this.gameState.state.region
          , t = ((s = I[e]) == null ? void 0 : s.rateToRMB) || 7.2;
        for (const n of Object.keys(this.stocks)) {
            const a = this.stocks[n]
              , o = Math.max(1, Math.floor(kn[n] / t));
            a.price = o,
            a.prevPrice = o,
            a.change = "0.00",
            a.phase = it(qe),
            a.phaseMonthsLeft = this._pickPhaseMonths(a.phase),
            a.history = Array.from({
                length: 12
            }, () => o)
        }
        this.savePortfolio()
    }
    updatePrices() {
        for (const e of Object.keys(this.stocks)) {
            const t = this.stocks[e];
            this._tickOneStock(t)
        }
        this.portfolio.cash = this.gameState.state.money,
        this.savePortfolio()
    }
    _tickOneStock(e) {
        e.phaseMonthsLeft <= 0 && (e.phase = this._nextPhase(e.phase),
        e.phaseMonthsLeft = this._pickPhaseMonths(e.phase));
        const [t,s] = Sn[e.risk][e.phase];
        let n = at(t, s);
        const a = xn[e.risk];
        if (Math.random() < a.chance) {
            const c = Math.random() < .42
              , [d,u] = c ? a.up : a.down;
            n += at(d, u)
        }
        const o = e.risk === "risk" ? [-.45, .24] : e.risk === "tech" ? [-.32, .18] : [-.18, .1];
        n = $n(n, o[0], o[1]);
        const r = Math.max(1, v(e.price, 1))
          , l = Math.max(1, Math.round(r * (1 + n)));
        e.prevPrice = r,
        e.price = l,
        e.change = ((l - r) / r * 100).toFixed(2),
        e.history.push(l),
        e.history.length > 24 && e.history.shift(),
        e.phaseMonthsLeft -= 1
    }
    _nextPhase(e) {
        const s = {
            accumulation: ["distribution", "drawdown", "rebound"],
            drawdown: ["accumulation", "rebound"],
            rebound: ["distribution", "accumulation", "drawdown"],
            distribution: ["drawdown", "accumulation"]
        }[e] || qe;
        return it(s)
    }
    _pickPhaseMonths(e) {
        const [t,s] = Tn[e] || [2, 5];
        return Math.max(1, Math.round(at(t, s)))
    }
    buy(e, t) {
        const s = this.stocks[e]
          , n = Math.floor(Number(t));
        if (!s)
            return {
                success: !1,
                error: "未知股票"
            };
        if (n <= 0)
            return {
                success: !1,
                error: "买入数量必须大于 0"
            };
        const a = this.gameState.state
          , o = s.price * n;
        if (a.money < o)
            return {
                success: !1,
                error: "资金不足"
            };
        const r = v(this.portfolio.holdings[e], 0)
          , l = v(this.portfolio.avgCost[e], 0)
          , c = r + n
          , d = c > 0 ? (l * r + o) / c : 0;
        return this.portfolio.holdings[e] = c,
        this.portfolio.avgCost[e] = d,
        this.gameState.set("money", a.money - o),
        this.portfolio.cash = this.gameState.state.money,
        this.savePortfolio(),
        {
            success: !0,
            message: `买入 ${n} 股 ${s.name} @ ${w(s.price, a.region)}/股`
        }
    }
    sell(e, t) {
        const s = this.stocks[e]
          , n = Math.floor(Number(t));
        if (!s)
            return {
                success: !1,
                error: "未知股票"
            };
        if (n <= 0)
            return {
                success: !1,
                error: "卖出数量必须大于 0"
            };
        const a = v(this.portfolio.holdings[e], 0);
        if (a < n)
            return {
                success: !1,
                error: "持仓不足"
            };
        const o = v(this.portfolio.avgCost[e], 0)
          , r = s.price * n
          , l = o * n
          , c = r - l;
        this.portfolio.holdings[e] = a - n,
        this.portfolio.holdings[e] <= 0 && (this.portfolio.holdings[e] = 0,
        this.portfolio.avgCost[e] = 0),
        this.portfolio.realizedPnL[e] = v(this.portfolio.realizedPnL[e], 0) + c;
        const d = this.gameState.state;
        this.gameState.set("money", d.money + r),
        this.portfolio.cash = this.gameState.state.money,
        this.savePortfolio();
        const u = c >= 0 ? "+" : "";
        return {
            success: !0,
            message: `卖出 ${n} 股 ${s.name}，实现盈亏 ${u}${w(c, d.region)}`
        }
    }
    getPositionSummary(e) {
        const t = this.stocks[e];
        if (!t)
            return {
                shares: 0,
                avgCost: 0,
                marketValue: 0,
                unrealized: 0,
                unrealizedPct: 0,
                realized: 0
            };
        const s = v(this.portfolio.holdings[e], 0)
          , n = v(this.portfolio.avgCost[e], 0)
          , a = s * t.price
          , o = s * n
          , r = a - o
          , l = o > 0 ? r / o * 100 : 0
          , c = v(this.portfolio.realizedPnL[e], 0);
        return {
            shares: s,
            avgCost: n,
            marketValue: a,
            unrealized: r,
            unrealizedPct: l,
            realized: c
        }
    }
    getTrendPoints(e, t=12) {
        const s = this.stocks[e];
        return s ? (Array.isArray(s.history) ? s.history : []).slice(-Math.max(2, t)) : []
    }
    getTotalValue() {
        let e = 0;
        for (const [t,s] of Object.entries(this.portfolio.holdings || {})) {
            const n = this.stocks[t];
            n && (e += v(s, 0) * v(n.price, 0))
        }
        return e
    }
    getTotalInvested() {
        var t, s;
        let e = 0;
        for (const n of Object.keys(this.stocks)) {
            const a = v((t = this.portfolio.holdings) == null ? void 0 : t[n], 0)
              , o = v((s = this.portfolio.avgCost) == null ? void 0 : s[n], 0);
            e += a * o
        }
        return e
    }
    getProfit() {
        return this.getTotalValue() - this.getTotalInvested()
    }
    getPortfolioForSave() {
        var e, t, s, n, a, o, r, l, c;
        return {
            cash: v(this.portfolio.cash, 0),
            holdings: {
                TECH: v((e = this.portfolio.holdings) == null ? void 0 : e.TECH, 0),
                STABLE: v((t = this.portfolio.holdings) == null ? void 0 : t.STABLE, 0),
                RISK: v((s = this.portfolio.holdings) == null ? void 0 : s.RISK, 0)
            },
            avgCost: {
                TECH: v((n = this.portfolio.avgCost) == null ? void 0 : n.TECH, 0),
                STABLE: v((a = this.portfolio.avgCost) == null ? void 0 : a.STABLE, 0),
                RISK: v((o = this.portfolio.avgCost) == null ? void 0 : o.RISK, 0)
            },
            realizedPnL: {
                TECH: v((r = this.portfolio.realizedPnL) == null ? void 0 : r.TECH, 0),
                STABLE: v((l = this.portfolio.realizedPnL) == null ? void 0 : l.STABLE, 0),
                RISK: v((c = this.portfolio.realizedPnL) == null ? void 0 : c.RISK, 0)
            }
        }
    }
    getStateForSave() {
        const e = {};
        for (const t of Object.keys(this.stocks || {})) {
            const s = this.stocks[t];
            s && (e[t] = {
                price: v(s.price, 1),
                prevPrice: v(s.prevPrice, v(s.price, 1)),
                change: String(s.change ?? "0.00"),
                phase: String(s.phase || "accumulation"),
                phaseMonthsLeft: Math.max(0, Math.floor(v(s.phaseMonthsLeft, 0))),
                history: Array.isArray(s.history) ? s.history.map(n => Math.max(1, Math.floor(v(n, 1)))).slice(-24) : []
            })
        }
        return e
    }
    loadPortfolioFromSave(e) {
        var t, s, n, a, o, r, l, c, d;
        if (!e || typeof e != "object") {
            this.resetPortfolioForNewRun();
            return
        }
        this.portfolio = {
            cash: v(e.cash, 0),
            holdings: {
                TECH: v((t = e.holdings) == null ? void 0 : t.TECH, 0),
                STABLE: v((s = e.holdings) == null ? void 0 : s.STABLE, 0),
                RISK: v((n = e.holdings) == null ? void 0 : n.RISK, 0)
            },
            avgCost: {
                TECH: v((a = e.avgCost) == null ? void 0 : a.TECH, 0),
                STABLE: v((o = e.avgCost) == null ? void 0 : o.STABLE, 0),
                RISK: v((r = e.avgCost) == null ? void 0 : r.RISK, 0)
            },
            realizedPnL: {
                TECH: v((l = e.realizedPnL) == null ? void 0 : l.TECH, 0),
                STABLE: v((c = e.realizedPnL) == null ? void 0 : c.STABLE, 0),
                RISK: v((d = e.realizedPnL) == null ? void 0 : d.RISK, 0)
            }
        },
        this.savePortfolio()
    }
    loadStateFromSave(e) {
        if (!e || typeof e != "object")
            return !1;
        let t = !1;
        for (const s of Object.keys(this.stocks || {})) {
            const n = e[s];
            if (!n || typeof n != "object")
                continue;
            const a = this.stocks[s]
              , o = Math.max(1, Math.floor(v(n.price, a.price)))
              , r = Math.max(1, Math.floor(v(n.prevPrice, o)))
              , l = qe.includes(n.phase) ? n.phase : a.phase
              , c = Math.max(0, Math.floor(v(n.phaseMonthsLeft, a.phaseMonthsLeft)))
              , d = Array.isArray(n.history) ? n.history.map(u => Math.max(1, Math.floor(v(u, o)))).slice(-24) : [];
            a.price = o,
            a.prevPrice = r,
            a.change = String(n.change ?? ((o - r) / Math.max(1, r) * 100).toFixed(2)),
            a.phase = l,
            a.phaseMonthsLeft = c,
            a.history = d.length >= 2 ? d : Array.from({
                length: 12
            }, () => o),
            t = !0
        }
        return t
    }
    resetPortfolioForNewRun() {
        this.portfolio = {
            cash: 0,
            holdings: {
                TECH: 0,
                STABLE: 0,
                RISK: 0
            },
            avgCost: {
                TECH: 0,
                STABLE: 0,
                RISK: 0
            },
            realizedPnL: {
                TECH: 0,
                STABLE: 0,
                RISK: 0
            }
        },
        this.savePortfolio()
    }
}
function vs(i, e) {
    const t = i === "female" ? "female" : "male";
    return e === "bi" ? Math.random() < .5 ? "men" : "women" : e === "straight" ? t === "male" ? "women" : "men" : e === "lesbian" ? "women" : t === "male" ? "men" : "women"
}
function bs(i) {
    const e = Math.floor(Math.random() * 99);
    return `https://randomuser.me/api/portraits/${i}/${e}.jpg`
}
function Mn(i="") {
    const e = i === "women" || i === "female";
    return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96">
<defs><linearGradient id="g" x1="18" y1="4" x2="78" y2="92" gradientUnits="userSpaceOnUse"><stop stop-color="${e ? "#fbcfe8" : "#bae6fd"}"/><stop offset="1" stop-color="${e ? "#f472b6" : "#38bdf8"}"/></linearGradient></defs>
<rect width="96" height="96" rx="48" fill="#172033"/>
<circle cx="48" cy="36" r="18" fill="url(#g)"/>
<path d="M18 88c4-22 18-34 30-34s26 12 30 34" fill="url(#g)"/>
</svg>`)}`
}
function ws(i="") {
    return `this.onerror=null;this.src='${Mn(i)}';this.dataset.fallback='true';`
}
function Ya() {
    if (!(typeof Image > "u"))
        for (const i of ["men", "women"]) {
            const e = new Image;
            e.decoding = "async",
            e.src = `https://randomuser.me/api/portraits/${i}/0.jpg`
        }
}
class Wa {
    constructor(e, t) {
        this.gameState = e,
        this.modal = t,
        this.datingScenes = this.initDatingScenes(),
        this.giftOptions = this.initGiftOptions()
    }
    initDatingScenes() {
        return [{
            id: "dinner",
            name: "约会吃饭",
            icon: "🍽️",
            cost: 5,
            energy: 20,
            mental: 15,
            relGain: 8,
            desc: "一起享用美食，增进感情"
        }, {
            id: "movie",
            name: "看电影",
            icon: "🎬",
            cost: 3,
            energy: 15,
            mental: 12,
            relGain: 6,
            desc: "看场电影，享受二人世界"
        }, {
            id: "park",
            name: "公园散步",
            icon: "🌳",
            cost: 0,
            energy: 25,
            mental: 10,
            relGain: 5,
            desc: "在公园散步，聊天谈心"
        }, {
            id: "travel",
            name: "短途旅行",
            icon: "✈️",
            cost: 20,
            energy: 40,
            mental: 25,
            relGain: 15,
            desc: "一起去旅行，创造美好回忆"
        }, {
            id: "study",
            name: "一起学习",
            icon: "📚",
            cost: 2,
            energy: 30,
            mental: 5,
            relGain: 4,
            desc: "图书馆约会，共同进步"
        }, {
            id: "gym",
            name: "一起健身",
            icon: "💪",
            cost: 0,
            energy: 35,
            mental: 8,
            relGain: 6,
            health: 5,
            desc: "健身房约会，健康又甜蜜"
        }, {
            id: "concert",
            name: "演唱会",
            icon: "🎤",
            cost: 15,
            energy: 30,
            mental: 30,
            relGain: 12,
            desc: "一起看演唱会，激情四射"
        }, {
            id: "home_cook",
            name: "在家做饭",
            icon: "🍳",
            cost: 8,
            energy: 25,
            mental: 15,
            relGain: 10,
            desc: "一起下厨，温馨浪漫"
        }]
    }
    initGiftOptions() {
        return [{
            id: "flower",
            name: "鲜花",
            icon: "💐",
            cost: 3,
            relGain: 5,
            desc: "经典浪漫选择"
        }, {
            id: "chocolate",
            name: "巧克力",
            icon: "🍫",
            cost: 2,
            relGain: 3,
            desc: "甜蜜的心意"
        }, {
            id: "jewelry",
            name: "首饰",
            icon: "💎",
            cost: 20,
            relGain: 20,
            desc: "珍贵的礼物"
        }, {
            id: "book",
            name: "书籍",
            icon: "📖",
            cost: 4,
            relGain: 6,
            desc: "适合爱学习的 TA"
        }, {
            id: "game",
            name: "游戏",
            icon: "🎮",
            cost: 8,
            relGain: 8,
            desc: "适合爱打游戏的 TA"
        }, {
            id: "perfume",
            name: "香水",
            icon: "🌸",
            cost: 12,
            relGain: 12,
            desc: "让 TA 记住你的味道"
        }, {
            id: "handmade",
            name: "手工礼物",
            icon: "🎨",
            cost: 1,
            energy: 30,
            relGain: 15,
            desc: "用心制作的礼物最珍贵"
        }, {
            id: "surprise",
            name: "惊喜派对",
            icon: "🎉",
            cost: 25,
            energy: 40,
            relGain: 25,
            desc: "给 TA 一个难忘的惊喜"
        }]
    }
    getAvailablePartners() {
        const t = this.gameState.state.orientation
          , s = [];
        return (t === "straight" || t === "bi") && s.push({
            type: "opposite",
            name: "异性"
        }),
        (t === "gay" || t === "lesbian" || t === "bi") && s.push({
            type: "same",
            name: "同性"
        }),
        s
    }
    meetNewPartner() {
        const e = this.gameState.state;
        if (e.partner)
            return {
                success: !1,
                error: "你已经有伴侣了"
            };
        const t = ["Alex", "Jordan", "Taylor", "Casey", "Morgan", "Riley", "Jamie", "Quinn"]
          , s = ["同学", "同事", "邻居", "网友", "社团朋友"]
          , n = t[Math.floor(Math.random() * t.length)]
          , a = s[Math.floor(Math.random() * s.length)]
          , o = ["温柔", "活泼", "内向", "幽默", "成熟", "阳光"]
          , r = o[Math.floor(Math.random() * o.length)]
          , l = vs(e.playerGender || "male", e.orientation || "straight")
          , c = l === "women" ? "female" : "male"
          , d = Math.random() < .5 ? "international" : "local"
          , u = d === "international" ? "留学生（同乡/异国同学）" : "本国人"
          , h = {
            name: n,
            type: a,
            personality: r,
            rel: 50,
            stage: "dating",
            partnerGender: c,
            origin: d,
            meetDate: e.monthTotal,
            giftLikes: this.getRandomGiftLikes(),
            avatarUrl: bs(l),
            bondedThisMonth: !0
        };
        return {
            success: !0,
            partner: h,
            message: `你认识了${n}，TA 是一名${a}，性格${r}`,
            previewHtml: this.buildMeetPreviewHtml(h, u)
        }
    }
    buildMeetPreviewHtml(e, t) {
        const s = a => String(a).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
        return `
            <div class="dating-meet-modal">
                <img class="portrait-randomuser dating-meet-avatar" src="${String(e.avatarUrl || "").replace(/"/g, "%22")}" width="88" height="88" alt="" onerror="${ws(e.partnerGender)}" />
                <p class="story-text" style="margin-top:12px;">你在聚会上认识了 <strong>${s(e.name)}</strong>。</p>
                <p class="story-text">身份：<strong>${s(t)}</strong> · ${s(e.type)} · 性格${s(e.personality)}</p>
                <p class="story-text" style="color:#94a3b8;font-size:13px;">是否愿意和 TA 正式交往？（初始好感 50，长期不互动感情会降温）</p>
            </div>`
    }
    markPartnerBonded() {
        const e = this.gameState.state;
        e.partner && (e.partner.bondedThisMonth = !0)
    }
    propose() {
        const e = this.gameState.state;
        if (!e.partner)
            return {
                success: !1,
                error: "你没有伴侣"
            };
        const t = e.partner;
        if (t.stage !== "dating")
            return {
                success: !1,
                error: "当前阶段无法求婚"
            };
        if (t.rel < 55)
            return {
                success: !1,
                error: "好感度不足（需≥55）"
            };
        const s = A(3e3, e.region);
        if (e.money < s)
            return {
                success: !1,
                error: `资金不足，戒指约需 ${w(s, e.region)}`
            };
        if (e.energy < 25)
            return {
                success: !1,
                error: "体力不足"
            };
        this.gameState.update({
            money: e.money - s,
            energy: e.energy - 25
        });
        const n = Math.random()
          , a = Math.max(.15, 1 - t.rel / 120);
        return n > a ? (t.stage = "engaged",
        this.markPartnerBonded(),
        this.gameState.update({
            partner: t
        }),
        {
            success: !0,
            message: `${t.name} 含泪答应了你，你们订婚了！`
        }) : (t.rel = Math.max(0, t.rel - 8),
        this.gameState.update({
            partner: t,
            mental: Math.max(0, e.mental - 12)
        }),
        {
            success: !1,
            error: `${t.name} 觉得还不是时候……好感 -8，心态 -12`
        })
    }
    planWedding() {
        const e = this.gameState.state;
        if (!e.partner)
            return {
                success: !1,
                error: "你没有伴侣"
            };
        const t = e.partner;
        if (t.stage !== "engaged")
            return {
                success: !1,
                error: "请先订婚再办婚礼"
            };
        if (t.rel < 60)
            return {
                success: !1,
                error: "好感度不足（需≥60）"
            };
        const s = A(8e3, e.region);
        if (e.money < s)
            return {
                success: !1,
                error: `资金不足，婚礼预算约需 ${w(s, e.region)}`
            };
        if (e.energy < 35)
            return {
                success: !1,
                error: "体力不足"
            };
        this.gameState.update({
            money: e.money - s,
            energy: e.energy - 35
        });
        const n = Math.random()
          , a = Math.max(.12, 1 - t.rel / 110);
        return n > a ? (t.stage = "married",
        this.markPartnerBonded(),
        this.gameState.update({
            partner: t
        }),
        {
            success: !0,
            message: "婚礼圆满完成！你们成为合法夫妻。"
        }) : (t.rel = Math.max(0, t.rel - 6),
        this.gameState.update({
            partner: t,
            mental: Math.max(0, e.mental - 8)
        }),
        {
            success: !1,
            error: "婚礼筹备出现波折，改期再说……好感 -6，心态 -8"
        })
    }
    getRandomGiftLikes() {
        const e = this.giftOptions.map(s => s.id)
          , t = [];
        for (; t.length < 3 && e.length > 0; ) {
            const s = Math.floor(Math.random() * e.length);
            t.push(e.splice(s, 1)[0])
        }
        return t
    }
    date(e) {
        const t = this.gameState.state
          , s = this.datingScenes.find(r => r.id === e);
        if (!s)
            return {
                success: !1,
                error: "无效的约会场景"
            };
        if (!t.partner)
            return {
                success: !1,
                error: "你没有伴侣"
            };
        if (t.energy < s.energy)
            return {
                success: !1,
                error: "体力不足"
            };
        const n = s.cost ? A(s.cost * 1e3, t.region) : 0;
        if (t.money < n)
            return {
                success: !1,
                error: "资金不足"
            };
        const a = {
            energy: t.energy - s.energy,
            money: t.money - n,
            mental: Math.min(100, t.mental + s.mental)
        };
        s.health && (a.health = Math.min(100, t.health + s.health)),
        this.gameState.update(a);
        const o = t.partner;
        return o.rel = Math.min(100, o.rel + s.relGain),
        this.markPartnerBonded(),
        this.checkRelationshipStage(o),
        this.gameState.updateHistory("increment", ["entertainmentTimes", 1]),
        {
            success: !0,
            scene: s,
            message: `你和${o.name}去${s.name}了，${s.desc}`
        }
    }
    giveGift(e) {
        const t = this.gameState.state
          , s = this.giftOptions.find(c => c.id === e);
        if (console.log("[DatingSystem.giveGift] 开始处理", {
            giftId: e,
            giftFound: !!s,
            hasPartner: !!t.partner,
            money: t.money,
            energy: t.energy
        }),
        !s)
            return console.log("[DatingSystem.giveGift] 失败：无效的礼物 ID", e),
            {
                success: !1,
                error: "无效的礼物",
                giftId: e
            };
        if (!t.partner)
            return console.log("[DatingSystem.giveGift] 失败：没有伴侣"),
            {
                success: !1,
                error: "你没有伴侣"
            };
        const n = A(s.cost * 1e3, t.region);
        if (t.money < n)
            return console.log("[DatingSystem.giveGift] 失败：资金不足", {
                money: t.money,
                cost: n,
                needed: n - t.money
            }),
            {
                success: !1,
                error: `资金不足，还需要 ${w(n - t.money, t.region)}`,
                cost: n,
                currentMoney: t.money
            };
        if (s.energy && t.energy < s.energy)
            return console.log("[DatingSystem.giveGift] 失败：体力不足", {
                energy: t.energy,
                needed: s.energy,
                missing: s.energy - t.energy
            }),
            {
                success: !1,
                error: `体力不足，还需要 ${s.energy - t.energy} 点`,
                energy: s.energy,
                currentEnergy: t.energy
            };
        const a = {
            money: t.money - n
        };
        s.energy && (a.energy = t.energy - s.energy),
        this.gameState.update(a);
        const o = t.partner;
        let r = s.relGain;
        o.giftLikes && o.giftLikes.includes(e) && (r = Math.floor(r * 1.5)),
        o.rel = Math.min(100, o.rel + r),
        this.markPartnerBonded(),
        this.checkRelationshipStage(o);
        const l = o.giftLikes.includes(e);
        return console.log("[DatingSystem.giveGift] 成功", {
            giftId: e,
            giftName: s.name,
            relGain: r,
            isLiked: l,
            newRel: o.rel
        }),
        {
            success: !0,
            gift: s,
            giftName: s.name,
            relGain: r,
            isLiked: l,
            newRel: o.rel,
            message: `你送了${s.name}给${o.name}，${l ? "TA 非常喜欢！" : "TA 很开心"}`
        }
    }
    checkRelationshipStage(e) {
        return {
            upgraded: !1
        }
    }
    breakUp() {
        const e = this.gameState.state;
        if (!e.partner)
            return {
                success: !1,
                error: "你没有伴侣"
            };
        const t = e.partner
          , s = t.stage === "married" ? 55 : t.stage === "engaged" ? 45 : 25;
        this.gameState.update({
            mental: Math.max(0, e.mental - s),
            partner: null
        });
        const n = e.history || {}
          , a = e.money < A(35e3, e.region)
          , o = (Number(e.gpa) || 0) < 3.2;
        return a && (o || n.gpaDroppedEver) && this.gameState.updateHistory("set", ["ultimateSimpUnlocked", !0]),
        {
            success: !0,
            message: `你和${t.name}分手了，心情低落`
        }
    }
    checkBreakUp() {
        const e = this.gameState.state;
        return e.partner && e.partner.rel <= 0 ? this.breakUp() : !1
    }
    getDatingUI() {
        const e = this.gameState.state;
        if (!e.partner)
            return {
                hasPartner: !1,
                scenes: this.datingScenes,
                gifts: this.giftOptions
            };
        const t = e.partner
          , s = A(3e3, e.region)
          , n = A(8e3, e.region);
        return {
            hasPartner: !0,
            partner: t,
            canPropose: t.stage === "dating" && t.rel >= 55 && e.money >= s && e.energy >= 25,
            canPlanWedding: t.stage === "engaged" && t.rel >= 60 && e.money >= n && e.energy >= 35,
            proposeCostLocal: s,
            weddingCostLocal: n,
            scenes: this.datingScenes.map(a => {
                const o = a.cost ? A(a.cost * 1e3, e.region) : 0;
                return {
                    ...a,
                    costLocal: o,
                    canAfford: e.money >= o && e.energy >= a.energy
                }
            }
            ),
            gifts: this.giftOptions.map(a => {
                const o = A(a.cost * 1e3, e.region);
                return {
                    ...a,
                    costLocal: o,
                    canAfford: e.money >= o && (!a.energy || e.energy >= a.energy),
                    isLiked: (e.partner.giftLikes || []).includes(a.id)
                }
            }
            )
        }
    }
    reset() {
        this.gameState.update({
            partner: null
        })
    }
}
class Ja {
    constructor(e) {
        this.gameState = e,
        this.skillTree = this.initSkillTree(),
        this.loadProgress()
    }
    initSkillTree() {
        return {
            academic: {
                name: "学术",
                icon: "📚",
                color: "#3b82f6",
                skills: {
                    study_efficiency: {
                        id: "study_efficiency",
                        name: "学习效率",
                        icon: "⚡",
                        description: "学习时体力消耗减少",
                        maxLevel: 3,
                        effects: [{
                            studyCostReduction: 5
                        }, {
                            studyCostReduction: 10
                        }, {
                            studyCostReduction: 15
                        }],
                        costPerLevel: [5, 8, 12],
                        prerequisites: []
                    },
                    gpa_boost: {
                        id: "gpa_boost",
                        name: "GPA 加成",
                        icon: "🎯",
                        description: "GPA 获取效率提升",
                        maxLevel: 3,
                        effects: [{
                            gpaGainBonus: .05
                        }, {
                            gpaGainBonus: .1
                        }, {
                            gpaGainBonus: .15
                        }],
                        costPerLevel: [6, 10, 15],
                        prerequisites: ["study_efficiency:1"]
                    },
                    research_master: {
                        id: "research_master",
                        name: "科研大师",
                        icon: "🔬",
                        description: "科研效率大幅提升",
                        maxLevel: 2,
                        effects: [{
                            researchEfficiency: 50
                        }, {
                            researchEfficiency: 100
                        }],
                        costPerLevel: [10, 15],
                        prerequisites: ["gpa_boost:2"]
                    },
                    scholarship_expert: {
                        id: "scholarship_expert",
                        name: "奖学金专家",
                        icon: "💰",
                        description: "获得奖学金概率提升",
                        maxLevel: 2,
                        effects: [{
                            scholarshipChance: 20
                        }, {
                            scholarshipChance: 40
                        }],
                        costPerLevel: [8, 12],
                        prerequisites: ["gpa_boost:1"]
                    }
                }
            },
            career: {
                name: "职业",
                icon: "💼",
                color: "#10b981",
                skills: {
                    work_efficiency: {
                        id: "work_efficiency",
                        name: "工作效率",
                        icon: "📈",
                        description: "打工收入增加",
                        maxLevel: 3,
                        effects: [{
                            workIncomeBonus: 10
                        }, {
                            workIncomeBonus: 20
                        }, {
                            workIncomeBonus: 30
                        }],
                        costPerLevel: [5, 8, 12],
                        prerequisites: []
                    },
                    interview_master: {
                        id: "interview_master",
                        name: "面试大师",
                        icon: "🎤",
                        description: "面试成功率提升",
                        maxLevel: 2,
                        effects: [{
                            interviewSuccessRate: 20
                        }, {
                            interviewSuccessRate: 40
                        }],
                        costPerLevel: [8, 12],
                        prerequisites: ["work_efficiency:1"]
                    },
                    networking: {
                        id: "networking",
                        name: "人脉拓展",
                        icon: "🤝",
                        description: "教授关系自然衰减减少",
                        maxLevel: 2,
                        effects: [{
                            relDecayReduction: 50
                        }, {
                            relDecayReduction: 100
                        }],
                        costPerLevel: [6, 10],
                        prerequisites: ["work_efficiency:2"]
                    },
                    ceo_potential: {
                        id: "ceo_potential",
                        name: "CEO 潜力",
                        icon: "👔",
                        description: "大厂实习收入大幅提升",
                        maxLevel: 1,
                        effects: [{
                            internshipBonus: 50
                        }],
                        costPerLevel: [20],
                        prerequisites: ["work_efficiency:3", "interview_master:2"]
                    }
                }
            },
            social: {
                name: "社交",
                icon: "❤️",
                color: "#f59e0b",
                skills: {
                    charm: {
                        id: "charm",
                        name: "魅力",
                        icon: "✨",
                        description: "关系值增长加快",
                        maxLevel: 3,
                        effects: [{
                            relGainBonus: 10
                        }, {
                            relGainBonus: 20
                        }, {
                            relGainBonus: 30
                        }],
                        costPerLevel: [5, 8, 12],
                        prerequisites: []
                    },
                    party_animal: {
                        id: "party_animal",
                        name: "派对达人",
                        icon: "🎉",
                        description: "派对心态恢复增加",
                        maxLevel: 2,
                        effects: [{
                            partyMentalBonus: 10
                        }, {
                            partyMentalBonus: 20
                        }],
                        costPerLevel: [6, 10],
                        prerequisites: ["charm:1"]
                    },
                    relationship_master: {
                        id: "relationship_master",
                        name: "恋爱大师",
                        icon: "💕",
                        description: "约会效果提升",
                        maxLevel: 2,
                        effects: [{
                            dateEffectBonus: 20
                        }, {
                            dateEffectBonus: 40
                        }],
                        costPerLevel: [8, 12],
                        prerequisites: ["charm:2"]
                    },
                    social_butterfly: {
                        id: "social_butterfly",
                        name: "社交达人",
                        icon: "🦋",
                        description: "自动恢复关系值",
                        maxLevel: 1,
                        effects: [{
                            autoRelRecovery: 5
                        }],
                        costPerLevel: [15],
                        prerequisites: ["charm:3", "party_animal:2"]
                    }
                }
            },
            life: {
                name: "生活",
                icon: "🏠",
                color: "#8b5cf6",
                skills: {
                    money_management: {
                        id: "money_management",
                        name: "理财",
                        icon: "💵",
                        description: "每月生活费减少",
                        maxLevel: 3,
                        effects: [{
                            livingCostReduction: 5
                        }, {
                            livingCostReduction: 10
                        }, {
                            livingCostReduction: 15
                        }],
                        costPerLevel: [5, 8, 12],
                        prerequisites: []
                    },
                    health_conscious: {
                        id: "health_conscious",
                        name: "健康意识",
                        icon: "💪",
                        description: "健康自然恢复",
                        maxLevel: 2,
                        effects: [{
                            healthRecovery: 2
                        }, {
                            healthRecovery: 5
                        }],
                        costPerLevel: [6, 10],
                        prerequisites: ["money_management:1"]
                    },
                    stress_management: {
                        id: "stress_management",
                        name: "压力管理",
                        icon: "🧘",
                        description: "心态上限提升",
                        maxLevel: 2,
                        effects: [{
                            mentalCapBonus: 10
                        }, {
                            mentalCapBonus: 20
                        }],
                        costPerLevel: [8, 12],
                        prerequisites: ["money_management:2"]
                    },
                    balanced_life: {
                        id: "balanced_life",
                        name: "平衡生活",
                        icon: "⚖️",
                        description: "所有属性小幅提升",
                        maxLevel: 1,
                        effects: [{
                            allStatsBonus: 5
                        }],
                        costPerLevel: [20],
                        prerequisites: ["money_management:3", "health_conscious:2", "stress_management:2"]
                    }
                }
            }
        }
    }
    loadProgress() {
        const e = {
            points: 0,
            unlocked: {}
        };
        try {
            const t = localStorage.getItem("studyAbroadSkillTree");
            t ? this.progress = {
                ...e,
                ...JSON.parse(t)
            } : this.progress = e
        } catch (t) {
            console.warn("加载技能树失败:", t),
            this.progress = e
        }
    }
    saveProgress() {
        try {
            localStorage.setItem("studyAbroadSkillTree", JSON.stringify(this.progress))
        } catch (e) {
            console.warn("保存技能树失败:", e)
        }
    }
    addPoints(e) {
        this.progress.points += e,
        this.saveProgress()
    }
    canUnlock(e, t) {
        const n = this.skillTree[t].skills[e];
        if (!n)
            return {
                can: !1,
                reason: "技能不存在"
            };
        const a = this.progress.unlocked[e] || 0;
        if (a >= n.maxLevel)
            return {
                can: !1,
                reason: "技能已满级"
            };
        const o = n.costPerLevel[a];
        if (this.progress.points < o)
            return {
                can: !1,
                reason: `技能点不足 (需要${o})`
            };
        for (const r of n.prerequisites) {
            const [l,c] = r.split(":");
            if ((this.progress.unlocked[l] || 0) < parseInt(c))
                return {
                    can: !1,
                    reason: `需要先解锁 ${this.getSkillName(l)} Lv${c}`
                }
        }
        return {
            can: !0,
            cost: o
        }
    }
    getSkillName(e) {
        for (const t of Object.values(this.skillTree))
            if (t.skills[e])
                return t.skills[e].name;
        return e
    }
    unlock(e, t) {
        const s = this.canUnlock(e, t);
        return s.can ? (this.progress.points -= s.cost,
        this.progress.unlocked[e] || (this.progress.unlocked[e] = 0),
        this.progress.unlocked[e]++,
        this.saveProgress(),
        {
            success: !0,
            message: `解锁 ${this.skillTree[t].skills[e].name} Lv${this.progress.unlocked[e]}`
        }) : {
            success: !1,
            reason: s.reason
        }
    }
    getSkillEffects() {
        const e = {};
        for (const [t,s] of Object.entries(this.progress.unlocked)) {
            if (s === 0)
                continue;
            let n = null;
            for (const a of Object.values(this.skillTree))
                if (a.skills[t]) {
                    n = a.skills[t];
                    break
                }
            n && n.effects[s - 1] && Object.assign(e, n.effects[s - 1])
        }
        return e
    }
    applyEffects() {
        return this.getSkillEffects()
    }
    getUI() {
        const e = {};
        for (const [t,s] of Object.entries(this.skillTree))
            e[t] = {
                ...s,
                skills: Object.values(s.skills).map(n => {
                    const a = this.progress.unlocked[n.id] || 0
                      , o = n.costPerLevel[a] || 0
                      , r = this.canUnlock(n.id, t).can;
                    return {
                        ...n,
                        currentLevel: a,
                        nextCost: o,
                        canUnlock: r,
                        isMaxed: a >= n.maxLevel
                    }
                }
                )
            };
        return {
            branches: e,
            points: this.progress.points,
            totalUnlocked: Object.values(this.progress.unlocked).reduce( (t, s) => t + s, 0)
        }
    }
    reset() {
        this.progress = {
            points: 0,
            unlocked: {}
        },
        this.saveProgress()
    }
}
class Qa {
    constructor(e) {
        this.gameState = e,
        this.housingData = this.initHousingData(),
        this.currentHousing = this.loadCurrentHousing()
    }
    initHousingData() {
        return {
            US: {
                name: "美国",
                currency: "USD",
                currencySymbol: "$",
                description: "地广人稀，房租差异大，市中心较贵",
                housing: [{
                    id: "us_shared",
                    name: "合租房间",
                    type: "shared",
                    price: 800,
                    size: "10-15㎡",
                    desc: "与他人合租，独立卧室，共用厨卫",
                    commute: "30-45 分钟",
                    quality: 2
                }, {
                    id: "us_studio",
                    name: "Studio 公寓",
                    type: "studio",
                    price: 1500,
                    size: "30-40㎡",
                    desc: "独立单间，厨卫一体",
                    commute: "20-30 分钟",
                    quality: 3
                }, {
                    id: "us_1br",
                    name: "1 卧室公寓",
                    type: "1br",
                    price: 2200,
                    size: "50-60㎡",
                    desc: "独立一室一厅",
                    commute: "15-25 分钟",
                    quality: 4
                }, {
                    id: "us_2br",
                    name: "2 卧室公寓",
                    type: "2br",
                    price: 3e3,
                    size: "80-100㎡",
                    desc: "两室一厅，适合合租",
                    commute: "15-25 分钟",
                    quality: 5
                }]
            },
            UK: {
                name: "英国",
                currency: "GBP",
                currencySymbol: "£",
                description: "伦敦房租极高，其他城市相对便宜",
                housing: [{
                    id: "uk_shared",
                    name: "学生宿舍",
                    type: "shared",
                    price: 700,
                    size: "12-18㎡",
                    desc: "学校宿舍或合租，包 Bills",
                    commute: "10-20 分钟",
                    quality: 3
                }, {
                    id: "uk_studio",
                    name: "Studio 公寓",
                    type: "studio",
                    price: 1200,
                    size: "25-35㎡",
                    desc: "独立单间，伦敦以外较便宜",
                    commute: "20-30 分钟",
                    quality: 4
                }, {
                    id: "uk_1br",
                    name: "1 卧室公寓",
                    type: "1br",
                    price: 1800,
                    size: "45-55㎡",
                    desc: "独立一室一厅",
                    commute: "15-25 分钟",
                    quality: 4
                }, {
                    id: "uk_house",
                    name: "Terraced House",
                    type: "house",
                    price: 2e3,
                    size: "80-120㎡",
                    desc: "英式联排别墅，适合多人合租",
                    commute: "20-40 分钟",
                    quality: 5
                }]
            },
            AU: {
                name: "澳洲",
                currency: "AUD",
                currencySymbol: "A$",
                description: "悉尼墨尔本较贵，其他城市便宜",
                housing: [{
                    id: "au_shared",
                    name: "合租房间",
                    type: "shared",
                    price: 1e3,
                    size: "12-18㎡",
                    desc: "与他人合租，独立卧室",
                    commute: "30-45 分钟",
                    quality: 3
                }, {
                    id: "au_studio",
                    name: "Studio 公寓",
                    type: "studio",
                    price: 1600,
                    size: "35-45㎡",
                    desc: "独立单间，市中心较贵",
                    commute: "15-25 分钟",
                    quality: 4
                }, {
                    id: "au_1br",
                    name: "1 卧室公寓",
                    type: "1br",
                    price: 2200,
                    size: "50-65㎡",
                    desc: "独立一室一厅",
                    commute: "15-25 分钟",
                    quality: 4
                }, {
                    id: "au_unit",
                    name: "Unit 公寓",
                    type: "unit",
                    price: 2500,
                    size: "70-90㎡",
                    desc: "澳洲特色单元房，带阳台",
                    commute: "10-20 分钟",
                    quality: 5
                }]
            },
            HK: {
                name: "香港",
                currency: "HKD",
                currencySymbol: "HK$",
                description: "世界房租最高地区之一，空间极小",
                housing: [{
                    id: "hk_bedspace",
                    name: "床位/劏房",
                    type: "bedspace",
                    price: 6e3,
                    size: "3-8㎡",
                    desc: "极小空间，共用厨卫（不推荐）",
                    commute: "20-30 分钟",
                    quality: 1
                }, {
                    id: "hk_shared",
                    name: "合租房间",
                    type: "shared",
                    price: 8e3,
                    size: "8-12㎡",
                    desc: "与他人合租，独立小房间",
                    commute: "25-40 分钟",
                    quality: 2
                }, {
                    id: "hk_studio",
                    name: "开放式单位",
                    type: "studio",
                    price: 12e3,
                    size: "20-30㎡",
                    desc: "独立单间，香港主流选择",
                    commute: "15-30 分钟",
                    quality: 3
                }, {
                    id: "hk_1br",
                    name: "1 卧室单位",
                    type: "1br",
                    price: 2e4,
                    size: "35-45㎡",
                    desc: "独立一室一厅（香港算豪宅）",
                    commute: "10-25 分钟",
                    quality: 4
                }]
            },
            SG: {
                name: "新加坡",
                currency: "SGD",
                currencySymbol: "S$",
                description: "房租高但质量好，组屋便宜但难租",
                housing: [{
                    id: "sg_shared",
                    name: "组屋合租",
                    type: "shared",
                    price: 900,
                    size: "10-15㎡",
                    desc: "HDB 组屋合租，性价比高",
                    commute: "20-35 分钟",
                    quality: 3
                }, {
                    id: "sg_condo_shared",
                    name: "公寓合租",
                    type: "shared",
                    price: 1500,
                    size: "12-18㎡",
                    desc: "Condo 公寓合租，有泳池健身房",
                    commute: "15-25 分钟",
                    quality: 4
                }, {
                    id: "sg_studio",
                    name: "Studio 公寓",
                    type: "studio",
                    price: 2200,
                    size: "35-50㎡",
                    desc: "独立单间，设施齐全",
                    commute: "10-20 分钟",
                    quality: 5
                }, {
                    id: "sg_1br",
                    name: "1 卧室公寓",
                    type: "1br",
                    price: 3e3,
                    size: "50-70㎡",
                    desc: "豪华公寓，设施完善",
                    commute: "10-20 分钟",
                    quality: 5
                }]
            }
        }
    }
    loadCurrentHousing() {
        try {
            const e = localStorage.getItem("studyAbroadHousing");
            if (e)
                return JSON.parse(e)
        } catch (e) {
            console.warn("加载住房信息失败:", e)
        }
        return null
    }
    saveHousing() {
        try {
            localStorage.setItem("studyAbroadHousing", JSON.stringify(this.currentHousing))
        } catch (e) {
            console.warn("保存住房信息失败:", e)
        }
    }
    getHousingList(e) {
        const t = this.housingData[e];
        return t ? t.housing.map(s => ({
            ...s,
            regionName: t.name,
            currency: t.currency,
            currencySymbol: t.currencySymbol,
            description: t.description
        })) : []
    }
    rent(e) {
        const t = this.gameState.state
          , s = this.housingData[t.region];
        if (!s)
            return {
                success: !1,
                error: "地区不存在"
            };
        const n = s.housing.find(r => r.id === e);
        if (!n)
            return {
                success: !1,
                error: "房源不存在"
            };
        const a = n.price * 2;
        if (t.money < a)
            return {
                success: !1,
                error: `资金不足，需要 ${w(a, t.region)}（2 个月押金）`
            };
        const o = n.price;
        return this.currentHousing = {
            housingId: n.id,
            name: n.name,
            price: n.price,
            type: n.type,
            size: n.size,
            region: t.region,
            rentDate: t.monthTotal
        },
        this.saveHousing(),
        this.gameState.update({
            money: t.money - o
        }),
        {
            success: !0,
            housing: n,
            message: `成功租下${n.name}，押金 ${w(o, t.region)}（月租 ${w(n.price, t.region)}）`
        }
    }
    payMonthlyRent() {
        if (!this.currentHousing)
            return {
                paid: !1,
                owed: 0,
                defaultRent: !0
            };
        const e = this.gameState.state
          , t = this.currentHousing.price;
        return e.money < t ? {
            paid: !1,
            owed: t,
            defaultRent: !1
        } : (this.gameState.update({
            money: e.money - t
        }),
        {
            paid: !0,
            amount: t,
            defaultRent: !1
        })
    }
    getCurrentHousing() {
        if (!this.currentHousing)
            return null;
        const e = this.housingData[this.currentHousing.region];
        return {
            ...this.currentHousing,
            regionName: e == null ? void 0 : e.name,
            currency: e == null ? void 0 : e.currency,
            currencySymbol: e == null ? void 0 : e.currencySymbol
        }
    }
    getRent() {
        return this.currentHousing ? this.currentHousing.price : 0
    }
    moveOut() {
        return this.currentHousing ? (this.currentHousing = null,
        this.saveHousing(),
        this.gameState.update({}),
        {
            success: !0,
            message: "已退租"
        }) : {
            success: !1,
            error: "当前没有租房"
        }
    }
    reset() {
        this.currentHousing = null,
        this.saveHousing()
    }
    getMentalEffect() {
        if (!this.currentHousing)
            return 0;
        const e = this.housingData[this.currentHousing.region]
          , t = e == null ? void 0 : e.housing.find(s => s.id === this.currentHousing.housingId);
        return t ? t.quality <= 2 ? -5 : t.quality >= 4 ? 5 : 0 : 0
    }
}
function An() {
    return {
        completedYears: [],
        completedTaskIds: [],
        scholarshipAwardedYears: [],
        mental60Streak: 0,
        dishwashMaxProficiency: 0,
        year1ExamScoreReady: !1,
        raiseAppliedEver: !1,
        proposalSuccessEver: !1
    }
}
class Xa {
    constructor(e, t, s) {
        this.gameState = e,
        this.modal = t,
        this.logger = s,
        this._busy = !1
    }
    getChecklistForCurrentYear() {
        const e = this.gameState.state
          , t = this._getMissionState(e)
          , s = Math.max(1, Math.min(4, Number(e.year) || 1))
          , n = this._buildYearChecklist(s, e, t);
        return n.items = (n.items || []).map(a => ({
            ...a,
            reward: this._formatTaskReward(this._getTaskRewardSpec(a.id, e), e.region)
        })),
        n
    }
    recordMonthEndMental(e) {
        const t = this._getMissionState(this.gameState.state)
          , s = Number(e)
          , n = Number.isFinite(s) && s >= 60;
        t.mental60Streak = n ? (t.mental60Streak || 0) + 1 : 0,
        this.gameState.update({
            missionState: t
        })
    }
    evaluateAndSync() {
        var e, t, s, n, a, o, r, l, c, d, u, h, m;
        if (!this._busy) {
            this._busy = !0;
            try {
                const p = this.gameState.state
                  , g = this._getMissionState(p)
                  , f = {};
                let b = !1;
                if (!g.year1ExamScoreReady && p.year === 1 && (p.semester_score ?? 0) >= 100 && (g.year1ExamScoreReady = !0,
                b = !0),
                ((e = p.current_job) == null ? void 0 : e.workTypeId) === "dishwash") {
                    const T = Number(((t = p.current_job) == null ? void 0 : t.proficiency) || 0);
                    T > (g.dishwashMaxProficiency || 0) && (g.dishwashMaxProficiency = T,
                    b = !0)
                }
                const k = p.history || {};
                !g.raiseAppliedEver && (k.missionRaiseAppliedEver || (s = p.current_job) != null && s.raiseUsed) && (g.raiseAppliedEver = !0,
                b = !0),
                !g.proposalSuccessEver && (k.missionProposalSuccessEver || ((n = p.partner) == null ? void 0 : n.stage) === "engaged" || ((a = p.partner) == null ? void 0 : a.stage) === "married") && (g.proposalSuccessEver = !0,
                b = !0);
                const P = []
                  , L = Math.max(1, Math.min(4, Number(p.year) || 1))
                  , M = (this._buildYearChecklist(L, p, g).items || []).filter(T => T.done && !g.completedTaskIds.includes(T.id));
                if (M.length) {
                    let T = 0
                      , R = 0
                      , E = 0
                      , D = 0
                      , $ = 0;
                    const K = [];
                    for (const V of M) {
                        g.completedTaskIds.push(V.id);
                        const j = this._getTaskRewardSpec(V.id, p);
                        T += j.money || 0,
                        R += j.gpa || 0,
                        E += j.energy || 0,
                        D += j.mental || 0,
                        $ += j.health || 0,
                        K.push(`<li><strong>${V.text}</strong><br>${this._formatTaskReward(j, p.region)}</li>`)
                    }
                    T !== 0 && (f.money = (f.money ?? p.money ?? 0) + T),
                    R !== 0 && (f.gpa = Math.max(0, Math.min(4, (f.gpa ?? p.gpa ?? 0) + R))),
                    E !== 0 && (f.energy = Math.max(0, (f.energy ?? p.energy ?? 0) + E)),
                    D !== 0 && (f.mental = Math.max(0, (f.mental ?? p.mental ?? 0) + D)),
                    $ !== 0 && (f.health = Math.max(0, Math.min(100, (f.health ?? p.health ?? 0) + $))),
                    b = !0,
                    (r = (o = this.logger) == null ? void 0 : o.log) == null || r.call(o, `✅ 完成阶段任务 ${M.length} 项`, "log-good"),
                    (c = (l = this.modal) == null ? void 0 : l.showCustom) == null || c.call(l, "✅ 阶段任务完成", `<div class="story-text"><p>你完成了新的阶段任务，奖励已发放：</p><ul>${K.join("")}</ul></div>`, [{
                        text: "继续"
                    }], "type-positive")
                }
                for (let T = 1; T <= 4; T++)
                    this._buildYearChecklist(T, p, g).items.every(E => !!E.done) && !g.completedYears.includes(T) && L === T && (g.completedYears.push(T),
                    P.push(T),
                    b = !0);
                if (P.length) {
                    let T = 0;
                    const R = [];
                    for (const E of P) {
                        if (g.scholarshipAwardedYears.includes(E))
                            continue;
                        g.scholarshipAwardedYears.push(E);
                        const D = 2e4 + Math.floor(Math.random() * 30001)
                          , $ = A(D, p.region);
                        T += $,
                        R.push(`大${E}阶段完成：父母奖学金 ¥${D.toLocaleString("en-US")}（已换汇 ${w($, p.region)}）`)
                    }
                    T > 0 && (f.money = (f.money ?? p.money ?? 0) + T,
                    (u = (d = this.logger) == null ? void 0 : d.log) == null || u.call(d, `🎁 学年阶段全达成，家庭奖学金到账 ${w(T, p.region)}。`, "log-good"),
                    (m = (h = this.modal) == null ? void 0 : h.showCustom) == null || m.call(h, "🎬 家庭来电：阶段奖学金", `<div class="story-text"><p>你最近的成长让家里非常安心，父母决定追加一笔阶段奖学金支持你冲刺更高目标。</p><p>${R.join("<br>")}</p></div>`, [{
                        text: "继续冲刺"
                    }], "type-positive")),
                    b = !0
                }
                b && (f.missionState = g,
                this.gameState.update(f))
            } finally {
                this._busy = !1
            }
        }
    }
    _getMissionState(e) {
        const t = e.missionState && typeof e.missionState == "object" ? e.missionState : {};
        return {
            ...An(),
            ...t,
            completedYears: Array.isArray(t.completedYears) ? [...t.completedYears] : [],
            completedTaskIds: Array.isArray(t.completedTaskIds) ? [...t.completedTaskIds] : [],
            scholarshipAwardedYears: Array.isArray(t.scholarshipAwardedYears) ? [...t.scholarshipAwardedYears] : []
        }
    }
    _getTaskRewardSpec(e, t) {
        return {
            y1_housing: {
                money: A(3e3, t.region),
                health: 4
            },
            y1_exam: {
                gpa: .05,
                money: A(2e3, t.region)
            },
            y1_dish: {
                money: A(2500, t.region),
                energy: 8
            },
            y2_gpa: {
                money: A(5e3, t.region),
                gpa: .05
            },
            y2_job: {
                money: A(4e3, t.region),
                energy: 6
            },
            y2_mental: {
                mental: 10,
                health: 6
            },
            y3_intern: {
                money: A(8e3, t.region),
                gpa: .08
            },
            y3_skill: {
                money: A(6e3, t.region),
                mental: 8
            },
            y3_asset: {
                money: A(4e3, t.region),
                health: 4
            },
            y4_gpa: {
                money: A(1e4, t.region),
                gpa: .1
            },
            y4_class: {
                money: A(12e3, t.region),
                energy: 10
            },
            y4_partner: {
                money: A(7e3, t.region),
                mental: 12,
                health: 8
            }
        }[e] || {
            money: A(1500, t.region)
        }
    }
    _formatTaskReward(e, t) {
        const s = [];
        return e.money && s.push(`💰 ${w(e.money, t)}`),
        e.gpa && s.push(`📈 GPA +${Number(e.gpa).toFixed(2)}`),
        e.energy && s.push(`⚡ 体力 +${Math.round(e.energy)}`),
        e.mental && s.push(`🧠 心态 +${Math.round(e.mental)}`),
        e.health && s.push(`❤️ 健康 +${Math.round(e.health)}`),
        s.length ? s.join(" · ") : "阶段奖励"
    }
    _buildYearChecklist(e, t, s) {
        var a, o, r, l, c, d, u, h, m;
        if (e === 1) {
            const p = typeof window < "u" ? (o = (a = window.housingSystem) == null ? void 0 : a.getCurrentHousing) == null ? void 0 : o.call(a) : null
              , g = String((p == null ? void 0 : p.name) || "")
              , f = String((p == null ? void 0 : p.type) || "")
              , b = !!p && f !== "bedspace" && !/地下室|客厅|床位|劏房/i.test(g)
              , k = Number(((r = t.work_counts) == null ? void 0 : r.dish) || 0) * 10
              , P = ((l = t.current_job) == null ? void 0 : l.workTypeId) === "dishwash" ? Number(((c = t.current_job) == null ? void 0 : c.proficiency) || 0) : 0
              , L = Number(s.dishwashMaxProficiency || 0)
              , y = Math.max(k, P, L);
            return {
                title: "大一目标｜生存与适应",
                items: [{
                    id: "y1_housing",
                    text: "摆脱地下室：租下非「地下室/客厅」房源",
                    done: b
                }, {
                    id: "y1_exam",
                    text: `学分初筑：本学期百分制成绩 ≥ 100（当前 ${Math.round(t.semester_score ?? 0)}/100）`,
                    done: !!s.year1ExamScoreReady || t.year === 1 && (t.semester_score ?? 0) >= 100
                }, {
                    id: "y1_dish",
                    text: `职场试水：唐人街餐厅累积熟练度 ≥ 50（当前 ${Math.floor(y)}）`,
                    done: y >= 50
                }]
            }
        }
        if (e === 2) {
            const p = !!((d = t.current_job) != null && d.workTypeId) && t.current_job.workTypeId !== "dishwash";
            return {
                title: "大二目标｜专业起步",
                items: [{
                    id: "y2_gpa",
                    text: "学术进阶：累计 GPA ≥ 3.3",
                    done: (t.gpa ?? 0) >= 3.3
                }, {
                    id: "y2_job",
                    text: "获得正职：应聘到非「洗碗工」岗位",
                    done: p
                }, {
                    id: "y2_mental",
                    text: `心态建设：连续 3 个月心态 ≥ 60（当前连续 ${s.mental60Streak || 0} 个月）`,
                    done: (s.mental60Streak || 0) >= 3
                }]
            }
        }
        if (e === 3) {
            const p = String(((u = t.current_job) == null ? void 0 : u.tier) || "")
              , g = ((h = t.current_job) == null ? void 0 : h.workTypeId) === "big_intern" || /中厂|大厂|顶级|知名/.test(p)
              , f = Number(((m = t.current_job) == null ? void 0 : m.proficiency) || 0)
              , b = Array.isArray(t.inventory) ? t.inventory : []
              , k = b.includes("laptop") || b.includes("used_car");
            return {
                title: "大三目标｜黄金简历",
                items: [{
                    id: "y3_intern",
                    text: "名企入场券：入职「中厂/大厂」实习",
                    done: g
                }, {
                    id: "y3_skill",
                    text: "高级技能：当前岗位熟练度 ≥ 80 且完成过一次申请加薪",
                    done: f >= 80 && !!s.raiseAppliedEver
                }, {
                    id: "y3_asset",
                    text: "社会资产：购买高性能笔记本或二手车",
                    done: k
                }]
            }
        }
        const n = !t.partner && (t.money ?? 0) >= A(1e6, t.region);
        return {
            title: "大四目标｜终局决战",
            items: [{
                id: "y4_gpa",
                text: "荣誉毕业：总 GPA ≥ 3.7（冲刺金印章）",
                done: (t.gpa ?? 0) >= 3.7
            }, {
                id: "y4_class",
                text: "阶级跃迁：达到「小资生活」或更高",
                done: ["bourgeois", "dragon"].includes(String(t.currentClass || ""))
            }, {
                id: "y4_partner",
                text: "终身大事：求婚成功，或保持单身并达成千万人民币等价存款",
                done: !!s.proposalSuccessEver || n
            }]
        }
    }
}
function N(i) {
    const e = String(i || "");
    return e ? /^(?:https?:|data:|blob:)/i.test(e) || e.startsWith("./") || e.startsWith("../") ? e : `./${e.replace(/^\/+/, "")}` : ""
}
const ft = N("/intro-original/start-hero.png")
  , En = N("/intro-original/waiting-bg.png")
  , ge = {
    brand: "THE CINEMATIC SCHOLAR",
    title: "Check-in",
    className: "DREAMER CLASS",
    departure: "NOW",
    qrLabel: "TKT-CS-2024-99XLR",
    gate: "A12",
    seat: "STUDY 01"
}
  , yt = {
    US: {
        code: "US",
        country: "美国",
        city: "纽约",
        cityEn: "New York",
        airport: "JFK Terminal 4",
        landingVariant: "us",
        titlePrefix: "降落",
        headline: "The city that never sleeps is waiting for you.",
        subheadline: "Your American journey begins tonight. From the neon glow of Times Square to the quiet sunrise over the Hudson, a new chapter is yours to write.",
        footerLeftTitle: "Destination: JFK_TERMINAL_4",
        footerLeftStatus: "Status: Touchdown Confirmed",
        footerRightLeft: "Simulation Level 05",
        footerRightRight: "Chronos Engine v2.4",
        coordinates: "40.6413° N, 73.7781° W",
        accent: "#ff9b43",
        accentSoft: "#ffd09a",
        background: N("/intro-bg/us.jpg")
    },
    UK: {
        code: "UK",
        country: "英国",
        city: "伦敦",
        cityEn: "London",
        airport: "Heathrow T5",
        landingVariant: "uk",
        titlePrefix: "降落",
        quote: '"When a man is tired of London, he is tired of life."',
        subheadline: "Welcome to the heart of the United Kingdom",
        destinationCardTitle: "Terminal Destination",
        destinationCardValue: "LONDON, UNITED KINGDOM",
        coordinates: "51.4700° N, 0.4543° W",
        accent: "#bfc4ff",
        accentSoft: "#dfe2ff",
        background: N("/intro-bg/uk.jpg")
    },
    AU: {
        code: "AU",
        country: "澳大利亚",
        city: "悉尼",
        cityEn: "Sydney",
        airport: "SYD International",
        landingVariant: "au",
        titlePrefix: "降落",
        badge: "Arrival Confirmed",
        quote: '"Sydney is a city of layers, like an onion, but without the crying."',
        subheadline: "Welcome to the Emerald City, where the harbor meets the stars.",
        footerLeftTitle: "Current Location",
        footerLeftValue: "SYDNEY INTL (SYD)",
        footerRightTitle: "Local Time",
        footerRightValue: "22:45",
        footerRightSuffix: "AEST",
        footerTagline: "The Voyage Continues",
        coordinates: "33.8688° S, 151.2093° E",
        accent: "#ffb363",
        accentSoft: "#ffd7ab",
        background: N("/intro-bg/au.jpg")
    },
    HK: {
        code: "HK",
        country: "中国香港",
        city: "香港",
        cityEn: "Hong Kong",
        airport: "Victoria Harbour",
        landingVariant: "hk",
        titlePrefix: "降落",
        quote: '"Hong Kong is a world of its own, where the neon never sleeps."',
        subheadline: "Welcome to the Pearl of the Orient",
        footerLeftTitle: "Coordinates",
        footerLeftValue: "22.3193° N, 114.1694° E",
        footerRightTitle: "Terminal Status",
        footerRightValue: "ARRIVED",
        coordinates: "22.3193° N, 114.1694° E",
        accent: "#ffa14c",
        accentSoft: "#ffd2a6",
        background: N("/intro-bg/hk.jpg")
    },
    SG: {
        code: "SG",
        country: "新加坡",
        city: "新加坡",
        cityEn: "Singapore",
        airport: "Changi T3",
        landingVariant: "sg",
        titlePrefix: "降落",
        welcome: "Welcome to the Garden City.",
        quote: `"Singapore is not just a destination, it's a feeling of home in the heart of Asia."`,
        hint: "Target Destination: Changi Airport",
        footerLeftTitle: "Arrival Status",
        footerLeftValue: "CONFIRMED // 01.27°N 103.81°E",
        footerRightTitle: "Session Duration",
        footerRightValue: "00:45:12",
        coordinates: "1.3644° N, 103.9915° E",
        accent: "#6ce1da",
        accentSoft: "#b7f6ef",
        background: N("/intro-bg/sg.jpg")
    }
}
  , qt = [{
    value: "male",
    label: "男性"
}, {
    value: "female",
    label: "女性"
}]
  , Ln = [{
    value: "straight",
    label: "异性恋"
}, {
    value: "gay",
    label: "同性恋"
}, {
    value: "bi",
    label: "双性恋"
}]
  , ot = [{
    value: "CS",
    code: "CS",
    label: "计算机科学"
}, {
    value: "business",
    code: "Business",
    label: "商科"
}, {
    value: "media",
    code: "Media",
    label: "传媒"
}, {
    value: "arts",
    code: "Arts",
    label: "艺术"
}];
function Pn(i) {
    return yt[i] || yt.US
}
const Oe = {
    US: {
        id: "US",
        isoA3: "USA",
        fullName: "美国",
        flag: "🇺🇸",
        lat: 37.0902,
        lng: -95.7129,
        regionFallback: "US",
        isRecommended: !0,
        imageUrl: N("/intro-original/unsplash-00.jpg"),
        stats: {
            livingCost: 85,
            salaryLevel: 95,
            dangerIndex: 45
        }
    },
    UK: {
        id: "UK",
        isoA3: "GBR",
        fullName: "英国",
        flag: "🇬🇧",
        lat: 55.3781,
        lng: -3.436,
        regionFallback: "UK",
        isRecommended: !0,
        imageUrl: N("/intro-original/unsplash-01.jpg"),
        stats: {
            livingCost: 80,
            salaryLevel: 75,
            dangerIndex: 25
        }
    },
    SG: {
        id: "SG",
        isoA3: "SGP",
        fullName: "新加坡",
        flag: "🇸🇬",
        lat: 1.3521,
        lng: 103.8198,
        regionFallback: "SG",
        isRecommended: !0,
        imageUrl: N("/intro-original/unsplash-02.jpg"),
        stats: {
            livingCost: 75,
            salaryLevel: 85,
            dangerIndex: 10
        }
    },
    HK: {
        id: "HK",
        isoA3: "HKG",
        fullName: "中国香港",
        flag: "🇭🇰",
        lat: 22.3193,
        lng: 114.1694,
        regionFallback: "HK",
        isRecommended: !0,
        imageUrl: N("/intro-bg/hk.jpg"),
        stats: {
            livingCost: 90,
            salaryLevel: 80,
            dangerIndex: 15
        }
    },
    AU: {
        id: "AU",
        isoA3: "AUS",
        fullName: "澳洲",
        flag: "🇦🇺",
        lat: -25.2744,
        lng: 133.7751,
        regionFallback: "AU",
        isRecommended: !0,
        imageUrl: N("/intro-original/unsplash-04.jpg"),
        stats: {
            livingCost: 70,
            salaryLevel: 80,
            dangerIndex: 20
        }
    },
    CA: {
        id: "CA",
        isoA3: "CAN",
        fullName: "加拿大",
        flag: "🇨🇦",
        lat: 56.1304,
        lng: -106.3468,
        regionFallback: "US",
        isRecommended: !1,
        imageUrl: N("/intro-original/unsplash-25.jpg"),
        stats: {
            livingCost: 75,
            salaryLevel: 75,
            dangerIndex: 15
        }
    },
    JP: {
        id: "JP",
        isoA3: "JPN",
        fullName: "日本",
        flag: "🇯🇵",
        lat: 36.2048,
        lng: 138.2529,
        regionFallback: "SG",
        isRecommended: !1,
        imageUrl: N("/intro-original/unsplash-06.jpg"),
        stats: {
            livingCost: 65,
            salaryLevel: 65,
            dangerIndex: 5
        }
    },
    DE: {
        id: "DE",
        isoA3: "DEU",
        fullName: "德国",
        flag: "🇩🇪",
        lat: 51.1657,
        lng: 10.4515,
        regionFallback: "UK",
        isRecommended: !1,
        imageUrl: N("/intro-original/unsplash-07.jpg"),
        stats: {
            livingCost: 60,
            salaryLevel: 85,
            dangerIndex: 20
        }
    },
    FR: {
        id: "FR",
        isoA3: "FRA",
        fullName: "法国",
        flag: "🇫🇷",
        lat: 46.2276,
        lng: 2.2137,
        regionFallback: "UK",
        isRecommended: !1,
        imageUrl: N("/intro-original/unsplash-08.jpg"),
        stats: {
            livingCost: 70,
            salaryLevel: 70,
            dangerIndex: 30
        }
    },
    KR: {
        id: "KR",
        isoA3: "KOR",
        fullName: "韩国",
        flag: "🇰🇷",
        lat: 35.9078,
        lng: 127.7669,
        regionFallback: "SG",
        isRecommended: !1,
        imageUrl: N("/intro-original/unsplash-33.jpg"),
        stats: {
            livingCost: 60,
            salaryLevel: 75,
            dangerIndex: 15
        }
    },
    IT: {
        id: "IT",
        isoA3: "ITA",
        fullName: "意大利",
        flag: "🇮🇹",
        lat: 41.8719,
        lng: 12.5674,
        regionFallback: "UK",
        isRecommended: !1,
        imageUrl: N("/intro-original/unsplash-10.jpg"),
        stats: {
            livingCost: 65,
            salaryLevel: 60,
            dangerIndex: 25
        }
    },
    CH: {
        id: "CH",
        isoA3: "CHE",
        fullName: "瑞士",
        flag: "🇨🇭",
        lat: 46.8182,
        lng: 8.2275,
        regionFallback: "UK",
        isRecommended: !1,
        imageUrl: N("/intro-original/unsplash-24.jpg"),
        stats: {
            livingCost: 95,
            salaryLevel: 95,
            dangerIndex: 5
        }
    },
    RU: {
        id: "RU",
        isoA3: "RUS",
        fullName: "俄罗斯",
        flag: "🇷🇺",
        lat: 61.524,
        lng: 105.3188,
        regionFallback: "HK",
        isRecommended: !1,
        imageUrl: N("/intro-original/unsplash-12.jpg"),
        stats: {
            livingCost: 45,
            salaryLevel: 55,
            dangerIndex: 60
        }
    },
    BR: {
        id: "BR",
        isoA3: "BRA",
        fullName: "巴西",
        flag: "🇧🇷",
        lat: -14.235,
        lng: -51.9253,
        regionFallback: "US",
        isRecommended: !1,
        imageUrl: N("/intro-original/unsplash-13.jpg"),
        stats: {
            livingCost: 50,
            salaryLevel: 60,
            dangerIndex: 65
        }
    }
}
  , Cn = {
    US: "US",
    UK: "UK",
    AU: "AU",
    HK: "HK",
    SG: "SG",
    HKSG: "HK"
};
function ks(i) {
    return i && Oe[i] ? Oe[i] : Oe.US
}
function Ht(i) {
    return ks(i).regionFallback || "US"
}
function Rn(i) {
    return Cn[i] || "US"
}
class Za {
    constructor(e, t, s, n) {
        this.gameState = e,
        this.onStart = t,
        this.onLoadAutoSave = s,
        this.onOpenSettings = n
    }
    render(e) {
        var a, o, r, l, c, d;
        window.hasAutoSave = Ye.detectHasSeamlessAutoSave();
        const t = Ye.peekSeamlessAutoSaveProgress()
          , s = ((o = (a = this.gameState) == null ? void 0 : a.get) == null ? void 0 : o.call(a, "region")) || "US";
        document.body.style.backgroundColor = "#0b1220",
        document.body.style.backgroundImage = `url("${ft}")`,
        document.body.style.backgroundSize = "cover",
        document.body.style.backgroundPosition = "center",
        document.body.style.backgroundRepeat = "no-repeat",
        document.body.style.backgroundAttachment = "fixed";
        const n = window.hasAutoSave ? `
                <button type="button" id="btn-continue-autosave" class="stitch-start-screen__secondary">
                    <span class="stitch-start-screen__secondary-copy">
                        <span class="stitch-start-screen__secondary-main">继续游戏</span>
                        <span class="stitch-start-screen__secondary-sub">Y${(t == null ? void 0 : t.year) || 1} · M${(t == null ? void 0 : t.month) || 9} · ${s}</span>
                    </span>
                    <span class="stitch-inline-icon" aria-hidden="true">↻</span>
                </button>
            ` : "";
        e.innerHTML = `
            <div id="start-screen" class="stitch-start-screen">
                <div class="stitch-start-screen__panel">
                    <header class="stitch-start-screen__brand">
                        <div class="stitch-start-screen__logo">
                            <span class="stitch-inline-icon" aria-hidden="true">🎓</span>
                        </div>
                        <div class="stitch-start-screen__line"></div>
                    </header>

                    <section class="stitch-start-screen__hero">
                        <h1 class="stitch-start-screen__title">
                            <span>Study Abroad</span>
                            <span>Simulator</span>
                        </h1>
                        <p class="stitch-start-screen__tags">LIVE · GROW · WORK · LOVE</p>
                    </section>

                    <section class="stitch-start-screen__actions">
                        <button type="button" id="btn-start-new" class="stitch-start-screen__cta">
                            <span>开启新旅程</span>
                            <span class="stitch-inline-icon" aria-hidden="true">▶</span>
                        </button>

                        <div class="stitch-start-screen__stack">
                            ${n}
                            <button type="button" id="btn-start-settings" class="stitch-start-screen__tertiary">
                                <span>游戏设置</span>
                                <span class="stitch-inline-icon" aria-hidden="true">⚙</span>
                            </button>
                        </div>
                    </section>

                    <footer class="stitch-start-screen__footer">
                        <div class="stitch-start-screen__avatars">
                            <span>JD</span>
                            <span>MS</span>
                            <span>+12k</span>
                        </div>
                        <div class="stitch-start-screen__stats">
                            <strong>12,408</strong>
                            <span>在线留学生</span>
                        </div>
                        <div class="stitch-start-screen__server">
                            <i></i>
                            <span>服务器稳定</span>
                        </div>
                    </footer>
                </div>

                <div class="stitch-start-screen__visual" aria-hidden="true">
                    <img src="${ft}" alt="Cinematic Tokyo night view" />
                    <div class="stitch-start-screen__visual-overlay"></div>
                    <div class="stitch-start-screen__chapter">
                        <p>CURRENT CHAPTER</p>
                        <strong>TOKYO NOIR</strong>
                    </div>
                </div>
            </div>
        `,
        (r = e.querySelector("#start-screen")) == null || r.addEventListener("click", () => Z(), {
            passive: !0
        }),
        (l = e.querySelector("#btn-start-new")) == null || l.addEventListener("click", () => {
            var u, h, m;
            (m = this.onStart) == null || m.call(this, "", "straight", "male", "CS", {
                playerName: ((h = (u = this.gameState).get) == null ? void 0 : h.call(u, "playerName")) || "Player"
            })
        }
        ),
        (c = e.querySelector("#btn-continue-autosave")) == null || c.addEventListener("click", () => {
            var u;
            (u = this.onLoadAutoSave) == null || u.call(this)
        }
        ),
        (d = e.querySelector("#btn-start-settings")) == null || d.addEventListener("click", () => {
            var u;
            (u = this.onOpenSettings) == null || u.call(this)
        }
        )
    }
}
class Nn {
    constructor() {
        this.costumes = new Set
    }
    animate(e, t, s="money") {
        if (!e || t === 0 || !document.body.contains(e))
            return;
        window.getComputedStyle(e).position === "static" && (e.style.position = "relative");
        const a = document.createElement("div");
        a.classList.add("float-text", s),
        a.style.right = "0",
        a.style.top = "-12px";
        const o = Math.abs(t)
          , r = t > 0 ? "+" : ""
          , l = s === "gpa" ? o.toFixed(2) : s === "money" ? String(Math.round(o)) : o.toFixed(1);
        t > 0 ? (a.classList.add("float-text-positive"),
        a.textContent = `${r}${l}`) : (a.classList.add("float-text-negative"),
        a.textContent = `${r}${l}`),
        e.appendChild(a),
        setTimeout( () => {
            a.parentNode && a.remove()
        }
        , 1e3)
    }
    attach(e, t, s) {
        if (this.costumes.has(e))
            return;
        this.costumes.add(e);
        const n = document.getElementById(e);
        if (!n)
            return;
        let a = this._getValue(t, s);
        const o = setInterval( () => {
            if (!document.body.contains(n)) {
                clearInterval(o);
                return
            }
            const r = this._getValue(t, s);
            r !== a && (this.animate(n, r - a, t),
            a = r)
        }
        , 100)
    }
    _getValue(e, t) {
        const s = t == null ? void 0 : t.state;
        if (!s)
            return 0;
        switch (e) {
        case "money":
            return Number(s.money) || 0;
        case "gpa":
            return Number(s.gpa) || 0;
        case "energy":
            return Number(s.energy) || 0;
        case "mental":
            return Number(s.mental) || 0;
        case "health":
            return Number(s.health) || 0;
        default:
            return 0
        }
    }
}
const In = "(hover: none) and (pointer: coarse)"
  , Bn = 1279
  , ae = 6;
function qn() {
    if (typeof window > "u" || typeof window.matchMedia != "function")
        return !1;
    try {
        return window.matchMedia(In).matches
    } catch {
        return !1
    }
}
function Ss() {
    return typeof document > "u" ? null : document.getElementById("phone-wrapper")
}
function Hn() {
    return typeof document > "u" ? null : document.getElementById("phone-mobile-fab")
}
function Dn() {
    return typeof document > "u" ? null : document.getElementById("phone-mobile-backdrop")
}
function Ae(i) {
    const e = Ss();
    e && (e.classList.toggle("collapsed", !i),
    typeof document < "u" && document.body.classList.toggle("phone-mobile-expanded", i))
}
function Dt(i) {
    i && (i.style.left = "",
    i.style.top = "",
    i.style.right = "",
    i.style.bottom = "",
    i.style.transform = "")
}
function Un(i, e=null, t=null) {
    if (!i || typeof window > "u")
        return;
    const s = i.getBoundingClientRect();
    if (!s.width || !s.height)
        return;
    const n = Number.isFinite(e) ? e : s.left
      , a = Number.isFinite(t) ? t : s.top
      , o = ae
      , r = ae
      , l = Math.max(o, window.innerWidth - s.width - ae)
      , c = Math.max(r, window.innerHeight - s.height - ae)
      , d = Math.min(Math.max(o, n), l)
      , u = Math.min(Math.max(r, a), c);
    return {
        x: d,
        y: u,
        width: s.width,
        height: s.height
    }
}
function He(i, e, t) {
    if (!i)
        return;
    const s = Un(i, e, t);
    s && (i.style.left = `${s.x}px`,
    i.style.top = `${s.y}px`,
    i.style.right = "auto",
    i.style.bottom = "auto",
    i.style.transform = "translate3d(0, 0, 0)",
    i.dataset.floatX = String(s.x),
    i.dataset.floatY = String(s.y))
}
function We() {
    return typeof window > "u" ? !1 : qn() && window.innerWidth <= Bn
}
function ei() {
    const i = Ss()
      , e = Hn()
      , t = Dn();
    if (!i || !e || !t || typeof window > "u")
        return () => {}
        ;
    if (!We())
        return Ae(!0),
        Dt(e),
        () => {}
        ;
    !i.classList.contains("collapsed") && !document.body.classList.contains("phone-mobile-expanded") && i.classList.add("collapsed");
    let s = null
      , n = !1
      , a = 0;
    const o = () => {
        if (a = 0,
        !s)
            return;
        const m = s.nextLeft - s.baseLeft
          , p = s.nextTop - s.baseTop;
        e.style.transform = `translate3d(${m}px, ${p}px, 0)`
    }
      , r = () => {
        if (n) {
            n = !1;
            return
        }
        Ae(!0)
    }
      , l = () => {
        Ae(!1)
    }
      , c = m => {
        if (!s)
            return;
        const p = Math.max(ae, window.innerWidth - s.width - ae)
          , g = Math.max(ae, window.innerHeight - s.height - ae)
          , f = Math.min(Math.max(ae, m.clientX - s.offsetX), p)
          , b = Math.min(Math.max(ae, m.clientY - s.offsetY), g);
        s.nextLeft = f,
        s.nextTop = b,
        a || (a = window.requestAnimationFrame(o)),
        (Math.abs(m.clientX - s.startX) > 6 || Math.abs(m.clientY - s.startY) > 6) && (n = !0)
    }
      , d = m => {
        var p;
        s && m && typeof m.pointerId == "number" && ((p = e.releasePointerCapture) == null || p.call(e, m.pointerId)),
        s && (a && (window.cancelAnimationFrame(a),
        a = 0),
        He(e, s.nextLeft, s.nextTop)),
        e.classList.remove("is-dragging"),
        s = null
    }
      , u = m => {
        var b;
        const p = e.getBoundingClientRect()
          , g = Number.isFinite(parseFloat(e.dataset.floatX)) ? parseFloat(e.dataset.floatX) : p.left
          , f = Number.isFinite(parseFloat(e.dataset.floatY)) ? parseFloat(e.dataset.floatY) : p.top;
        He(e, g, f),
        s = {
            offsetX: m.clientX - p.left,
            offsetY: m.clientY - p.top,
            startX: m.clientX,
            startY: m.clientY,
            width: p.width,
            height: p.height,
            baseLeft: g,
            baseTop: f,
            nextLeft: g,
            nextTop: f
        },
        n = !1,
        e.classList.add("is-dragging"),
        (b = e.setPointerCapture) == null || b.call(e, m.pointerId)
    }
      , h = () => {
        if (!We()) {
            Ae(!0),
            Dt(e);
            return
        }
        const m = Number.isFinite(parseFloat(e.dataset.floatX)) ? parseFloat(e.dataset.floatX) : null
          , p = Number.isFinite(parseFloat(e.dataset.floatY)) ? parseFloat(e.dataset.floatY) : null;
        if (m !== null && p !== null) {
            He(e, m, p);
            return
        }
        const g = e.getBoundingClientRect();
        He(e, g.left, g.top)
    }
    ;
    return e.dataset.bound || (e.addEventListener("click", r),
    e.addEventListener("pointerdown", u),
    e.dataset.bound = "1"),
    t.dataset.bound || (t.addEventListener("click", l),
    t.dataset.bound = "1"),
    window.addEventListener("pointermove", c),
    window.addEventListener("pointerup", d),
    window.addEventListener("pointercancel", d),
    window.addEventListener("resize", h),
    window.addEventListener("orientationchange", h),
    h(),
    () => {
        window.removeEventListener("pointermove", c),
        window.removeEventListener("pointerup", d),
        window.removeEventListener("pointercancel", d),
        window.removeEventListener("resize", h),
        window.removeEventListener("orientationchange", h),
        a && (window.cancelAnimationFrame(a),
        a = 0)
    }
}
function ti() {
    We() && Ae(!1)
}
const je = {
    daily: "home",
    phone: "hub",
    profile: "settings"
}
  , xs = {
    home: ["daily", "home"],
    life: ["daily", "home"],
    housing: ["phone", "housing"],
    shop: ["phone", "shop"],
    social: ["phone", "social"],
    hospital: ["phone", "hospital"],
    stocks: ["phone", "stocks"],
    dating: ["phone", "dating"],
    relations: ["phone", "contacts"],
    skills: ["profile", "settings"],
    achievements: ["profile", "settings"],
    statistics: ["profile", "settings"],
    settings: ["profile", "settings"]
};
class si {
    constructor(e) {
        this.gameState = e,
        this.centerMain = "daily",
        this.centerSub = "home",
        this.phoneMain = "phone",
        this.phoneSub = "hub",
        this.phoneRouteStack = [],
        this.linkedinTab = "profile",
        this.myInnerSub = "codex",
        this.currentMainTab = "daily",
        this.currentSubTab = "home",
        this.tabRenderer = null,
        this.numberAnimator = new Nn,
        this.lastMoney = null,
        this.lastGpa = null,
        this._lastVitalsSnapshot = null,
        this._lastIslandLogTs = null,
        this._depressionModalMonthTotal = null,
        this._crisisFlashShown = new Set,
        this._crisisDiseaseBaselineReady = !1,
        this._prevDiseaseIds = new Set,
        this._hadPartnerLastFrame = null,
        this.stageGoalsCollapsed = !1,
        this.currentTaskIndexByYear = {
            1: 0,
            2: 0,
            3: 0,
            4: 0
        },
        this._touchCrisisExpanded = !1,
        this._latestRenderedState = null
    }
    render(e) {
        const t = document.getElementById("game-screen");
        t && t.remove(),
        this.centerMain = "daily",
        this.centerSub = "home",
        this.phoneMain = "phone",
        this.phoneSub = "hub",
        this.phoneRouteStack = [],
        this.linkedinTab = "profile",
        this.myInnerSub = "codex",
        this._hadPartnerLastFrame = null,
        this.stageGoalsCollapsed = !1,
        this.currentTaskIndexByYear = {
            1: 0,
            2: 0,
            3: 0,
            4: 0
        };
        const s = document.createElement("div");
        s.id = "game-screen",
        s.className = "game-screen-root cinematic-noir",
        s.innerHTML = `
            <header class="cinematic-topbar" aria-label="global hud">
                <div class="cinematic-topbar-left">
                    <button type="button" id="top-home-btn" class="cinematic-topbar-btn cinematic-topbar-home-btn" title="返回主页">&#8962;</button>
                    <span class="cinematic-topbar-region" id="ui-region-top">US</span>
                    <span class="cinematic-topbar-year" id="ui-year-top">Y1 M9</span>
                </div>
                <div class="cinematic-topbar-right">
                    <button type="button" id="top-achievement-btn" class="cinematic-topbar-btn" title="成就图鉴">&#9711;</button>
                    <button type="button" id="top-settings-btn" class="cinematic-topbar-btn" title="设置">&#9881;</button>
                    <span class="cinematic-topbar-user" id="ui-player-name-top">Player</span>
                </div>
            </header>
            <div class="main-layout">
                <aside class="layout-col layout-col-left left-dashboard glass-col" aria-label="状态与预警"></aside>
                <main class="layout-col layout-col-center glass-col" aria-label="故事与选择">
                    <div id="center-content" class="center-content-wrap center-story-wrap"></div>
                    <div class="center-footer-fixed">
                        <button type="button" id="btn-next-month-global" class="btn-next-month btn-next-month--hero">🌙 结束本月（结算）</button>
                    </div>
                </main>
                <aside class="layout-col layout-col-right" aria-label="手机">
                    <div id="phone-wrapper" class="phone-wrapper phone-wrapper-fixed collapsed">
                        <button type="button" id="phone-mobile-fab" class="phone-mobile-fab" aria-label="打开手机悬浮面板">
                            <span class="phone-mobile-fab-dot" aria-hidden="true"></span>
                        </button>
                        <div id="phone-mobile-backdrop" class="phone-mobile-backdrop" aria-hidden="true"></div>
                        <div id="tutorial-phone" class="smartphone-chassis">
                            <div class="dynamic-island" id="dynamic-island" aria-hidden="true">
                                <span class="dynamic-island-text" id="dynamic-island-text"></span>
                            </div>
                            <button type="button" class="phone-back-fab" id="phone-nav-back" aria-label="返回">
                                <span class="phone-back-fab-icon" aria-hidden="true">‹</span>
                            </button>
                            <div class="phone-status-bar" id="phone-status-bar"></div>
                            <div class="phone-body-column phone-body--dock-hidden">
                                <div class="phone-screen phone-screen-scroll" id="phone-panel-inner"></div>
                                <div class="phone-dock glass-dock" id="phone-dock-bar" aria-label="程序坞">
                                    <button type="button" class="phone-dock-tile" data-tutorial="dock-social" onclick="window.game.navigateSub('phone','social')">
                                        <span class="phone-dock-icon phone-dock-icon--social" aria-hidden="true"></span>
                                        <span class="social-unread-badge" id="dock-social-badge" hidden>0</span>
                                        <span class="phone-dock-label">朋友圈</span>
                                    </button>
                                    <button type="button" class="phone-dock-tile" data-tutorial="dock-contacts" onclick="window.game.navigateSub('phone','contacts')">
                                        <span class="phone-dock-icon phone-dock-icon--contacts" aria-hidden="true"></span>
                                        <span class="phone-dock-label">通讯录</span>
                                    </button>
                                </div>
                            </div>
                            <div class="home-bar-hitbox" id="home-bar-hitbox" role="button" tabindex="0" aria-label="返回主屏幕">
                                <div class="phone-gesture-pill" aria-hidden="true"></div>
                            </div>
                        </div>
                    </div>
                </aside>
            </div>
        `,
        e.appendChild(s),
        s.querySelectorAll(".phone-bottom-nav").forEach(o => o.remove());
        const n = s.querySelector(".layout-col-left.left-dashboard");
        n && (n.innerHTML = `
                <div class="left-rail-v5">
                    <div class="left-rail-gpa glass-card">
                        <div class="left-rail-gpa-hero">
                            <div class="left-rail-gpa-main">
                                <span class="left-rail-title">本学期 GPA</span>
                                <div class="left-rail-gpa-big"><span id="ui-semester-score">80</span></div>
                                <div class="left-rail-gpa-sub">/100（<span id="ui-term-gpa-4">3.0</span>/4.0）</div>
                            </div>
                            <div class="left-rail-gpa-arc" id="gpa-arc-progress" aria-hidden="true">
                                <div class="left-rail-gpa-arc-hole"></div>
                            </div>
                        </div>
                        <div class="left-rail-track"><div class="left-rail-fill" id="bar-semester-score"></div></div>
                        <div class="left-rail-row left-rail-row--muted">
                            <span>累计 GPA</span>
                            <span id="ui-gpa">NA</span>
                        </div>
                        <div class="left-rail-row left-rail-row--muted">
                            <span>资产总值</span>
                            <span id="ui-total-assets">0</span>
                        </div>
                    </div>

                    <div id="debt-warning" class="debt-warning pulse" style="display:none;">⚠ 破产倒计时 <span id="debt-timer">3</span> 个月</div>

                    <div class="wealth-class-row" id="ui-wealth-class-row" title="">
                        <span class="wealth-class-tag">💎 阶层</span>
                        <span class="wealth-class-name" id="ui-wealth-class-name">[小资生活]</span>
                    </div>

                    <div id="tutorial-stats" class="left-rail-vitals glass-card" aria-label="Role Vitals">
                        <div class="left-rail-vital">
                            <div class="left-rail-vital-head">
                                <span class="left-rail-vital-label left-rail-vital-label--energy">⚡ 体力 (ENERGY)</span>
                                <span class="left-rail-vital-value"><span id="val-energy">100</span>/<span id="cap-energy">100</span></span>
                            </div>
                            <div class="left-rail-vital-track"><div class="progress-fill" id="bar-energy" style="background:#fbbf24;width:100%"></div></div>
                        </div>
                        <div class="left-rail-vital">
                            <div class="left-rail-vital-head">
                                <span class="left-rail-vital-label left-rail-vital-label--mental">🧠 心态 (MENTALITY)</span>
                                <span class="left-rail-vital-value"><span id="val-mental">100</span>/<span id="cap-mental">100</span></span>
                            </div>
                            <div class="left-rail-vital-track"><div class="progress-fill" id="bar-mental" style="background:var(--mental);width:100%"></div></div>
                        </div>
                        <div class="left-rail-vital">
                            <div class="left-rail-vital-head">
                                <span class="left-rail-vital-label left-rail-vital-label--health">❤️ 健康 (HEALTH)</span>
                                <span class="left-rail-vital-value"><span id="val-health">100</span>/<span id="cap-health">100</span></span>
                            </div>
                            <div class="left-rail-vital-track"><div class="progress-fill" id="bar-health" style="background:var(--health);width:100%"></div></div>
                        </div>
                    </div>

                    <div id="inventory-strip" class="inventory-strip glass-inventory" title="Inventory"></div>

                    <div class="crisis-panel glass-crisis">
                        <div class="crisis-panel-head">⚠ 危机预警</div>
                        <div id="crisis-alert-list" class="crisis-alert-list" role="status"></div>
                    </div>

                    <div class="left-rail-hidden" aria-hidden="true">
                        <span id="ui-region">US</span>
                        <span id="ui-year">1</span>
                        <span id="ui-month">9</span>
                        <span id="ui-money">0</span>
                    </div>
                </div>
            `);
        const a = document.getElementById("btn-next-month-global");
        a && (a.onclick = async () => {
            if (window.game && window.game.tabRenderer && window.game.tabRenderer.gameLoop) {
                const o = window.game.tabRenderer.gameLoop;
                if (o.isAdvancingMonth)
                    return;
                a.disabled = !0,
                a.dataset.busy = "1";
                const r = a.textContent;
                a.textContent = "🌙 结算中...";
                try {
                    await o.nextMonth()
                } finally {
                    a.disabled = !1,
                    a.dataset.busy = "0",
                    a.textContent = r
                }
            }
        }
        )
    }
    pushPhoneRoute() {
        this.phoneRouteStack.push({
            main: this.phoneMain,
            sub: this.phoneSub
        }),
        this.phoneRouteStack.length > 40 && this.phoneRouteStack.shift()
    }
    phoneHome() {
        this.phoneRouteStack = [],
        this.phoneMain = "phone",
        this.phoneSub = "hub"
    }
    phoneBack() {
        const e = this.phoneRouteStack.pop();
        e ? (this.phoneMain = e.main,
        this.phoneSub = e.sub) : this.phoneHome()
    }
    navigate(e, t, s=null) {
        if (window.game && typeof window.game.applyNavigation == "function") {
            window.game.applyNavigation(e, t, {
                push: !1
            });
            return
        }
        this._navigateLegacy(e, t, s)
    }
    _navigateLegacy(e, t, s=null) {
        const n = ["phone", "profile"]
          , a = e
          , o = t;
        a === "city" ? (this.phoneMain = "phone",
        this.phoneSub = o ?? "housing",
        this.centerMain = "daily",
        this.centerSub = "home") : n.includes(a) ? (this.phoneMain = a,
        this.phoneSub = o ?? je[a]) : (this.centerMain = a,
        this.centerSub = o ?? je[a]),
        this.currentMainTab = a,
        this.currentSubTab = n.includes(a) ? this.phoneSub : this.centerSub;
        const r = s ?? this.tabRenderer;
        r && typeof r.renderFull == "function" && r.renderFull(this)
    }
    switchTab(e, t=null) {
        const s = xs[e];
        if (s) {
            this.navigate(s[0], s[1], t);
            return
        }
        if (["daily", "phone", "profile"].includes(e)) {
            this.navigate(e, je[e], t);
            return
        }
        if (e === "city") {
            this.navigate("phone", "housing", t);
            return
        }
        this.navigate("daily", "home", t)
    }
    getRoute() {
        return {
            main: this.centerMain,
            sub: this.centerSub
        }
    }
    getPhoneRoute() {
        return {
            main: this.phoneMain,
            sub: this.phoneSub
        }
    }
    getCurrentTab() {
        return this.centerSub
    }
    updateUI() {
        var St, xt, Tt;
        const e = document.getElementById("game-screen");
        if (!e)
            return;
        const t = this.gameState.state;
        this._latestRenderedState = t;
        const s = this.gameState.getRegionConfig();
        this._updateTouchLayoutFlags(e);
        const n = document.getElementById("ui-region")
          , a = document.getElementById("ui-region-top")
          , o = document.getElementById("ui-year-top")
          , r = document.getElementById("ui-player-name-top")
          , l = document.getElementById("ui-year")
          , c = document.getElementById("ui-month")
          , d = document.getElementById("ui-money")
          , u = document.getElementById("ui-gpa")
          , h = document.getElementById("ui-semester-score")
          , m = document.getElementById("bar-semester-score")
          , p = document.getElementById("gpa-arc-progress")
          , g = document.getElementById("bar-mental")
          , f = document.getElementById("val-mental")
          , b = document.getElementById("cap-mental")
          , k = document.getElementById("bar-health")
          , P = document.getElementById("val-health")
          , L = document.getElementById("cap-health")
          , y = document.getElementById("cap-energy")
          , M = document.getElementById("debt-warning")
          , T = document.getElementById("debt-timer")
          , R = document.getElementById("ui-term-gpa-4")
          , E = document.getElementById("ui-total-assets");
        if (!n || !l || !c || !d || !u || !h || !R)
            return;
        const D = t.region === "HKSG" ? "HK" : t.region
          , $ = yt[D];
        if (e.setAttribute("data-region", D || "US"),
        $ != null && $.background ? (e.style.setProperty("--scene-bg-image", `url("${$.background}")`),
        document.body.style.backgroundColor = "#0b1220",
        document.body.style.backgroundImage = `url("${$.background}")`,
        document.body.style.backgroundSize = "cover",
        document.body.style.backgroundPosition = "center",
        document.body.style.backgroundRepeat = "no-repeat",
        document.body.style.backgroundAttachment = "fixed") : (e.style.removeProperty("--scene-bg-image"),
        document.body.style.backgroundImage = ""),
        $ != null && $.accent ? e.style.setProperty("--scene-accent", $.accent) : e.style.removeProperty("--scene-accent"),
        s) {
            const _ = s.name.split(" ")[0];
            n.innerText = _,
            a && (a.innerText = _)
        }
        const K = document.getElementById("ui-wealth-class-name")
          , V = document.getElementById("ui-wealth-class-row");
        if (K && t.currentClass) {
            const _ = es(t.currentClass);
            K.textContent = _.title,
            K.style.color = _.color,
            K.classList.toggle("wealth-class-name--dragon", !!_.glow),
            V && (V.title = _.hint || "")
        }
        if (l.innerText = t.year,
        c.innerText = t.month,
        o && (o.innerText = `Y${t.year} M${t.month}`),
        r && (r.innerText = String(t.playerName || "Player")),
        d.innerText = w(t.money, t.region),
        E) {
            let _ = Number(t.money) || 0;
            typeof window < "u" && window.stockSystem && typeof window.stockSystem.getTotalValue == "function" && (_ += Number(window.stockSystem.getTotalValue()) || 0),
            E.innerText = w(_, t.region)
        }
        const j = Number(t.completed_semesters) || 0
          , re = Number(t.cumulative_gpa ?? t.gpa)
          , ee = Number.isFinite(re) ? re : te.initialGPA;
        j === 0 ? u.innerText = "NA" : u.innerText = ee.toFixed(2);
        const ie = Number(t.semester_score) || 0;
        if (h.innerText = String(Math.round(ie)),
        R.innerText = un(ie).toFixed(1),
        m) {
            const _ = Math.max(0, Math.min(100, ie));
            m.style.width = `${_}%`,
            p && p.style.setProperty("--gpa-progress", `${_}%`)
        }
        const z = this._lastVitalsSnapshot
          , J = {
            money: Number(t.money) || 0,
            gpa: j > 0 ? ee : null,
            energy: Number(t.energy) || 0,
            mental: Number(t.mental) || 0,
            health: Number(t.health) || 0
        }
          , Y = []
          , le = [];
        if (z) {
            const _ = J.money - (Number(z.money) || 0);
            if (_ !== 0) {
                const B = _ > 0 ? "+" : "";
                Y.push(`💰 ${B}${w(_, t.region)}`),
                le.push({
                    type: _ > 0 ? "log-good" : "log-bad",
                    message: `[数值变化] 💰 资产 ${B}${w(_, t.region)}`
                })
            }
            if (Number.isFinite(J.gpa) && Number.isFinite(z.gpa)) {
                const B = J.gpa - z.gpa;
                if (Math.abs(B) >= .01) {
                    const X = B > 0 ? "+" : "";
                    Y.push(`📚 ${X}${B.toFixed(2)}`),
                    le.push({
                        type: B > 0 ? "log-good" : "log-bad",
                        message: `[数值变化] 📚 GPA ${X}${B.toFixed(2)}`
                    })
                }
            }
            const S = J.energy - (Number(z.energy) || 0);
            if (S !== 0) {
                const B = S > 0 ? "+" : "";
                Y.push(`⚡ ${B}${Math.round(S)}`),
                le.push({
                    type: S > 0 ? "log-good" : "log-bad",
                    message: `[数值变化] ⚡ 体力 ${B}${Math.round(S)}`
                })
            }
            const F = J.mental - (Number(z.mental) || 0);
            if (F !== 0) {
                const B = F > 0 ? "+" : "";
                Y.push(`🧠 ${B}${Math.round(F)}`),
                le.push({
                    type: F > 0 ? "log-good" : "log-bad",
                    message: `[数值变化] 🧠 心态 ${B}${Math.round(F)}`
                })
            }
            const oe = J.health - (Number(z.health) || 0);
            if (oe !== 0) {
                const B = oe > 0 ? "+" : "";
                Y.push(`❤️ ${B}${Math.round(oe)}`),
                le.push({
                    type: oe > 0 ? "log-good" : "log-bad",
                    message: `[数值变化] ❤️ 健康 ${B}${Math.round(oe)}`
                })
            }
        }
        if (Y.length > 0 && this._flashDynamicIslandText(Y.join(" · ")),
        this.lastMoney !== null) {
            const _ = t.money - this.lastMoney
              , S = document.getElementById("ui-money");
            S && (_ > 0 ? (S.classList.add("value-increase"),
            setTimeout( () => S.classList.remove("value-increase"), 500)) : _ < 0 && (S.classList.add("value-decrease"),
            setTimeout( () => S.classList.remove("value-decrease"), 500)))
        }
        if (j > 0 && this.lastGpa !== null) {
            const _ = ee - this.lastGpa
              , S = document.getElementById("ui-gpa");
            S && S.innerText !== "NA" && (_ > 0 ? (S.classList.add("value-increase"),
            setTimeout( () => S.classList.remove("value-increase"), 500)) : _ < 0 && (S.classList.add("value-decrease"),
            setTimeout( () => S.classList.remove("value-decrease"), 500)))
        }
        this.lastMoney = t.money,
        this.lastGpa = j > 0 ? ee : null,
        this._lastVitalsSnapshot = J;
        const Ce = this.gameState.getEnergyCap()
          , Se = document.getElementById("bar-energy")
          , Re = document.getElementById("val-energy");
        if (Se && Re) {
            const _ = Math.min(100, Math.max(0, t.energy / Ce * 100));
            Se.style.width = `${_}%`,
            Re.innerText = Math.round(t.energy),
            y && (y.innerText = Math.round(Ce)),
            Se.classList.toggle("bar-energy-warning", _ < 20)
        }
        if (g && f) {
            const _ = this.gameState.getMentalCap()
              , S = Math.min(100, Math.max(0, t.mental / _ * 100));
            g.style.width = `${S}%`,
            f.innerText = Math.round(t.mental),
            b && (b.innerText = Math.round(_)),
            g.classList.toggle("bar-mental-warning", S < 30)
        }
        const Ne = Number(t.mental);
        if (Number.isFinite(Ne) && Ne <= 0 ? this._depressionModalMonthTotal !== t.monthTotal && (this._depressionModalMonthTotal = t.monthTotal,
        (St = window.modalInstance) == null || St.showCustom("🧠 心态过低", '<div class="story-text">你进入抑郁状态，本月无法行动。请使用“结束本月”进入下个月。</div>', [{
            text: "知道了",
            cb: () => {}
        }], "type-negative")) : this._depressionModalMonthTotal = null,
        k && P) {
            const _ = this.gameState.getHealthCap()
              , S = Math.min(100, Math.max(0, t.health / _ * 100));
            k.style.width = `${S}%`,
            P.innerText = Math.round(t.health),
            L && (L.innerText = Math.round(_)),
            k.classList.toggle("bar-health-warning", S < 30)
        }
        M && T && (t.debtMonths > 0 ? (M.style.display = "block",
        T.innerText = te.maxDebtMonths - t.debtMonths) : M.style.display = "none");
        const ce = document.getElementById("inventory-strip");
        ce && t.inventory && t.inventory.length > 0 ? (ce.innerHTML = t.inventory.map(_ => {
            const S = Pe[_];
            return S ? `<span class="inv-icon" title="${S.name}">${S.icon}</span>` : ""
        }
        ).filter(Boolean).join(""),
        ce.style.display = "flex") : ce && (ce.innerHTML = "",
        ce.style.display = "none");
        const Ie = Math.max(0, (Array.isArray(t.socialFeed) ? t.socialFeed.length : 0) - (Number(t.socialSeenCount) || 0)) || 0;
        document.querySelectorAll(".social-unread-badge").forEach(_ => {
            _ && (Ie > 0 ? (_.hidden = !1,
            _.textContent = String(Math.min(Ie, 99))) : (_.hidden = !0,
            _.textContent = "0"))
        }
        ),
        document.querySelectorAll(".phone-bottom-nav").forEach(_ => _.remove());
        const W = document.getElementById("home-bar-hitbox");
        if (W && !W.dataset.bound) {
            const _ = F => {
                if (F && typeof F.preventDefault == "function" && F.preventDefault(),
                window.game && typeof window.game.phoneHomeOrCollapseMobile == "function") {
                    window.game.phoneHomeOrCollapseMobile();
                    return
                }
                if (window.game && typeof window.game.applyNavigation == "function") {
                    window.game.applyNavigation("phone", "hub", {
                        push: !1
                    });
                    return
                }
                window.game && typeof window.game.navigateSub == "function" && window.game.navigateSub("phone", "hub")
            }
              , S = () => {
                W.classList.remove("is-tapped"),
                W.offsetWidth,
                W.classList.add("is-tapped"),
                setTimeout( () => W.classList.remove("is-tapped"), 160)
            }
            ;
            W.addEventListener("click", _),
            W.addEventListener("pointerdown", S),
            W.addEventListener("keydown", F => {
                (F.key === "Enter" || F.key === " ") && _(F)
            }
            ),
            W.dataset.bound = "1"
        }
        W && (W.style.pointerEvents = We() ? "auto" : "");
        const xe = document.getElementById("phone-nav-back");
        if (xe && !xe.dataset.bound) {
            const _ = S => {
                if (S && typeof S.preventDefault == "function" && S.preventDefault(),
                window.game && typeof window.game.phoneBackOrCollapseMobile == "function") {
                    window.game.phoneBackOrCollapseMobile();
                    return
                }
                if (window.game && typeof window.game.phoneBack == "function") {
                    window.game.phoneBack();
                    return
                }
                window.game && typeof window.game.applyNavigation == "function" && window.game.applyNavigation("phone", "hub", {
                    push: !1
                })
            }
            ;
            xe.addEventListener("click", _),
            xe.addEventListener("keydown", S => {
                (S.key === "Enter" || S.key === " ") && _(S)
            }
            ),
            xe.dataset.bound = "1"
        }
        const vt = document.getElementById("log-list")
          , et = document.getElementById("latest-result-card");
        if (vt) {
            const _ = this._getActionLogEntries().slice(0, te.maxLogs);
            _[0],
            et && (et.hidden = !0,
            et.innerHTML = "");
            const S = document.querySelector(".center-section-head");
            S && (S.textContent = "• 行动日志");
            const F = document.querySelector(".freshman-task-title");
            if (F) {
                const U = Math.max(1, Math.min(4, Number(t.year) || 1))
                  , pe = ["大一", "大二", "大三", "大四"][U - 1] || `Y${U}`
                  , _e = ["FRESHMAN", "SOPHOMORE", "JUNIOR", "SENIOR"][U - 1] || `YEAR ${U}`;
                F.textContent = `${pe}任务 (${_e} TASKS)`
            }
            const oe = document.querySelector(".freshman-task-progress");
            if (oe) {
                const U = String(oe.textContent || "").match(/(\d+\s*\/\s*\d+)/);
                oe.textContent = `进度 ${U ? U[1].replace(/\s+/g, "") : "0/0"}`
            }
            const B = document.querySelector(".freshman-task-current");
            if (B) {
                const U = String(B.textContent || "")
                  , pe = U.indexOf(":")
                  , _e = pe >= 0 ? U.slice(pe + 1).trim() : U.trim();
                B.textContent = `当前目标: ${_e || "暂无"}`
            }
            const X = document.querySelector(".freshman-task-reward")
              , Ps = _.slice(0, te.maxLogs);
            X && X.dataset && X.dataset.currentReward ? X.textContent = X.dataset.currentReward : X && X.textContent && (X.textContent = String(X.textContent).replace(/^奖励:\s*/u, "")),
            vt.innerHTML = Ps.map(U => {
                if (U.outcome)
                    return this._renderOutcomeLogCard(U);
                const pe = this._logCardVariant(U.type)
                  , _e = this._logBadgeMeta(pe)
                  , tt = this._formatLogTimeMeta(U.timestamp);
                return `
                        <article class="log-card ${pe}" role="article">
                            <div class="log-card-head">
                                <span class="log-card-tag ${_e.className}">${_e.text}</span>
                                ${tt ? `<span class="log-card-time"><span>${tt.hhmm}</span><span>${tt.ampm}</span></span>` : ""}
                            </div>
                            <div class="log-card-body">${this._escapeHtml(U.message)}</div>
                        </article>
                    `
            }
            ).join(""),
            S && (S.textContent = "• 行动日志")
        }
        const bt = document.querySelector(".center-section-head");
        bt && (bt.textContent = "• 行动日志");
        const wt = document.querySelector(".center-section-head");
        wt && (wt.textContent = "• 行动日志");
        const kt = document.querySelector(".freshman-task-reward");
        if (kt) {
            const _ = ((xt = document.querySelector(".freshman-task-item.is-active .freshman-task-item-reward")) == null ? void 0 : xt.textContent) || ((Tt = document.querySelector(".freshman-task-item:not(.is-done) .freshman-task-item-reward")) == null ? void 0 : Tt.textContent);
            _ && (kt.textContent = _)
        }
        this._maybeCrisisFlashPopups(t),
        this._updateCrisisPanel(t),
        this._updateBuffStrip(t),
        this.numberAnimator.attach("ui-money", "money", this.gameState),
        this.numberAnimator.attach("bar-energy", "energy", this.gameState),
        this.numberAnimator.attach("bar-mental", "mental", this.gameState),
        this.numberAnimator.attach("bar-health", "health", this.gameState)
    }
    _escapeHtml(e) {
        const t = document.createElement("div");
        return t.textContent = e,
        t.innerHTML
    }
    _getActionLogEntries() {
        return this.gameState.getLogs().filter(e => !e || this._isEventAuditLog(e) ? !1 : !!e.outcome || this._isStartupActionLogNotice(e))
    }
    _isStartupActionLogNotice(e) {
        const t = String((e == null ? void 0 : e.message) || "");
        return t.startsWith("欢迎来到 ") || t.startsWith("注意：每年 ")
    }
    _isTouchViewport() {
        return typeof window > "u" || typeof window.matchMedia != "function" ? !1 : window.matchMedia("(hover: none) and (pointer: coarse)").matches && window.innerWidth <= 1279
    }
    _isTouchTabletViewport() {
        return !this._isTouchViewport() || typeof window > "u" ? !1 : window.innerWidth >= 768 && window.innerWidth <= 1279
    }
    _updateTouchLayoutFlags(e) {
        e && (e.classList.toggle("is-touch-ui", this._isTouchViewport()),
        e.classList.toggle("is-touch-tablet", this._isTouchTabletViewport()))
    }
    _logCardVariant(e) {
        const t = e || "";
        return t.includes("log-good") ? "log-card--good" : t.includes("log-academic-warn") ? "log-card--bad log-card--academic-warn" : t.includes("log-bad") ? "log-card--bad" : t.includes("log-ai") ? "log-card--ai" : t.includes("ticker") ? "log-card--ticker" : t.includes("log-event") ? "log-card--event" : "log-card--neutral"
    }
    _renderOutcomeLogCard(e) {
        const t = e.outcome || {}
          , s = this._logCardVariant(e.type)
          , n = this._logBadgeMeta(s, t)
          , a = this._formatLogTimeMeta(e.timestamp)
          , o = String(t.summary || "").trim()
          , r = String(t.statusLine || "").trim()
          , l = String(t.detail || "").trim()
          , c = [o, r, l].filter(Boolean)
          , d = Number(t.finalMultiplier)
          , u = Number.isFinite(d) && d < .6 ? " outcome-tag--fatigue-danger" : Number.isFinite(d) && d < 1 ? " outcome-tag--fatigue-warn" : ""
          , h = this._buildOutcomeTags(t).map(m => `<span class="${`outcome-tag${u && /[+-]\s*\d/.test(m) ? u : ""}`}">${this._escapeHtml(m)}</span>`);
        return `
            <article class="log-card log-card--outcome ${s}" role="article">
                <div class="log-card-head">
                    <span class="log-card-tag ${n.className}">${n.text}</span>
                    ${a ? `<span class="log-card-time"><span>${a.hhmm}</span><span>${a.ampm}</span></span>` : ""}
                </div>
                <div class="log-card-body log-card-body--outcome">${c.map(m => this._escapeHtml(m)).join("<br>")}</div>
                ${h.length ? `<div class="outcome-tag-box">${h.join("")}</div>` : ""}
            </article>
        `
    }
    _buildOutcomeTags(e={}) {
        const t = String(e.effectsTag || e.settlementTag || "").replace(/^\s*\[/u, "").replace(/\]\s*$/u, "").trim();
        return t ? t.split("|").map(s => s.trim()).filter(s => s && !/^效率\s*x/i.test(s)) : []
    }
    _isEventAuditLog(e) {
        const t = String((e == null ? void 0 : e.message) || "");
        return t.startsWith("[事件库审计]") || t.startsWith("[事件库] Supabase 普通事件")
    }
    _logBadgeMeta(e="", t=null) {
        const s = String(e)
          , n = String((t == null ? void 0 : t.kind) || "");
        return n === "turn" ? {
            text: "转折 / TURN",
            className: "log-card-tag--event"
        } : n === "academic" ? {
            text: "学业 / STUDY",
            className: "log-card-tag--event"
        } : n === "career" ? {
            text: "职业 / CAREER",
            className: "log-card-tag--event"
        } : n === "relationship" ? {
            text: "关系 / RELATION",
            className: "log-card-tag--event"
        } : s.includes("log-card--bad") ? {
            text: "损失 / LOSS",
            className: "log-card-tag--loss"
        } : s.includes("log-card--event") ? {
            text: "事件 / EVENT",
            className: "log-card-tag--event"
        } : s.includes("log-card--ai") ? {
            text: "剧情 / STORY",
            className: "log-card-tag--story"
        } : s.includes("log-card--ticker") ? {
            text: "通知 / NOTICE",
            className: "log-card-tag--notice"
        } : s.includes("log-card--neutral") ? {
            text: "记录 / LOG",
            className: "log-card-tag--neutral"
        } : {
            text: "收益 / GAIN",
            className: "log-card-tag--gain"
        }
    }
    _formatLogTimeMeta(e) {
        if (!e)
            return null;
        const t = new Date(e);
        if (Number.isNaN(t.getTime()))
            return null;
        const s = t.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            hour12: !0
        })
          , [n,a] = String(s).split(" ");
        return {
            hhmm: (n || "").replace(/^0/, ""),
            ampm: a || ""
        }
    }
    _maybeCrisisFlashPopups(e) {
        var h, m, p;
        const t = typeof window < "u" ? window.modalInstance : null;
        if (!(t != null && t.showCustom))
            return;
        const s = document.getElementById("modal");
        if (s) {
            const g = s.style.display === "flex"
              , f = typeof window < "u" && window.getComputedStyle ? window.getComputedStyle(s).display === "flex" : !1;
            if (g || f)
                return
        }
        const n = this._crisisFlashShown
          , a = (g, f, b, k=null) => n.has(g) ? !1 : (n.add(g),
        t.showCustom(f, `<div class="crisis-flash-modal story-text">${b}</div>`, [{
            text: "知道了",
            cb: () => {}
        }], "type-negative", k ? {
            deferWhen: k
        } : {}),
        !0)
          , o = [11, 12, 4, 5]
          , r = typeof window < "u" && ((m = (h = window.housingSystem) == null ? void 0 : h.getCurrentHousing) == null ? void 0 : m.call(h))
          , l = $t(e.region)
          , c = te.tuitionMonth;
        if (o.includes(e.month) && a("panel_final_exam", "⚠️ 期末季", '<p class="crisis-flash-red">期末考试季已到，请优先安排复习，避免学业下滑。</p>') || e.health < 30 && a("panel_health", "⚠️ 健康告急", '<p class="crisis-flash-red">健康值过低，请尽快休息、健身或去医院治疗。</p>') || !r && a("panel_housing", "⚠️ 尚未租房", '<p class="crisis-flash-red">无住房会持续影响心态与结算，请尽快在手机地图中处理租房。</p>', () => {
            var g, f;
            return !(typeof window < "u" && ((f = (g = window.housingSystem) == null ? void 0 : g.getCurrentHousing) != null && f.call(g)))
        }
        ) || e.month >= 9 && e.month <= c && e.money < l && a("panel_tuition", "⚠️ 学费压力", `<p class="crisis-flash-red">${c} 月需缴学费约 ${w(l, e.region)}，当前余额可能不足。</p>`) || e.energy < 20 && a("panel_energy", "⚠️ 体力见底", '<p class="crisis-flash-red">体力已很低，本月行动将受限。</p>') || e.debtMonths > 0 && a("panel_debt", "⚠️ 破产风险", `<p class="crisis-flash-red">债务宽限期剩余约 ${Math.max(0, te.maxDebtMonths - e.debtMonths)} 个月。</p>`) || (e.rel_prof ?? 100) <= 20 && a("rel_prof_low", "⚠️ 导师关系危机", '<p class="crisis-flash-red">导师关系过低，可能影响推荐与学业支持。</p>') || (e.rel_parents ?? 100) <= 20 && a("rel_parents_low", "⚠️ 家庭关系危机", '<p class="crisis-flash-red">父母关系过低，可能影响家庭支持。</p>') || e.partner && (e.partner.rel ?? 100) <= 20 && a("rel_partner_low", "💔 感情危机", '<p class="crisis-flash-red">伴侣关系已接近崩溃，请尽快修复。</p>') || e.parentsCutOff && a("parents_cutoff", "⚠️ 父母断供", '<p class="crisis-flash-red">家庭资助已中断，请尽快补足现金流。</p>'))
            return;
        const d = e.diseases || [];
        if (!this._crisisDiseaseBaselineReady)
            this._prevDiseaseIds = new Set(d),
            this._crisisDiseaseBaselineReady = !0;
        else {
            for (const g of d)
                if (!this._prevDiseaseIds.has(g)) {
                    const f = ((p = ue[g]) == null ? void 0 : p.name) || g;
                    if (a(`disease_${g}`, "⚠️ 健康", `<p class="crisis-flash-red">你确诊了：${this._escapeHtml(f)}</p>`)) {
                        this._prevDiseaseIds = new Set(d);
                        return
                    }
                }
            this._prevDiseaseIds = new Set(d)
        }
        const u = !!e.partner;
        if (this._hadPartnerLastFrame === null)
            this._hadPartnerLastFrame = u;
        else {
            if (this._hadPartnerLastFrame && !u && a("partner_breakup", "💔 分手", '<p class="crisis-flash-red">你们已经分手，短期内会对心态造成冲击。</p>')) {
                this._hadPartnerLastFrame = u;
                return
            }
            this._hadPartnerLastFrame = u
        }
    }
    _updateCrisisPanel(e) {
        var l, c;
        const t = document.getElementById("crisis-alert-list");
        if (!t)
            return;
        const s = [];
        [11, 12, 4, 5].includes(e.month) && s.push({
            tier: "exam",
            text: "期末季来临，请优先安排复习，稳住本学期 GPA。"
        }),
        e.health < 30 && s.push({
            tier: "danger",
            text: "健康值低于 30，建议休息、健身或去医院治疗。"
        }),
        typeof window < "u" && ((c = (l = window.housingSystem) == null ? void 0 : l.getCurrentHousing) == null ? void 0 : c.call(l)) || s.push({
            tier: "danger",
            text: "你还没有租房，无住房会持续影响心态与结算。"
        });
        const o = $t(e.region)
          , r = te.tuitionMonth;
        if (e.month >= 9 && e.month <= r && e.money < o && s.push({
            tier: "danger",
            text: `${r} 月将缴学费约 ${w(o, e.region)}，当前余额可能不足。`
        }),
        e.energy < 20 && s.push({
            tier: "danger",
            text: "体力过低，本月行动会受限。"
        }),
        e.debtMonths > 0 && s.push({
            tier: "danger",
            text: `破产倒计时中，剩余约 ${Math.max(0, te.maxDebtMonths - e.debtMonths)} 个月。`
        }),
        (e.rel_prof ?? 0) <= 20 && s.push({
            tier: "danger",
            text: "导师关系过低，可能影响学业与推荐。"
        }),
        (e.rel_parents ?? 0) <= 20 && s.push({
            tier: "danger",
            text: "父母关系过低，家庭支持可能下降。"
        }),
        s.length === 0) {
            t.innerHTML = '<div class="crisis-alert-item crisis-alert-item--safe">当前暂无重大危机。</div>';
            return
        }
        t.innerHTML = s.map(d => `<div class="${d.tier === "exam" ? "crisis-alert-item crisis-alert-item--exam" : "crisis-alert-item crisis-alert-item--danger"}">${this._escapeHtml(d.text)}</div>`).join("")
    }
    _updateBuffStrip(e) {
        const t = document.getElementById("buff-debuff-strip");
        if (!t)
            return;
        const s = [];
        for (const a of e.diseases || []) {
            const o = ue[a];
            o && s.push({
                cls: "buff-chip--debuff",
                icon: "🩺",
                name: o.name,
                desc: o.desc || "持续影响中"
            })
        }
        if (e.gpa >= 3.85 && s.push({
            cls: "buff-chip--buff",
            icon: "✨",
            name: "学霸光环",
            desc: "累计 GPA 很高，保持节奏。"
        }),
        e.partner && e.partner.stage && e.partner.stage !== "single") {
            const a = e.partner.name ? String(e.partner.name) : "对象";
            s.push({
                cls: "buff-chip--buff",
                icon: "💞",
                name: "恋爱中",
                desc: `与 ${a} 的关系进行中`
            })
        }
        e.returnOfferUnlocked && s.push({
            cls: "buff-chip--buff",
            icon: "🎖️",
            name: "Return Offer 线",
            desc: "大厂回报线已解锁。"
        }),
        e.techInternStreak >= 2 && s.push({
            cls: "buff-chip--buff",
            icon: "📈",
            name: "实习连击",
            desc: `已连续 ${e.techInternStreak} 个月推进实习线`
        });
        for (const a of e.narrativeBuffs || []) {
            if (!a || !a.id)
                continue;
            const o = Math.max(1, Math.floor(Number(a.duration) || 1))
              , r = a.type === "buff";
            s.push({
                cls: r ? "buff-chip--buff" : "buff-chip--debuff",
                icon: r ? "✨" : "⚠️",
                name: a.name || a.id,
                desc: `${a.desc || "叙事事件影响"}（剩余 ${o} 月）`
            })
        }
        if (s.length === 0) {
            t.innerHTML = "",
            t.hidden = !0;
            const a = document.querySelector(".center-story-column");
            a && a.classList.remove("center-story-column--has-buffs");
            return
        }
        t.hidden = !1;
        const n = document.querySelector(".center-story-column");
        n && n.classList.add("center-story-column--has-buffs"),
        t.innerHTML = `
            <div class="buff-strip-head">当前状态 <span class="buff-strip-sub">Buff / Debuff</span></div>
            <div class="buff-strip-scroll">
                ${s.map(a => `
                    <div class="buff-chip ${a.cls}" title="${this._escapeHtml(a.desc)}">
                        <span class="buff-chip-icon">${a.icon}</span>
                        <span class="buff-chip-name">${this._escapeHtml(a.name)}</span>
                        <span class="buff-chip-desc">${this._escapeHtml(a.desc)}</span>
                    </div>`).join("")}
            </div>`
    }
    _flashDynamicIslandText(e) {
        const t = document.getElementById("dynamic-island")
          , s = document.getElementById("dynamic-island-text");
        !t || !s || !e || (s.textContent = e,
        t.classList.add("dynamic-island--expanded"),
        clearTimeout(this._islandTimer),
        this._islandTimer = setTimeout( () => {
            t.classList.remove("dynamic-island--expanded"),
            s.textContent = ""
        }
        , 2e3))
    }
    _flashDynamicIsland(e, t) {
        const s = document.getElementById("dynamic-island")
          , n = document.getElementById("dynamic-island-text");
        if (!s || !n || e === 0)
            return;
        const a = e > 0 ? "+" : "";
        n.textContent = `${a}${w(e, t)}`,
        s.classList.add("dynamic-island--expanded"),
        clearTimeout(this._islandTimer),
        this._islandTimer = setTimeout( () => {
            s.classList.remove("dynamic-island--expanded"),
            n.textContent = ""
        }
        , 2200)
    }
}
const Je = {
    label: "🛏️ 躺平",
    energyCost: 20,
    mentalBonus: 20
}
  , Gn = {
    dishwash: {
        id: "dishwash",
        name: "刷盘子",
        icon: "🍟",
        unlocked: () => !0,
        energy: 45,
        gpa: -.15,
        mental: -10,
        health: -5,
        desc: "基础体力活，收入一般"
    },
    tutor: {
        id: "tutor",
        name: "家教",
        icon: "📖",
        unlocked: i => ((i.cumulative_gpa ?? i.gpa) || 0) > 3,
        energy: 30,
        gpa: -.08,
        mental: 0,
        desc: "累计 GPA>3.0 解锁"
    },
    ta: {
        id: "ta",
        name: "校内 TA",
        icon: "📚",
        unlocked: i => {
            var s;
            const e = i.cumulative_gpa ?? i.gpa ?? 0
              , t = ((s = i.work_counts) == null ? void 0 : s.research) || 0;
            return e >= 3.5 && t >= 1
        }
        ,
        energy: 30,
        gpa: -.03,
        mental: 5,
        desc: "累计 GPA≥3.5 且做过科研"
    },
    big_intern: {
        id: "big_intern",
        name: "大厂实习",
        icon: "💼",
        unlocked: i => {
            const e = i.current_job || {}
              , t = Number(e.proficiency) || 0
              , s = Number(e.jobLevel) || 1
              , n = i.work_counts || {}
              , a = n.ta || 0
              , o = n.research || 0;
            return (t >= 40 || s >= 2) && (a >= 1 || o >= 2) && (i.monthTotal || 0) > 12
        }
        ,
        energy: 50,
        gpa: -.25,
        mental: -10,
        desc: "岗位熟练度≥40或职级≥2，且有 TA/科研经历，非大一"
    }
};
function ni(i, e, t={}) {
    if (!Gn[i])
        return 0;
    const n = t.state
      , a = n == null ? void 0 : n.major
      , o = n == null ? void 0 : n.current_job
      , r = (o == null ? void 0 : o.workTypeId) === i
      , l = r && (o != null && o.major) ? o.major : a
      , c = r && (o == null ? void 0 : o.jobLevel) != null ? o.jobLevel : void 0;
    let d = Ze(i, e, {
        major: l,
        jobLevel: c
    });
    if (d <= 0)
        return 0;
    if (r && (o == null ? void 0 : o.raiseMultiplier) != null && o.raiseMultiplier > 0 && (d = Math.floor(d * Number(o.raiseMultiplier))),
    d = Math.floor(d * (.95 + Math.random() * .1)),
    t.state) {
        const u = Qe(t.state);
        d = Math.floor(d * (1 + u.workIncomeBonusPct))
    }
    return d
}
const ai = 20
  , Ut = {
    黑工: 1,
    兼职: 2,
    初创公司: 2,
    校内: 3,
    中厂: 4,
    知名企业: 4,
    顶级大厂: 5,
    顶级投行: 5,
    顶级机构: 5,
    顶级代理: 5
}
  , Gt = {
    黑工: .7,
    兼职: .5,
    校内: .5,
    初创公司: .25,
    中厂: .3,
    知名企业: .3,
    顶级大厂: .1,
    顶级投行: .1,
    顶级机构: .1,
    顶级代理: .1
};
function Ot(i) {
    const e = String(i || "").trim();
    return Object.prototype.hasOwnProperty.call(Ut, e) ? Ut[e] : 2
}
function On(i) {
    const e = String(i || "").trim();
    return Object.prototype.hasOwnProperty.call(Gt, e) ? Gt[e] : .25
}
function jn(i) {
    const e = String(i || "").trim();
    return e === "顶级大厂" || e === "顶级投行" || e === "顶级机构" || e === "顶级代理"
}
function Fn(i, e, t) {
    const s = Number(i.cumulative_gpa ?? i.gpa ?? 0)
      , n = On(t.tier);
    let a = n
      , o = 0
      , r = 0;
    const l = [`基础 ${(n * 100).toFixed(0)}%`];
    if (s < 3 && jn(t.tier))
        return {
            probability: 0,
            base: n,
            gpaBonus: 0,
            ladderBonus: 0,
            details: "GPA<3.0 时顶级岗位不予考虑"
        };
    s > 3.5 && (o = .2,
    a += o,
    l.push("GPA>3.5 +20%"));
    const c = e
      , d = (c == null ? void 0 : c.proficiency) != null ? Number(c.proficiency) : 0;
    let u = c == null ? void 0 : c.tier;
    if (!u && (c != null && c.id)) {
        const p = os(c.id);
        u = p == null ? void 0 : p.tier
    }
    const h = Ot(u)
      , m = Ot(t.tier);
    return d > 80 && m === h + 1 && (r = .3,
    a += r,
    l.push("阶梯跳槽 +30%")),
    a = Math.min(.95, Math.max(0, a)),
    {
        probability: a,
        base: n,
        gpaBonus: o,
        ladderBonus: r,
        details: l.join(" · ")
    }
}
function Kn() {
    const i = Je.energyCost
      , e = Je.mentalBonus;
    return [{
        title: "学业 · 平时课月（9–10、1–3 月）",
        items: [{
            line: "📝 肝Due / 作业",
            detail: "体力 −20；本学期百分制 +10。"
        }, {
            line: "🧠 Quiz",
            detail: "体力 −15；心态 −5；本学期百分制 +8。"
        }, {
            line: "🧪 做科研",
            detail: "体力 −40；心态 −10；岗位熟练度 +3；导师关系 +5。"
        }, {
            line: "🗣️ Pre",
            detail: "体力 −30；心态 −5；本学期百分制 +15；岗位熟练度 +1。"
        }]
    }, {
        title: "学业 · 考试月（11–12、4–5 月）",
        items: [{
            line: "🔥 通宵复习",
            detail: "体力 −50；心态 −20；本学期百分制 +30。"
        }, {
            line: "📚 正常复习",
            detail: "体力 −30；心态 −5；本学期百分制 +15。"
        }, {
            line: "🧪 科研 / 🗣️ Pre",
            detail: "与平时课月相同（见上）。"
        }]
    }, {
        title: "生活",
        items: [{
            line: "🛏️ 躺平",
            detail: `体力 −${i}；心态 +${e}。`
        }, {
            line: "💃 蹦迪",
            detail: "体力 −40；现金消费；心态 +25；健康 −3；本学期百分制可能略降。"
        }, {
            line: "🏋️ 健身",
            detail: "体力 −20；支付健身房费用；健康 +10；心态 +5。"
        }, {
            line: "💼 打工",
            detail: "按当前签约岗位结算薪资与消耗（受岗位、月份和政策影响）。"
        }]
    }, {
        title: "💼 去上班",
        items: [{
            line: "当前签约岗位",
            detail: "按岗位消耗体力（约 30–50，受自行车/车型等影响）、获得月薪现金；可能按岗位类型微调本学期百分制、心态与健康。大一学年非暑假月份禁止校外合法打工（暑假 6–8 月或签证豁免/灰色岗位除外）。"
        }]
    }, {
        title: "说明",
        items: [{
            line: "月份与按钮",
            detail: "暑假（6–8 月）无课业类按钮；中栏行动会随月份切换。本页为规则摘要，实际结算以游戏内为准。"
        }]
    }].map(s => `
        <section class="phone-action-stats-section" aria-label="${s.title}">
            <h3 class="phone-action-stats-heading">${s.title}</h3>
            <ul class="phone-action-stats-items">
                ${s.items.map(n => `
                    <li class="phone-action-stats-row">
                        <div class="phone-action-stats-name">${n.line}</div>
                        <p class="phone-action-stats-detail">${n.detail}</p>
                    </li>`).join("")}
            </ul>
        </section>`).join("")
}
function x(i) {
    return String(i ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
}
function Vn(i) {
    return String(i || "").replace(/^[\p{Emoji_Presentation}\p{Extended_Pictographic}\u2600-\u27BF\uFE0F\s]+/gu, "").replace(/\s{2,}/g, " ").trim()
}
function zn(i) {
    return String(i || "").replaceAll("⚡", "体力").replaceAll("🧠", "心态").replaceAll("❤️", "健康").replace(/\s*·\s*/g, " | ").replace(/\s{2,}/g, " ").trim()
}
function Yn() {
    return `
        <svg class="phone-ios-linkedin-glyph" viewBox="0 0 64 64" aria-hidden="true" focusable="false">
            <rect x="0" y="0" width="64" height="64" rx="18" fill="url(#linkedinIconGradient)"/>
            <circle cx="18" cy="20" r="5" fill="#ffffff"/>
            <rect x="13.5" y="29" width="9" height="23" rx="2.2" fill="#ffffff"/>
            <path d="M30 29h8.3v3.1c1.7-2.4 4.2-3.8 7.6-3.8 7 0 10.6 4.4 10.6 12.4V52h-9V41.5c0-3.5-1.4-5.4-4.1-5.4-3 0-4.5 2.1-4.5 5.7V52H30V29z" fill="#ffffff"/>
            <defs>
                <linearGradient id="linkedinIconGradient" x1="14" y1="4" x2="50" y2="60" gradientUnits="userSpaceOnUse">
                    <stop stop-color="#6FD7FF"/>
                    <stop offset="0.52" stop-color="#20A6EA"/>
                    <stop offset="1" stop-color="#0969C3"/>
                </linearGradient>
            </defs>
        </svg>`
}
function Wn(i, e={}) {
    var s;
    const t = String(i || "");
    return t.includes("academicHomework") ? "academic:homeworkDue" : t.includes("academicQuiz") ? "academic:takeQuiz" : t.includes("academicPre") ? "academic:prepPre" : t.includes("academicCram") ? "academic:libraryCram" : t.includes("academicReview") ? "academic:normalReview" : t.includes("research") ? "academic:research" : t.includes("workCurrentJob") ? `work:${((s = e.current_job) == null ? void 0 : s.workTypeId) || "dishwash"}` : t.includes("slack") ? "academic:slack" : t.includes("party") ? "life:party" : t.includes("gym") ? "life:gym" : t.includes("game") ? "life:playGame" : ""
}
function Jn(i, e) {
    return an(i, zn(e))
}
function Qn(i) {
    const e = String(i || "");
    return /顶级|大厂|投行|机构|代理/.test(e) ? "linkedin-tier-pill--gold" : /黑工|灰色/.test(e) ? "linkedin-tier-pill--ink" : /初创|不知名|小律所|MCN|工作室|画廊/.test(e) ? "linkedin-tier-pill--muted" : /中厂|知名|四大|区域|品牌|本地|州立/.test(e) ? "linkedin-tier-pill--blue" : /校内|兼职|个人/.test(e) ? "linkedin-tier-pill--slate" : "linkedin-tier-pill--muted"
}
const Xn = {
    US: "美国",
    UK: "英国",
    AU: "澳洲",
    HK: "香港",
    SG: "新加坡"
};
function Zn(i) {
    return `${Xn[i === "HKSG" ? "HK" : i] || "海外"} 顶尖综合性大学`
}
const ea = {
    study: "学习",
    life: "生活",
    transport: "交通",
    entertainment: "娱乐",
    special: "特殊"
}
  , ta = ["study", "life", "transport", "entertainment", "special"];
function sa(i) {
    return i ? /亏损|[-−]\s*\$|[-−]\d|GPA-|消耗|维护费|需.*体力|每月\s*[-−]/i.test(i) ? "shop-fx-neg" : /[+＋]|解锁|减半|减少|降低|提升|增加|收入|概率|健康|心态|效率|体力\s*\+|打工/i.test(i) ? "shop-fx-pos" : "shop-fx-neu" : "shop-fx-neu"
}
function rt(i) {
    const e = Math.max(1, Math.min(4, Number(i) || 1))
      , t = {
        1: {
            cn: "大一任务",
            en: "FRESHMAN TASKS"
        },
        2: {
            cn: "大二任务",
            en: "SOPHOMORE TASKS"
        },
        3: {
            cn: "大三任务",
            en: "JUNIOR TASKS"
        },
        4: {
            cn: "大四任务",
            en: "SENIOR TASKS"
        }
    };
    return t[e] || t[1]
}
const jt = {
    daily: [{
        id: "home",
        label: "日常"
    }],
    phone: [{
        id: "hub",
        label: "桌面"
    }, {
        id: "guide",
        label: "指南"
    }, {
        id: "action-guide",
        label: "数值指南"
    }, {
        id: "map",
        label: "地图"
    }, {
        id: "housing",
        label: "租房"
    }, {
        id: "shop",
        label: "商店"
    }, {
        id: "hospital",
        label: "医院"
    }, {
        id: "stocks",
        label: "交易所"
    }, {
        id: "social",
        label: "朋友圈"
    }, {
        id: "dating",
        label: "恋爱"
    }, {
        id: "contacts",
        label: "通讯录"
    }, {
        id: "resume",
        label: "简历"
    }, {
        id: "linkedin",
        label: "领英"
    }, {
        id: "my",
        label: "设置"
    }],
    profile: [{
        id: "settings",
        label: "设置"
    }]
};
class ii {
    constructor(e, t, s) {
        this.gameState = e,
        this.gameScreen = t,
        this.gameLoop = s
    }
    normalizeRoute(e, t) {
        e === "phone" && t === "relations" && (t = "contacts"),
        e === "daily" && t === "life" && (t = "home"),
        e === "city" && (e = "phone",
        t || (t = "housing"));
        const s = jt[e];
        return s ? s.some(n => n.id === t) ? {
            main: e,
            sub: t
        } : {
            main: e,
            sub: je[e] || s[0].id
        } : {
            main: "daily",
            sub: "home"
        }
    }
    _isTouchMobileTabletLayout() {
        if (typeof window > "u" || typeof window.matchMedia != "function")
            return !1;
        try {
            return window.matchMedia("(hover: none) and (pointer: coarse)").matches && window.innerWidth <= 1279
        } catch {
            return window.innerWidth <= 1279
        }
    }
    buildSubNavHtml(e, t) {
        return (jt[e] || []).map(n => `
            <button type="button" class="sub-pill glass-pill ${n.id === t ? "active" : ""}"
                data-sub="${n.id}"
                onclick="window.game.navigateSub('${e}','${n.id}')">
                ${n.label}
            </button>`).join("")
    }
    renderFull(e) {
        e.centerMain = "daily",
        e.centerSub = "home";
        const t = this.normalizeRoute(e.phoneMain, e.phoneSub);
        e.phoneMain = t.main,
        e.phoneSub = t.sub;
        const s = document.getElementById("center-content")
          , n = document.getElementById("phone-panel-inner");
        if (!s || !n)
            return;
        this.gameState.state,
        s.innerHTML = `
            <div class="center-story-column">
                <section id="tutorial-log" class="center-log-section glass-center-log" aria-label="行动日志">
                    <div class="center-section-head">📜 行动日志</div>
                    <div id="log-list" class="log-list log-list--cards" role="log"></div>
                </section>
                <div id="buff-debuff-strip" class="buff-debuff-strip" hidden></div>
                <div id="tab-panel-inner" class="tab-panel-inner daily-actions-host"></div>
            </div>`;
        const a = document.getElementById("tab-panel-inner");
        a && this.renderDailyStacked(a),
        n.innerHTML = '<div id="phone-tab-panel-inner" class="tab-panel-inner phone-tab-inner"></div>';
        const o = document.getElementById("phone-tab-panel-inner");
        o && this._dispatchPhone(t.main, t.sub, o);
        const r = document.querySelector(".smartphone-chassis .phone-body-column");
        if (r) {
            const l = e.phoneMain === "phone" && e.phoneSub === "hub";
            r.classList.toggle("phone-body--dock-hidden", !l)
        }
        this.gameScreen.updateUI()
    }
    renderFloatingGoalsAssistant(e, t) {
        const s = this.getStageGoals(e)
          , a = (s.items || []).map(o => {
            const r = o.done ? "is-done" : o.active ? "is-active" : ""
              , l = o.done ? "✔" : (o.active,
            "◻");
            return `<li class="goal-item ${r}"><span class="goal-mark">${l}</span><span class="goal-copy">${x(o.text)}</span></li>`
        }
        ).join("");
        return `
            <aside class="floating-goals-assistant${t ? " is-collapsed" : ""}" id="floating-goals-assistant" aria-label="阶段目标">
                <button type="button" class="goal-assistant-toggle" id="goal-assistant-toggle" aria-expanded="${t ? "false" : "true"}" title="${t ? "展开阶段目标" : "收起阶段目标"}">
                    <span class="goal-assistant-arrow" aria-hidden="true">${t ? "«" : "»"}</span>
                </button>
                <div class="goal-rail-label">🎯 阶段目标</div>
                <section class="goal-panel">
                    <h4 class="goal-panel-title">${x(s.title || "阶段目标")}</h4>
                    <ul class="goal-list">${a}</ul>
                </section>
            </aside>
        `
    }
    bindFloatingGoalsAssistant(e) {
        const t = document.getElementById("floating-goals-assistant")
          , s = document.getElementById("goal-assistant-toggle");
        !t || !s || (s.onclick = () => {
            const n = !t.classList.contains("is-collapsed");
            t.classList.toggle("is-collapsed", n),
            s.setAttribute("aria-expanded", n ? "false" : "true"),
            s.title = n ? "展开阶段目标" : "收起阶段目标";
            const a = s.querySelector(".goal-assistant-arrow");
            a && (a.textContent = n ? "«" : "»"),
            e.stageGoalsCollapsed = n
        }
        )
    }
    getStageGoals(e) {
        var s, n, a;
        const t = (a = (n = (s = window.game) == null ? void 0 : s.missionSystem) == null ? void 0 : n.getChecklistForCurrentYear) == null ? void 0 : a.call(n);
        return t && Array.isArray(t.items) && t.items.length ? {
            title: t.title,
            items: t.items.map(o => ({
                id: o.id,
                text: o.text,
                reward: o.reward,
                done: !!o.done,
                active: !o.done
            }))
        } : {
            title: "阶段目标",
            items: [{
                text: `维持生存线：健康≥30，现金不为负（当前 ${w(e.money, e.region)}）`,
                done: e.health >= 30 && e.money >= 0,
                active: e.health < 30 || e.money < 0
            }]
        }
    }
    _dispatchPhone(e, t, s) {
        switch (e) {
        case "phone":
            t === "hub" ? this.renderPhoneHub(s) : t === "guide" ? this.renderGuide(s) : t === "action-guide" ? this.renderActionStatsGuide(s) : t === "map" ? this.renderMap(s) : t === "housing" ? this.renderHousing(s) : t === "shop" ? this.renderShop(s) : t === "hospital" ? this.renderHospital(s) : t === "stocks" ? this.renderStocks(s) : t === "social" ? this.renderSocial(s) : t === "dating" ? this.renderDating(s) : t === "contacts" ? this.renderContacts(s) : t === "resume" ? this.renderResume(s) : t === "linkedin" ? this.renderLinkedIn(s) : t === "my" ? this.renderMy(s) : this.renderPhoneHub(s);
            break;
        case "profile":
            this.renderSettings(s);
            break;
        default:
            this.renderPhoneHub(s)
        }
    }
    renderRoute(e, t) {
        this.gameScreen.navigate(e, t, this)
    }
    render(e) {
        const t = xs[e];
        if (t) {
            this.gameScreen.navigate(t[0], t[1], this);
            return
        }
        this.gameScreen.navigate("daily", "home", this)
    }
    renderCompactDailyGrid(e, t={}) {
        var M, T, R;
        const s = !!t.workInGrid
          , n = !!t.touchCompact
          , a = e.month
          , o = a === 6 || a === 7 || a === 8
          , r = [11, 12, 4, 5].includes(a)
          , l = (e.mental ?? 100) <= 0
          , c = E => {
            const {onclick: D, label: $, meta: K, disabled: V=!1, title: j="", variant: re="academic"} = E
              , ee = E.actionKey || Wn(D, e)
              , ie = ee ? this.gameState.getActionRepeatCount(ee) : 0
              , z = rn(ie)
              , J = on(ie)
              , Y = V ? " disabled" : ""
              , le = [j, J].filter(Boolean).join(" · ")
              , Ce = le ? ` title="${x(le)}"` : ""
              , Se = z !== "none" ? ` btn-daily-compact--repeat-${z}` : ""
              , Re = `btn-daily-compact btn-daily-compact--${re}${Se}${V ? " btn-daily-compact--disabled" : ""}`
              , Ne = V || !D ? "" : ` onclick="${D}"`
              , ce = Vn($)
              , Ie = Jn(ee, K)
              , W = J ? `<span class="btn-daily-compact__warning">${x(J)}</span>` : "";
            return `<button type="button" class="${Re}" data-action-key="${x(ee)}" data-repeat="${ie}"${Ne}${Y}${Ce}>
<span class="btn-daily-compact__label">${x(ce)}</span>
<span class="btn-daily-compact__meta">${x(Ie)}</span>
${W}
</button>`
        }
        ;
        let d, u, h, m;
        if (o) {
            const E = "暑假无课业";
            d = c({
                onclick: "",
                label: "📝 肝Due",
                meta: "—",
                disabled: !0,
                title: `${E} · 肝Due/作业`,
                variant: "academic"
            }),
            u = c({
                onclick: "",
                label: "🧠 Quiz",
                meta: "—",
                disabled: !0,
                title: `${E} · Quiz`,
                variant: "academic"
            }),
            h = c({
                onclick: "",
                label: "🧪 科研",
                meta: "—",
                disabled: !0,
                title: `${E} · 做科研`,
                variant: "academic"
            }),
            m = c({
                onclick: "",
                label: "🗣️ Pre",
                meta: "—",
                disabled: !0,
                title: `${E} · Pre`,
                variant: "academic"
            })
        } else
            r ? (d = c({
                onclick: "window.gameActions.academicCram()",
                label: "🔥 通宵",
                meta: "⚡-50 · 本学期+30",
                disabled: l,
                title: "通宵复习",
                variant: "academic"
            }),
            u = c({
                onclick: "window.gameActions.academicReview()",
                label: "📚 复习",
                meta: "⚡-30 · 本学期+15",
                disabled: l,
                title: "正常复习",
                variant: "academic"
            }),
            h = c({
                onclick: "window.gameActions.research()",
                label: "🧪 科研",
                meta: "⚡-40 · 岗熟+3 · 导师+5",
                disabled: l,
                title: "做科研",
                variant: "academic"
            }),
            m = c({
                onclick: "window.gameActions.academicPre()",
                label: "🗣️ Pre",
                meta: "⚡-30 · 本学期+15",
                disabled: l,
                title: "Pre",
                variant: "academic"
            })) : (d = c({
                onclick: "window.gameActions.academicHomework()",
                label: "📝 肝Due",
                meta: "⚡-20 · 本学期+10",
                disabled: l,
                title: "肝Due/作业",
                variant: "academic"
            }),
            u = c({
                onclick: "window.gameActions.academicQuiz()",
                label: "🧠 Quiz",
                meta: "⚡-15 · 本学期+8",
                disabled: l,
                title: "Quiz",
                variant: "academic"
            }),
            h = c({
                onclick: "window.gameActions.research()",
                label: "🧪 科研",
                meta: "⚡-40 · 岗熟+3 · 导师+5",
                disabled: l,
                title: "做科研",
                variant: "academic"
            }),
            m = c({
                onclick: "window.gameActions.academicPre()",
                label: "🗣️ Pre",
                meta: "⚡-30 · 本学期+15",
                disabled: l,
                title: "Pre",
                variant: "academic"
            }));
        const p = c({
            onclick: "window.gameActions.slack()",
            label: "🛏️ 躺平",
            meta: `⚡-${Je.energyCost} · 🧠+${Je.mentalBonus}`,
            disabled: l,
            variant: "life"
        })
          , g = c({
            onclick: "window.gameActions.party()",
            label: "💃 蹦迪",
            meta: "⚡-30 · 🧠+30",
            disabled: l,
            variant: "life"
        })
          , f = c({
            onclick: "window.gameActions.gym()",
            label: "🏋️ 健身",
            meta: "⚡-20 · ❤️+10",
            disabled: l,
            variant: "life"
        })
          , b = c({
            onclick: (M = e.current_job) != null && M.workTypeId ? "window.gameActions.workCurrentJob()" : "",
            label: "打工",
            meta: (T = e.current_job) != null && T.workTypeId ? "执行当前岗位" : "先去领英签约岗位",
            disabled: l || !((R = e.current_job) != null && R.workTypeId),
            variant: "work"
        })
          , k = "";
        let P = "";
        return s && !n && (P = this._renderWorkCompactGridButton(e, c)),
        `<div class="${s ? "daily-actions-grid daily-actions-grid--nine" : "daily-actions-grid"}" role="group" aria-label="本月行动">
${d}${u}${h}${m}
${p}${g}${f}${b}${n ? "" : k}${P}
</div>`
    }
    _renderWorkCompactGridButton(e, t) {
        const s = e.current_job
          , n = s && s.title || "未签约岗位"
          , a = x(n)
          , o = s == null ? void 0 : s.freshmanVisaExempt
          , r = ht(e) && !o
          , l = (e.mental ?? 100) <= 0
          , c = r || !(s != null && s.workTypeId) || l
          , d = r ? "政策限制：大一学年非暑假禁止校外打工；暑假(6–8月)或黑工除外；换岗请打开「领英」" : `按当前签约岗位结算薪资、体力与熟练度。当前：${a}`
          , u = r ? "禁工" : s != null && s.workTypeId ? "执行岗位" : "领英求职";
        return t({
            onclick: c ? "" : "window.gameActions.workCurrentJob()",
            label: "💼 上班",
            meta: u,
            disabled: c,
            title: d,
            variant: "work"
        })
    }
    renderGoWorkButton(e) {
        const t = e.current_job
          , s = t && t.title || "未签约岗位"
          , n = x(s)
          , a = t == null ? void 0 : t.freshmanVisaExempt
          , o = ht(e) && !a
          , r = (e.mental ?? 100) <= 0
          , l = o || !(t != null && t.workTypeId) || r ? " disabled" : ""
          , c = o ? ' title="政策限制：大一学年非暑假禁止校外打工；暑假(6–8月)或黑工除外；换岗请打开「领英」"' : ' title="按当前签约岗位结算薪资、体力与熟练度"'
          , d = l.trim() ? "" : ' onclick="window.gameActions.workCurrentJob()"'
          , u = o ? "学年非暑假禁工" : t != null && t.workTypeId ? "执行当前岗位" : "领英求职";
        return `<div class="daily-go-work-row">
<button type="button" class="btn-daily-go-work"${l}${c}${d}>
<span class="btn-daily-go-work__main">💼 去上班 (当前: ${n})</span>
<span class="btn-daily-go-work__sub">${u}</span>
</button></div>`
    }
    renderDailyStacked(e) {
        const t = this.gameState.state
          , s = this._isTouchMobileTabletLayout()
          , n = s
          , a = this.renderCompactDailyGrid(t, {
            workInGrid: n,
            touchCompact: s
        })
          , o = n ? "" : this.renderGoWorkButton(t)
          , r = this.renderCurrentYearTaskCard(t)
          , l = s ? "租房、购物请用手机「地图」；最下方「结束本月」用于结算推进。" : "「去上班」执行当前签约岗位；换工作请打开手机 <strong>领英 · 求职市场</strong>。租房、购物请用 <strong>地图</strong>。最下方「结束本月」结算。";
        e.innerHTML = `
            <div id="tutorial-daily" class="daily-stack daily-stack--compact">
                ${r}
                ${a}
                ${o}
            </div>
            <p class="hint-next-month">${l}</p>
        `
    }
    renderFreshmanTaskCard(e) {
        var c, d;
        const t = this.getStageGoals(e)
          , s = Array.isArray(t == null ? void 0 : t.items) ? t.items : []
          , n = s.length || 1
          , a = s.filter(u => u.done).length
          , o = rt(e.year)
          , r = ((c = s.find(u => !u.done)) == null ? void 0 : c.text) || ((d = s[0]) == null ? void 0 : d.text) || "暂无目标"
          , l = Array.from({
            length: Math.max(n, 5)
        }, (u, h) => `<span class="freshman-task-bar${h < a ? " is-done" : ""}"></span>`).join("");
        return `
            <section class="freshman-task-card" aria-label="Freshman Tasks">
                <div class="freshman-task-head">
                    <h3 class="freshman-task-title">${o.cn} (${o.en})</h3>
                    <span class="freshman-task-progress">进度 ${a}/${n}</span>
                </div>
                <div class="freshman-task-bars" style="grid-template-columns: repeat(${n}, minmax(0, 1fr));">${l}</div>
                <div class="freshman-task-foot">
                    <p class="freshman-task-current">当前目标: ${x(r)}</p>
                    <span class="freshman-task-reward">奖励: 社交 +10</span>
                </div>
            </section>
        `
    }
    renderFreshmanTaskCardV2(e) {
        const t = this.getStageGoals(e)
          , s = Array.isArray(t == null ? void 0 : t.items) ? t.items : []
          , n = s.length || 1
          , a = s.filter(h => h.done).length
          , o = rt(e.year)
          , r = s.find(h => !h.done) || s[0] || null
          , l = (r == null ? void 0 : r.text) || "暂无目标"
          , c = (r == null ? void 0 : r.reward) || "完成目标可获得阶段奖励"
          , d = Array.from({
            length: Math.max(n, 5)
        }, (h, m) => `<span class="freshman-task-bar${m < a ? " is-done" : ""}"></span>`).join("")
          , u = s.map(h => {
            const m = `freshman-task-item${h.done ? " is-done" : ""}${h.active ? " is-active" : ""}`
              , p = h.reward ? `<span class="freshman-task-item-reward">${x(h.reward)}</span>` : ""
              , g = h.done ? "" : ` onclick="window.gameActions.focusTask('${x(h.id || "")}')"`;
            return `<button type="button" class="${m}"${g}>
                    <span class="freshman-task-item-text">${x(h.text)}</span>
                    ${p}
                </button>`
        }
        ).join("");
        return `
            <section class="freshman-task-card" aria-label="Freshman Tasks">
                <div class="freshman-task-head">
                    <h3 class="freshman-task-title">${o.cn} (${o.en})</h3>
                    <span class="freshman-task-progress">进度 ${a}/${n}</span>
                </div>
                <div class="freshman-task-bars">${d}</div>
                <div class="freshman-task-list">${u}</div>
                <div class="freshman-task-foot">
                    <p class="freshman-task-current">当前目标: ${x(l)}</p>
                    <span class="freshman-task-reward" data-current-reward="${x(c)}">${x(c)}</span>
                </div>
            </section>
        `
    }
    renderCurrentYearTaskCard(e) {
        const t = this.getStageGoals(e)
          , s = Array.isArray(t == null ? void 0 : t.items) ? t.items : []
          , n = Math.max(1, s.length)
          , a = s.filter(p => p.done).length
          , o = Math.max(1, Math.min(4, Number(e.year) || 1));
        (!this.gameScreen.currentTaskIndexByYear || typeof this.gameScreen.currentTaskIndexByYear != "object") && (this.gameScreen.currentTaskIndexByYear = {
            1: 0,
            2: 0,
            3: 0,
            4: 0
        });
        const r = Number(this.gameScreen.currentTaskIndexByYear[o]) || 0
          , l = Math.min(Math.max(0, r), n - 1);
        this.gameScreen.currentTaskIndexByYear[o] = l;
        const c = s[l] || s.find(p => !p.done) || s[0] || null
          , d = (c == null ? void 0 : c.text) || "暂无目标"
          , u = (c == null ? void 0 : c.reward) || "完成目标可获得阶段奖励"
          , h = rt(e.year)
          , m = Array.from({
            length: n
        }, (p, g) => {
            var k;
            return `<button type="button" class="freshman-task-bar${(k = s[g]) != null && k.done ? " is-done" : ""}${g === l ? " is-active" : ""}" onclick="window.gameActions.switchCurrentYearTask(${g})" aria-label="查看第 ${g + 1} 项任务"></button>`
        }
        ).join("");
        return `
            <section class="freshman-task-card" aria-label="Freshman Tasks">
                <div class="freshman-task-head">
                    <h3 class="freshman-task-title">${h.cn} (${h.en})</h3>
                    <span class="freshman-task-progress">进度 ${a}/${n}</span>
                </div>
                <div class="freshman-task-bars">${m}</div>
                <div class="freshman-task-foot">
                    <p class="freshman-task-current">当前目标: ${x(d)}</p>
                    <span class="freshman-task-reward" data-current-reward="${x(u)}">${x(u)}</span>
                </div>
            </section>
        `
    }
    renderFeedItem(e) {
        const t = e.type || ""
          , s = t.includes("feed-system") || e.message && e.message.startsWith("[系统]")
          , n = t.includes("feed-mom") || e.message && e.message.includes("妈妈");
        let a = "📌";
        return s && (a = "⚙️"),
        n && (a = "👩"),
        t === "log-good" && (a = "❤️"),
        t === "log-bad" && (a = "😢"),
        t === "log-class-tier" && (a = "⚜️"),
        `<div class="feed-item ${t}"><span class="feed-dot">${a}</span> ${e.message}</div>`
    }
    renderShop(e) {
        const t = this.gameState.state
          , s = {};
        for (const [a,o] of Object.entries(Pe)) {
            const r = o.category || "special";
            s[r] || (s[r] = []),
            s[r].push({
                id: a,
                ...o
            })
        }
        let n = '<div class="shop-flow-screen"><header class="shop-flow-head"><h2 class="shop-flow-h2">🛒 商店</h2></header>';
        for (const a of ta) {
            const o = s[a];
            if (!(!o || !o.length)) {
                n += `<h3 class="shop-cat-title">${ea[a] || a}</h3><div class="shop-card-grid">`;
                for (const r of o) {
                    const l = Hs(r.id, t, t.region)
                      , c = l.owned
                      , d = w(l.priceLocal, t.region)
                      , u = !l.canBuy
                      , h = sa(r.desc)
                      , m = (r.effectTags || []).slice(0, 2)
                      , p = [];
                    r.upkeep && r.upkeep !== "无维护费" && r.upkeep !== "鏃犵淮鎶よ垂" ? p.push(`维护 ${r.upkeep}`) : r.id === "therapy" || r.id === "漫画_collection" || r.id === "婕敾_collection" ? p.push(`上限 +${l.mentalCapBonus}/40`) : r.monthlyEffect && r.monthlyEffect.startsWith("每月") && p.push("每月生效");
                    const g = [...m, ...p].slice(0, 3).map( (b, k) => `<span class="${k >= m.length ? "shop-card-meta-chip" : ""}">${x(b)}</span>`).join("")
                      , f = c ? `<span class="shop-card-buy-line1">${x(l.statusText)}</span>` : '<span class="shop-card-buy-line1">购买</span>';
                    n += `
                    <article class="shop-flow-card ${c ? "shop-flow-card--owned" : ""} ${l.capped ? "shop-flow-card--capped" : ""}">
                        <div class="shop-card-art shop-card-art--${a}"><span class="shop-card-emoji">${r.icon}</span></div>
                        <div class="shop-card-body">
                            <div class="shop-card-title-row">
                                <h4 class="shop-card-name">${x(r.name)}</h4>
                                <span class="shop-card-status ${l.canBuy ? "is-ready" : ""}">${x(l.statusText)}</span>
                            </div>
                            <p class="shop-card-desc ${h}">${x(r.effectSummary || r.desc)}</p>
                            <div class="shop-card-tags">${g}</div>
                        </div>
                        <div class="shop-card-side">
                            <div class="shop-card-price-ribbon" aria-label="售价">${d}</div>
                            <button type="button" class="shop-card-buy" ${u ? "disabled" : ""} onclick="window.gameActions.buy('${r.id}')">${f}</button>
                        </div>
                    </article>`
                }
                n += "</div>"
            }
        }
        n += "</div>",
        e.innerHTML = n
    }
    renderPhoneHub(e) {
        e.innerHTML = `
            <div class="phone-ios-home phone-ios-home--v61" role="application" aria-label="手机主屏幕">
                <div class="phone-ios-icon-grid phone-ios-icon-grid--career-home">
                    <button type="button" class="phone-ios-app" onclick="window.game.openGuideFromHub()">
                        <span class="phone-ios-app-icon phone-ios-app-icon--guide" aria-hidden="true">↺</span>
                        <span class="phone-ios-app-label">留学指南</span>
                      </button>
                      <button type="button" class="phone-ios-app" data-tutorial="hub-linkedin" onclick="window.game.navigateSub('phone','linkedin')">
                          <span class="phone-ios-app-icon phone-ios-app-icon--linkedin" aria-hidden="true">${Yn()}</span>
                          <span class="phone-ios-app-label">领英</span>
                      </button>
                    <button type="button" class="phone-ios-app" data-tutorial="hub-map" onclick="window.game.navigateSub('phone','map')">
                        <span class="phone-ios-app-icon phone-ios-app-icon--map">🗺️</span>
                        <span class="phone-ios-app-label">地图</span>
                    </button>
                    <button type="button" class="phone-ios-app" data-tutorial="hub-tinder" onclick="window.game.navigateSub('phone','dating')">
                        <span class="phone-ios-app-icon phone-ios-app-icon--tinder" aria-hidden="true">❤</span>
                        <span class="phone-ios-app-label">Tinder</span>
                    </button>
                    <button type="button" class="phone-ios-app" data-tutorial="hub-resume" onclick="window.game.navigateSub('phone','resume')">
                        <span class="phone-ios-app-icon phone-ios-app-icon--resume">▤</span>
                        <span class="phone-ios-app-label">简历</span>
                    </button>
                    <button type="button" class="phone-ios-app phone-ios-app--mobile-only" data-tutorial="hub-action-stats" onclick="window.game.navigateSub('phone','action-guide')">
                        <span class="phone-ios-app-icon phone-ios-app-icon--action-stats" aria-hidden="true">📊</span>
                        <span class="phone-ios-app-label">数值指南</span>
                    </button>
                    <button type="button" class="phone-ios-app" onclick="window.game.navigateSub('phone','my')">
                        <span class="phone-ios-app-icon phone-ios-app-icon--my" aria-hidden="true">👤</span>
                        <span class="phone-ios-app-label">我的</span>
                    </button>
                </div>
            </div>
        `
    }
    renderActionStatsGuide(e) {
        e.innerHTML = `
            <div class="phone-app-screen phone-app-action-guide">
                <div class="phone-app-topbar">
                    <span class="phone-app-brand">📊 数值指南</span>
                </div>
                <div class="phone-action-guide-body">
                    <p class="phone-action-guide-lead">体力、心态、健康与本学期分数会随行动变化；以下为常见行动的参考区间（以当前版本为准）。</p>
                    <ul class="phone-action-guide-list">
                        <li><strong>学业</strong>：肝 Due / Quiz / 科研 / Pre 等会消耗体力并提升本学期分数；心态过低时部分按钮会锁定。</li>
                        <li><strong>生活</strong>：躺平、蹦迪、健身、阅读等影响体力、心态或健康。</li>
                        <li><strong>上班</strong>：按当前签约岗位结算；大一非暑假可能受签证规则限制，详见按钮提示。</li>
                        <li><strong>结算</strong>：每月结束请用中栏「结束本月」进入结算，状态会延续到下月。</li>
                    </ul>
                </div>
            </div>
        `
    }
    renderGuide(e) {
        e.innerHTML = `
            <div class="phone-app-screen phone-app-guide">
                <div class="phone-app-topbar">
                    <span class="phone-app-brand">💡 留学指南</span>
                </div>
                <div class="phone-guide-hero">
                    <div class="phone-guide-hero-icon" aria-hidden="true">💡</div>
                    <h2 class="phone-guide-hero-title">四步搞懂怎么活过四年</h2>
                    <p class="phone-guide-hero-desc">生存、期末、打工、地图——全是干货。可随时回来重温。</p>
                </div>
                <div class="phone-guide-actions">
                    <button type="button" class="phone-guide-open-btn" id="phone-guide-open-full">打开完整图文教程</button>
                    <button type="button" class="phone-guide-open-btn phone-guide-open-immersive" id="phone-guide-open-immersive">重温沉浸式遮罩引导</button>
                    <p class="phone-guide-mini">图文攻略随时可阅；首次开局会自动播放高亮漫游，也可在此重播。</p>
                </div>
            </div>
        `;
        const t = e.querySelector("#phone-guide-open-full");
        t && (t.onclick = () => {
            var n, a;
            return (a = (n = window.game) == null ? void 0 : n.openGuideModal) == null ? void 0 : a.call(n)
        }
        );
        const s = e.querySelector("#phone-guide-open-immersive");
        s && (s.onclick = () => {
            var n, a;
            return (a = (n = window.game) == null ? void 0 : n.startImmersiveTutorial) == null ? void 0 : a.call(n)
        }
        )
    }
    renderActionStatsGuide(e) {
        const t = Kn();
        e.innerHTML = `
            <div class="phone-app-screen phone-app-action-stats">
                <header class="phone-action-stats-header">
                    <h2 class="phone-action-stats-title">📊 数值指南</h2>
                    <p class="phone-action-stats-sub">各行动对体力、心态、学业等的影响（摘要）</p>
                </header>
                <div class="phone-action-stats-scroll">
                    ${t}
                </div>
            </div>
        `
    }
    renderLinkedIn(e) {
        const t = this.gameState.state
          , s = this.gameScreen
          , n = t.region === "HKSG" ? "HK" : t.region
          , a = t.current_job
          , o = s.linkedinTab === "market" ? "market" : "profile";
        if (!a || !a.workTypeId) {
            e.innerHTML = `
            <div class="phone-app-screen phone-linkedin phone-linkedin--shell">
                <div class="phone-app-topbar phone-linkedin-topbar">
                    <span class="phone-app-brand">领英</span>
                </div>
                <div class="phone-linkedin-empty">
                    <p class="phone-linkedin-empty-title">岗位数据异常</p>
                    <p class="phone-linkedin-empty-hint">请尝试读档或重新开始；默认应有「唐人街餐厅」黑工岗位。</p>
                </div>
            </div>`;
            return
        }
        const r = Math.min(100, Math.max(0, Math.floor(Number(a.proficiency) || 0)))
          , l = r
          , c = x(Zs(t.major))
          , d = x(a.companyName || a.company || "—")
          , u = x(a.positionTitle || a.title || "—")
          , h = a.salary != null ? Math.floor(Number(a.salary)) : 0
          , m = x(w(h, n))
          , p = a.jobLevel != null ? Math.floor(Number(a.jobLevel)) : 1
          , g = r >= 50 && !a.raiseUsed
          , f = o === "profile" ? " is-active" : ""
          , b = o === "market" ? " is-active" : ""
          , k = `
            <div class="phone-linkedin-panel phone-linkedin-panel--profile" ${o === "profile" ? "" : "hidden"}>
                <div class="phone-linkedin-scroll">
                    <section class="phone-linkedin-card phone-linkedin-card--hero">
                        <div class="phone-linkedin-row">
                            <span class="phone-linkedin-k">专业</span>
                            <span class="phone-linkedin-v">${c}</span>
                        </div>
                        <div class="phone-linkedin-row">
                            <span class="phone-linkedin-k">所在公司</span>
                            <span class="phone-linkedin-v">${d}</span>
                        </div>
                        <div class="phone-linkedin-row">
                            <span class="phone-linkedin-k">当前职位</span>
                            <span class="phone-linkedin-v">${u} <span class="phone-linkedin-lv">Lv.${p}</span></span>
                        </div>
                        <div class="phone-linkedin-row">
                            <span class="phone-linkedin-k">薪资水平（底薪档）</span>
                            <span class="phone-linkedin-v phone-linkedin-salary">${m}<span class="phone-linkedin-salary-unit">/月</span></span>
                        </div>
                    </section>
                    <section class="phone-linkedin-card phone-linkedin-card--meter">
                        <div class="phone-linkedin-prof-label">岗位熟练度：${r}/100</div>
                        <div class="phone-linkedin-track" role="progressbar" aria-valuenow="${r}" aria-valuemin="0" aria-valuemax="100">
                            <div class="phone-linkedin-fill" style="width:${l}%"></div>
                        </div>
                    </section>
                    <section class="phone-linkedin-actions phone-linkedin-actions--single">
                        <button type="button" class="phone-linkedin-action phone-linkedin-action--raise"
                            ${g ? "" : "disabled"} onclick="window.gameActions.linkedInRequestRaise()">
                            💰 申请加薪
                        </button>
                    </section>
                </div>
            </div>`
          , L = Ys(t).map(M => {
            const T = rs(t, M)
              , R = Ws(t, M)
              , E = a.id === M.id
              , D = !E && (a.baseJobId || a.id) === (M.baseJobId || M.id)
              , {low: $, high: K} = Js(M, t)
              , V = x(Ns($, K, n))
              , re = `<span class="linkedin-tier-pill ${Qn(M.tier)}">${x(M.tier)}</span>`
              , {probability: ee} = Fn(t, a, M)
              , ie = Math.round(ee * 100);
            let z = "";
            T ? z = '<p class="linkedin-job-card__visa">[F1：大一学年非暑假禁止校外打工；暑假 6–8 月除外]</p>' : R === "requirements" && (z = `<p class="linkedin-job-card__lock">🔒 ${x(M.lockHint || "条件不足")}</p>`);
            const J = !E && !T && !R;
            let Y = "";
            return E ? Y = '<button type="button" class="linkedin-job-apply linkedin-job-apply--current" disabled>当前岗位</button>' : J ? Y = `<button type="button" class="linkedin-job-apply" onclick="window.gameActions.applyForJob('${M.id}')">${D ? "同级跳槽" : "投递 / 跳槽"}</button>` : Y = '<button type="button" class="linkedin-job-apply" disabled>不可投递</button>',
            `
                    <article class="linkedin-job-card ${T ? "linkedin-job-card--locked" : ""}">
                        <div class="linkedin-job-card__row">
                            <div class="linkedin-job-card__left">
                                <h4 class="linkedin-job-card__title">${x(M.title)}</h4>
                                <div class="linkedin-job-card__sub">
                                    <span class="linkedin-job-card__company">${x(M.company)}</span>
                                    ${re}
                                </div>
                                <div class="linkedin-job-card__est">录用率 ${ie}% · 固定月薪 · 录用后可直接跳槽</div>
                            </div>
                            <div class="linkedin-job-card__salary" aria-label="预计月薪">${V}</div>
                        </div>
                        ${z}
                        <div class="linkedin-job-card__footer">${Y}</div>
                    </article>`
        }
        ).join("")
          , y = `
            <div class="phone-linkedin-panel phone-linkedin-panel--market" ${o === "market" ? "" : "hidden"}>
                <div class="phone-linkedin-board-head">
                    <p class="phone-linkedin-board-lead">根据你的专业筛选可投递职位；每次投递消耗 20 体力，录用概率见卡片预估。</p>
                </div>
                <div class="linkedin-job-board" role="list">${L}</div>
            </div>`;
        e.innerHTML = `
            <div class="phone-app-screen phone-linkedin phone-linkedin--shell">
                <div class="phone-app-topbar phone-linkedin-topbar phone-linkedin-topbar--tabs">
                    <span class="phone-app-brand">领英</span>
                </div>
                <div class="linkedin-app-tabs" role="tablist">
                    <button type="button" role="tab" class="linkedin-app-tab${f}" aria-selected="${o === "profile"}"
                        onclick="window.game.navigateLinkedInTab('profile')">我的档案</button>
                    <button type="button" role="tab" class="linkedin-app-tab${b}" aria-selected="${o === "market"}"
                        onclick="window.game.navigateLinkedInTab('market')">职位市场</button>
                </div>
                ${k}
                ${y}
            </div>
        `
    }
    renderResume(e) {
        var L;
        const t = this.gameState.state
          , s = t.region === "HKSG" ? "HK" : t.region
          , n = Math.min(4, Math.max(0, Number(t.gpa) || 0))
          , a = Math.min(100, Math.max(0, Math.round(Number((L = t.current_job) == null ? void 0 : L.proficiency) || 0)))
          , o = {
            dish: 0,
            tutor: 0,
            ta: 0,
            tech: 0,
            research: 0,
            ...t.work_counts || {}
        }
          , {dish: r, tutor: l, ta: c, tech: d, research: u} = o
          , h = x(Zn(s))
          , m = n.toFixed(2);
        let p = "";
        n >= 3.8 ? p = '<div class="resume-honors resume-honors--gold">🏆 Summa Cum Laude（最高荣誉毕业） &amp; Dean&apos;s List</div>' : n < 2.5 && (p = '<div class="resume-honors resume-honors--danger">⚠️ Academic Probation（处于学术警告状态）</div>');
        const g = [];
        if (d > 0 && g.push({
            title: "顶级科技大厂 — 核心研发 / 分析实习生",
            dur: `累计 · ${d} 段高强度冲刺`,
            desc: "参与核心业务逻辑迭代，优化底层数据链路，利用前沿技术为部门提升了显著的业务指标。"
        }),
        u > 0 && g.push({
            title: "大学前沿交叉实验室 — 研究助理 (Research Assistant)",
            dur: `${u} 个科研周期`,
            desc: `协助导师进行文献综述与数据清洗，参与了 ${u} 个高强度科研周期的项目攻坚。`
        }),
        c > 0) {
            const y = c * 50;
            g.push({
                title: "计算机 / 商学院 — 本科生助教 (Teaching Assistant)",
                dur: `累计 · ${c} 学期`,
                desc: `负责主导周度 Office Hour，批改 ${y}+ 份作业，具备极强的跨文化沟通能力。`
            })
        }
        l > 0 && g.push({
            title: "独立教育咨询顾问 (Freelance Educational Consultant)",
            dur: `累计 · ${l} 客户周期`,
            desc: "为高净值家庭提供 1v1 定制化培优方案，有效提升客户综合成绩。"
        }),
        r > 0 && g.push({
            title: "跨国餐饮集团 — 供应链与动线管理专员",
            dur: `累计 · ${r} 个班次`,
            desc: `在极高压的节奏下维持门店后厨系统的稳定运转，抗压能力极强，存活了 ${r} 个班次。`
        });
        const b = g.length > 0 ? g.map(y => `
                <div class="resume-exp-block">
                    <div class="resume-exp-head">
                        <h3 class="resume-exp-title">${x(y.title)}</h3>
                        <span class="resume-exp-dur">${x(y.dur)}</span>
                    </div>
                    <p class="resume-exp-desc">${x(y.desc)}</p>
                </div>`).join("") : '<p class="resume-exp-empty">该候选人目前履历一片空白，HR 可能会直接将此简历扔进垃圾桶…</p>'
          , k = ["Microsoft Office", "时间管理"];
        a >= 20 && k.push("数据分析", "跨部门沟通"),
        a >= 50 && k.push("Python/SQL", "敏捷开发", "商业洞察"),
        a >= 80 && k.push("深度学习 (AI/LLM)", "高并发架构", "全栈领导力");
        const P = k.map(y => `<span class="resume-skill-tag">${x(y)}</span>`).join("");
        e.innerHTML = `
            <div class="phone-app-screen phone-app-resume-wrap">
                <div class="phone-app-topbar phone-app-topbar--resume">
                    <span class="phone-app-brand">📄 Resume</span>
                </div>
                <div class="resume-scroll">
                    <article class="resume-a4 resume-a4--pdf" aria-label="简历">
                        <header class="resume-pdf-header">
                            <div class="resume-pdf-head-left">
                                <h1 class="resume-confidential-title">Confidential Candidate</h1>
                                <p class="resume-contact-line">📧 student@uni.edu | 📱 +1 (555) 019-8372</p>
                            </div>
                        </header>
                        <div class="resume-rule"></div>

                        <section class="resume-section resume-section--edu">
                            <h2 class="resume-sec-title">Education</h2>
                            <div class="resume-edu-row">
                                <span class="resume-edu-school">${h}</span>
                                <span class="resume-edu-gpa">累计 GPA: ${m} / 4.0</span>
                            </div>
                            ${p}
                        </section>

                        <section class="resume-section">
                            <h2 class="resume-sec-title">Experience</h2>
                            <div class="resume-exp-stack">${b}</div>
                        </section>

                        <section class="resume-section resume-section--skills">
                            <h2 class="resume-sec-title">Skills</h2>
                            <div class="resume-skill-tags">${P}</div>
                        </section>
                    </article>
                </div>
            </div>
        `
    }
    renderMap(e) {
        e.innerHTML = `
            <div class="phone-app-screen phone-app-map phone-app-map--holo">
                <div class="phone-app-topbar phone-app-topbar--map">
                    <span class="phone-app-brand">🗺️ 地图</span>
                </div>
                <p class="map-holo-tagline">全息投影台 · 立牌正对屏幕 · 点击进入</p>
                <div class="map-viewport">
                    <div class="map-floor">
                        <button type="button" class="map-pin map-pin--zillow" data-tutorial="map-housing" onclick="window.game.navigateSub('phone','housing')" title="租房网站">
                            <span class="map-pin-projection" aria-hidden="true">
                                <span class="map-pin-beam"></span>
                                <span class="map-pin-ground-dot"></span>
                            </span>
                            <span class="pin-content">
                                <span class="map-pin-emoji" aria-hidden="true">🏠</span>
                                <span class="map-pin-title">租房网站</span>
                            </span>
                        </button>
                        <button type="button" class="map-pin map-pin--hospital" data-tutorial="map-hospital" onclick="window.game.navigateSub('phone','hospital')" title="医院">
                            <span class="map-pin-projection" aria-hidden="true">
                                <span class="map-pin-beam"></span>
                                <span class="map-pin-ground-dot"></span>
                            </span>
                            <span class="pin-content">
                                <span class="map-pin-emoji" aria-hidden="true">🏥</span>
                                <span class="map-pin-title">医院</span>
                            </span>
                        </button>
                        <button type="button" class="map-pin map-pin--amazon" data-tutorial="map-shop" onclick="window.game.navigateSub('phone','shop')" title="商店">
                            <span class="map-pin-projection" aria-hidden="true">
                                <span class="map-pin-beam"></span>
                                <span class="map-pin-ground-dot"></span>
                            </span>
                            <span class="pin-content">
                                <span class="map-pin-emoji" aria-hidden="true">🛒</span>
                                <span class="map-pin-title">商店</span>
                            </span>
                        </button>
                        <button type="button" class="map-pin map-pin--exchange" data-tutorial="map-stocks" onclick="window.game.navigateSub('phone','stocks')" title="交易所">
                            <span class="map-pin-projection" aria-hidden="true">
                                <span class="map-pin-beam"></span>
                                <span class="map-pin-ground-dot"></span>
                            </span>
                            <span class="pin-content">
                                <span class="map-pin-emoji" aria-hidden="true">📈</span>
                                <span class="map-pin-title">交易所</span>
                            </span>
                        </button>
                    </div>
                </div>
            </div>
        `
    }
    renderMy(e) {
        const t = this.gameScreen.myInnerSub === "settings" ? "settings" : "codex";
        e.innerHTML = `
            <div class="phone-app-screen phone-app-my">
                <div class="phone-app-topbar"><span class="phone-app-brand">👤 我的</span></div>
                <div class="my-app-tabs" role="tablist">
                    <button type="button" role="tab" class="my-app-tab ${t === "codex" ? "my-app-tab--active" : ""}" onclick="window.game.openMyInner('codex')">🏆 成就图鉴</button>
                    <button type="button" role="tab" class="my-app-tab ${t === "settings" ? "my-app-tab--active" : ""}" onclick="window.game.openMyInner('settings')">⚙️ 设置</button>
                </div>
                <div class="my-app-panel-host" id="my-app-panel-host"></div>
            </div>`;
        const s = e.querySelector("#my-app-panel-host");
        t === "codex" ? this.renderGlobalAchievementsCodex(s) : this.renderSettings(s)
    }
    renderGlobalAchievementsCodex(e) {
        var o, r;
        const t = new Set(((r = (o = window.game) == null ? void 0 : o.globalAchievementSystem) == null ? void 0 : r.readUnlockedIds()) || [])
          , s = we.length
          , n = t.size
          , a = we.map(l => {
            const c = t.has(l.id)
              , d = wn(l)
              , u = c ? l.icon : "🔒"
              , h = x(l.name)
              , m = Number(l.rate)
              , p = Number.isFinite(m) ? `${m.toFixed(1)}% 用户达成` : "暂无统计"
              , g = c ? x(l.desc) : `条件：${x(l.condition_hint || l.desc || "未配置")}`;
            return `
                <div class="${c ? `global-ach-card global-ach-card--unlocked global-ach-card--${d.className}` : `global-ach-card global-ach-card--locked global-ach-card--${d.className}`}">
                    <div class="global-ach-rarity global-ach-rarity--${d.className}">${d.label}</div>
                    <span class="global-ach-icon" aria-hidden="true">${u}</span>
                    <div class="global-ach-name">${h}</div>
                    <div class="global-ach-rate">${x(p)}</div>
                    <p class="global-ach-desc">${g}</p>
                </div>`
        }
        ).join("");
        e.innerHTML = `
            <div class="global-ach-codex">
                <p class="global-ach-progress-line">已解锁 <strong>${n}</strong> / ${s}</p>
                <div class="global-ach-grid">${a}</div>
            </div>`
    }
    renderSocial(e) {
        const s = this.gameState.state.socialFeed || []
          , n = s.length === 0 ? '<div class="empty-placeholder">暂无动态</div>' : s.map(a => this.renderFeedPost(a)).join("");
        e.innerHTML = `
            <div class="phone-app-screen phone-app-wechat">
                <div class="phone-app-topbar">
                    <span class="phone-app-brand">💬 朋友圈</span>
                </div>
                <div class="feed-container phone-feed-scroll">
                    ${n}
                </div>
            </div>
        `
    }
    renderFeedPost(e) {
        const t = e.author === "me" ? "我" : e.author
          , s = e.author === "me" ? "🧑‍🎓" : "👤"
          , n = e.likes && e.likes.length ? `<div class="feed-post-likes">❤️ ${e.likes.length} 人点赞</div>` : ""
          , a = e.comments && e.comments.length ? e.comments.map(o => `<div class="feed-post-comment"><span class="comment-author">${o.author}:</span> ${o.text}</div>`).join("") : "";
        return `
            <article class="feed-post-card" data-id="${e.id}">
                <div class="feed-post-header">
                    <span class="feed-post-avatar">${s}</span>
                    <div class="feed-post-meta">
                        <span class="feed-post-name">${t}</span>
                        <span class="feed-post-time">${e.timeAgo || "刚刚"}</span>
                    </div>
                </div>
                <div class="feed-post-body">${e.content || ""}</div>
                ${n}
                <div class="feed-post-comments">${a}</div>
            </article>
        `
    }
    renderHospital(e) {
        const t = this.gameState.state
          , s = typeof window < "u" && window.game ? window.game.diseaseSystem : null
          , n = t.region;
        let a = "";
        t.diseases.length === 0 ? a = '<div class="hospital-empty">身体健康，无需治疗</div>' : (a += `<div class="hospital-stat-strip">
                <span class="hospital-stat-label">患病</span>
                <span class="hospital-stat-val">${t.diseases.length}</span>
            </div>`,
        a += '<div class="hospital-disease-grid">',
        t.diseases.forEach(o => {
            const r = ue[o];
            if (!r)
                return;
            const l = s ? s.curedDiseases.includes(o) : !1
              , c = w(A(r.cost * 1e3, n), n)
              , d = r.severity ? r.severity.toUpperCase() : ""
              , u = (r.cure * 100).toFixed(0)
              , h = r.cure > .8 ? "hospital-cure--hi" : r.cure > .5 ? "hospital-cure--mid" : "hospital-cure--low";
            a += `
                    <article class="hospital-disease-card ${l ? "hospital-disease-card--cured" : ""}">
                        <div class="hospital-card-head">
                            <span class="hospital-card-name">${l ? "✅ " : "❌ "}${r.name}</span>
                            ${d ? `<span class="hospital-card-sev">${d}</span>` : ""}
                        </div>
                        <p class="hospital-card-desc">${r.desc}</p>
                        <div class="hospital-card-meta">
                            <span class="hospital-meta-label">治愈率</span>
                            <span class="hospital-meta-pct ${h}">${u}%</span>
                        </div>
                        <div class="hospital-card-bottom">
                            <span class="hospital-card-cost">${c}</span>
                            <button type="button" class="hospital-card-cure" onclick="window.diseaseSystem.cure('${o}')">${l ? "已愈" : "治疗"}</button>
                        </div>
                    </article>`
        }
        ),
        a += "</div>",
        a += '<button type="button" class="hospital-cure-all" onclick="window.diseaseSystem.cureAll()">全部治疗</button>'),
        e.innerHTML = `
            <div class="phone-app-screen phone-app-hospital">
                <div class="phone-app-topbar"><span class="phone-app-brand">🏥 医院</span></div>
                <div class="hospital-app-body">${a}</div>
            </div>`
    }
    renderAchievements(e) {
        window.game && window.game.achievementScreen ? window.game.achievementScreen.render(e) : e.innerHTML = '<div class="empty-placeholder">成就系统加载中...</div>'
    }
    renderStatistics(e) {
        window.game && window.game.statisticsScreen ? window.game.statisticsScreen.render(e) : e.innerHTML = '<div class="empty-placeholder">统计系统加载中...</div>'
    }
    renderSettings(e) {
        window.game && window.game.settingsScreen ? window.game.settingsScreen.render(e) : e.innerHTML = '<div class="empty-placeholder">设置系统加载中...</div>'
    }
    renderStocks(e) {
        window.game && window.game.stockScreen ? window.game.stockScreen.render(e) : e.innerHTML = '<div class="empty-placeholder">交易所加载中...</div>'
    }
    renderDating(e) {
        if (window.game && window.game.datingScreen) {
            e.innerHTML = '<div class="phone-app-screen phone-app-dating-host"></div>';
            const t = e.querySelector(".phone-app-dating-host");
            window.game.datingScreen.render(t)
        } else
            e.innerHTML = '<div class="empty-placeholder">恋爱系统加载中...</div>'
    }
    renderSkills(e) {
        window.game && window.game.skillTreeScreen ? window.game.skillTreeScreen.render(e) : e.innerHTML = '<div class="empty-placeholder">技能树系统加载中...</div>'
    }
    renderHousing(e) {
        window.game && window.game.housingScreen ? window.game.housingScreen.render(e) : e.innerHTML = '<div class="empty-placeholder">租房系统加载中...</div>'
    }
    renderContacts(e) {
        const t = this.gameState.state
          , s = Math.round(t.rel_parents ?? 0)
          , n = Math.round(t.rel_prof ?? 0);
        e.innerHTML = `
            <div class="phone-app-screen phone-app-contacts">
                <div class="phone-app-topbar"><span class="phone-app-brand">📞 通讯录</span></div>
                <div class="contacts-card-grid">
                    <div class="contacts-big-card">
                        <div class="contacts-avatar contacts-avatar--parents">👨‍👩</div>
                        <div class="contacts-card-main">
                            <div class="contacts-name">父母</div>
                            <div class="contacts-rel">亲密度 <strong>${s}</strong><span class="rel-max">/100</span></div>
                            <p class="contacts-hint">视频聊天维系关系；关系好时有概率收到生活费。关系过低可能断供。</p>
                            <div class="contacts-actions">
                                <button type="button" class="btn-contact-primary" onclick="window.game.socialActions.callParents()">📞 视频通话</button>
                                <span class="contacts-micro">通话中有机会让父母打钱</span>
                            </div>
                        </div>
                    </div>
                    <div class="contacts-big-card">
                        <div class="contacts-avatar contacts-avatar--prof">🎓</div>
                        <div class="contacts-card-main">
                            <div class="contacts-name">导师</div>
                            <div class="contacts-rel">关系 <strong>${n}</strong><span class="rel-max">/100</span></div>
                            <p class="contacts-hint">约 Office Hour 提升关系，利于学业与推荐信。</p>
                            <div class="contacts-actions">
                                <button type="button" class="btn-contact-secondary" onclick="window.game.socialActions.interactWithProf()">🎓 约 Office Hour</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `
    }
    renderRelations(e) {
        this.renderContacts(e)
    }
}
class oi {
    constructor() {
        this.modalElement = null,
        this._deferredModalQueue = [],
        this._deferredDrainActive = !1,
        this._deferFlushUntilAfterClose = !1,
        this.init()
    }
    _shouldDeferModal(e={}) {
        if (e && e.force || typeof window > "u")
            return !1;
        const t = !!window.__IMMERSIVE_TUTORIAL_ACTIVE__
          , s = !!document.querySelector(".driver-overlay, .driver-popover, .driver-active-element") || document.body.classList.contains("driver-active");
        return t || s
    }
    flushDeferredAfterTutorial() {
        if (!this._deferredModalQueue.length)
            return;
        this._deferredDrainActive = !0;
        const e = this._deferredModalQueue.shift();
        setTimeout( () => this._playDeferredEntry(e), 80)
    }
    _playDeferredEntry(e) {
        if (e) {
            if (typeof e.deferWhen == "function") {
                let t = !0;
                try {
                    t = !!e.deferWhen()
                } catch {
                    t = !0
                }
                if (!t) {
                    if (this._deferredModalQueue.length > 0) {
                        const s = this._deferredModalQueue.shift();
                        setTimeout( () => this._playDeferredEntry(s), 30)
                    } else
                        this._deferredDrainActive && (this._deferredDrainActive = !1);
                    return
                }
            }
            e.type === "custom" ? this.showCustom(e.title, e.html, e.actions, e.boxVariant, {
                force: !0
            }) : e.type === "simple" && this.show(e.title, e.text, e.onConfirm, {
                force: !0
            })
        }
    }
    init() {
        document.body.insertAdjacentHTML("beforeend", `
            <div class="modal-mask" id="modal">
                <div class="modal-box">
                    <div class="modal-h" id="m-title">标题</div>
                    <div class="modal-p" id="m-text">内容</div>
                    <div id="m-custom-content"></div>
                    <div id="m-acts"></div>
                </div>
            </div>
        `),
        this.modalElement = document.getElementById("modal")
    }
    showCustom(e, t, s=[], n=null, a={}) {
        if (this._shouldDeferModal(a)) {
            this._deferredModalQueue.push({
                type: "custom",
                title: e,
                html: t,
                actions: s,
                boxVariant: n,
                deferWhen: a.deferWhen
            });
            return
        }
        ze();
        const o = this.getBox();
        o && (o.classList.remove("type-positive", "type-negative", "type-neutral", "type-offer-gold", "type-ach-common", "type-ach-rare", "type-ach-legendary"),
        n && o.classList.add(n)),
        document.getElementById("m-title").innerHTML = e,
        document.getElementById("m-text").innerHTML = "",
        document.getElementById("m-custom-content").innerHTML = t;
        const r = document.getElementById("m-acts");
        r.innerHTML = "",
        r.classList.toggle("modal-acts--stack", s.length > 1),
        s.forEach(l => {
            const c = document.createElement("button");
            c.type = "button",
            c.className = "modal-btn" + (l.secondary ? " secondary" : ""),
            c.innerHTML = l.text;
            let d = !1;
            const u = h => {
                d || (d = !0,
                h && typeof h.preventDefault == "function" && h.preventDefault(),
                l.cb && l.cb(),
                l.keepOpen || this.close())
            }
            ;
            c.onclick = u,
            c.addEventListener("pointerdown", u),
            c.addEventListener("touchstart", u, {
                passive: !1
            }),
            c.addEventListener("touchend", u, {
                passive: !1
            }),
            c.addEventListener("pointerup", u),
            r.appendChild(c)
        }
        ),
        a.revealPhone ? this.modalElement.classList.add("modal-mask--reveal-phone") : this.modalElement.classList.remove("modal-mask--reveal-phone"),
        this.modalElement.style.display = "flex",
        typeof document < "u" && document.body.classList.add("modal-open")
    }
    show(e, t, s=null, n={}) {
        if (this._shouldDeferModal(n)) {
            this._deferredModalQueue.push({
                type: "simple",
                title: e,
                text: t,
                onConfirm: s
            });
            return
        }
        ze(),
        document.getElementById("m-title").innerHTML = e,
        document.getElementById("m-text").innerHTML = t,
        document.getElementById("m-custom-content").innerHTML = "",
        document.getElementById("m-acts").innerHTML = `
            <button type="button" class="modal-btn">确定</button>
        `,
        this.modalElement.style.display = "flex",
        typeof document < "u" && document.body.classList.add("modal-open");
        const a = document.querySelector("#m-acts .modal-btn");
        a && s ? a.onclick = () => {
            s(),
            this.close()
        }
        : a && (a.onclick = () => this.close())
    }
    close() {
        const e = this.getBox();
        if (e && e.classList.remove("type-positive", "type-negative", "type-neutral", "type-offer-gold", "type-ach-common", "type-ach-rare", "type-ach-legendary"),
        this.modalElement.classList.remove("modal-mask--reveal-phone"),
        this.modalElement.style.display = "none",
        typeof document < "u" && document.body.classList.remove("modal-open"),
        this._deferFlushUntilAfterClose) {
            this._deferFlushUntilAfterClose = !1,
            this.flushDeferredAfterTutorial();
            return
        }
        if (this._deferredDrainActive && this._deferredModalQueue.length > 0) {
            const t = this._deferredModalQueue.shift();
            setTimeout( () => this._playDeferredEntry(t), 80)
        }
        this._deferredDrainActive && this._deferredModalQueue.length === 0 && (this._deferredDrainActive = !1)
    }
    getBox() {
        return this.modalElement ? this.modalElement.querySelector(".modal-box") : null
    }
    showEventModal(e, t, s, n={}, a=null, o=null) {
        const r = `type-${s || "neutral"}`
          , l = (h, m) => {
            if (h == null)
                return "";
            const p = Number(h);
            if (p === 0)
                return "";
            const g = p > 0;
            return `<span class="effect-tag ${g ? "eff-green" : "eff-red"}">${m} ${g ? "+" : ""}${p}</span>`
        }
          , c = [l(n.money, "💰"), l(n.mental, "🧠"), l(n.health, "❤️"), l(n.gpa, "🎓")].filter(Boolean).join("")
          , d = `
            <div class="story-text">${t}</div>
            ${c ? `<div style="margin-top:10px;">${c}</div>` : ""}
        `
          , u = () => {
            typeof a == "function" && a()
        }
        ;
        if (o && o.trim()) {
            this.showCustom(e, `<div class="story-text">${o.trim()}</div>`, [{
                text: "展开讲讲",
                cb: () => {
                    this.close(),
                    setTimeout( () => {
                        this.showEventModal(e, t, s, n, a)
                    }
                    , 100)
                }
            }], r);
            return
        }
        this.showCustom(e, d, [{
            text: "我接受命运",
            cb: () => {
                u()
            }
        }], r)
    }
}
function na(i) {
    const e = String(i || "");
    return e === "death" ? "red" : e === "dropout" ? "slate" : ["ending_elite_overlord", "ending_startup_legend", "ending_trust_fund_god"].includes(e) ? "gold" : ["ending_love_survival", "ending_au_local_marriage", "ending_marriage_escape", "ending_return_home_couple"].includes(e) ? "rose" : ["ending_bankrupt_return", "ending_deported_cheater", "ending_illegal_shadow"].includes(e) ? "warning" : e === "ending_fallback_mediocre" ? "muted" : "blue"
}
function ne(i) {
    return i == null ? "" : String(i).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
}
class ri {
    constructor(e) {
        this.onRestart = e,
        this.root = null,
        this._ensureDom()
    }
    _ensureDom() {
        if (document.getElementById("ending-screen")) {
            this.root = document.getElementById("ending-screen");
            return
        }
        document.body.insertAdjacentHTML("beforeend", `
            <div id="ending-screen" class="ending-screen" aria-hidden="true" hidden>
                <div class="ending-screen__backdrop"></div>
                <div class="ending-screen__scroll">
                    <article class="ending-card" id="ending-card-root"></article>
                </div>
            </div>`),
        this.root = document.getElementById("ending-screen")
    }
    show(e) {
        var R;
        const {ending: t, report: s, gameOverReason: n, globalResult: a, state: o, outcome: r} = e
          , l = na(t.type)
          , c = ((R = I[o.region]) == null ? void 0 : R.name) || "未知地区"
          , d = es(o.currentClass || "refugee")
          , u = o.partner ? `${ne(o.partner.name || "伴侣")}（${ne(o.partner.stage || "恋爱中")}）` : "单身"
          , h = ne(s.summary || "")
          , m = ne(s.future || "")
          , p = ne(s.title || "结局")
          , g = a.newlyUnlockedDetails || []
          , f = a.totalUnlocked ?? 0
          , b = a.totalDefined ?? 0
          , k = g.length > 0 ? g.map(E => `
                <div class="ending-badge">
                    <span class="ending-badge__icon">${E.icon}</span>
                    <span class="ending-badge__name">${ne(E.name)}</span>
                </div>`).join("") : ""
          , P = n ? `<p class="ending-hero__reason">${ne(n)}</p>` : "";
        let L = "";
        r === "graduation" ? L = '<p class="ending-run-banner ending-run-banner--grad">恭喜你走完了这段留学旅程，四年时光顺利收官。</p>' : r === "forced_end" && (L = '<p class="ending-run-banner ending-run-banner--forced">很遗憾，你的留学生涯在这里被迫画上句点。</p>');
        const y = document.getElementById("ending-card-root");
        if (!y || !this.root)
            return;
        const M = r === "graduation" ? " ending-card--run-grad" : r === "forced_end" ? " ending-card--run-forced" : "";
        y.className = `ending-card ending-card--tier-${l}${M}`,
        y.innerHTML = `
            <header class="ending-hero">
                <p class="ending-hero__label">人生报告 · ${ne(c)}</p>
                ${L}
                <h1 class="ending-hero__title">${p}</h1>
                ${P}
            </header>

            <section class="ending-quote">
                <div class="ending-quote__mark">“</div>
                <div class="ending-quote__body">
                    <p class="ending-quote__summary">${h}</p>
                    <div class="ending-quote__divider"></div>
                    <p class="ending-quote__future">${m}</p>
                </div>
            </section>

            <section class="ending-stats">
                <div class="ending-stat">
                    <span class="ending-stat__k">最终 GPA</span>
                    <span class="ending-stat__v">${(Number(o.gpa) || 0).toFixed(2)}</span>
                </div>
                <div class="ending-stat">
                    <span class="ending-stat__k">最终存款</span>
                    <span class="ending-stat__v">${ne(w(o.money, o.region))}</span>
                </div>
                <div class="ending-stat">
                    <span class="ending-stat__k">阶级</span>
                    <span class="ending-stat__v" style="color:${d.color}">${ne(d.title)}</span>
                </div>
                <div class="ending-stat">
                    <span class="ending-stat__k">伴侣</span>
                    <span class="ending-stat__v">${u}</span>
                </div>
            </section>

            <section class="ending-ach">
                <h2 class="ending-ach__title">🏆 本局解锁成就 <span class="ending-ach__progress">(总进度: ${f} / ${b})</span></h2>
                <div class="ending-ach__grid">
                    ${g.length > 0 ? k : '<p class="ending-ach__empty">本局平平无奇，未解锁新成就</p>'}
                </div>
            </section>

            <div class="ending-card__spacer" aria-hidden="true"></div>

            <footer class="ending-footer">
                <button type="button" class="ending-btn-rebirth" id="ending-btn-rebirth">🔄 重新投胎（再玩一次）</button>
            </footer>
        `;
        const T = document.getElementById("ending-btn-rebirth");
        T && (T.onclick = () => {
            Ve(),
            this.onRestart && this.onRestart()
        }
        ),
        this.root.hidden = !1,
        this.root.setAttribute("aria-hidden", "false"),
        this.root.classList.add("ending-screen--visible"),
        document.body.classList.add("ending-screen-open"),
        Ve()
    }
    hide() {
        this.root && (this.root.classList.remove("ending-screen--visible"),
        this.root.hidden = !0,
        this.root.setAttribute("aria-hidden", "true"),
        document.body.classList.remove("ending-screen-open"))
    }
}
const aa = te.tuitionMonth
  , fe = [{
    id: "survival",
    badge: "生存",
    title: "1. 核心生存法则",
    lead: "活下去，比一切都重要。",
    icon: "🛡️",
    figure: "💰❤️",
    paragraphs: ["左侧是你的**生命线**：体力、心态、健康与资金状态集中展示；下方「危机预警」会在学费、健康、破产风险等吃紧时亮红灯。", "**资金长期崩盘**会触发破产流程；**健康归零**将直接结束本局人生——两边都不能放任不管。", `每年 **${aa} 月**会强制结算一笔**高额学费**（地区规则可能略有差异，以游戏内提示为准）。请务必从年初、甚至从落地第一个月起就规划现金流，别等到账单日才凑钱。`],
    tips: ["先保证「能付房租 + 能交学费」再考虑高消费", "多看左侧预警，比刷朋友圈更保命"]
}, {
    id: "academic",
    badge: "学业",
    title: "2. 学业与期末（防挂科）",
    lead: "本学期 GPA（百分制）会自然回落，期末季要拼命拉分。",
    icon: "📚",
    figure: "🌙📖",
    paragraphs: ["平时每月**本学期 GPA（百分制）**会**自然下滑**——不是点一次「复习」就一劳永逸。持续用学术行动拉高分数，才能稳住累计 GPA 走势。", "在 **11、12、4、5 月**的期末季，请回到主界面 **「学术」** 分类，优先使用 **「通宵复习」** 等高强度选项把本学期分数拉满；否则期末结算时很容易**挂科 / 劝退风险飙升**。", "考试月若躺平，日志和结算界面都会给你「诚实」的反馈——别赌运气。"],
    tips: ["期末季看到「学术」里的通宵复习，别手软", "心态过低时先躺平或结束本月，再冲刺"]
}, {
    id: "linkedin",
    badge: "打工",
    title: "3. 领英求职与打工",
    lead: "大一洗盘，大二投岗；熟练度够了再谈加薪。",
    icon: "💼",
    figure: "in",
    paragraphs: ["**大一**受签证与规则限制，通常只能在主界面 **「日常 → 去上班」** 从基础岗位做起（例如餐饮后厨），先养活自己、熟悉节奏。", "进入 **大二及以后**，请打开右侧手机里的 **「领英」** App：在职位市场里投递更高薪、更对口的岗位；入职后通过反复上班积累 **岗位熟练度**。", "熟练度达到要求后，可在领英档案页申请 **加薪**——这是你「涨薪」的主要正规途径。"],
    tips: ["黑工/基础岗是过渡，别一辈子洗盘", "投岗前看一眼 GPA 与履历解锁条件"]
}, {
    id: "map",
    badge: "生活",
    title: "4. 虚拟手机与地图",
    lead: "租房、购物、看病——都在手机里完成。",
    icon: "🗺️",
    figure: "🏠🛒",
    paragraphs: ["右侧是一台完整的 **虚拟手机**：主屏上有 **地图、领英、Tinder、简历、朋友圈、通讯录**；底部可打开 **留学指南** 与 **我的**。", "在 **地图** App 中可进入 **租房网站、商店、医院、交易所**：更好的房子能**自动提升心态回复**、降低生活压力；一直挤在地下室或最廉价房源，心态会很难撑到期末。", "道具与医疗消费都要花钱——记得与第 1 条的现金流规划一起看。"],
    tips: ["尽早搬离条件过差的住房", "生病别硬扛，医院在「地图」里"]
}];
function Ft(i) {
    return String(i || "").replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
}
class li {
    constructor(e) {
        Te(this, "_onKeyDown", e => {
            this.isOpen && (e.key === "Escape" ? (e.preventDefault(),
            this.finish()) : e.key === "ArrowRight" ? (e.preventDefault(),
            this.currentIndex < fe.length - 1 ? this._step(1) : this.finish()) : e.key === "ArrowLeft" && (e.preventDefault(),
            this._step(-1)))
        }
        );
        this.gameState = e,
        this.currentIndex = 0,
        this.overlay = null,
        this.track = null,
        this.mode = "app",
        this.isOpen = !1
    }
    showAutoIfNeeded() {}
    show(e={}) {
        if (this.isOpen)
            return;
        this.mode = e.mode === "auto" ? "auto" : "app",
        this.currentIndex = 0,
        ze(),
        this.isOpen = !0,
        this.overlay = document.createElement("div"),
        this.overlay.className = "guide-modal-overlay",
        this.overlay.setAttribute("role", "dialog"),
        this.overlay.setAttribute("aria-modal", "true"),
        this.overlay.setAttribute("aria-label", "留学指南");
        const t = this.mode === "auto" ? '<p class="guide-modal-auto-hint">🎓 新的人生开局：建议先完整阅读一遍指南。</p>' : "";
        this.overlay.innerHTML = `
            <div class="guide-modal" id="guide-modal-box">
                <div class="guide-modal-glow" aria-hidden="true"></div>
                <header class="guide-modal-header">
                    <div class="guide-modal-header-icon" aria-hidden="true">💡</div>
                    <div class="guide-modal-header-text">
                        <h2 class="guide-modal-title">留学指南</h2>
                        <p class="guide-modal-sub">Study Abroad Survival · 内置攻略</p>
                    </div>
                    <button type="button" class="guide-modal-close" id="guide-modal-close" aria-label="关闭">✕</button>
                </header>
                ${t}
                <div class="guide-modal-viewport">
                    <div class="guide-modal-track" id="guide-modal-track">
                        ${fe.map( (n, a) => this._renderSectionHtml(n, a)).join("")}
                    </div>
                </div>
                <footer class="guide-modal-footer">
                    <div class="guide-modal-dots" id="guide-modal-dots"></div>
                    <div class="guide-modal-nav">
                        <button type="button" class="guide-modal-btn guide-modal-btn--ghost" id="guide-modal-prev">← 上一篇</button>
                        <button type="button" class="guide-modal-btn guide-modal-btn--primary" id="guide-modal-next">下一篇 →</button>
                    </div>
                </footer>
            </div>
        `,
        (document.getElementById("app") || document.body).appendChild(this.overlay),
        this.track = document.getElementById("guide-modal-track"),
        this._bindScrollSync(),
        this._bindNav(),
        this._bindClose(),
        this._updateDots(),
        this._scrollToIndex(0, !1),
        document.addEventListener("keydown", this._onKeyDown)
    }
    _renderSectionHtml(e, t) {
        const s = e.paragraphs.map(r => `<p class="guide-modal-p">${Ft(r)}</p>`).join("")
          , n = e.tips ? `<ul class="guide-modal-tips">${e.tips.map(r => `<li>${Ft(r)}</li>`).join("")}</ul>` : ""
          , a = e.badge ? `<span class="guide-modal-badge">${e.badge}</span>` : ""
          , o = e.figure ? `<div class="guide-modal-figure" aria-hidden="true">${e.figure}</div>` : "";
        return `
            <section class="guide-modal-page" data-index="${t}" aria-label="${e.title}">
                <div class="guide-modal-page-inner">
                    <div class="guide-modal-page-head">
                        ${a}
                        <span class="guide-modal-emoji">${e.icon}</span>
                        <h3 class="guide-modal-page-title">${e.title}</h3>
                        <p class="guide-modal-lead">${e.lead}</p>
                    </div>
                    ${o}
                    <div class="guide-modal-body">${s}</div>
                    ${n}
                </div>
            </section>
        `
    }
    _bindScrollSync() {
        this.track && this.track.addEventListener("scroll", () => {
            const e = this.track.clientWidth;
            if (e <= 0)
                return;
            const t = Math.round(this.track.scrollLeft / e);
            t !== this.currentIndex && t >= 0 && t < fe.length && (this.currentIndex = t,
            this._updateDots(),
            this._updateNavButtons())
        }
        )
    }
    _bindNav() {
        const e = document.getElementById("guide-modal-prev")
          , t = document.getElementById("guide-modal-next");
        e && (e.onclick = () => this._step(-1)),
        t && (t.onclick = () => {
            this.currentIndex >= fe.length - 1 ? this.finish() : this._step(1)
        }
        ),
        this._updateNavButtons()
    }
    _bindClose() {
        const e = document.getElementById("guide-modal-close");
        e && (e.onclick = () => this.finish()),
        this.overlay && this.overlay.addEventListener("click", t => {
            t.target === this.overlay && this.finish()
        }
        )
    }
    _step(e) {
        const t = Math.min(fe.length - 1, Math.max(0, this.currentIndex + e));
        this._scrollToIndex(t, !0)
    }
    _scrollToIndex(e, t) {
        if (!this.track)
            return;
        const s = this.track.clientWidth;
        this.currentIndex = e,
        this.track.scrollTo({
            left: e * s,
            behavior: t ? "smooth" : "auto"
        }),
        this._updateDots(),
        this._updateNavButtons()
    }
    _updateDots() {
        const e = document.getElementById("guide-modal-dots");
        e && (e.innerHTML = fe.map( (t, s) => `<button type="button" class="guide-modal-dot ${s === this.currentIndex ? "is-active" : ""}" data-i="${s}" aria-label="第 ${s + 1} 篇"></button>`).join(""),
        e.querySelectorAll(".guide-modal-dot").forEach(t => {
            t.onclick = () => {
                const s = Number(t.getAttribute("data-i"));
                Number.isNaN(s) || this._scrollToIndex(s, !0)
            }
        }
        ))
    }
    _updateNavButtons() {
        const e = document.getElementById("guide-modal-prev")
          , t = document.getElementById("guide-modal-next")
          , s = this.currentIndex >= fe.length - 1;
        e && (e.style.visibility = this.currentIndex <= 0 ? "hidden" : "visible"),
        t && (t.textContent = s ? "知道了 ✓" : "下一篇 →")
    }
    finish() {
        this.isOpen && (this.mode === "auto" && this.gameState && this.gameState.update({
            guideAutoShownAtStart: !0
        }),
        document.removeEventListener("keydown", this._onKeyDown),
        this.overlay && this.overlay.parentNode && this.overlay.parentNode.removeChild(this.overlay),
        this.overlay = null,
        this.track = null,
        this.isOpen = !1)
    }
}
const De = {
    common: {
        label: "普通",
        cls: "common",
        modalClass: "type-ach-common"
    },
    rare: {
        label: "稀有",
        cls: "rare",
        modalClass: "type-ach-rare"
    },
    legendary: {
        label: "传说",
        cls: "legendary",
        modalClass: "type-ach-legendary"
    }
};
function ye(i) {
    return String(i ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#39;")
}
class ci {
    constructor(e, t) {
        this.gameState = e,
        this.achievementSystem = t
    }
    render(e) {
        const t = this.achievementSystem.getAllAchievements()
          , s = new Set(this.achievementSystem.getUnlockedAchievements())
          , n = this._groupByType(t);
        e.innerHTML = `
            <div class="achievement-screen">
                <div class="achievement-header">
                    <h2>🏆 本局成就</h2>
                    <div class="achievement-progress">
                        <span>解锁进度：${s.size} / ${t.length}</span>
                        <div class="progress-bar">
                            <div class="progress-fill" style="width: ${t.length ? s.size / t.length * 100 : 0}%"></div>
                        </div>
                    </div>
                </div>
                ${Object.entries(n).map( ([a,o]) => `
                            <div class="achievement-section">
                                <h3 class="achievement-section-title">${this._getTypeName(a)}</h3>
                                <div class="achievement-grid">
                                    ${o.map(r => this._renderAchievement(r, s.has(r.id))).join("")}
                                </div>
                            </div>
                        `).join("")}
            </div>
        `,
        this._addEventListeners()
    }
    _renderAchievement(e, t) {
        const s = De[e.rarity || "common"] || De.common
          , n = this._getAchievementIcon(e.type)
          , a = t ? e.name : `${e.name}（未解锁）`
          , o = Number(e.rate)
          , r = Number.isFinite(o) ? `${o.toFixed(1)}% 用户达成` : "暂无统计"
          , l = t ? e.desc : `条件：${e.condition_hint || e.desc || "未配置"}`;
        return `
            <div class="${`achievement-card achievement-card--${s.cls} ${t ? "unlocked-glow" : "locked"}`}" data-ach-id="${e.id}">
                <div class="achievement-icon">${n}</div>
                <div class="achievement-info">
                    <div class="achievement-name">${ye(a)}</div>
                    <div class="achievement-desc">${ye(l)}</div>
                    <div class="achievement-type">${s.label} · ${ye(r)}</div>
                </div>
                ${t ? '<div class="achievement-checkmark">✓</div>' : '<div class="achievement-lock">🔒</div>'}
            </div>
        `
    }
    _groupByType(e) {
        return e.reduce( (t, s) => (t[s.type] || (t[s.type] = []),
        t[s.type].push(s),
        t), {})
    }
    _getTypeName(e) {
        return {
            survival: "🌊 生存类",
            collection: "🧩 收集类",
            value: "📊 数值类",
            event: "🎲 事件类"
        }[e] || e
    }
    _getAchievementIcon(e) {
        return {
            survival: "🌊",
            collection: "🧩",
            value: "📊",
            event: "🎲"
        }[e] || "🏆"
    }
    _addEventListeners() {
        document.querySelectorAll(".achievement-card").forEach(e => {
            e.addEventListener("click", () => {
                const t = e.dataset.achId
                  , s = this.achievementSystem.getAchievement(t);
                s && this._showAchievementDetail(s)
            }
            )
        }
        )
    }
    _showAchievementDetail(e) {
        const t = this.achievementSystem.isUnlocked(e.id);
        if (!window.modalInstance)
            return;
        const s = De[e.rarity || "common"] || De.common
          , n = Number(e.rate)
          , a = Number.isFinite(n) ? `${n.toFixed(1)}% 用户达成` : "暂无统计";
        window.modalInstance.showCustom(`${this._getAchievementIcon(e.type)} ${ye(e.name)}`, `
                <div style="text-align:left;color:#cbd5e1;">
                    <div style="margin-bottom:12px;"><strong>描述：</strong>${ye(e.desc)}</div>
                    <div style="margin-bottom:12px;"><strong>难度：</strong>${s.label}</div>
                    <div style="margin-bottom:12px;"><strong>达成率：</strong>${ye(a)}</div>
                    <div style="margin-bottom:12px;"><strong>状态：</strong>${t ? "已解锁" : "未解锁"}</div>
                    ${t ? "" : `<div><strong>达成条件：</strong>${ye(e.condition_hint || e.desc || "未配置")}</div>`}
                </div>
            `, [{
            text: "关闭",
            cb: () => {}
        }], s.modalClass)
    }
    refresh() {
        const e = document.getElementById("app");
        e && this.render(e)
    }
}
const Ts = document.createElement("style");
Ts.textContent = `
.achievement-screen { padding: 20px; max-width: 1200px; margin: 0 auto; }
.achievement-header { text-align: center; margin-bottom: 24px; }
.achievement-header h2 { font-size: 28px; margin-bottom: 12px; color: var(--accent); }
.achievement-progress { max-width: 460px; margin: 0 auto; }
.achievement-progress span { display: block; margin-bottom: 8px; color: #94a3b8; }
.achievement-section { margin-bottom: 22px; }
.achievement-section-title { margin-bottom: 10px; color: #e2e8f0; border-bottom: 1px solid #334155; padding-bottom: 8px; }
.achievement-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 12px; }
.achievement-card { background: #1e293b; border: 1px solid #334155; border-radius: 12px; padding: 14px; display: flex; gap: 10px; align-items: center; cursor: pointer; }
.achievement-card.locked { opacity: 0.7; }
.achievement-card.unlocked-glow { box-shadow: 0 0 12px rgba(99,102,241,0.3); border-color: #6366f1; }
.achievement-card--rare.unlocked-glow { box-shadow: 0 0 18px rgba(56,189,248,0.32); border-color: #38bdf8; }
.achievement-card--legendary.unlocked-glow { box-shadow: 0 0 22px rgba(251,191,36,0.36); border-color: #fbbf24; }
.achievement-icon { width: 44px; height: 44px; border-radius: 10px; background: #0f172a; display: grid; place-items: center; font-size: 24px; }
.achievement-info { flex: 1; min-width: 0; }
.achievement-name { color: #e2e8f0; font-weight: 700; margin-bottom: 4px; }
.achievement-desc { color: #94a3b8; font-size: 13px; line-height: 1.4; }
.achievement-type { color: #a5b4fc; font-size: 11px; margin-top: 6px; font-weight: 800; }
.achievement-checkmark { color: #4ade80; font-size: 22px; }
.achievement-lock { color: #64748b; font-size: 18px; }
`;
document.head.appendChild(Ts);
class di {
    constructor(e) {
        this.statisticsSystem = e
    }
    render(e) {
        const t = this.statisticsSystem.getFormattedStats()
          , s = `
            <div class="statistics-screen">
                <div class="statistics-header">
                    <h2>📊 数据统计</h2>
                    <p class="statistics-subtitle">你的留学之旅</p>
                </div>
                
                <!-- 基础信息 -->
                <div class="statistics-grid">
                    <div class="stat-card highlight">
                        <div class="stat-icon">⏱️</div>
                        <div class="stat-value">${t.totalPlayTime}</div>
                        <div class="stat-label">总游戏时长</div>
                    </div>
                    
                    <div class="stat-card highlight">
                        <div class="stat-icon">🏆</div>
                        <div class="stat-value">${t.bestScore}</div>
                        <div class="stat-label">最佳分数</div>
                    </div>
                    
                    <div class="stat-card highlight">
                        <div class="stat-icon">🎓</div>
                        <div class="stat-value">${t.maxGPA}</div>
                        <div class="stat-label">最高 GPA</div>
                    </div>
                    
                    <div class="stat-card highlight">
                        <div class="stat-icon">💰</div>
                        <div class="stat-value">${t.maxMoney}</div>
                        <div class="stat-label">最高存款</div>
                    </div>
                </div>
                
                <!-- 进度统计 -->
                <div class="statistics-grid">
                    <div class="stat-card">
                        <div class="stat-icon">🎮</div>
                        <div class="stat-value">${t.gamesPlayed}</div>
                        <div class="stat-label">游戏局数</div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-icon">🎓</div>
                        <div class="stat-value">${t.graduations}</div>
                        <div class="stat-label">毕业次数</div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-icon">💀</div>
                        <div class="stat-value">${t.deaths}</div>
                        <div class="stat-label">死亡次数</div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-icon">📅</div>
                        <div class="stat-value">${t.totalMonthsPlayed}</div>
                        <div class="stat-label">累计游玩月数</div>
                    </div>
                </div>
                
                <!-- 学习工作 -->
                <div class="statistics-grid">
                    <div class="stat-card">
                        <div class="stat-icon">📚</div>
                        <div class="stat-value">${t.studyTimes}</div>
                        <div class="stat-label">学习次数</div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-icon">💼</div>
                        <div class="stat-value">${t.workTimes}</div>
                        <div class="stat-label">打工次数</div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-icon">🍽️</div>
                        <div class="stat-value">${t.entertainmentTimes}</div>
                        <div class="stat-label">娱乐次数</div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-icon">❤️</div>
                        <div class="stat-value">${t.relationships}</div>
                        <div class="stat-label">恋爱次数</div>
                    </div>
                </div>
                
                <!-- 疾病统计 -->
                <div class="statistics-grid">
                    <div class="stat-card">
                        <div class="stat-icon">🏥</div>
                        <div class="stat-value">${t.diseasesInfected}</div>
                        <div class="stat-label">感染疾病次数</div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-icon">💊</div>
                        <div class="stat-value">${t.diseasesCured}</div>
                        <div class="stat-label">治愈疾病次数</div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-icon">💰</div>
                        <div class="stat-value">${t.moneyEarned}</div>
                        <div class="stat-label">累计赚钱</div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-icon">💸</div>
                        <div class="stat-value">${t.moneySpent}</div>
                        <div class="stat-label">累计花钱</div>
                    </div>
                </div>
                
                <!-- 成就统计 -->
                <div class="statistics-grid">
                    <div class="stat-card">
                        <div class="stat-icon">🏅</div>
                        <div class="stat-value">${t.achievementsUnlocked}</div>
                        <div class="stat-label">解锁成就数</div>
                    </div>
                    
                    <div class="stat-card">
                        <div class="stat-icon">🏆</div>
                        <div class="stat-value">${t.achievementsTypes}</div>
                        <div class="stat-label">成就类型数</div>
                    </div>
                </div>
                
                <!-- 最佳记录 -->
                <div class="statistics-footer">
                    <div class="stat-row">
                        <span class="stat-label">最佳结局：</span>
                        <span class="stat-value-text">${t.bestEnding}</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">打工类型：</span>
                        <span class="stat-value-text">${t.workTypes || "无"}</span>
                    </div>
                    <div class="stat-row">
                        <span class="stat-label">最后游玩：</span>
                        <span class="stat-value-text">${t.lastPlayDate}</span>
                    </div>
                    <div class="stat-actions">
                        <button class="btn-export" onclick="window.statisticsSystem.exportStats()">📥 导出数据</button>
                        <button class="btn-reset" onclick="window.statisticsSystem.resetStats()">🗑️ 重置数据</button>
                    </div>
                </div>
            </div>
        `;
        e.innerHTML = s
    }
}
const $s = document.createElement("style");
$s.textContent = `
    .statistics-screen {
        padding: 20px;
        max-width: 800px;
        margin: 0 auto;
    }
    
    .statistics-header {
        text-align: center;
        margin-bottom: 30px;
    }
    
    .statistics-header h2 {
        font-size: 28px;
        color: var(--accent);
        margin-bottom: 8px;
    }
    
    .statistics-subtitle {
        color: #64748b;
        font-size: 14px;
    }
    
    .statistics-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        gap: 15px;
        margin-bottom: 30px;
    }
    
    .stat-card {
        background: #1e293b;
        border-radius: 12px;
        padding: 20px;
        text-align: center;
        border: 2px solid #334155;
        transition: all 0.2s ease;
    }
    
    .stat-card:hover {
        border-color: var(--accent);
        transform: translateY(-2px);
    }
    
    .stat-card.highlight {
        border-color: var(--accent);
        background: linear-gradient(135deg, #1e293b 0%, #312e81 100%);
    }
    
    .stat-icon {
        font-size: 32px;
        margin-bottom: 10px;
    }
    
    .stat-value {
        font-size: 28px;
        font-weight: bold;
        color: #e2e8f0;
        margin-bottom: 5px;
    }
    
    .stat-card.highlight .stat-value {
        color: var(--accent);
    }
    
    .stat-label {
        font-size: 12px;
        color: #94a3b8;
        text-transform: uppercase;
        letter-spacing: 0.5px;
    }
    
    .statistics-footer {
        background: #1e293b;
        border-radius: 12px;
        padding: 20px;
        border: 2px solid #334155;
    }
    
    .stat-row {
        display: flex;
        justify-content: space-between;
        padding: 12px 0;
        border-bottom: 1px solid #334155;
    }
    
    .stat-row:last-child {
        border-bottom: none;
    }
    
    .stat-label {
        color: #94a3b8;
        font-size: 14px;
    }
    
    .stat-value-text {
        color: #e2e8f0;
        font-weight: 500;
    }
    
    .stat-actions {
        display: flex;
        gap: 10px;
        margin-top: 20px;
        padding-top: 20px;
        border-top: 1px solid #334155;
    }
    
    .btn-export, .btn-reset {
        flex: 1;
        padding: 12px;
        border: none;
        border-radius: 8px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.2s ease;
    }
    
    .btn-export {
        background: #3b82f6;
        color: white;
    }
    
    .btn-export:hover {
        background: #2563eb;
    }
    
    .btn-reset {
        background: #ef4444;
        color: white;
    }
    
    .btn-reset:hover {
        background: #dc2626;
    }
`;
document.head.appendChild($s);
class ui {
    constructor(e) {
        this.settingsSystem = e
    }
    render(e) {
        const t = this.settingsSystem.settings
          , s = `
            <div class="settings-screen">
                <div class="settings-header">
                    <h2>⚙️ 设置</h2>
                    <p class="settings-subtitle">自定义你的游戏体验</p>
                </div>
                
                <div class="settings-section">
                    <h3 class="settings-section-title">🎮 游戏设置</h3>
                    
                    <div class="setting-item">
                        <div class="setting-info">
                            <div class="setting-name">🔊 音效</div>
                            <div class="setting-desc">开启游戏音效和背景音乐</div>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="toggle-sound" ${t.soundEnabled ? "checked" : ""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                    
                    <div class="setting-item">
                        <div class="setting-info">
                            <div class="setting-name">⚡ 快速模式</div>
                            <div class="setting-desc">跳过动画，加快游戏节奏</div>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="toggle-fast" ${t.fastMode ? "checked" : ""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                    
                    <div class="setting-item">
                        <div class="setting-info">
                            <div class="setting-name">💡 显示提示</div>
                            <div class="setting-desc">显示游戏提示和帮助</div>
                        </div>
                        <label class="toggle-switch">
                            <input type="checkbox" id="toggle-tips" ${t.showTips ? "checked" : ""}>
                            <span class="toggle-slider"></span>
                        </label>
                    </div>
                </div>
                
                <div class="settings-section">
                    <h3 class="settings-section-title">🔉 音量控制</h3>
                    
                    <div class="setting-item">
                        <div class="setting-info">
                            <div class="setting-name">🎵 背景音乐</div>
                            <div class="setting-desc">调整背景音乐音量</div>
                        </div>
                        <input type="range" id="slider-music" min="0" max="100" value="${t.musicVolume}" class="volume-slider">
                        <span class="volume-value">${t.musicVolume}%</span>
                    </div>
                    
                    <div class="setting-item">
                        <div class="setting-info">
                            <div class="setting-name">🔔 音效</div>
                            <div class="setting-desc">调整游戏音效音量</div>
                        </div>
                        <input type="range" id="slider-sfx" min="0" max="100" value="${t.sfxVolume}" class="volume-slider">
                        <span class="volume-value">${t.sfxVolume}%</span>
                    </div>
                </div>
                
                <div class="settings-section">
                    <h3 class="settings-section-title">🌐 其他</h3>
                    
                    <div class="setting-item">
                        <div class="setting-info">
                            <div class="setting-name">📥 存档备份</div>
                            <div class="setting-desc">导出或导入无缝自动存档（study_abroad_autosave）</div>
                        </div>
                        <div class="btn-group">
                            <button class="btn-small" onclick="window.exportSave()">导出</button>
                            <button class="btn-small" onclick="window.importSave()">导入</button>
                        </div>
                    </div>
                </div>
                
                <div class="settings-footer">
                    <div class="version-info">
                        <span>版本：v6.0.0</span>
                        <span class="separator">•</span>
                        <span>最后更新：2026-03-11</span>
                    </div>
                </div>
            </div>
        `;
        e.innerHTML = s,
        this.attachEventListeners()
    }
    attachEventListeners() {
        const e = document.getElementById("toggle-sound");
        e && e.addEventListener("change", o => {
            this.settingsSystem.set("soundEnabled", o.target.checked)
        }
        );
        const t = document.getElementById("toggle-fast");
        t && t.addEventListener("change", o => {
            this.settingsSystem.set("fastMode", o.target.checked)
        }
        );
        const s = document.getElementById("toggle-tips");
        s && s.addEventListener("change", o => {
            this.settingsSystem.set("showTips", o.target.checked)
        }
        );
        const n = document.getElementById("slider-music");
        n && n.addEventListener("input", o => {
            const r = o.target.value;
            this.settingsSystem.set("musicVolume", parseInt(r)),
            document.querySelector(".volume-value").textContent = `${r}%`
        }
        );
        const a = document.getElementById("slider-sfx");
        a && a.addEventListener("input", o => {
            const r = o.target.value;
            this.settingsSystem.set("sfxVolume", parseInt(r)),
            o.target.nextElementSibling.textContent = `${r}%`
        }
        )
    }
}
const Ms = document.createElement("style");
Ms.textContent = `
    .settings-screen {
        padding: 20px;
        max-width: 600px;
        margin: 0 auto;
    }
    
    .settings-header {
        text-align: center;
        margin-bottom: 30px;
    }
    
    .settings-header h2 {
        font-size: 28px;
        color: var(--accent);
        margin-bottom: 8px;
    }
    
    .settings-subtitle {
        color: #64748b;
        font-size: 14px;
    }
    
    .settings-section {
        background: #1e293b;
        border-radius: 12px;
        padding: 20px;
        margin-bottom: 20px;
        border: 2px solid #334155;
    }
    
    .settings-section-title {
        font-size: 18px;
        color: #e2e8f0;
        margin-bottom: 15px;
        padding-bottom: 10px;
        border-bottom: 2px solid #334155;
    }
    
    .setting-item {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 15px 0;
        border-bottom: 1px solid #334155;
    }
    
    .setting-item:last-child {
        border-bottom: none;
    }
    
    .setting-info {
        flex: 1;
    }
    
    .setting-name {
        font-size: 15px;
        color: #e2e8f0;
        font-weight: 600;
        margin-bottom: 4px;
    }
    
    .setting-desc {
        font-size: 12px;
        color: #64748b;
    }
    
    /* 开关样式 */
    .toggle-switch {
        position: relative;
        width: 50px;
        height: 26px;
        flex-shrink: 0;
    }
    
    .toggle-switch input {
        opacity: 0;
        width: 0;
        height: 0;
    }
    
    .toggle-slider {
        position: absolute;
        cursor: pointer;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background-color: #475569;
        transition: 0.3s;
        border-radius: 26px;
    }
    
    .toggle-slider:before {
        position: absolute;
        content: "";
        height: 20px;
        width: 20px;
        left: 3px;
        bottom: 3px;
        background-color: white;
        transition: 0.3s;
        border-radius: 50%;
    }
    
    input:checked + .toggle-slider {
        background-color: var(--accent);
    }
    
    input:checked + .toggle-slider:before {
        transform: translateX(24px);
    }
    
    /* 音量滑块 */
    .volume-slider {
        width: 120px;
        height: 6px;
        -webkit-appearance: none;
        appearance: none;
        background: #475569;
        border-radius: 3px;
        outline: none;
    }
    
    .volume-slider::-webkit-slider-thumb {
        -webkit-appearance: none;
        appearance: none;
        width: 18px;
        height: 18px;
        background: var(--accent);
        border-radius: 50%;
        cursor: pointer;
    }
    
    .volume-value {
        width: 40px;
        text-align: right;
        color: #94a3b8;
        font-size: 13px;
    }
    
    .btn-view-stats {
        padding: 8px 16px;
        background: #3b82f6;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-weight: 600;
        transition: all 0.2s ease;
    }
    
    .btn-view-stats:hover {
        background: #2563eb;
    }
    
    .btn-group {
        display: flex;
        gap: 8px;
    }
    
    .btn-small {
        padding: 6px 12px;
        background: #475569;
        color: white;
        border: none;
        border-radius: 6px;
        cursor: pointer;
        font-size: 13px;
        transition: all 0.2s ease;
    }
    
    .btn-small:hover {
        background: #64748b;
    }
    
    .settings-footer {
        text-align: center;
        padding: 20px;
        color: #64748b;
        font-size: 12px;
    }
    
    .version-info {
        display: flex;
        justify-content: center;
        gap: 8px;
    }
    
    .separator {
        color: #475569;
    }
`;
document.head.appendChild(Ms);
const ia = {
    TECH: "中风险 · 科技成长",
    STABLE: "低风险 · 稳健收益",
    RISK: "高风险 · 波动较大"
};
function oa(i) {
    const e = Number(i);
    return Number.isFinite(e) ? e > 0 ? {
        cls: "fund-chg--up",
        text: `+${e.toFixed(2)}%`
    } : e < 0 ? {
        cls: "fund-chg--down",
        text: `${e.toFixed(2)}%`
    } : {
        cls: "fund-chg--flat",
        text: "0.00%"
    } : {
        cls: "fund-chg--flat",
        text: "0.00%"
    }
}
function ra(i, e) {
    return `${i > 0 ? "+" : ""}${w(i, e)}`
}
function la(i, e) {
    const t = Number(i) || 0;
    return ke(t, e, 0)
}
function ca(i=[], e="US") {
    const t = Array.isArray(i) && i.length >= 2 ? i.map($ => Number($) || 0) : [1, 1]
      , s = 220
      , n = 112
      , a = 42
      , o = 8
      , r = 10
      , l = 22
      , c = s - a - o
      , d = n - r - l
      , u = Math.min(...t)
      , h = Math.max(...t)
      , m = Math.max((h - u) * .08, 1)
      , p = u - m
      , g = h + m
      , f = Math.max(1, g - p)
      , b = $ => a + $ / Math.max(1, t.length - 1) * c
      , k = $ => r + (g - $) / f * d
      , P = t.map( ($, K) => `${b(K).toFixed(2)},${k($).toFixed(2)}`).join(" ")
      , L = t[t.length - 1]
      , y = t[0]
      , M = L >= y ? "fund-spark--up" : "fund-spark--down"
      , T = 5
      , R = Array.from({
        length: T
    }, ($, K) => {
        const V = K / (T - 1)
          , j = g - V * f
          , re = r + V * d;
        return {
            value: j,
            y: re
        }
    }
    )
      , E = R.map($ => `<line class="fund-spark-grid" x1="${a}" y1="${$.y.toFixed(2)}" x2="${(a + c).toFixed(2)}" y2="${$.y.toFixed(2)}" />`).join("")
      , D = R.map($ => `<text class="fund-spark-ylabel" x="${(a - 6).toFixed(2)}" y="${($.y + 3).toFixed(2)}">${la($.value, e)}</text>`).join("");
    return `
        <div class="fund-spark-wrap" aria-hidden="true">
            <svg class="fund-spark ${M}" viewBox="0 0 ${s} ${n}" preserveAspectRatio="none">
                ${E}
                <line class="fund-spark-axis" x1="${a}" y1="${r}" x2="${a}" y2="${(r + d).toFixed(2)}" />
                <line class="fund-spark-axis" x1="${a}" y1="${(r + d).toFixed(2)}" x2="${(a + c).toFixed(2)}" y2="${(r + d).toFixed(2)}" />
                ${D}
                <polyline class="fund-spark-line" points="${P}" />
            </svg>
            <div class="fund-spark-range">
                <span>区间低点 ${ke(u, e, 0)}</span>
                <span>区间高点 ${ke(h, e, 0)}</span>
            </div>
        </div>
    `
}
class hi {
    constructor(e) {
        this.stockSystem = e,
        this.gameState = e.gameState
    }
    render(e) {
        if (!this.stockSystem || !this.stockSystem.stocks) {
            e.innerHTML = '<div class="stock-error">交易所初始化中...</div>';
            return
        }
        const t = e.querySelector(".stock-rh-scroll")
          , s = t ? t.scrollTop : 0
          , n = this.gameState.state
          , a = n.region
          , o = this.stockSystem.getTotalValue()
          , r = o + (n.money || 0)
          , l = Object.values(this.stockSystem.stocks).map(d => {
            const u = Number(d.price) || 0
              , h = oa(d.change)
              , m = this.stockSystem.getPositionSummary(d.symbol)
              , p = Math.max(0, Math.floor((n.money || 0) / Math.max(1, u)))
              , g = p > 0
              , f = m.shares > 0
              , b = ca(this.stockSystem.getTrendPoints(d.symbol, 12), a)
              , k = m.unrealized > 0 ? "fund-pnl--up" : m.unrealized < 0 ? "fund-pnl--down" : "fund-pnl--flat";
            return `
                    <article class="fund-card" data-symbol="${d.symbol}">
                        <div class="fund-card-top">
                            <div class="fund-card-left">
                                <div class="fund-symbol">${d.symbol}</div>
                                <div class="fund-name">${d.name}</div>
                                <div class="fund-tagline">${ia[d.symbol] || ""}</div>
                            </div>
                            <div class="fund-card-right">
                                <div class="fund-price">${ke(u, a, 2)}</div>
                                <div class="fund-chg ${h.cls}">${h.text}</div>
                            </div>
                        </div>
                        ${b}
                        <div class="fund-position-block">
                            <div class="fund-pos-line"><span>持有</span><strong>${m.shares} 股</strong></div>
                            <div class="fund-pos-line"><span>成本价</span><strong>${ke(m.avgCost, a, 2)}</strong></div>
                            <div class="fund-pos-line"><span>当前市值</span><strong>${w(m.marketValue, a)}</strong></div>
                            <div class="fund-pos-line ${k}">
                                <span>持仓盈亏</span>
                                <strong class="fund-pos-value ${k}">${ra(m.unrealized, a)} (${m.unrealizedPct.toFixed(2)}%)</strong>
                            </div>
                        </div>
                        <div class="fund-trade-stack">
                            <div class="fund-trade-line">
                                <input type="number" class="fund-qty-inp" min="1" max="${Math.max(1, p)}" value="1" inputmode="numeric" ${g ? "" : "disabled"} />
                                <button type="button" class="fund-btn fund-btn--buy" data-symbol="${d.symbol}" data-side="buy" onclick="window.game.stockScreen.quickTrade(this)" ${g ? "" : "disabled"}>买入</button>
                            </div>
                            <div class="fund-trade-line">
                                <input type="number" class="fund-qty-inp" min="1" max="${Math.max(1, m.shares)}" value="1" inputmode="numeric" ${f ? "" : "disabled"} />
                                <button type="button" class="fund-btn fund-btn--sell" data-symbol="${d.symbol}" data-side="sell" onclick="window.game.stockScreen.quickTrade(this)" ${f ? "" : "disabled"}>卖出</button>
                            </div>
                        </div>
                    </article>
                `
        }
        ).join("");
        e.innerHTML = `
            <div class="stock-rh-screen phone-app-screen">
                <div class="phone-app-topbar"><span class="phone-app-brand">📱 交易所</span></div>
                <div class="stock-rh-scroll">
                    <section class="fund-wallet-card" aria-label="资产概览">
                        <div class="fund-wallet-row">
                            <span class="fund-wallet-label">可用资金</span>
                            <span class="fund-wallet-cash">${w(n.money || 0, a)}</span>
                        </div>
                        <div class="fund-wallet-total-block">
                            <span class="fund-wallet-total-label">总资产</span>
                            <span class="fund-wallet-total-val">${w(r, a)}</span>
                        </div>
                        <div class="fund-wallet-sub">
                            <span>持仓市值</span>
                            <span>${w(o, a)}</span>
                        </div>
                    </section>
                    <div class="fund-list">${l}</div>
                    <p class="fund-footnote">涨跌幅为相对上月变化；持仓盈亏按买入成本计算。</p>
                </div>
            </div>
        `;
        const c = e.querySelector(".stock-rh-scroll");
        c && (c.scrollTop = s)
    }
    quickTrade(e) {
        if (!e || !this.stockSystem)
            return;
        const t = e.dataset.symbol
          , s = e.dataset.side;
        if (!t || s !== "buy" && s !== "sell")
            return;
        const n = e.closest(".fund-trade-line")
          , a = n == null ? void 0 : n.querySelector(".fund-qty-inp");
        if (!a || a.disabled)
            return;
        const o = Math.floor(Number(a.value));
        if (!Number.isFinite(o) || o <= 0) {
            alert("请输入有效股数（>=1）");
            return
        }
        const r = s === "buy" ? this.stockSystem.buy(t, o) : this.stockSystem.sell(t, o);
        if (!r.success) {
            alert(r.error);
            return
        }
        alert(r.message);
        const l = typeof window.getGamePanel == "function" ? window.getGamePanel() : null;
        l && this.render(l)
    }
    showTradeModal(e, t) {
        const s = this.stockSystem.stocks[e];
        if (!s)
            return;
        const n = this.gameState.state
          , a = n.region
          , o = this.stockSystem.portfolio.holdings[e] || 0
          , r = Math.floor((n.money || 0) / Math.max(1, s.price))
          , l = t === "buy" ? "买入" : "卖出";
        window.modalInstance && window.modalInstance.showCustom(`${l} ${s.name}`, `
                <div style="text-align:left;color:#cbd5e1;">
                    <div style="margin-bottom:12px;">当前价格：<strong>${ke(s.price, a, 2)}/股</strong></div>
                    <div style="margin-bottom:12px;">${t === "buy" ? `最多可买 ${r} 股` : `当前持有 ${o} 股`}</div>
                    <input id="trade-shares" type="number" min="1" max="${t === "buy" ? r : o}" value="1"
                        style="width:100%;padding:10px;background:#0f172a;color:#fff;border:1px solid #334155;border-radius:8px;" />
                </div>
            `, [{
            text: "取消",
            secondary: !0
        }, {
            text: `确认${l}`,
            cb: () => {
                const c = document.getElementById("trade-shares")
                  , d = Math.floor(Number((c == null ? void 0 : c.value) || 0));
                if (!d || d <= 0) {
                    alert("请输入有效数量");
                    return
                }
                const u = t === "buy" ? this.stockSystem.buy(e, d) : this.stockSystem.sell(e, d);
                if (!u.success) {
                    alert(u.error);
                    return
                }
                alert(u.message);
                const h = typeof window.getGamePanel == "function" ? window.getGamePanel() : null;
                h && this.render(h)
            }
        }])
    }
}
class pi {
    constructor(e) {
        this.datingSystem = e
    }
    render(e) {
        const t = this.datingSystem.getDatingUI();
        t.hasPartner ? this.renderDating(e, t) : this.renderSingle(e)
    }
    partnerTitle(e, t) {
        const s = t === "female";
        return e === "married" ? s ? "妻子" : "丈夫" : e === "engaged" ? s ? "未婚妻" : "未婚夫" : s ? "女朋友" : "男朋友"
    }
    originLabel(e) {
        return e === "local" ? "本国人" : "留学生"
    }
    renderSingle(e) {
        e.innerHTML = `
            <div class="dating-screen dating-screen--v62">
                <div class="dating-header">
                    <h2>❤️ 恋爱</h2>
                    <p class="dating-subtitle">寻找你的另一半</p>
                </div>

                <div class="single-status">
                    <div class="single-icon">💔</div>
                    <div class="single-text">目前单身</div>
                    <p class="single-desc">去认识新朋友吧！</p>
                </div>

                <div class="dating-actions">
                    <button type="button" class="btn-meet-partner" onclick="window.meetNewPartner()">🎉 邂逅新对象</button>
                </div>

                <div class="dating-tips">
                    <h3>💡 恋爱小贴士</h3>
                    <ul>
                        <li>多参加社交活动可以遇到更多人</li>
                        <li>长期不约会、不送礼，好感会每月下降</li>
                        <li>好感归零会分手；订婚、婚礼需好感与资金</li>
                    </ul>
                </div>
            </div>`
    }
    renderDating(e, t) {
        const {partner: s, scenes: n, gifts: a, canPropose: o, canPlanWedding: r, proposeCostLocal: l, weddingCostLocal: c} = t
          , d = this.datingSystem.gameState.state.region
          , u = s.stage || "dating"
          , h = s.partnerGender === "female" ? "female" : "male"
          , m = this.partnerTitle(u, h)
          , p = s.origin === "local" ? "local" : "international"
          , f = {
            dating: "#ec4899",
            engaged: "#8b5cf6",
            married: "#f472b6"
        }[u] || "#94a3b8"
          , b = this.datingSystem.gameState.state
          , k = s.avatarUrl || bs(vs(b.playerGender || "male", b.orientation || "straight"))
          , P = u === "dating" ? `
            <div class="dating-section">
                <h3 class="section-title">💍 求婚</h3>
                <button type="button" class="scene-row ${o ? "" : "disabled"}"
                    ${o ? 'onclick="window.propose()"' : "disabled"}>
                    <span class="scene-row-icon">💎</span>
                    <span class="scene-row-mid">
                        <span class="scene-row-name">求婚订婚</span>
                        <span class="scene-row-meta">💰 ${w(l ?? 0, d)} · ⚡25 · 成功率与好感相关</span>
                    </span>
                </button>
            </div>` : ""
          , L = u === "engaged" ? `
            <div class="dating-section">
                <h3 class="section-title">💒 婚礼</h3>
                <button type="button" class="scene-row ${r ? "" : "disabled"}"
                    ${r ? 'onclick="window.planWedding()"' : "disabled"}>
                    <span class="scene-row-icon">🎊</span>
                    <span class="scene-row-mid">
                        <span class="scene-row-name">举办婚礼</span>
                        <span class="scene-row-meta">💰 ${w(c ?? 0, d)} · ⚡35 · 成功后结为夫妻</span>
                    </span>
                </button>
            </div>` : "";
        e.innerHTML = `
            <div class="dating-screen dating-screen--v62">
                <div class="dating-header">
                    <h2>❤️ 恋爱</h2>
                    <p class="dating-subtitle">珍惜眼前人</p>
                </div>

                <div class="partner-card partner-card--row">
                    <img class="partner-avatar-img portrait-randomuser" src="${k}" width="60" height="60" alt="" onerror="${ws(h)}" />
                    <div class="partner-info-col">
                        <div class="partner-name-row">
                            <span class="partner-name">${s.name}</span>
                            <span class="partner-stage-pill" style="color:${f};border-color:${f}55">${m}</span>
                        </div>
                        <div class="partner-tags-row">
                            <span class="partner-tag">${this.originLabel(p)}</span>
                            <span class="partner-tag">${s.type || ""}</span>
                            <span class="partner-tag partner-tag--muted">${s.personality || ""}</span>
                        </div>
                        <div class="rel-bar-label">好感度</div>
                        <div class="rel-bar-track rel-bar-track--slim">
                            <div class="rel-bar-fill" style="width: ${s.rel}%"></div>
                        </div>
                        <div class="rel-bar-foot">
                            <span class="rel-bar-value">${s.rel}/100</span>
                            <span class="partner-meet">相识 ${this.getMonthsSince(s.meetDate)} 个月</span>
                        </div>
                    </div>
                </div>

                <div class="dating-section">
                    <h3 class="section-title">🎉 约会活动</h3>
                    <div class="scenes-grid scenes-grid--v62">
                        ${n.map(y => `
                            <button type="button" class="scene-row ${y.canAfford ? "" : "disabled"}"
                                ${y.canAfford ? `onclick="window.date('${y.id}')"` : "disabled"}>
                                <span class="scene-row-icon">${y.icon}</span>
                                <span class="scene-row-mid">
                                    <span class="scene-row-name">${y.name}</span>
                                    <span class="scene-row-meta">
                                        ${y.cost > 0 ? `💰 ${w(y.costLocal ?? 0, d)}` : "免费"}
                                        <span class="scene-energy">⚡${y.energy}</span>
                                        · ❤️+${y.relGain}
                                        ${y.health ? ` · ❤️‍🩹+${y.health}` : ""}
                                    </span>
                                </span>
                            </button>`).join("")}
                    </div>
                </div>

                <div class="dating-section">
                    <h3 class="section-title">🎁 送礼物</h3>
                    <div class="gifts-grid gifts-grid--v62">
                        ${a.map(y => `
                            <button type="button" class="gift-row ${y.canAfford ? "" : "disabled"} ${y.isLiked ? "liked" : ""}"
                                ${y.canAfford ? `onclick="window.giveGift('${y.id}')"` : "disabled"}>
                                <span class="gift-row-icon">${y.icon}</span>
                                <span class="gift-row-mid">
                                    <span class="gift-row-name">${y.name}${y.isLiked ? " ⭐" : ""}</span>
                                    <span class="gift-row-meta">💰 ${w(y.costLocal ?? 0, d)} · ❤️+${y.relGain}</span>
                                </span>
                            </button>`).join("")}
                    </div>
                </div>

                ${P}
                ${L}

                <div class="dating-actions">
                    <button type="button" class="btn-breakup" onclick="window.breakUp()">💔 分手</button>
                </div>
            </div>`
    }
    getMonthsSince(e) {
        return this.datingSystem.gameState.state.monthTotal - e
    }
}
class mi {
    constructor(e) {
        this.skillTreeSystem = e
    }
    render(e) {
        const t = this.skillTreeSystem.getUI();
        e.innerHTML = `
            <div class="skilltree-screen skilltree-screen--v62">
                <div class="skilltree-header">
                    <h2>🌳 技能树</h2>
                    <div class="skilltree-points">
                        <span class="points-label">可用技能点</span>
                        <span class="points-value">${t.points}</span>
                    </div>
                </div>

                <div class="skilltree-stats">
                    <div class="stat-item">
                        <span class="stat-label">已解锁技能</span>
                        <span class="stat-value">${t.totalUnlocked}</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-label">技能分支</span>
                        <span class="stat-value">4</span>
                    </div>
                </div>

                <div class="skilltree-branches">
                    ${Object.values(t.branches).map(s => this.renderBranch(s)).join("")}
                </div>

                <div class="skilltree-tips">
                    <h3>💡 技能点获取</h3>
                    <ul>
                        <li>完成学年：+5 点</li>
                        <li>GPA 达到 4.0：+3 点</li>
                        <li>顺利毕业：+10 点</li>
                        <li>解锁成就：+1~5 点</li>
                    </ul>
                </div>
            </div>`
    }
    renderBranch(e) {
        return `
            <div class="skill-branch skill-branch--v62" style="--branch-color: ${e.color}">
                <div class="branch-header">
                    <span class="branch-icon">${e.icon}</span>
                    <span class="branch-name">${e.name}</span>
                </div>
                <div class="skills-list skills-list--v62">
                    ${Object.values(e.skills).map(t => this.renderSkill(t, e.color)).join("")}
                </div>
            </div>`
    }
    renderSkill(e, t) {
        const s = "★".repeat(e.currentLevel) + "☆".repeat(e.maxLevel - e.currentLevel)
          , n = e.isMaxed ? "已满级" : `${e.nextCost} 点`
          , a = this.getBranchId(e)
          , o = e.prerequisites.length > 0 ? `<div class="skill-prereqs skill-prereqs--v62">前置：${e.prerequisites.map(r => {
            const [l,c] = r.split(":");
            return `${this.getSkillName(l)} Lv${c}`
        }
        ).join(", ")}</div>` : "";
        return `
            <div class="skill-item-wrap">
                <div class="skill-card skill-card--v62 ${e.canUnlock ? "unlockable" : ""} ${e.isMaxed ? "maxed" : ""}"
                    style="border-left-color: ${t}"
                    role="button"
                    tabindex="0"
                    onclick="${e.canUnlock ? `window.unlockSkill('${e.id}', '${a}')` : ""}">
                    <div class="skill-row-left">
                        <div class="skill-icon skill-icon--sm" style="background: ${t}28; color: ${t}">${e.icon}</div>
                        <div class="skill-name-block">
                            <div class="skill-name skill-name--sm">${e.name}</div>
                        </div>
                    </div>
                    <div class="skill-row-mid">
                        <div class="skill-desc-clamp">${e.description}</div>
                    </div>
                    <div class="skill-row-right">
                        <div class="skill-stars-row">${s}</div>
                        <div class="skill-upgrade-pill">${e.isMaxed ? "✅ " + n : "📍 " + n}</div>
                    </div>
                </div>
                ${o}
            </div>`
    }
    getBranchId(e) {
        return {
            study_efficiency: "academic",
            gpa_boost: "academic",
            research_master: "academic",
            scholarship_expert: "academic",
            work_efficiency: "career",
            interview_master: "career",
            networking: "career",
            ceo_potential: "career",
            charm: "social",
            party_animal: "social",
            relationship_master: "social",
            social_butterfly: "social",
            money_management: "life",
            health_conscious: "life",
            stress_management: "life",
            balanced_life: "life"
        }[e.id] || "academic"
    }
    getSkillName(e) {
        return {
            study_efficiency: "学习效率",
            gpa_boost: "GPA 加成",
            research_master: "科研大师",
            scholarship_expert: "奖学金专家",
            work_efficiency: "工作效率",
            interview_master: "面试大师",
            networking: "人脉拓展",
            ceo_potential: "CEO 潜力",
            charm: "魅力",
            party_animal: "派对达人",
            relationship_master: "恋爱大师",
            social_butterfly: "社交达人",
            money_management: "理财",
            health_conscious: "健康意识",
            stress_management: "压力管理",
            balanced_life: "平衡生活"
        }[e] || e
    }
}
class gi {
    constructor(e) {
        this.housingSystem = e
    }
    getMentalLabel(e) {
        return e <= 2 ? {
            text: "心态 −5 / 月",
            type: "neg"
        } : e >= 4 ? {
            text: "心态 +5 / 月",
            type: "pos"
        } : {
            text: "心态 无增减",
            type: "neu"
        }
    }
    getTypeVisual(e) {
        const t = {
            bedspace: {
                emoji: "🛏️",
                grad: "linear-gradient(135deg,#1e3a5f 0%,#0f172a 100%)"
            },
            shared: {
                emoji: "🏠",
                grad: "linear-gradient(135deg,#1d4ed8 0%,#312e81 100%)"
            },
            studio: {
                emoji: "🏢",
                grad: "linear-gradient(135deg,#0369a1 0%,#164e63 100%)"
            },
            "1br": {
                emoji: "🏘️",
                grad: "linear-gradient(135deg,#7c3aed 0%,#4c1d95 100%)"
            },
            "2br": {
                emoji: "🏡",
                grad: "linear-gradient(135deg,#059669 0%,#064e3b 100%)"
            },
            house: {
                emoji: "🏛️",
                grad: "linear-gradient(135deg,#b45309 0%,#78350f 100%)"
            },
            unit: {
                emoji: "🏬",
                grad: "linear-gradient(135deg,#475569 0%,#1e293b 100%)"
            }
        };
        return t[e] || t.shared
    }
    render(e) {
        const t = this.housingSystem.gameState.state
          , s = this.housingSystem.getCurrentHousing()
          , n = this.housingSystem.getHousingList(t.region);
        if (n.length === 0) {
            e.innerHTML = '<div class="housing-flow-empty">加载中…</div>';
            return
        }
        const a = n[0]
          , o = n.map(r => {
            const l = (s == null ? void 0 : s.housingId) === r.id
              , c = r.price * 2
              , d = t.money >= c
              , u = this.getTypeVisual(r.type)
              , h = this.getMentalLabel(r.quality)
              , m = h.type === "pos" ? "housing-fx-pos" : h.type === "neg" ? "housing-fx-neg" : "housing-fx-neu"
              , p = `${w(r.price, t.region)} / 月`
              , g = `签约押金 ${w(c, t.region)}`
              , f = !d && !l ? "housing-flow-card--disabled" : ""
              , b = l ? "housing-flow-card--current" : ""
              , k = l ? '<div class="housing-flow-actions"><button type="button" class="btn-housing-outline" onclick="(() => { const r = window.game.housingSystem.moveOut(); if(r.success) { alert(r.message); window.game.housingScreen.render(window.getGamePanel()); } else { alert(r.error); } })()">退租</button></div>' : d ? `<div class="housing-flow-actions"><button type="button" class="btn-housing-primary" onclick="(() => { const r = window.game.housingSystem.rent('${r.id}'); if(r.success) { alert(r.message); window.game.housingScreen.render(window.getGamePanel()); } else { alert(r.error); } })()">租下</button></div>` : `<div class="housing-flow-actions"><span class="housing-fx-neg">押金不足（需 ${w(c, t.region)}）</span></div>`;
            return `
                    <article class="housing-flow-card ${b} ${f}">
                        ${l ? '<div class="housing-glow" aria-hidden="true"></div>' : ""}
                        <div class="housing-flow-art" style="background:${u.grad}">
                            <span class="housing-flow-emoji">${u.emoji}</span>
                            ${l ? '<span class="housing-badge-live housing-badge-float">🏠 现居</span>' : ""}
                        </div>
                        <div class="housing-flow-body">
                            <h3 class="housing-flow-title">${r.name}</h3>
                            <p class="housing-flow-meta">📐 ${r.size} · 🚶 ${r.commute} · ⭐ ${"★".repeat(r.quality)}${"☆".repeat(5 - r.quality)}</p>
                            <p class="housing-flow-desc">${r.desc}</p>
                            <div class="housing-flow-price-row">
                                <span class="housing-flow-price">${p}</span>
                                <span class="housing-flow-price-sub">${g}</span>
                            </div>
                            <div class="housing-flow-fx">
                                <span class="${m}">${h.text}</span>
                                <span class="housing-fx-neu">质量 ${r.quality}/5</span>
                            </div>
                            ${k}
                        </div>
                    </article>
                `
        }
        ).join("");
        e.innerHTML = `
            <div class="housing-flow-screen">
                <header class="housing-flow-header">
                    <h2 class="housing-flow-h2">🏠 租房</h2>
                    <p class="housing-flow-region">${a.regionName} · ${a.description || ""}</p>
                </header>
                <div class="housing-flow-grid">
                    ${o}
                </div>
                <aside class="housing-flow-tips">
                    <h3>💡 小贴士</h3>
                    <ul>
                        <li>需支付 <strong>2 个月房租</strong> 作为押金（签约时扣 1 个月押金）。</li>
                        <li>低质量房源可能每月扣心态，高质量可小幅提升心态。</li>
                        <li>每月自动扣租，请保持余额充足。</li>
                    </ul>
                </aside>
            </div>
        `
    }
}
const As = document.createElement("style");
As.textContent = `
    .housing-flow-screen { padding: 4px 0 16px; }
    .housing-flow-header { margin-bottom: 14px; }
    .housing-flow-h2 { font-size: 20px; color: var(--accent); margin: 0 0 6px; }
    .housing-flow-region { font-size: 12px; color: #94a3b8; margin: 0; line-height: 1.5; }
    .housing-flow-grid {
        display: flex;
        flex-direction: column;
        gap: 14px;
    }
    .housing-flow-empty { text-align: center; color: #64748b; padding: 40px; }
    .housing-flow-card {
        position: relative;
        display: grid;
        grid-template-columns: minmax(100px, 120px) 1fr;
        gap: 0;
        border-radius: 16px;
        overflow: hidden;
        border: 1px solid rgba(255,255,255,0.1);
        background: rgba(30, 41, 59, 0.65);
        backdrop-filter: blur(10px);
        transition: transform 0.2s, box-shadow 0.2s;
    }
    .housing-flow-card--disabled { opacity: 0.55; }
    .housing-flow-card--current {
        border: 2px solid rgba(56, 189, 248, 0.85);
        box-shadow:
            0 0 0 1px rgba(56, 189, 248, 0.35),
            0 0 24px rgba(56, 189, 248, 0.35),
            inset 0 0 40px rgba(56, 189, 248, 0.08);
    }
    .housing-glow {
        position: absolute;
        inset: -2px;
        border-radius: 16px;
        pointer-events: none;
        box-shadow: inset 0 0 30px rgba(56, 189, 248, 0.25);
        z-index: 0;
    }
    .housing-flow-card--current .housing-flow-body { position: relative; z-index: 1; }
    .housing-flow-art {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        min-height: 120px;
    }
    .housing-flow-emoji {
        font-size: 42px;
        filter: drop-shadow(0 4px 12px rgba(0,0,0,0.4));
    }
    .housing-badge-float {
        position: absolute;
        top: 8px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 10px;
        font-weight: 700;
        padding: 4px 8px;
        border-radius: 999px;
        background: rgba(15, 23, 42, 0.85);
        color: #7dd3fc;
        border: 1px solid rgba(56, 189, 248, 0.5);
        white-space: nowrap;
    }
    .housing-flow-body {
        padding: 12px 14px;
        display: flex;
        flex-direction: column;
        gap: 6px;
        min-width: 0;
    }
    .housing-flow-title {
        margin: 0;
        font-size: 16px;
        color: #f1f5f9;
        font-weight: 700;
    }
    .housing-flow-meta {
        margin: 0;
        font-size: 11px;
        color: #94a3b8;
        line-height: 1.4;
    }
    .housing-flow-desc {
        margin: 0;
        font-size: 12px;
        color: #64748b;
        line-height: 1.45;
    }
    .housing-flow-price-row {
        display: flex;
        flex-wrap: wrap;
        align-items: baseline;
        gap: 8px;
        margin-top: 4px;
    }
    .housing-flow-price {
        font-size: 18px;
        font-weight: 800;
        color: #fcd34d;
    }
    .housing-flow-price-sub {
        font-size: 11px;
        color: #94a3b8;
    }
    .housing-flow-fx {
        display: flex;
        flex-wrap: wrap;
        gap: 10px;
        font-size: 12px;
        margin-top: 2px;
    }
    .housing-fx-pos { color: #4ade80; font-weight: 600; }
    .housing-fx-neg { color: #f87171; font-weight: 600; }
    .housing-fx-neu { color: #94a3b8; }
    .housing-flow-actions {
        margin-top: auto;
        padding-top: 10px;
        display: flex;
        align-items: center;
        gap: 8px;
        flex-wrap: wrap;
    }
    .housing-badge-live {
        font-size: 12px;
        font-weight: 700;
        color: #7dd3fc;
    }
    .btn-housing-primary {
        padding: 10px 18px;
        border-radius: 10px;
        border: none;
        cursor: pointer;
        font-weight: 700;
        color: #0f172a;
        background: linear-gradient(135deg, #4ade80, #22c55e);
        box-shadow: 0 4px 14px rgba(34, 197, 94, 0.35);
    }
    .btn-housing-outline {
        padding: 8px 14px;
        border-radius: 10px;
        border: 1px solid #64748b;
        background: rgba(51, 65, 85, 0.5);
        color: #e2e8f0;
        cursor: pointer;
        font-size: 12px;
    }
    .housing-flow-tips {
        margin-top: 18px;
        padding: 14px;
        border-radius: 12px;
        background: rgba(15, 23, 42, 0.5);
        border: 1px solid rgba(255,255,255,0.06);
        font-size: 12px;
        color: #94a3b8;
    }
    .housing-flow-tips h3 { margin: 0 0 8px; font-size: 14px; color: #e2e8f0; }
    .housing-flow-tips ul { margin: 0; padding-left: 18px; line-height: 1.7; }
    @media (max-width: 420px) {
        .housing-flow-card {
            grid-template-columns: 1fr;
        }
        .housing-flow-art {
            min-height: 88px;
        }
    }
`;
document.head.appendChild(As);
const da = "modulepreload"
  , ua = function(i, e) {
    return new URL(i,e).href
}
  , Kt = {}
  , ha = function(e, t, s) {
    let n = Promise.resolve();
    if (t && t.length > 0) {
        const o = document.getElementsByTagName("link")
          , r = document.querySelector("meta[property=csp-nonce]")
          , l = (r == null ? void 0 : r.nonce) || (r == null ? void 0 : r.getAttribute("nonce"));
        n = Promise.allSettled(t.map(c => {
            if (c = ua(c, s),
            c in Kt)
                return;
            Kt[c] = !0;
            const d = c.endsWith(".css")
              , u = d ? '[rel="stylesheet"]' : "";
            if (!!s)
                for (let p = o.length - 1; p >= 0; p--) {
                    const g = o[p];
                    if (g.href === c && (!d || g.rel === "stylesheet"))
                        return
                }
            else if (document.querySelector(`link[href="${c}"]${u}`))
                return;
            const m = document.createElement("link");
            if (m.rel = d ? "stylesheet" : da,
            d || (m.as = "script"),
            m.crossOrigin = "",
            m.href = c,
            l && m.setAttribute("nonce", l),
            document.head.appendChild(m),
            d)
                return new Promise( (p, g) => {
                    m.addEventListener("load", p),
                    m.addEventListener("error", () => g(new Error(`Unable to preload CSS for ${c}`)))
                }
                )
        }
        ))
    }
    function a(o) {
        const r = new Event("vite:preloadError",{
            cancelable: !0
        });
        if (r.payload = o,
        window.dispatchEvent(r),
        !r.defaultPrevented)
            throw o
    }
    return n.then(o => {
        for (const r of o || [])
            r.status === "rejected" && a(r.reason);
        return e().catch(a)
    }
    )
}
  , pa = {
    en: ["The terminal hums with the static of a thousand stories.", "Your journey begins in the silence of the waiting gate..."],
    zh: ["航站楼低鸣如潮，像无数命运在玻璃后轻轻交叠。", "你的故事，就从这片沉默的候机大厅开始。"]
}
  , ma = {
    en: {
        chapter: "CHAPTER ONE",
        scene: "Scene A: Waiting Gate",
        language: "中 / EN",
        ambience: "Ambience",
        skip: "Skip",
        auto: "Auto",
        continue: "Continue"
    },
    zh: {
        chapter: "第一章",
        scene: "场景 A：候机大厅",
        language: "EN / 中",
        ambience: "环境音",
        skip: "跳过",
        auto: "自动",
        continue: "继续"
    }
}
  , lt = {
    nameError: "请输入你的昵称",
    countryError: "请选择留学目的地",
    countryLockedError: "该国家的航线等待开放中…"
}
  , ga = 40
  , fa = 3e4
  , ya = ["/intro-globe/earth-dark.jpg", "/intro-globe/earth-topology.png", "/intro-globe/ne_50m_admin_0_countries.geojson"];
function Q(i) {
    return String(i ?? "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")
}
function ct(i) {
    return String(i ?? "").replace(/'/g, "%27")
}
class fi {
    constructor(e, t) {
        this.gameState = e,
        this.settingsSystem = t,
        this.root = null,
        this.stage = "waiting",
        this.language = "en",
        this.form = {},
        this.errors = {},
        this.visibleParagraphCount = 0,
        this.typedLengths = [],
        this.typingTimer = null,
        this.landingTimer = null,
        this.autoplayTimer = null,
        this.globeLoadTimer = null,
        this.globePreloadPromise = null,
        this.notificationPlayed = !1,
        this.reducedMotion = !1,
        this.globeUnmount = null,
        this.onComplete = null,
        this.onAbort = null,
        this.boundKeydown = s => this.handleKeydown(s),
        this.boundPointerDown = s => this.handlePointerDown(s)
    }
    show({draft: e={}, onComplete: t, onAbort: s}={}) {
        var a, o;
        this.destroy(),
        this.onComplete = t,
        this.onAbort = s,
        this.stage = "waiting",
        this.language = "en",
        this.errors = {},
        this.form = {
            playerName: String(e.playerName || this.gameState.get("playerName") || "").trim(),
            playerGender: e.playerGender === "female" ? "female" : "male",
            orientation: ["straight", "gay", "bi"].includes(e.orientation) ? e.orientation : "straight",
            countryId: e.countryId || Rn(e.region || this.gameState.get("region") || "US"),
            major: e.major || this.gameState.get("major") || "CS"
        },
        this.notificationPlayed = !1,
        this.reducedMotion = typeof window < "u" && typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)").matches || ((o = (a = this.settingsSystem) == null ? void 0 : a.isFastMode) == null ? void 0 : o.call(a)) === !0,
        this.resetWaitingTyping(),
        this.root = document.createElement("div"),
        this.root.className = "intro-overlay",
        this.root.setAttribute("role", "dialog"),
        this.root.setAttribute("aria-modal", "true"),
        (document.getElementById("app") || document.body).appendChild(this.root),
        document.body.classList.add("intro-overlay-open"),
        document.addEventListener("keydown", this.boundKeydown),
        this.root.addEventListener("pointerdown", this.boundPointerDown),
        this.render(),
        this.preloadGlobe(!0),
        Ge({
            restart: !0
        }),
        Me(),
        this.revealNextParagraph()
    }
    destroy() {
        var e, t;
        this.typingTimer && (clearInterval(this.typingTimer),
        this.typingTimer = null),
        this.landingTimer && (clearTimeout(this.landingTimer),
        this.landingTimer = null),
        this.autoplayTimer && (clearTimeout(this.autoplayTimer),
        this.autoplayTimer = null),
        this.globeLoadTimer && (clearTimeout(this.globeLoadTimer),
        this.globeLoadTimer = null),
        typeof this.globeUnmount == "function" && (this.globeUnmount(),
        this.globeUnmount = null),
        Ke(),
        document.removeEventListener("keydown", this.boundKeydown),
        (e = this.root) == null || e.removeEventListener("pointerdown", this.boundPointerDown),
        document.body.classList.remove("intro-overlay-open"),
        (t = this.root) != null && t.parentNode && this.root.parentNode.removeChild(this.root),
        this.root = null
    }
    get waitingCopy() {
        return pa[this.language]
    }
    get waitingUi() {
        return ma[this.language]
    }
    resetWaitingTyping() {
        this.typingTimer && (clearInterval(this.typingTimer),
        this.typingTimer = null),
        this.visibleParagraphCount = 0,
        this.typedLengths = new Array(this.waitingCopy.length).fill(0)
    }
    handleKeydown(e) {
        if (this.root) {
            if (e.key === "Escape") {
                e.preventDefault(),
                this.stage === "waiting" ? this.goToCheckin() : this.stage === "checkin" ? this.goToWaiting() : this.stage === "globe" ? this.goToCheckin() : this.finalize();
                return
            }
            (e.key === "Enter" || e.key === " ") && this.stage === "waiting" ? (e.preventDefault(),
            this.handleWaitingContinue()) : e.key === "Enter" && this.stage === "checkin" ? (e.preventDefault(),
            this.handleSubmit()) : e.key === "Enter" && this.stage === "globe" ? (e.preventDefault(),
            this.handleGlobeSubmit()) : (e.key === "Enter" || e.key === " ") && this.stage === "landing" && (e.preventDefault(),
            this.finalize())
        }
    }
    handlePointerDown(e) {
        var n, a, o;
        const t = e.target.closest("[data-action]");
        if (!t || !((n = this.root) != null && n.contains(t)))
            return;
        const s = t.dataset.action;
        if (s) {
            if (this.stage === "waiting") {
                if (s === "go-start-home") {
                    e.preventDefault(),
                    Z(),
                    this.goToStartHome();
                    return
                }
                if (s === "continue-waiting") {
                    e.preventDefault(),
                    this.handleWaitingContinue();
                    return
                }
                if (s === "jump-checkin") {
                    e.preventDefault(),
                    Z(),
                    this.goToCheckin();
                    return
                }
                if (s === "autoplay") {
                    e.preventDefault(),
                    Z(),
                    this.visibleParagraphCount = this.waitingCopy.length,
                    this.typedLengths = this.waitingCopy.map(r => r.length),
                    this.typingTimer && (clearInterval(this.typingTimer),
                    this.typingTimer = null),
                    this.render(),
                    this.autoplayTimer = window.setTimeout( () => this.goToCheckin(), this.reducedMotion ? 120 : 600);
                    return
                }
                if (s === "toggle-language") {
                    e.preventDefault(),
                    this.setLanguage(this.language === "en" ? "zh" : "en");
                    return
                }
                if (s === "open-settings") {
                    e.preventDefault(),
                    (o = (a = window.game) == null ? void 0 : a.openStartSettings) == null || o.call(a);
                    return
                }
            }
            if (this.stage === "checkin") {
                if (s === "back-to-waiting") {
                    e.preventDefault(),
                    Z(),
                    this.goToWaiting();
                    return
                }
                if (s === "submit-checkin") {
                    e.preventDefault(),
                    this.handleSubmit();
                    return
                }
                if (s === "gender") {
                    e.preventDefault();
                    const r = qt.find(l => l.value === t.dataset.value);
                    this.form.playerGender = (r == null ? void 0 : r.internalValue) || (r == null ? void 0 : r.value) || "male",
                    this.render();
                    return
                }
            }
            if (this.stage === "globe") {
                if (s === "back-to-checkin") {
                    e.preventDefault(),
                    Z(),
                    this.goToCheckin();
                    return
                }
                if (s === "retry-globe") {
                    e.preventDefault(),
                    Z(),
                    this.render();
                    return
                }
                if (s === "submit-country") {
                    e.preventDefault(),
                    this.handleGlobeSubmit();
                    return
                }
            }
            this.stage === "landing" && s === "enter-dashboard" && (e.preventDefault(),
            this.finalize())
        }
    }
    revealNextParagraph() {
        if (this.visibleParagraphCount >= this.waitingCopy.length)
            return;
        const e = this.visibleParagraphCount;
        if (this.visibleParagraphCount += 1,
        this.reducedMotion) {
            this.typedLengths[e] = this.waitingCopy[e].length,
            this.render();
            return
        }
        this.render();
        let t = 0;
        this.typingTimer = window.setInterval( () => {
            this.typedLengths[e] += 1,
            t += 1,
            t % 2 === 0 && us(),
            this.typedLengths[e] >= this.waitingCopy[e].length && (clearInterval(this.typingTimer),
            this.typingTimer = null),
            this.render()
        }
        , ga)
    }
    handleWaitingContinue() {
        Z();
        const e = this.visibleParagraphCount - 1;
        if (this.typingTimer && e >= 0) {
            this.typedLengths[e] = this.waitingCopy[e].length,
            clearInterval(this.typingTimer),
            this.typingTimer = null,
            this.render();
            return
        }
        if (this.visibleParagraphCount < this.waitingCopy.length) {
            this.revealNextParagraph();
            return
        }
        this.goToCheckin()
    }
    setLanguage(e) {
        const t = e === "zh" ? "zh" : "en";
        t !== this.language && (this.language = t,
        this.resetWaitingTyping(),
        Me(),
        this.render(),
        this.revealNextParagraph())
    }
    goToCheckin() {
        var e, t;
        this.typingTimer && (clearInterval(this.typingTimer),
        this.typingTimer = null),
        this.autoplayTimer && (clearTimeout(this.autoplayTimer),
        this.autoplayTimer = null),
        Ke(),
        Me(),
        this.stage = "checkin",
        this.render(),
        this.preloadGlobe(!0),
        (t = (e = this.root) == null ? void 0 : e.querySelector("#intro-player-name")) == null || t.focus()
    }
    goToStartHome() {
        const e = this.onAbort;
        if (this.destroy(),
        typeof e == "function") {
            e();
            return
        }
        window.game && typeof window.game.goToStartScreen == "function" && window.game.goToStartScreen()
    }
    goToWaiting() {
        this.landingTimer && (clearTimeout(this.landingTimer),
        this.landingTimer = null),
        this.autoplayTimer && (clearTimeout(this.autoplayTimer),
        this.autoplayTimer = null),
        this.stage = "waiting",
        this.notificationPlayed = !1,
        this.resetWaitingTyping(),
        this.render(),
        Ge({
            restart: !0
        }),
        Me(),
        this.revealNextParagraph()
    }
    validate() {
        const e = {};
        return String(this.form.playerName || "").trim() || (e.playerName = lt.nameError),
        this.errors = e,
        Object.keys(e).length === 0
    }
    validateCountry() {
        const e = {}
          , t = Oe[this.form.countryId];
        return t ? t.isRecommended || (e.countryId = lt.countryLockedError) : e.countryId = lt.countryError,
        this.errors = e,
        Object.keys(e).length === 0
    }
    focusFirstCheckinError() {
        if (!this.root || this.stage !== "checkin")
            return;
        const e = Object.keys(this.errors)[0];
        if (!e)
            return;
        const t = e === "playerName" ? this.root.querySelector("#intro-player-name") : this.root.querySelector(`[data-error-anchor="${e}"]`) || this.root.querySelector("#intro-globe-root");
        t && (t.scrollIntoView({
            behavior: this.reducedMotion ? "auto" : "smooth",
            block: "center"
        }),
        typeof t.focus == "function" && t.focus({
            preventScroll: !0
        }))
    }
    handleSubmit() {
        if (!this.validate()) {
            Le(),
            this.render(),
            window.setTimeout( () => this.focusFirstCheckinError(), 0);
            return
        }
        this.goToGlobe()
    }
    goToGlobe() {
        this.stage = "globe",
        this.errors = {},
        this.preloadGlobe(!0),
        gs(),
        hs(),
        this.render()
    }
    handleGlobeSubmit() {
        if (!this.validateCountry()) {
            Le(),
            this.render();
            return
        }
        typeof this.globeUnmount == "function" && (this.globeUnmount(),
        this.globeUnmount = null),
        this.stage = "landing",
        this.notificationPlayed = !1,
        Z(),
        this.render(),
        this.landingTimer = window.setTimeout( () => {
            fs(),
            ps(),
            this.notificationPlayed || (this.notificationPlayed = !0,
            window.setTimeout( () => ys(), this.reducedMotion ? 100 : 450))
        }
        , this.reducedMotion ? 80 : 320)
    }
    finalize() {
        var t;
        Z();
        const e = Ht(this.form.countryId);
        (t = this.onComplete) == null || t.call(this, {
            playerName: String(this.form.playerName || "").trim(),
            playerGender: this.form.playerGender,
            orientation: this.form.orientation,
            region: e,
            countryId: this.form.countryId,
            major: this.form.major
        }),
        this.destroy()
    }
    render() {
        if (!this.root)
            return;
        const e = ks(this.form.countryId || "US")
          , t = Ht(e.id || "US")
          , s = Pn(t);
        this.root.innerHTML = `
            ${this.stage === "waiting" ? this.renderWaiting() : ""}
            ${this.stage === "checkin" ? this.renderCheckin() : ""}
            ${this.stage === "globe" ? this.renderGlobe() : ""}
            ${this.stage === "landing" ? this.renderLanding(s, e) : ""}
        `,
        this.bindEvents()
    }
    renderWaiting() {
        var s, n;
        const e = this.waitingCopy.slice(0, this.visibleParagraphCount).map( (a, o) => `<p>${Q(a.slice(0, this.typedLengths[o] || 0))}</p>`).join("")
          , t = Number(((n = (s = this.settingsSystem) == null ? void 0 : s.settings) == null ? void 0 : n.musicVolume) ?? 60);
        return `
            <section class="stitch-intro stitch-intro--waiting">
                <div class="stitch-intro__bg" style="background-image:url('${ct(En)}'), url('${ct(ft)}')"></div>
                <div class="stitch-intro__shade"></div>
                <header class="stitch-intro__topbar">
                    <div class="stitch-intro__topbar-left">
                        <button type="button" class="stitch-icon-btn" data-action="go-start-home" aria-label="back to home">
                            <span class="stitch-inline-icon">←</span>
                        </button>
                        <div>
                            <span class="stitch-intro__chapter">${this.waitingUi.chapter}</span>
                            <h2>${this.waitingUi.scene}</h2>
                        </div>
                    </div>
                    <div class="stitch-intro__topbar-right">
                        <button type="button" class="stitch-pill-btn" data-action="toggle-language">${this.waitingUi.language}</button>
                        <button type="button" class="stitch-icon-btn" data-action="open-settings" aria-label="open settings">
                            <span class="stitch-inline-icon">⚙</span>
                        </button>
                    </div>
                </header>

                <main class="stitch-intro__waiting-main">
                    <div class="stitch-intro__waiting-card">${e}</div>
                    <div class="stitch-intro__waiting-controls">
                        <div class="stitch-intro__audio">
                            <span class="stitch-inline-icon">🔊</span>
                            <label>
                                <span>${this.waitingUi.ambience}</span>
                                <input id="intro-music-volume" type="range" min="0" max="100" step="1" value="${t}" />
                            </label>
                            <strong>${t}%</strong>
                        </div>
                        <div class="stitch-intro__buttons">
                            <button type="button" class="stitch-subtle-btn" data-action="jump-checkin">${this.waitingUi.skip}</button>
                            <button type="button" class="stitch-subtle-btn" data-action="autoplay">${this.waitingUi.auto}</button>
                            <button type="button" class="stitch-primary-btn" data-action="continue-waiting">${this.waitingUi.continue} <span class="stitch-inline-icon">→</span></button>
                        </div>
                    </div>
                </main>
            </section>
        `
    }
    renderCheckin() {
        const e = ot.find(a => a.value === this.form.major) || ot[0]
          , t = qt.map(a => `
            <button type="button" class="stitch-checkin__chip${this.form.playerGender === (a.internalValue || a.value) ? " is-active" : ""}" data-action="gender" data-value="${a.value}">
                ${a.label}
            </button>
        `).join("")
          , s = Ln.map(a => `
            <button type="button" class="stitch-checkin__chip${this.form.orientation === a.value ? " is-active" : ""}" data-field="orientation" data-value="${a.value}">
                ${a.label}
            </button>
        `).join("")
          , n = ot.map(a => `
            <button type="button" class="stitch-checkin__dest stitch-checkin__major${this.form.major === a.value ? " is-active" : ""}" data-field="major" data-value="${a.value}">
                <span>${a.code}</span>
                <small>${a.label}</small>
            </button>
        `).join("");
        return `
            <section class="stitch-intro stitch-intro--checkin">
                <header class="stitch-checkin__topbar">
                    <div class="stitch-checkin__topbar-left">
                        <button type="button" class="stitch-checkin__back" data-action="back-to-waiting" aria-label="back to waiting scene">
                            <span class="stitch-inline-icon">←</span>
                        </button>
                        <div class="stitch-checkin__brand">${ge.brand}</div>
                    </div>
                    <div class="stitch-checkin__icons">
                        <span class="stitch-inline-icon">👤</span>
                        <span class="stitch-inline-icon is-accent">🛫</span>
                    </div>
                </header>
                <main class="stitch-checkin__shell">
                    <h1>${ge.title}</h1>
                    <div class="stitch-checkin__viewport">
                    <div class="stitch-checkin__board">
                        <div class="stitch-checkin__main">
                            <div class="stitch-checkin__meta">
                                <div>
                                    <span>BOARDING PASS</span>
                                    <h2>${ge.className}</h2>
                                </div>
                                <div class="stitch-checkin__departure">
                                    <span>DEPARTURE</span>
                                    <strong>${ge.departure}</strong>
                                </div>
                            </div>
                            <label class="stitch-checkin__field stitch-checkin__field--name">
                                <span>请输入你的昵称</span>
                                <input id="intro-player-name" type="text" maxlength="18" placeholder="昵称" value="${Q(this.form.playerName)}" />
                                ${this.errors.playerName ? `<em>${Q(this.errors.playerName)}</em>` : ""}
                            </label>
                            <section class="stitch-checkin__section stitch-checkin__section--identity">
                            <div class="stitch-checkin__grid">
                                <div class="stitch-checkin__field" data-error-anchor="playerGender" tabindex="-1">
                                    <span>性别 / GENDER</span>
                                    <div class="stitch-checkin__chip-row stitch-checkin__chip-row--single">${t}</div>
                                </div>
                                <div class="stitch-checkin__field" data-error-anchor="orientation" tabindex="-1">
                                    <span>情感偏好 / ORIENTATION</span>
                                    <div class="stitch-checkin__chip-row stitch-checkin__chip-row--single">${s}</div>
                                </div>
                            </div>
                            </section>
                            <section class="stitch-checkin__section stitch-checkin__section--major">
                            <div class="stitch-checkin__field" data-error-anchor="major" tabindex="-1">
                                <span>专业方向 / SELECT MAJOR</span>
                                <div class="stitch-checkin__major-grid">${n}</div>
                            </div>
                            </section>
                        </div>
                        <aside class="stitch-checkin__stub">
                            <div class="stitch-checkin__barcode-panel" aria-hidden="true">
                                <div class="stitch-checkin__barcode"></div>
                            </div>
                            <small>${ge.qrLabel}</small>
                            <dl>
                                <div><dt>GATE</dt><dd>${ge.gate}</dd></div>
                                <div><dt>SEAT</dt><dd>${ge.seat}</dd></div>
                                <div><dt>CLASS</dt><dd>${Q(e.label)}</dd></div>
                            </dl>
                            <button type="button" class="stitch-checkin__boarding" data-action="submit-checkin">BOARDING <span class="stitch-inline-icon">➜</span></button>
                        </aside>
                    </div>
                    </div>
                </main>
            </section>
        `
    }
    renderGlobe() {
        return `
            <section class="stitch-intro stitch-intro--globe">
                <div class="stitch-intro__shade stitch-intro__shade--landing"></div>
                <header class="stitch-checkin__topbar">
                    <div class="stitch-checkin__topbar-left">
                        <button type="button" class="stitch-checkin__back" data-action="back-to-checkin" aria-label="back to checkin">
                            <span class="stitch-inline-icon">←</span>
                        </button>
                        <div class="stitch-checkin__brand">选择留学目的地</div>
                    </div>
                </header>
                <main class="stitch-globe__shell">
                    <div id="intro-globe-root" class="stitch-globe__root" data-error-anchor="countryId" tabindex="-1">
                        <div class="stitch-globe__loading" role="status" aria-live="polite">
                            <span class="stitch-globe__loading-orbit"></span>
                            <strong>正在加载高精度 3D 地球</strong>
                            <small>首次进入会稍等片刻，后续会走浏览器缓存。</small>
                        </div>
                    </div>
                    ${this.errors.countryId ? `<p class="stitch-globe__error">${Q(this.errors.countryId)}</p>` : ""}
                </main>
            </section>
        `
    }
    renderGlobeError(e, t="") {
        !e || this.stage !== "globe" || !e.isConnected || (e.dataset.globeError = "true",
        e.innerHTML = `
            <section class="stitch-globe-error" role="alert" aria-live="assertive">
                <span class="stitch-globe__loading-orbit"></span>
                <strong>高精度 3D 地球加载失败</strong>
                <small>${Q(t || "请重试加载 3D 地球资源。")}</small>
                <div class="stitch-globe-error__actions">
                    <button type="button" class="stitch-subtle-btn" data-action="back-to-checkin">返回</button>
                    <button type="button" class="stitch-primary-btn" data-action="retry-globe">重试高精度地球</button>
                </div>
            </section>
        `)
    }
    preloadGlobe(e=!1) {
        if (this.globePreloadPromise)
            return this.globePreloadPromise;
        if (typeof window > "u")
            return null;
        const t = () => {
            if (this.globePreloadPromise)
                return this.globePreloadPromise;
            const n = ha( () => import("./mount-B7iPV4Lx.js"), __vite__mapDeps([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]), import.meta.url)
              , a = ya.map(o => {
                const r = N(o);
                return o.endsWith(".geojson") ? fetch(r, {
                    cache: "force-cache"
                }).catch( () => null) : new Promise(l => {
                    const c = new Image;
                    c.decoding = "async",
                    c.onload = l,
                    c.onerror = l,
                    c.src = r
                }
                )
            }
            );
            return this.globePreloadPromise = Promise.allSettled([n, ...a]).then( ([o]) => {
                if (o.status === "fulfilled")
                    return o.value;
                throw o.reason
            }
            ),
            this.globePreloadPromise
        }
        ;
        return e ? t() : ((window.requestIdleCallback || (n => window.setTimeout(n, 250)))(t, {
            timeout: 1200
        }),
        this.globePreloadPromise)
    }
    renderLanding(e, t) {
        const s = {
            ...e,
            code: (t == null ? void 0 : t.id) || e.code,
            country: (t == null ? void 0 : t.fullName) || e.country,
            city: (t == null ? void 0 : t.fullName) || e.city,
            cityEn: (t == null ? void 0 : t.fullName) || e.cityEn
        }
          , n = `class="stitch-intro stitch-intro--landing stitch-intro--landing-us" style="--intro-accent:${s.accent}; --intro-accent-soft:${s.accentSoft};"`
          , a = s.headline || s.welcome || s.quote || ""
          , o = s.subheadline || s.quote || ""
          , r = s.footerLeftTitle || "Destination"
          , l = s.footerLeftStatus || s.footerLeftValue || s.footerRightValue || ""
          , c = s.footerRightLeft || s.destinationCardTitle || s.footerRightTitle || s.airport || s.cityEn
          , d = s.footerRightRight || s.destinationCardValue || (s.footerRightValue ? `${s.footerRightValue}${s.footerRightSuffix ? ` ${s.footerRightSuffix}` : ""}` : s.country);
        return `
            <section ${n}>
                <div class="stitch-intro__bg" style="background-image:url('${ct(s.background)}')"></div>
                <div class="stitch-intro__shade stitch-intro__shade--landing"></div>
                <main class="stitch-landing__main">
                    <h1><span>${Q(s.titlePrefix || "降落")}</span><em>${s.code}</em></h1>
                    <div class="stitch-landing__copy-wrap stitch-landing__copy-wrap--us">
                        <p class="stitch-landing__headline">${Q(a)}</p>
                        <div class="stitch-landing__divider"></div>
                        <p class="stitch-landing__body">${Q(o)}</p>
                    </div>
                    <button type="button" class="stitch-primary-btn stitch-landing__enter" data-action="enter-dashboard">
                        进入今日 Enter Today
                        <span class="stitch-inline-icon">→</span>
                    </button>
                </main>
                <footer class="stitch-landing__footer stitch-landing__footer--tech">
                    <div class="stitch-landing__tech-stack">
                        <span><i></i>${Q(r)}</span>
                        <span><i class="is-primary"></i>${Q(l)}</span>
                    </div>
                    <div class="stitch-landing__tech-inline">
                        <span>${Q(c)}</span>
                        <div class="stitch-landing__tech-line"></div>
                        <span>${Q(d)}</span>
                    </div>
                </footer>
            </section>
        `
    }
    bindEvents() {
        var e, t;
        if (this.root) {
            if (this.stage !== "globe" && typeof this.globeUnmount == "function" && (this.globeUnmount(),
            this.globeUnmount = null),
            this.stage !== "globe" && this.globeLoadTimer && (clearTimeout(this.globeLoadTimer),
            this.globeLoadTimer = null),
            this.stage === "waiting") {
                (e = this.root.querySelector("#intro-music-volume")) == null || e.addEventListener("input", s => {
                    var n, a;
                    (a = (n = this.settingsSystem) == null ? void 0 : n.set) == null || a.call(n, "musicVolume", Number(s.target.value)),
                    Ge({
                        restart: !0
                    })
                }
                );
                return
            }
            if (this.stage === "checkin") {
                (t = this.root.querySelector("#intro-player-name")) == null || t.addEventListener("input", s => {
                    this.form.playerName = s.target.value,
                    delete this.errors.playerName
                }
                ),
                this.root.querySelectorAll("[data-field]").forEach(s => {
                    s.addEventListener("click", () => {
                        this.form[s.dataset.field] = s.dataset.value,
                        delete this.errors[s.dataset.field],
                        this.render()
                    }
                    )
                }
                );
                return
            }
            if (this.stage === "globe") {
                const s = this.root.querySelector("#intro-globe-root");
                s && !this.globeUnmount && (this.globeLoadTimer && clearTimeout(this.globeLoadTimer),
                this.globeLoadTimer = window.setTimeout( () => {
                    this.globeLoadTimer = null,
                    !(this.stage !== "globe" || this.globeUnmount || !s.isConnected) && this.renderGlobeError(s, "3D 地球加载超时，请检查网络或浏览器 WebGL 状态后重试。")
                }
                , fa),
                this.preloadGlobe(!0).then( ({mountIntroGlobe: n}) => {
                    if (this.globeLoadTimer && (clearTimeout(this.globeLoadTimer),
                    this.globeLoadTimer = null),
                    !(this.stage !== "globe" || this.globeUnmount || !s.isConnected || s.dataset.globeError === "true"))
                        try {
                            s.replaceChildren(),
                            this.globeUnmount = n(s, {
                                selectedCountryId: this.form.countryId,
                                onCountryChange: a => {
                                    this.form.countryId = a,
                                    delete this.errors.countryId
                                }
                                ,
                                onBack: () => {
                                    Z(),
                                    this.goToCheckin()
                                }
                                ,
                                onConfirm: a => {
                                    this.form.countryId = a,
                                    this.handleGlobeSubmit()
                                }
                            })
                        } catch (a) {
                            console.warn("[IntroOverlay] 3D globe mount failed.", a),
                            this.renderGlobeError(s, "3D 地球初始化失败，请重试。")
                        }
                }
                ).catch(n => {
                    this.globeLoadTimer && (clearTimeout(this.globeLoadTimer),
                    this.globeLoadTimer = null),
                    console.warn("[IntroOverlay] 3D globe bundle failed.", n),
                    this.renderGlobeError(s, "3D 地球资源加载失败，请重试。")
                }
                ));
                return
            }
        }
    }
}
const Es = "hasSeenTutorial"
  , Ls = "hasSeenMobileWelcome";
function _a() {
    try {
        return localStorage.getItem(Es) === "true"
    } catch {
        return !1
    }
}
function dt() {
    try {
        localStorage.setItem(Es, "true")
    } catch {}
}
function Vt() {
    try {
        return localStorage.getItem(Ls) === "true"
    } catch {
        return !1
    }
}
function zt() {
    try {
        localStorage.setItem(Ls, "true")
    } catch {}
}
function de(i) {
    return new Promise(e => setTimeout(e, i))
}
function va(i, {interval: e=120, timeout: t=18e4, shouldCancel: s=null}={}) {
    return new Promise( (n, a) => {
        const o = Date.now()
          , r = setInterval( () => {
            try {
                if (typeof s == "function" && s()) {
                    clearInterval(r),
                    a(new Error("tutorial cancelled"));
                    return
                }
                if (i()) {
                    clearInterval(r),
                    n();
                    return
                }
                Date.now() - o > t && (clearInterval(r),
                a(new Error("tutorial wait timeout")))
            } catch (l) {
                clearInterval(r),
                a(l)
            }
        }
        , e)
    }
    )
}
class yi {
    constructor(e) {
        this.game = e,
        this._busy = !1,
        this._runId = 0,
        this._activeDrivers = new Set
    }
    _isMobileViewport() {
        if (typeof window > "u")
            return !1;
        try {
            return window.matchMedia("(hover: none) and (pointer: coarse)").matches && window.innerWidth <= 1279
        } catch {
            return window.innerWidth <= 1279
        }
    }
    shouldAutoStart() {
        if (this._isMobileViewport() || _a())
            return !1;
        const e = this.game.gameState.state;
        return e.year === 1 && e.month === 9 && e.monthTotal === 1
    }
    async maybeStartAfterGameScreen() {
        if (this._isMobileViewport()) {
            if (this._busy)
                return;
            await this._startMobileTour(!0);
            return
        }
        !this.shouldAutoStart() || this._busy || await this._startTour(!0)
    }
    async replayTour() {
        if (this._busy && this._cancelCurrentRun(),
        this._isMobileViewport()) {
            this._cancelCurrentRun(),
            await this._startMobileTour(!1);
            return
        }
        await this._startTour(!1)
    }
    async _maybeShowMobileWelcomeModal(e) {
        if (!this._isMobileViewport() || e && Vt())
            return;
        await de(380);
        const t = `<div class="story-text mobile-welcome-copy">
            <p>角色<strong>属性</strong>在<strong>上侧</strong>，<strong>行动日志</strong>在中间。</p>
            <p>点击右下角 <strong>📱</strong> 打开手机：租房、求职，以及打开「数值指南」查看各行动数值。</p>
            <p>每月点完本月行动后，按底部<strong>「结束本月」</strong>推进时间与结算。</p>
        </div>`
          , s = [{
            text: "知道了",
            cb: () => {
                e && (zt(),
                dt())
            }
        }];
        this.game.modal.showCustom("👋 欢迎", t, s, "type-positive", {
            force: !0
        })
    }
    _isMobilePhoneExpanded() {
        const e = document.getElementById("phone-wrapper");
        return !!e && !e.classList.contains("collapsed")
    }
    _collapseMobilePhone() {
        const e = document.getElementById("phone-wrapper");
        !e || !this._isMobileViewport() || (e.classList.add("collapsed"),
        typeof document < "u" && document.body.classList.remove("phone-mobile-expanded"))
    }
    _expandMobilePhone() {
        const e = document.getElementById("phone-wrapper");
        !e || !this._isMobileViewport() || (e.classList.remove("collapsed"),
        typeof document < "u" && document.body.classList.add("phone-mobile-expanded"))
    }
    _phoneSub() {
        var e;
        return (e = this.game.gameScreen) == null ? void 0 : e.phoneSub
    }
    _ensureHub() {
        this.game.applyNavigation("phone", "hub", {
            push: !1
        }),
        this.game.refreshUI()
    }
    _registerDriver(e) {
        return this._activeDrivers.add(e),
        e
    }
    _destroyDriver(e) {
        if (e) {
            try {
                e.destroy()
            } catch {}
            this._activeDrivers.delete(e)
        }
    }
    _cancelCurrentRun() {
        this._runId += 1;
        for (const e of [...this._activeDrivers])
            this._destroyDriver(e);
        this._busy = !1,
        typeof window < "u" && (window.__IMMERSIVE_TUTORIAL_ACTIVE__ = !1)
    }
    _isCancelled(e) {
        return e !== this._runId
    }
    async _startMobileTour(e) {
        if (!this._isMobileViewport() || e && Vt())
            return;
        const t = ++this._runId;
        this._busy = !0,
        typeof window < "u" && (window.__IMMERSIVE_TUTORIAL_ACTIVE__ = !0);
        try {
            if (await de(220),
            await this._runMobileTourSteps(t),
            this._isCancelled(t))
                return;
            const s = `<div class="story-text tutorial-final-copy">
                <p>移动端现在也能完整走完上手引导了。先稳住生存，再经营 GPA、健康和工作，最后把经历都堆进简历里。</p>
                <p><strong>如果中途忘了怎么玩，随时可以回到手机里的「留学指南」，或者重播这套沉浸式教程。</strong></p>
            </div>`;
            for (const n of [...this._activeDrivers])
                this._destroyDriver(n);
            typeof document < "u" && (document.body.classList.remove("driver-active", "driver-fade", "driver-simple"),
            document.querySelectorAll(".driver-overlay").forEach(n => n.remove())),
            this.game.modal.showCustom("📱 移动端引导完成", s, [{
                text: "开始",
                cb: () => {
                    e && (zt(),
                    dt()),
                    typeof window < "u" && (window.__IMMERSIVE_TUTORIAL_ACTIVE__ = !1)
                }
            }], "type-positive", {
                force: !0
            })
        } catch (s) {
            String((s == null ? void 0 : s.message) || "").includes("cancelled") || console.warn("[TutorialDriver][mobile]", s),
            typeof window < "u" && (window.__IMMERSIVE_TUTORIAL_ACTIVE__ = !1),
            this.game.modal.flushDeferredAfterTutorial()
        } finally {
            for (const s of [...this._activeDrivers])
                this._destroyDriver(s);
            t === this._runId && (this._busy = !1)
        }
    }
    async _startTour(e) {
        if (this._isMobileViewport())
            return;
        const t = ++this._runId;
        this._busy = !0,
        typeof window < "u" && (window.__IMMERSIVE_TUTORIAL_ACTIVE__ = !0);
        try {
            if (await de(220),
            await this._runTourSteps(t),
            this._isCancelled(t))
                return;
            const s = `<div class="story-text tutorial-final-copy">
                <p>看着这份空白的简历了吗？你接下来的目标，就是疯狂搞钱、维持健康，用大厂 Offer 和金色最高荣誉印章填满它！如果不努力，你毕业时只能是个「资深洗碗工」。</p>
                <p><strong>现在，去点击底部的【结束本月】开始你的受苦之旅吧！</strong></p>
            </div>`;
            for (const n of [...this._activeDrivers])
                this._destroyDriver(n);
            typeof document < "u" && (document.body.classList.remove("driver-active", "driver-fade", "driver-simple"),
            document.querySelectorAll(".driver-overlay").forEach(n => n.remove())),
            this.game.modal.showCustom("🎓 欢迎真实留学", s, [{
                text: "开冲",
                cb: () => {
                    typeof window < "u" && (window.__IMMERSIVE_TUTORIAL_ACTIVE__ = !1),
                    e && dt(),
                    this.game.modal._deferFlushUntilAfterClose = !0
                }
            }], "type-positive", {
                force: !0,
                revealPhone: !0
            })
        } catch (s) {
            String((s == null ? void 0 : s.message) || "").includes("cancelled") || console.warn("[TutorialDriver]", s),
            typeof window < "u" && (window.__IMMERSIVE_TUTORIAL_ACTIVE__ = !1),
            this.game.modal.flushDeferredAfterTutorial()
        } finally {
            for (const s of [...this._activeDrivers])
                this._destroyDriver(s);
            t === this._runId && (this._busy = !1)
        }
    }
    async _runTourSteps(e) {
        this._ensureHub(),
        await this._introTour(e),
        await this._highlightUntil(e, '[data-tutorial="hub-map"]', "🗺️ 先逛地图", "你在异国他乡落地了。先打开【地图】看看这座城市。", () => this._phoneSub() === "map"),
        await this._phoneOnlyStep(e, "🏠 租房", "不租房会流落街头！请在地图里点击【租房网站】看看房价；进入后可自由操作。", () => this._phoneSub() === "housing"),
        await this._phoneOnlyStep(e, "↩️ 返回地图", "租房页面可自由查看；准备好后请自行返回地图。", () => this._phoneSub() === "map"),
        await this._phoneOnlyStep(e, "🛒 商店", "这里可以买道具续命。请点击【商店】查看并自由操作。", () => this._phoneSub() === "shop"),
        await this._phoneOnlyStep(e, "↩️ 返回地图", "商店页面可自由查看；看完后请自行返回地图。", () => this._phoneSub() === "map"),
        await this._phoneOnlyStep(e, "📈 交易所", "有闲钱可以来这里投资。请点击【交易所】查看并自由操作。", () => this._phoneSub() === "stocks"),
        await this._phoneOnlyStep(e, "↩️ 返回地图", "交易所页面可自由查看；看完后请自行返回地图。", () => this._phoneSub() === "map"),
        await this._phoneOnlyStep(e, "🏥 医院", "生病了必须来这里花钱治疗。请点击【医院】查看并自由操作。", () => this._phoneSub() === "hospital"),
        await this._phoneOnlyStep(e, "↩️ 返回地图", "医院页面可自由查看；看完后请自行返回地图。", () => this._phoneSub() === "map"),
        await this._highlightUntil(e, "#home-bar-hitbox", "🏠 回主屏幕", "现在请点击 Home 键，自己返回手机桌面。", () => this._phoneSub() === "hub", {
            side: "top",
            align: "center"
        }),
        await this._highlightUntil(e, '[data-tutorial="hub-linkedin"]', "💼 领英", "请先打开领英。默认页会显示当前工作，也可以申请加薪。", () => this._phoneSub() === "linkedin"),
        await this._phoneOnlyStep(e, "📌 领英默认页", "当前页是你的工作页，可查看当前工作并尝试【申请加薪】。看完后请在领英里点击【职位市场】。", () => {
            var t;
            return this._phoneSub() === "linkedin" && ((t = this.game.gameScreen) == null ? void 0 : t.linkedinTab) === "market"
        }
        ),
        await this._phoneOnlyStep(e, "🧭 职位市场", "这里能看到岗位解锁节奏：大一暑假起可以开始找工作，后续可投递更高薪岗位。看完后请自行点 Home 返回桌面。", () => this._phoneSub() === "hub"),
        await this._highlightUntil(e, '[data-tutorial="hub-tinder"]', "❤️ Tinder", "这是你的精神寄托之一。先打开看一眼，页面内可自由操作。", () => this._phoneSub() === "dating"),
        await this._phoneOnlyStep(e, "↩️ 回桌面", "Tinder 页面可自由操作；看完后请自行点 Home 返回桌面。", () => this._phoneSub() === "hub"),
        await this._highlightUntil(e, '[data-tutorial="dock-social"]', "💬 朋友圈", "看大家吐槽、看自己的动态。先点开看看，页面内可自由操作。", () => this._phoneSub() === "social"),
        await this._phoneOnlyStep(e, "↩️ 回桌面", "朋友圈页面可自由操作；看完后请自行点 Home 返回桌面。", () => this._phoneSub() === "hub"),
        await this._highlightUntil(e, '[data-tutorial="dock-contacts"]', "📞 通讯录", "维系人际关系很关键。先点开看看，页面内可自由操作。", () => this._phoneSub() === "contacts"),
        await this._phoneOnlyStep(e, "↩️ 回桌面", "通讯录页面可自由操作；看完后请自行点 Home 返回桌面，进入最终步骤。", () => this._phoneSub() === "hub"),
        await this._highlightUntil(e, '[data-tutorial="hub-resume"]', "📄 简历（最重要）", "这就是你四年的终极目标！现在打开它。", () => this._phoneSub() === "resume")
    }
    async _runMobileTourSteps(e) {
        this._ensureHub(),
        this._collapseMobilePhone(),
        await this._introMobileTour(e),
        await this._highlightUntil(e, "#phone-mobile-fab", "📱 打开手机", "先点右下角的手机，把你的生活系统打开。之后地图、求职、社交和简历都会在这里完成。", () => this._isMobilePhoneExpanded(), {
            side: "top",
            align: "center"
        }),
        await de(180),
        await this._highlightUntil(e, '[data-tutorial="hub-map"]', "🗺️ 先逛地图", "你已经到了异国他乡。先打开地图看看这座城市，后面租房、商店、医院和交易所都会从这里进入。", () => this._phoneSub() === "map"),
        await this._phoneOnlyStep(e, "🏠 租房", "不租房会直接影响生存。请在地图里点击租房网站，进去以后可以自由查看和操作。", () => this._phoneSub() === "housing"),
        await this._phoneOnlyStep(e, "↩ 返回地图", "看完租房后，请自己回到地图，继续下一步。", () => this._phoneSub() === "map"),
        await this._phoneOnlyStep(e, "🛒 商店", "这里可以买道具续命。请点击商店，进去以后可以自由查看。", () => this._phoneSub() === "shop"),
        await this._phoneOnlyStep(e, "↩ 返回地图", "看完商店后，请自己回到地图。", () => this._phoneSub() === "map"),
        await this._phoneOnlyStep(e, "📈 交易所", "有闲钱时可以来这里投资。现在先进去熟悉一下。", () => this._phoneSub() === "stocks"),
        await this._phoneOnlyStep(e, "↩ 返回地图", "看完交易所后，请自己回到地图。", () => this._phoneSub() === "map"),
        await this._phoneOnlyStep(e, "🏥 医院", "健康出问题时必须来这里花钱治疗。现在先进去看看。", () => this._phoneSub() === "hospital"),
        await this._phoneOnlyStep(e, "↩ 返回地图", "看完医院后，请自己回到地图。", () => this._phoneSub() === "map"),
        await this._highlightUntil(e, "#home-bar-hitbox", "🏠 回主屏幕", "现在请点底部 Home 手势条，自己回到手机桌面。", () => this._phoneSub() === "hub", {
            side: "top",
            align: "center"
        }),
        await this._highlightUntil(e, '[data-tutorial="hub-linkedin"]', "💼 领英", "先打开领英。默认页会展示你当前的工作，也可以申请加薪。", () => this._phoneSub() === "linkedin"),
        await this._phoneOnlyStep(e, "💼 领英默认页", "这里是你的工作页，可以查看当前工作并尝试申请加薪。看完后请在领英里切到职位市场。", () => {
            var t;
            return this._phoneSub() === "linkedin" && ((t = this.game.gameScreen) == null ? void 0 : t.linkedinTab) === "market"
        }
        ),
        await this._phoneOnlyStep(e, "🧭 职位市场", "这里能看到岗位解锁节奏。看完后请自己点 Home 回到桌面。", () => this._phoneSub() === "hub"),
        await this._highlightUntil(e, '[data-tutorial="hub-tinder"]', "❤️ Tinder", "这是你精神寄托的一部分。先打开看看，页面内可以自由操作。", () => this._phoneSub() === "dating"),
        await this._phoneOnlyStep(e, "↩ 回桌面", "看完 Tinder 后，请自己点 Home 回到桌面。", () => this._phoneSub() === "hub"),
        await this._highlightUntil(e, '[data-tutorial="dock-social"]', "📰 朋友圈", "这里能看大家吐槽和自己的动态。先点开看看。", () => this._phoneSub() === "social"),
        await this._phoneOnlyStep(e, "↩ 回桌面", "看完朋友圈后，请自己点 Home 回到桌面。", () => this._phoneSub() === "hub"),
        await this._highlightUntil(e, '[data-tutorial="dock-contacts"]', "📞 通讯录", "人际关系很关键。先点开看看，页面内可以自由操作。", () => this._phoneSub() === "contacts"),
        await this._phoneOnlyStep(e, "↩ 回桌面", "看完通讯录后，请自己点 Home 回到桌面，进入最后一步。", () => this._phoneSub() === "hub"),
        await this._highlightUntil(e, '[data-tutorial="hub-resume"]', "📄 简历", "这就是你四年后的终局目标。现在打开它，完成移动端教程。", () => this._phoneSub() === "resume")
    }
    async _introTour(e) {
        await new Promise( (t, s) => {
            if (this._isCancelled(e)) {
                s(new Error("tutorial cancelled"));
                return
            }
            const n = this._registerDriver(Be({
                animate: !0,
                overlayOpacity: .72,
                overlayColor: "#000000",
                smoothScroll: !0,
                allowClose: !1,
                allowKeyboardControl: !1,
                showProgress: !0,
                progressText: "{{current}} / {{total}}",
                showButtons: ["next", "previous"],
                nextBtnText: "下一步",
                prevBtnText: "上一步",
                doneBtnText: "继续",
                onDestroyed: () => {
                    this._activeDrivers.delete(n),
                    t()
                }
                ,
                steps: [{
                    element: "#tutorial-stats",
                    popover: {
                        title: "❤️ 你的生命线",
                        description: "这里是你的体力、心态、健康和资金状态。资金或健康归零会直接 Game Over！",
                        side: "right",
                        align: "start"
                    }
                }, {
                    element: "#tutorial-log",
                    popover: {
                        title: "📜 命运的刻痕",
                        description: "所有扣费、挂科和关键选择都会记在这里。记得留意学费和危机提示。",
                        side: "right",
                        align: "start"
                    }
                }, {
                    element: "#tutorial-daily",
                    popover: {
                        title: "💼 艰难的抉择",
                        description: "每个月行动有限，先看体力再决策。前期优先稳住 GPA 与生存。",
                        side: "left",
                        align: "start"
                    }
                }, {
                    element: "#tutorial-phone",
                    popover: {
                        title: "📱 你的精神寄托",
                        description: "租房、看病、求职、社交都在这台手机里完成。",
                        side: "left",
                        align: "center"
                    }
                }, {
                    element: "#btn-next-month-global",
                    popover: {
                        title: "⏳ 时间流逝",
                        description: "安排好行动后，点这里结束本月并结算费用与事件。",
                        side: "top",
                        align: "center"
                    }
                }]
            }));
            n.drive(0)
        }
        ),
        await de(180)
    }
    async _introMobileTour(e) {
        await new Promise( (t, s) => {
            if (this._isCancelled(e)) {
                s(new Error("tutorial cancelled"));
                return
            }
            const n = this._registerDriver(Be({
                animate: !0,
                overlayOpacity: .72,
                overlayColor: "#000000",
                smoothScroll: !0,
                allowClose: !1,
                allowKeyboardControl: !1,
                showProgress: !0,
                progressText: "{{current}} / {{total}}",
                showButtons: ["next", "previous"],
                nextBtnText: "下一步",
                prevBtnText: "上一步",
                doneBtnText: "继续",
                onDestroyed: () => {
                    this._activeDrivers.delete(n),
                    t()
                }
                ,
                steps: [{
                    element: "#tutorial-stats",
                    popover: {
                        title: "❤️ 生存四条",
                        description: "体力、心态、健康和金钱就是你的底线，任何一条跌得太狠，这局都会变难。",
                        side: "bottom",
                        align: "start"
                    }
                }, {
                    element: "#tutorial-log",
                    popover: {
                        title: "🧾 月度变化",
                        description: "每个月发生了什么、扣了多少钱、状态怎么波动，都会记在这里。",
                        side: "top",
                        align: "center"
                    }
                }, {
                    element: "#tutorial-daily",
                    popover: {
                        title: "🎯 每月行动",
                        description: "学习、打工、休息和社交都从这里安排。你每个月的命运，基本就从这里推出来。",
                        side: "top",
                        align: "center"
                    }
                }, {
                    element: "#btn-next-month-global",
                    popover: {
                        title: "⏭ 结束本月",
                        description: "行动选完以后，记得按这里推进时间。没有推月，游戏就不会往前走。",
                        side: "top",
                        align: "center"
                    }
                }, {
                    element: "#phone-mobile-fab",
                    popover: {
                        title: "📱 手机入口",
                        description: "最后，右下角这个悬浮球就是移动端手机入口。下一步我们就用它打开真正的生活功能。",
                        side: "top",
                        align: "center"
                    }
                }]
            }));
            n.drive(0)
        }
        ),
        await de(180)
    }
    async _phoneHubMobileTour(e) {
        await new Promise( (t, s) => {
            if (this._isCancelled(e)) {
                s(new Error("tutorial cancelled"));
                return
            }
            const n = this._registerDriver(Be({
                animate: !0,
                overlayOpacity: .72,
                overlayColor: "#000000",
                smoothScroll: !0,
                allowClose: !0,
                allowKeyboardControl: !1,
                showProgress: !0,
                progressText: "{{current}} / {{total}}",
                showButtons: ["next", "previous", "close"],
                nextBtnText: "下一步",
                prevBtnText: "上一步",
                doneBtnText: "完成",
                onDestroyed: () => {
                    this._activeDrivers.delete(n),
                    t()
                }
                ,
                steps: [{
                    element: "#tutorial-phone",
                    popover: {
                        title: "📱 手机主控台",
                        description: "我已经帮你把手机展开了。之后在移动端，右下角悬浮球就是它的入口，点外层遮罩或底部 Home 都能退出。",
                        side: "left",
                        align: "center"
                    }
                }, {
                    element: '[data-tutorial="hub-map"]',
                    popover: {
                        title: "🗺️ 地图",
                        description: "租房、商店、医院和交易所都从地图进去。开局最优先记住的是租房和医院。",
                        side: "left",
                        align: "center"
                    }
                }, {
                    element: '[data-tutorial="hub-linkedin"]',
                    popover: {
                        title: "💼 领英",
                        description: "找工作、申请加薪、后期换更好的岗位，核心都在这里推进。",
                        side: "left",
                        align: "center"
                    }
                }, {
                    element: '[data-tutorial="hub-resume"]',
                    popover: {
                        title: "📄 简历",
                        description: "这是你四年后交卷的地方。经历、实习和 Offer 最终都会反映在这里。",
                        side: "left",
                        align: "center"
                    }
                }, {
                    element: "#home-bar-hitbox",
                    popover: {
                        title: "↩ 返回桌面",
                        description: "手机底部这条 Home 手势条可以回到手机桌面；悬浮手机模式下，点外层空白也能收起手机。",
                        side: "top",
                        align: "center"
                    }
                }]
            }));
            n.drive(0)
        }
        ),
        await de(160)
    }
    async _phoneOnlyStep(e, t, s, n) {
        await this._highlightUntil(e, "#tutorial-phone", t, s, n, {
            side: "left",
            align: "center"
        })
    }
    async _highlightUntil(e, t, s, n, a, o={}) {
        if (this._isCancelled(e))
            throw new Error("tutorial cancelled");
        const r = document.querySelector(t);
        if (!r)
            throw new Error(`tutorial target missing: ${t}`);
        const l = this._registerDriver(Be({
            animate: !0,
            overlayOpacity: .72,
            overlayColor: "#000000",
            allowClose: !1,
            allowKeyboardControl: !1,
            showProgress: !1
        }));
        l.highlight({
            element: r,
            popover: {
                title: s,
                description: n,
                showButtons: [],
                showProgress: !1,
                side: o.side || "bottom",
                align: o.align || "center"
            }
        }),
        await va(a, {
            interval: 120,
            timeout: 18e4,
            shouldCancel: () => this._isCancelled(e)
        }),
        this._destroyDriver(l),
        await de(160)
    }
}
export {Z as $, ai as A, qa as B, te as C, ue as D, ls as E, Xe as F, Ze as G, en as H, tn as I, C as J, Je as K, ka as L, qs as M, Bs as N, Ta as O, vs as P, bs as Q, I as R, Pe as S, ws as T, dt as U, zt as V, Gn as W, Da as X, ze as Y, Le as Z, Ve as _, Qt as a, oi as a0, li as a1, Ua as a2, Ga as a3, ja as a4, Oa as a5, ri as a6, Ye as a7, Fa as a8, Ka as a9, Oe as aA, Va as aa, za as ab, Wa as ac, Ja as ad, Qa as ae, Xa as af, fi as ag, Za as ah, si as ai, ii as aj, ci as ak, di as al, ui as am, hi as an, pi as ao, mi as ap, gi as aq, yi as ar, Rn as as, La as at, Ht as au, ei as av, Ya as aw, We as ax, ti as ay, N as az, Fe as b, Ea as c, Sa as d, Qe as e, w as f, Aa as g, xa as h, Ma as i, un as j, $t as k, $a as l, Ha as m, os as n, Ws as o, Pa as p, Fn as q, A as r, Ca as s, Vs as t, Ia as u, Ra as v, Na as w, ht as x, ni as y, Ba as z};
