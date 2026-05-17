// ============================================
// 心动小镇攻略站 - 双语翻译系统
// Heartopia Tips - Bilingual Translation System
// ============================================

const translations = {
  // 公告 / Announcement
  '🎉 最新': '🎉 NEW',
  '5月礼包码已更新！点击': 'May redemption codes updated! Click',
  '查看礼包码': 'View Codes',
  '领取专属奖励 →': 'to claim exclusive rewards →',

  // 导航 / Navigation
  '🏡 心动小镇攻略': '🏡 Heartopia Guide',
  '新手': 'Beginner',
  '爱好': 'Hobbies',
  '鱼类': 'Fish',
  'NPC': 'NPC',
  '计算器': 'Calculator',
  '攻略': 'Guides',
  '礼包码': 'Codes',

  // Hero
  '✨ 心动小镇 · Heartopia': '✨ Heartopia Game Guide',
  '心动小镇': 'Heartopia',
  '全攻略指南': 'Complete Guide',
  '新手入坑 · 爱好升级 · 资源收集 · 礼包码兑换': 'Beginner Tips · Hobby Mastery · Resource Collection · Code Redemption',
  '让你在海滨小镇的生活更加丰富多彩！': 'Make your seaside town life vibrant and colorful!',
  '🌟 新手入门': '🌟 Get Started',
  '🎯 爱好攻略': '🎯 Hobby Guides',

  // 快速导航 / Quick Nav
  '新手指南': 'Beginner Guide',
  '爱好系统': 'Hobby System',
  '鱼类图鉴': 'Fish Dex',
  'NPC好感': 'NPC Affinity',
  '收益计算': 'Income Calc',

  // 新手指南 / Beginner
  '📖 新手指南': '📖 Beginner Guide',
  '从零开始，打造属于你的心动小镇生活': 'Start from zero and build your perfect Heartopia life',

  '🌱 先从园艺开始': '🌱 Start with Gardening',
  '园艺是游戏第一个爱好，也是整个经济体系的基础。跟随导师 Blanc 学习种植，收获的作物可用于烹饪和出售赚取金币。': 'Gardening is the first hobby and the foundation of the economy. Follow mentor Blanc to learn planting; crops can be cooked or sold for gold.',

  '📋 每日完成任务': '📋 Complete Daily Tasks',
  '坚持每天完成日常任务（浇水5次、钓3条鱼、跟邻居打招呼），可获得金币、爱好升级券和活动积分，积分可开启每日宝箱。': 'Daily tasks (water 5 times, catch 3 fish, greet neighbors) reward gold, hobby tokens and event points to unlock daily chests.',

  '💰 高效赚金攻略': '💰 Efficient Gold-Making',
  '钓鱼 + 烹饪组合是最佳赚金手段。将钓到的鱼烹饪成菜肴后出售，价值翻倍。同时积累园艺收获用于料理食材。': 'Fishing + Cooking is the best money combo. Cook fish into dishes to double their sale price. Use garden harvests as cooking ingredients.',

  '🏠 优先升级房屋': '🏠 Upgrade Your House First',
  '扩展房屋空间可以放置更多家具和设施，提升生活品质和功能。每次升级都会解锁新的建造和装饰选项。': 'Expanding your house allows more furniture and facilities, improving life quality. Each upgrade unlocks new building and decoration options.',

  '👥 多交朋友互动': '👥 Make Friends',
  '与镇上49位NPC角色互动、送礼可提升好感度，解锁专属剧情和奖励。与其他玩家一起钓鱼、做饭可加速进度。': 'Interact and gift the 49 NPCs to raise affinity, unlocking exclusive stories and rewards. Co-op fishing/cooking with other players speeds up progress.',

  '🎯 爱好联动最大化': '🎯 Maximize Hobby Synergy',
  '7大爱好相互联动：钓鱼→烹饪、园艺→烹饪、捕虫→收集奖励。优先升级相互配合的爱好，效率翻倍！': '7 hobbies interlink: Fishing→Cooking, Gardening→Cooking, Bug Catching→Rewards. Level up complementary hobbies for double efficiency!',

  // 爱好系统 / Hobbies
  '🎭 七大爱好系统': '🎭 Seven Hobby Systems',
  '爱好是心动小镇的核心玩法，各爱好相互联动，共同构建你的小镇生活': 'Hobbies are core gameplay—they interlink to build your unique town life',

  '钓鱼': 'Fishing',
  '在全镇14处钓鱼地点探索98种鱼类。从普通小鱼到传说级午夜锦鲤，技巧和耐心缺一不可。': 'Explore 98 fish species across 14 fishing spots. From common fish to legendary Midnight Koi—skill and patience required.',
  '🐟 98种鱼类': '🐟 98 species',
  '📍 14个钓点': '📍 14 spots',
  '💰 稳定收入': '💰 Steady income',
  '📌 核心技巧': '📌 Key Tips',
  '不同时间段、天气会出现不同鱼种': 'Different fish appear by time and weather',
  '升级钓竿可解锁稀有鱼类区域': 'Upgrade rods to unlock rare fishing zones',
  '钓到的鱼可直接出售或用于烹饪': 'Sell fish directly or use them for cooking',
  '传说级鱼类在特定地点限时出现': 'Legendary fish appear at specific times and places',

  '园艺': 'Gardening',
  '游戏第一爱好，整个经济体系的基石。种植各类蔬菜水果，为烹饪提供食材，也是最稳定的金币来源。': 'The first hobby and economic foundation. Grow vegetables and fruits for cooking ingredients—a stable gold source.',
  '🥕 多种作物': '🥕 Many crops',
  '📅 季节限定': '📅 Seasonal',
  '🍴 食材来源': '🍴 Ingredients',
  '跟随导师 Blanc 完成基础教学任务': 'Follow mentor Blanc for basic tutorials',
  '定时浇水可加速作物生长': 'Watering on time speeds up growth',
  '升级农具可同时照料更多作物': 'Upgraded tools tend more crops at once',
  '季节性作物稀缺，高价值优先种': 'Seasonal crops are rare—plant high-value ones first',

  '烹饪': 'Cooking',
  '利用钓到的鱼和种植的蔬菜制作98道精美菜肴。烹饪出的食物售价远高于原材料，是进阶赚金利器。': 'Use fish and crops to cook 98 delicious dishes. Cooked food sells for much more than raw ingredients—an advanced money-maker.',
  '🍽️ 98道食谱': '🍽️ 98 recipes',
  '💎 高售价': '💎 High price',
  '🔗 联动钓鱼/园艺': '🔗 Links to Fishing/Gardening',
  '先解锁更多食谱再批量烹饪': 'Unlock more recipes before batch cooking',
  '稀有食材菜肴售价翻倍': 'Rare-ingredient dishes sell for double',
  '烹饪等级提升解锁新菜谱': 'Higher cooking level unlocks new recipes',
  '可为NPC制作喜爱的菜肴提升好感': 'Cook NPCs their favorite dishes to raise affinity',

  '捕虫': 'Bug Catching',
  '全镇探索76种昆虫，完成收集图鉴获得升级材料和成就奖励。不同季节、时间段有不同昆虫出没。': 'Explore 76 insects townwide. Completing the collection unlocks upgrade materials and achievement rewards.',
  '🦗 76种昆虫': '🦗 76 species',
  '🌙 时间限定': '🌙 Time-limited',
  '🎖️ 收集奖励': '🎖️ Collection rewards',
  '夜间和雨天有特殊昆虫出现': 'Special bugs appear at night and rainy days',
  '完成收集分类可获得升级材料': 'Completing categories grants upgrade materials',
  '轻声靠近虫子避免惊跑': 'Approach quietly to avoid scaring them',

  '观鸟': 'Birdwatching',
  '记录小镇68种鸟类，使用望远镜在各处静静观察。完成观鸟图鉴解锁专属装饰和称号。': 'Record 68 bird species using binoculars. Completing the bird dex unlocks exclusive decorations and titles.',
  '🦜 68种鸟类': '🦜 68 species',
  '🔭 望远镜工具': '🔭 Binoculars',
  '🏆 专属称号': '🏆 Exclusive titles',
  '清晨是鸟类活动最活跃的时段': 'Birds are most active in early morning',
  '不同地貌区域有不同鸟类分布': 'Different terrains have different birds',
  '升级望远镜可发现更远处的鸟': 'Upgraded binoculars spot distant birds',

  '养宠': 'Pet Keeping',
  '领养可爱宠物陪伴小镇生活，日常喂食互动提升亲密度，解锁宠物专属动作和家居装饰。': 'Adopt cute pets for company. Daily feeding and interaction raise intimacy and unlock pet animations and decor.',
  '🐾 多种宠物': '🐾 Many pets',
  '❤️ 亲密度系统': '❤️ Intimacy system',
  '🎀 专属装饰': '🎀 Exclusive decor',
  '每日定时喂食保持宠物心情': 'Feed pets on time to keep them happy',
  '带宠物外出散步提升亲密度更快': 'Walking outside raises intimacy faster',
  '满亲密度宠物会赠送特殊礼物': 'Max-affinity pets give special gifts',

  '建造装饰': 'Building & Decor',
  '自由设计房屋内外装饰，从家具摆放到庭院布局，打造完全属于你的梦想小窝，还可以和朋友互访参观。': 'Freely design your home inside and out. Visit friends houses for inspiration.',
  '🛋️ 海量家具': '🛋️ Tons of furniture',
  '🎨 自由布局': '🎨 Free layout',
  '👀 好友参观': '👀 Friend visits',
  '先规划整体风格再购买家具': 'Plan a style before buying furniture',
  '参加限时活动获取专属装饰': 'Join events for exclusive decorations',
  '好友参观可互换家具灵感': 'Visit friends to share decor ideas',

  // 鱼类图鉴 / Fish Dex
  '🐟 鱼类图鉴': '🐟 Fish Encyclopedia',
  '常见与稀有鱼类一览，按时间、地点、稀有度速查': 'Quick lookup of common and rare fish by time, location and rarity',
  '稀有度：': 'Rarity:',
  '时间：': 'Time:',
  '全部': 'All',
  '普通': 'Common',
  '稀有': 'Rare',
  '传说': 'Legend',
  '白天': 'Day',
  '夜晚': 'Night',

  '鱼名': 'Fish Name',
  '钓点': 'Location',
  '时间': 'Time',
  '建议售价': 'Suggested Price',

  '🐟 普通鲤鱼': '🐟 Common Carp',
  '小镇河边 / 池塘': 'Town River / Pond',
  '全天': 'All day',
  '50 金币': '50 G',
  '🐠 鲈鱼': '🐠 Sea Bass',
  '海滨码头': 'Seaside Dock',
  '80 金币': '80 G',
  '🐡 河豚': '🐡 Pufferfish',
  '海滨深水区': 'Seaside Deep Water',
  '120 金币': '120 G',
  '🐟 金枪鱼': '🐟 Tuna',
  '北岸深水区': 'North Coast Deep Water',
  '清晨/傍晚': 'Dawn / Dusk',
  '320 金币': '320 G',
  '🌈 彩虹鳟鱼': '🌈 Rainbow Trout',
  '山涧瀑布': 'Mountain Waterfall',
  '白天 · 雨天': 'Day · Rainy',
  '450 金币': '450 G',
  '🦑 章鱼': '🦑 Octopus',
  '夜晚海港': 'Night Harbor',
  '380 金币': '380 G',
  '🦈 小型鲨鱼': '🦈 Small Shark',
  '外海钓点': 'Open Sea',
  '620 金币': '620 G',
  '🌙 午夜锦鲤': '🌙 Midnight Koi',
  '凌晨 0:00 - 4:00': '0:00 - 4:00 AM',
  '1500 金币': '1,500 G',
  '🐉 金龙鱼': '🐉 Golden Dragon Fish',
  '东方神社池': 'Eastern Shrine Pool',
  '满月之日': 'Full Moon Day',
  '2200 金币': '2,200 G',
  '👻 幽灵鱼': '👻 Ghost Fish',
  '迷雾湖': 'Mist Lake',
  '雾天限定': 'Foggy days only',
  '1800 金币': '1,800 G',
  '⭐ 流星鱼': '⭐ Meteor Fish',
  '山顶湖泊': 'Mountain Top Lake',
  '夜晚 · 流星雨活动': 'Night · Meteor Shower Event',
  '2500 金币': '2,500 G',
  '🍀 锦鲤': '🍀 Koi',
  '小镇池塘': 'Town Pond',
  '春季限定': 'Spring only',
  '500 金币': '500 G',

  '💡 售价为参考值，实际游戏中根据等级和市场行情会有浮动。烹饪后售价通常翻倍！': '💡 Prices are estimates—actual values vary by level and market. Cooked dishes sell for double!',

  // NPC
  '👥 NPC 好感度速查': '👥 NPC Affinity Cheatsheet',
  '送对礼物快速提升好感度，解锁专属剧情和奖励': 'Give the right gift to quickly raise affinity, unlocking exclusive stories and rewards',
  '🔍 输入 NPC 名字搜索（如 Blanc）': '🔍 Search NPC name (e.g. Blanc)',
  '职业：': 'Role:',
  '钓鱼': 'Fishing',
  '厨师': 'Chef',
  '其他': 'Other',
  '身份': 'Role',
  '💝 最爱礼物': '💝 Loves',
  '👍 喜欢礼物': '👍 Likes',
  '👎 讨厌礼物': '👎 Hates',

  '园艺导师': 'Garden Mentor',
  '稀有种子、水仙花': 'Rare Seeds, Daffodils',
  '新鲜蔬菜、园艺工具': 'Fresh Vegetables, Tools',
  '烤鱼、肉类': 'Grilled Fish, Meat',

  '钓鱼达人': 'Fishing Expert',
  '金枪鱼、稀有鱼饵': 'Tuna, Rare Bait',
  '各类鱼、钓竿装饰': 'Various Fish, Rod Decor',
  '蔬菜、甜食': 'Vegetables, Sweets',

  '镇上厨师': 'Town Chef',
  '松露、稀有香料': 'Truffles, Rare Spices',
  '新鲜食材、新菜谱': 'Fresh Ingredients, New Recipes',
  '过期食物、垃圾': 'Spoiled Food, Trash',

  '服装店主': 'Boutique Owner',
  '蕾丝布料、丝绸': 'Lace, Silk',
  '花朵、香水': 'Flowers, Perfume',
  '泥土、生鱼': 'Dirt, Raw Fish',

  '牧场主': 'Ranch Owner',
  '新鲜牛奶、稀有蛋': 'Fresh Milk, Rare Eggs',
  '动物饲料、干草': 'Feed, Hay',
  '金属、机械零件': 'Metal, Machine Parts',

  '图书管理员': 'Librarian',
  '稀有古籍、羽毛笔': 'Rare Books, Quill',
  '书籍、咖啡': 'Books, Coffee',
  '嘈杂物品、油渍': 'Noisy Items, Grease',

  '画家': 'Painter',
  '稀有颜料、油画框': 'Rare Paints, Canvas',
  '美丽花朵、彩虹石': 'Beautiful Flowers, Rainbow Stone',
  '褪色织物、灰尘': 'Faded Fabric, Dust',

  '木匠': 'Carpenter',
  '稀有木材、工具套': 'Rare Wood, Tool Set',
  '普通木材、铁锭': 'Wood, Iron Ingots',
  '纸张、布料': 'Paper, Cloth',

  '音乐家': 'Musician',
  '古董乐器、五线谱': 'Antique Instruments, Sheet Music',
  '鸟羽、风铃': 'Feathers, Wind Chimes',
  '嘈杂工具、铁锤': 'Noisy Tools, Hammers',

  '海港船长': 'Harbor Captain',
  '珍珠、深海宝石': 'Pearls, Deep Sea Gems',
  '各类鱼、贝壳': 'Various Fish, Shells',
  '陆地花卉、纸张': 'Land Flowers, Paper',

  '面包师': 'Baker',
  '稀有麦穗、蜂蜜': 'Rare Wheat, Honey',
  '面粉、鸡蛋、牛奶': 'Flour, Eggs, Milk',
  '生鱼、辣椒': 'Raw Fish, Chili',

  '宠物店主': 'Pet Shop Owner',
  '稀有宠物玩具、骨头': 'Rare Pet Toys, Bones',
  '宠物饲料、毛刷': 'Pet Food, Brushes',
  '蔬菜、苦味食物': 'Vegetables, Bitter Foods',

  '😢 没找到相关 NPC，试试其他名字～': '😢 No NPC found—try another name~',
  '💡 收录小镇 49 位 NPC 中的 12 位常见角色，更多 NPC 攻略持续更新中！': '💡 12 of 49 town NPCs included—more guides coming soon!',

  // 计算器 / Calculator
  '💰 每日收益计算器': '💰 Daily Income Calculator',
  '输入你的日常行为，估算每日金币收益': 'Enter your daily activities to estimate gold income',
  '🎣 每天钓鱼数量': '🎣 Fish per day',
  '条': 'fish',
  '🌟 平均鱼稀有度': '🌟 Avg fish rarity',
  '普通（80金/条）': 'Common (80G each)',
  '稀有（350金/条）': 'Rare (350G each)',
  '传说（1500金/条）': 'Legend (1500G each)',
  '🍳 烹饪比例': '🍳 Cook ratio',
  '🌱 每日园艺收成': '🌱 Daily harvest',
  '个': 'items',
  '📋 每日任务数': '📋 Daily tasks',
  '💎 预计每日收益': '💎 Estimated daily income',
  '金币 / 天': 'gold / day',
  '🎣 钓鱼收入：': '🎣 Fishing income:',
  '🍳 烹饪加成：': '🍳 Cooking bonus:',
  '🌱 园艺收入：': '🌱 Garden income:',
  '📋 任务奖励：': '📋 Task rewards:',
  '📅 一周预计：': '📅 Per week:',
  '金币 · 一月预计：': 'gold · Per month:',
  '金币': 'gold',

  // 攻略 / Guides
  '🔥 热门攻略': '🔥 Popular Guides',
  '玩家最常搜索的实用攻略合集': 'The most-searched practical guide collection',

  '🔥 热门': '🔥 Hot',
  '钓鱼+烹饪组合是最高效的金币获取方式。钓稀有鱼 → 烹饪高级菜肴 → 出售，日收益可达普通方式3倍以上。': 'Fishing+Cooking is the most efficient gold method. Catch rare fish → Cook gourmet dishes → Sell. Triple normal income.',
  '💰 金币': '💰 Gold',
  '🎣 钓鱼': '🎣 Fishing',
  '🍳 烹饪': '🍳 Cooking',

  '爱好快速升级': 'Hobby Quick Leveling',
  '每日任务 + 完成收集图鉴 + 使用"爱好升级券"是最快的升级路径。优先升级钓鱼和园艺这两个核心爱好。': 'Daily tasks + collection completion + hobby tokens = fastest leveling. Prioritize Fishing and Gardening.',
  '⚡ 效率': '⚡ Efficiency',
  '🎯 升级': '🎯 Leveling',

  '每日必做清单': 'Daily Must-Do List',
  '① 领取每日任务 ② 浇水/喂宠物 ③ 完成3个日常任务 ④ 领取每日宝箱 ⑤ 和邻居打招呼提升好感度': '① Claim daily quests ② Water/feed pets ③ Finish 3 daily tasks ④ Claim daily chest ⑤ Greet neighbors for affinity',
  '🗓️ 日常': '🗓️ Daily',
  '📦 宝箱': '📦 Chests',

  '稀有鱼类地图': 'Rare Fish Map',
  '全镇14个钓点各有特色鱼种。传说鱼「午夜锦鲤」在北岸深水区凌晨出现；「彩虹鳟」在山涧瀑布旁限时刷新。': '14 fishing spots each have unique fish. "Midnight Koi" appears at North Coast at dawn; "Rainbow Trout" spawns at the waterfall.',
  '🗺️ 地图': '🗺️ Map',

  'NPC好感度攻略': 'NPC Affinity Guide',
  '49位NPC各有喜爱礼物，查询对应角色的喜好表，每天送礼可快速提升好感，解锁专属剧情和稀有奖励。': 'Each of 49 NPCs has favorite gifts. Daily gifting raises affinity to unlock exclusive stories and rare rewards.',
  '👥 NPC': '👥 NPC',
  '💝 好感': '💝 Affinity',

  '房屋升级优先级': 'House Upgrade Priority',
  '推荐升级顺序：厨房设施 > 仓库扩容 > 庭院空间 > 客厅装饰。厨房和仓库直接影响赚金效率，优先级最高。': 'Recommended order: Kitchen > Storage > Yard > Living Room. Kitchen and storage directly impact gold efficiency.',
  '🏠 建造': '🏠 Building',
  '📈 规划': '📈 Planning',

  // 礼包码 / Codes
  '🎁 兑换码': '🎁 Redemption Codes',
  '输入礼包码获取限定道具和金币奖励（定期更新）': 'Enter codes to get exclusive items and gold rewards (updated regularly)',
  '📅 最后更新：2026-05-17': '📅 Last updated: May 17, 2026',
  '✅ 有效': '✅ Active',
  '✅ 有效 · NEW 🔥': '✅ Active · NEW 🔥',
  '❌ 已过期': '❌ Expired',
  '🎁 许愿星 ×3 + 修理工具 ×5 + 生长加速剂 ×10': '🎁 3× Wishing Star + 5× Repair Kit + 10× Growth Booster',
  '🎁 许愿星 ×5 + 肥料 ×10 + 苹果 ×10（母亲节限定）': '🎁 5× Wishing Star + 10× Fertilizer + 10× Apple (Mothers Day)',
  '🎁 蓝莓 ×3 + 鱼饵 ×3 + 木材 ×5 + 许愿星 ×10': '🎁 3× Blueberry + 3× Bait + 5× Timber + 10× Wishing Star',
  '🎁 许愿星 ×5 + 月光水晶 ×3': '🎁 5× Wishing Star + 3× Moonlight Crystal',
  '🎁 上线纪念礼包': '🎁 Launch anniversary pack',
  '🎁 限定装扮': '🎁 Limited Outfit',
  '🎉 5月新码': '🎉 May Codes',
  '3个全新礼包码已上线！n8q5m2a4r9 / mumlove4ever / mayrelax → ': '3 new codes available! n8q5m2a4r9 / mumlove4ever / mayrelax → ',
  '立即领取': 'Claim now',
  '复制': 'Copy',
  '已过期': 'Expired',

  '📍 如何兑换？': '📍 How to redeem?',
  '打开游戏，进入': 'Open game, go to',
  '「设置」': 'Settings',
  '点击': 'Click',
  '「礼包码」': 'Redemption Code',
  '选项': 'option',
  '输入兑换码并确认': 'Enter the code and confirm',
  '奖励将自动发送到邮箱': 'Rewards will be sent to your in-game mailbox',
  '⚠️ 兑换码区分大小写，每个账号限用一次': '⚠️ Codes are case-sensitive and one-time per account',
  '✅ 已复制到剪贴板！': '✅ Copied to clipboard!',

  // 数据速查 / Stats
  '📊 游戏数据速查': '📊 Game Data Overview',
  '心动小镇核心内容数量一览': 'Heartopia core content at a glance',
  '种鱼类': 'Fish species',
  '道菜谱': 'Recipes',
  '种鸟类': 'Bird species',
  '种昆虫': 'Insect species',
  '位NPC角色': 'NPCs',
  '处钓鱼地点': 'Fishing spots',
  '大爱好系统': 'Hobbies',
  '年7月上线': 'Released Jul',

  // 分享 / Share
  '💖 觉得有用？分享给好友吧！': '💖 Found it useful? Share with friends!',
  '把这个攻略站分享出去，让更多心动小镇玩家受益～': 'Share this site so more Heartopia players can benefit~',
  '🔗 复制链接': '🔗 Copy Link',
  '🌐 分享到微博': '🌐 Share on Weibo',
  '🐦 分享到 Twitter': '🐦 Share on Twitter',

  // Footer
  '由玩家社区整理，持续更新中': 'Curated by the player community, regularly updated',
  '非官方网站 · 内容仅供参考': 'Unofficial site · For reference only',
  '快捷导航': 'Quick Links',
  '更多内容': 'More',
  '热门攻略': 'Popular Guides',
  '关于我们': 'About Us',
  '隐私政策': 'Privacy Policy',
  '联系我们': 'Contact',
  '© 2026 心动小镇攻略站 · 非官方玩家社区 · 游戏版权归 XD Entertainment Co., Ltd. 所有': '© 2026 Heartopia Tips · Unofficial Player Community · Game © XD Entertainment Co., Ltd.',

  // 搜索 / Search
  '搜索攻略、NPC、鱼类、礼包码...': 'Search guides, NPCs, fish, codes...',
  '💡 输入关键词开始搜索（如：钓鱼、礼包码、Blanc、午夜锦鲤）': '💡 Enter keywords to search (e.g. fishing, codes, Blanc, Midnight Koi)',
  '😢 没找到相关内容，试试其他关键词～': '😢 No results found—try different keywords~',

  // SEO Meta
  '心动小镇攻略站 | 新手指南 · 爱好攻略 · 礼包码 - Heartopia Guide': 'Heartopia Tips | Beginner Guide · Hobbies · Redemption Codes',
};

// ============================================
// 应用翻译
// ============================================

function detectInitialLang() {
  // 1. 优先用户保存的偏好
  const saved = localStorage.getItem('lang');
  if (saved === 'zh' || saved === 'en') return saved;

  // 2. URL 参数
  const params = new URLSearchParams(window.location.search);
  if (params.get('lang') === 'en') return 'en';
  if (params.get('lang') === 'zh') return 'zh';

  // 3. 浏览器语言：中文用户默认中文，其他默认英文
  const browserLang = (navigator.language || 'en').toLowerCase();
  if (browserLang.startsWith('zh')) return 'zh';
  return 'en';
}

let currentLang = detectInitialLang();

// 缓存原始中文文本
const originalTextCache = new WeakMap();

function getOriginalText(node) {
  if (originalTextCache.has(node)) {
    return originalTextCache.get(node);
  }
  const text = node.nodeValue || '';
  originalTextCache.set(node, text);
  return text;
}

function translateNode(node, lang) {
  if (node.nodeType === Node.TEXT_NODE) {
    const original = getOriginalText(node);
    const trimmed = original.trim();
    if (!trimmed) return;

    if (lang === 'en' && translations[trimmed]) {
      // 保留原始空白
      node.nodeValue = original.replace(trimmed, translations[trimmed]);
    } else if (lang === 'zh') {
      node.nodeValue = original;
    }
  } else if (node.nodeType === Node.ELEMENT_NODE) {
    // 跳过 script、style
    const tag = node.tagName;
    if (tag === 'SCRIPT' || tag === 'STYLE') return;

    // 翻译 placeholder
    if (node.hasAttribute('placeholder')) {
      const key = '__placeholder__' + (originalTextCache.get(node) || node.getAttribute('placeholder'));
      let original;
      if (originalTextCache.has(node)) {
        original = originalTextCache.get(node);
      } else {
        original = node.getAttribute('placeholder');
        originalTextCache.set(node, original);
      }
      if (lang === 'en' && translations[original]) {
        node.setAttribute('placeholder', translations[original]);
      } else {
        node.setAttribute('placeholder', original);
      }
    }

    // 递归子节点
    node.childNodes.forEach(child => translateNode(child, lang));
  }
}

function applyLang(lang) {
  currentLang = lang;
  localStorage.setItem('lang', lang);

  // 更新 html lang 属性
  document.documentElement.lang = lang === 'en' ? 'en' : 'zh-CN';

  // 翻译整个 body
  translateNode(document.body, lang);

  // 翻译 title
  if (lang === 'en' && translations[document.title]) {
    if (!originalTextCache.has(document)) {
      originalTextCache.set(document, document.title);
    }
    document.title = translations[document.title];
  } else if (lang === 'zh' && originalTextCache.has(document)) {
    document.title = originalTextCache.get(document);
  }

  // 更新切换按钮文字
  const langBtn = document.getElementById('langBtn');
  if (langBtn) {
    langBtn.textContent = lang === 'en' ? '🌐 中文' : '🌐 EN';
  }
}

// 切换按钮
document.addEventListener('DOMContentLoaded', () => {
  // 缓存所有原始文本
  const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, null);
  let n;
  while ((n = walker.nextNode())) {
    getOriginalText(n);
  }
  // 缓存所有 placeholder
  document.querySelectorAll('[placeholder]').forEach(el => {
    if (!originalTextCache.has(el)) {
      originalTextCache.set(el, el.getAttribute('placeholder'));
    }
  });

  // 应用初始语言
  applyLang(currentLang);

  // 绑定切换
  const langBtn = document.getElementById('langBtn');
  langBtn?.addEventListener('click', () => {
    applyLang(currentLang === 'en' ? 'zh' : 'en');
  });
});
