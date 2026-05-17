// 心动小镇攻略站 - 交互脚本

/* ====================================================
   1. 移动端导航菜单
   ==================================================== */
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});

navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => navLinks.classList.remove('open'));
});

/* ====================================================
   2. 礼包码复制
   ==================================================== */
function copyCode(code) {
  navigator.clipboard.writeText(code).then(() => {
    showToast('✅ 已复制到剪贴板：' + code);
  }).catch(() => {
    const el = document.createElement('textarea');
    el.value = code;
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
    showToast('✅ 已复制到剪贴板：' + code);
  });
}

function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2800);
}

/* ====================================================
   3. 卡片入场动画
   ==================================================== */
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll(
    '.tip-card, .hobby-card, .guide-card, .stat-card, .code-item, .quick-card'
  );
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(24px)';
    card.style.transition = `opacity 0.5s ease ${Math.min(i * 0.04, 0.4)}s, transform 0.5s ease ${Math.min(i * 0.04, 0.4)}s`;
    observer.observe(card);
  });
});

/* ====================================================
   4. 公告横幅关闭
   ==================================================== */
const announcement = document.getElementById('announcement');
const annClose = document.getElementById('annClose');

// 当公告内容更新时，更新这个版本号让所有用户重新看到
const ANNOUNCEMENT_VERSION = 'v2-may-codes';

if (localStorage.getItem('annClosedVersion') === ANNOUNCEMENT_VERSION) {
  announcement?.classList.add('hidden');
}

annClose?.addEventListener('click', () => {
  announcement?.classList.add('hidden');
  localStorage.setItem('annClosedVersion', ANNOUNCEMENT_VERSION);
});

/* ====================================================
   5. 深色模式切换
   ==================================================== */
const themeBtn = document.getElementById('themeBtn');
const savedTheme = localStorage.getItem('theme');

if (savedTheme === 'dark') {
  document.documentElement.setAttribute('data-theme', 'dark');
  if (themeBtn) themeBtn.textContent = '☀️';
}

themeBtn?.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  if (isDark) {
    document.documentElement.removeAttribute('data-theme');
    themeBtn.textContent = '🌙';
    localStorage.setItem('theme', 'light');
  } else {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeBtn.textContent = '☀️';
    localStorage.setItem('theme', 'dark');
  }
});

/* ====================================================
   6. 返回顶部按钮
   ==================================================== */
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  if (window.scrollY > 400) {
    backToTop?.classList.add('show');
  } else {
    backToTop?.classList.remove('show');
  }
}, { passive: true });

backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

/* ====================================================
   7. 站内搜索
   ==================================================== */
const searchBtn = document.getElementById('searchBtn');
const searchOverlay = document.getElementById('searchOverlay');
const searchClose = document.getElementById('searchClose');
const searchInput = document.getElementById('searchInput');
const searchResults = document.getElementById('searchResults');

// 搜索数据
const searchData = [
  { title: '🌱 园艺攻略', desc: '游戏第一爱好，整个经济体系的基石', target: '#gardening' },
  { title: '🎣 钓鱼攻略', desc: '14处钓鱼地点 · 98种鱼类 · 稳定收入', target: '#fishing' },
  { title: '🍳 烹饪攻略', desc: '98道食谱 · 联动钓鱼/园艺 · 高售价', target: '#cooking' },
  { title: '🦋 捕虫攻略', desc: '76种昆虫 · 时间限定 · 收集奖励', target: '#hobbies' },
  { title: '🐦 观鸟攻略', desc: '68种鸟类 · 望远镜工具 · 专属称号', target: '#hobbies' },
  { title: '🐶 养宠攻略', desc: '亲密度系统 · 喂食互动 · 专属装饰', target: '#hobbies' },
  { title: '🏠 建造装饰', desc: '海量家具 · 自由布局 · 好友参观', target: '#hobbies' },
  { title: '💰 高效赚金攻略', desc: '钓鱼+烹饪组合，日收益翻3倍', target: '#guides' },
  { title: '⚡ 爱好快速升级', desc: '每日任务+收集图鉴+升级券', target: '#guides' },
  { title: '🗓️ 每日必做清单', desc: '日常任务、宝箱、邻居好感度', target: '#guides' },
  { title: '🐟 稀有鱼类地图', desc: '午夜锦鲤、彩虹鳟、传说鱼分布', target: '#fish-dex' },
  { title: '🎁 NPC好感度攻略', desc: '49位NPC喜好礼物速查表', target: '#npc' },
  { title: '🏡 房屋升级优先级', desc: '厨房 > 仓库 > 庭院 > 客厅', target: '#guides' },
  { title: '🎁 礼包码 HEARTOPIA2026', desc: '金币 ×500 + 装饰家具 ×1', target: '#codes' },
  { title: '🎁 礼包码 TOWN888', desc: '爱好升级券 ×3', target: '#codes' },
  { title: '🎁 礼包码 XDGAMES2024', desc: '新手礼包：金币 + 种子包', target: '#codes' },
  { title: '🌙 午夜锦鲤', desc: '北岸深水区 · 凌晨 0:00-4:00 · 1500金', target: '#fish-dex' },
  { title: '🌈 彩虹鳟鱼', desc: '山涧瀑布 · 雨天限定 · 450金', target: '#fish-dex' },
  { title: '🐉 金龙鱼', desc: '东方神社池 · 满月之日 · 2200金', target: '#fish-dex' },
  { title: '⭐ 流星鱼', desc: '山顶湖泊 · 流星雨活动 · 2500金', target: '#fish-dex' },
  { title: '👤 NPC: Blanc 园艺导师', desc: '最爱：稀有种子、水仙花', target: '#npc' },
  { title: '👤 NPC: Aaron 钓鱼达人', desc: '最爱：金枪鱼、稀有鱼饵', target: '#npc' },
  { title: '👤 NPC: Lily 镇上厨师', desc: '最爱：松露、稀有香料', target: '#npc' },
  { title: '👤 NPC: Emma 服装店主', desc: '最爱：蕾丝布料、丝绸', target: '#npc' },
  { title: '👤 NPC: Tom 牧场主', desc: '最爱：新鲜牛奶、稀有蛋', target: '#npc' },
  { title: '👤 NPC: Lucas 图书管理员', desc: '最爱：稀有古籍、羽毛笔', target: '#npc' },
  { title: '💰 收益计算器', desc: '估算每日金币收益', target: '#calculator' },
  { title: '📖 新手指南', desc: '6条核心建议帮你快速入门', target: '#beginner' },
];

function openSearch() {
  searchOverlay?.classList.add('show');
  setTimeout(() => searchInput?.focus(), 100);
}

function closeSearch() {
  searchOverlay?.classList.remove('show');
  if (searchInput) searchInput.value = '';
  resetSearchResults();
}

function resetSearchResults() {
  if (searchResults) {
    searchResults.innerHTML = '<div class="search-hint">💡 输入关键词开始搜索（如：钓鱼、礼包码、Blanc、午夜锦鲤）</div>';
  }
}

function highlight(text, query) {
  if (!query) return text;
  const regex = new RegExp(`(${query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  return text.replace(regex, '<mark>$1</mark>');
}

function performSearch(query) {
  if (!query.trim()) {
    resetSearchResults();
    return;
  }
  const q = query.toLowerCase().trim();
  const matches = searchData.filter(item =>
    item.title.toLowerCase().includes(q) || item.desc.toLowerCase().includes(q)
  );

  if (matches.length === 0) {
    searchResults.innerHTML = '<div class="search-hint">😢 没找到相关内容，试试其他关键词～</div>';
    return;
  }

  searchResults.innerHTML = matches.map(item =>
    `<a class="search-result-item" href="${item.target}">
      <div class="sr-title">${highlight(item.title, query)}</div>
      <div class="sr-desc">${highlight(item.desc, query)}</div>
    </a>`
  ).join('');

  // 点击结果后关闭
  searchResults.querySelectorAll('.search-result-item').forEach(item => {
    item.addEventListener('click', () => closeSearch());
  });
}

searchBtn?.addEventListener('click', openSearch);
searchClose?.addEventListener('click', closeSearch);

searchOverlay?.addEventListener('click', (e) => {
  if (e.target === searchOverlay) closeSearch();
});

searchInput?.addEventListener('input', (e) => {
  performSearch(e.target.value);
});

document.addEventListener('keydown', (e) => {
  // ESC 关闭
  if (e.key === 'Escape' && searchOverlay?.classList.contains('show')) {
    closeSearch();
  }
  // Cmd/Ctrl + K 打开搜索
  if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    openSearch();
  }
});

/* ====================================================
   8. 鱼类图鉴筛选
   ==================================================== */
const fishTable = document.getElementById('fishTable');
const fishFilters = { rarity: 'all', time: 'all' };

document.querySelectorAll('[data-filter="rarity"], [data-filter="time"]').forEach(btn => {
  btn.addEventListener('click', () => {
    const filterType = btn.dataset.filter;
    const value = btn.dataset.value;
    fishFilters[filterType] = value;

    // 切换按钮激活状态
    document.querySelectorAll(`[data-filter="${filterType}"]`).forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    // 筛选行
    fishTable?.querySelectorAll('tbody tr').forEach(tr => {
      const matchRarity = fishFilters.rarity === 'all' || tr.dataset.rarity === fishFilters.rarity;
      const matchTime = fishFilters.time === 'all' || tr.dataset.time === fishFilters.time;
      tr.classList.toggle('hidden', !(matchRarity && matchTime));
    });
  });
});

/* ====================================================
   9. NPC 表筛选 + 搜索
   ==================================================== */
const npcTable = document.getElementById('npcTable');
const npcSearch = document.getElementById('npcSearch');
const npcEmpty = document.getElementById('npcEmpty');
let npcRoleFilter = 'all';

function applyNpcFilter() {
  const q = (npcSearch?.value || '').toLowerCase().trim();
  let visibleCount = 0;

  npcTable?.querySelectorAll('tbody tr').forEach(tr => {
    const matchRole = npcRoleFilter === 'all' || tr.dataset.role === npcRoleFilter;
    const text = tr.textContent.toLowerCase();
    const matchSearch = !q || text.includes(q) || (tr.dataset.name || '').includes(q);
    const visible = matchRole && matchSearch;
    tr.classList.toggle('hidden', !visible);
    if (visible) visibleCount++;
  });

  if (npcEmpty) npcEmpty.classList.toggle('show', visibleCount === 0);
}

document.querySelectorAll('[data-filter="npc-role"]').forEach(btn => {
  btn.addEventListener('click', () => {
    npcRoleFilter = btn.dataset.value;
    document.querySelectorAll('[data-filter="npc-role"]').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    applyNpcFilter();
  });
});

npcSearch?.addEventListener('input', applyNpcFilter);

/* ====================================================
   10. 收益计算器
   ==================================================== */
const calcInputs = {
  fish: document.getElementById('calcFish'),
  fishRarity: document.getElementById('calcFishRarity'),
  cookRate: document.getElementById('calcCookRate'),
  garden: document.getElementById('calcGarden'),
  tasks: document.getElementById('calcTasks'),
};

const calcOutputs = {
  total: document.getElementById('calcTotal'),
  fishIncome: document.getElementById('calcFishIncome'),
  cookBonus: document.getElementById('calcCookBonus'),
  gardenIncome: document.getElementById('calcGardenIncome'),
  taskIncome: document.getElementById('calcTaskIncome'),
  cookRateVal: document.getElementById('calcCookRateVal'),
  week: document.getElementById('calcWeek'),
  month: document.getElementById('calcMonth'),
};

function fmt(n) {
  return n.toLocaleString('zh-CN');
}

function updateCalculator() {
  if (!calcInputs.fish) return;

  const fish = parseInt(calcInputs.fish.value) || 0;
  const fishPrice = parseInt(calcInputs.fishRarity.value) || 0;
  const cookRate = parseInt(calcInputs.cookRate.value) || 0;
  const garden = parseInt(calcInputs.garden.value) || 0;
  const tasks = parseInt(calcInputs.tasks.value) || 0;

  // 钓鱼收入
  const fishIncome = fish * fishPrice;
  // 烹饪加成（烹饪后售价翻倍 = 多出原价 1 倍）
  const cookBonus = Math.round(fishIncome * (cookRate / 100));
  // 园艺收入（每个作物均价 30 金）
  const gardenIncome = garden * 30;
  // 任务收入（每个任务平均 60 金）
  const taskIncome = tasks * 60;

  const total = fishIncome + cookBonus + gardenIncome + taskIncome;

  calcOutputs.total.textContent = fmt(total);
  calcOutputs.fishIncome.textContent = fmt(fishIncome);
  calcOutputs.cookBonus.textContent = fmt(cookBonus);
  calcOutputs.gardenIncome.textContent = fmt(gardenIncome);
  calcOutputs.taskIncome.textContent = fmt(taskIncome);
  calcOutputs.cookRateVal.textContent = cookRate;
  calcOutputs.week.textContent = fmt(total * 7);
  calcOutputs.month.textContent = fmt(total * 30);
}

Object.values(calcInputs).forEach(input => {
  input?.addEventListener('input', updateCalculator);
});

document.addEventListener('DOMContentLoaded', updateCalculator);

/* ====================================================
   11. 分享按钮
   ==================================================== */
const shareUrl = encodeURIComponent('https://heartopiatips.com/');
const shareTitle = encodeURIComponent('心动小镇攻略站 | 新手指南 · 爱好攻略 · 礼包码');

document.querySelectorAll('[data-share]').forEach(btn => {
  btn.addEventListener('click', (e) => {
    const type = btn.dataset.share;
    if (type === 'copy') {
      navigator.clipboard.writeText('https://heartopiatips.com/').then(() => {
        showToast('✅ 链接已复制，快去分享吧！');
      });
    } else if (type === 'weibo') {
      e.preventDefault();
      window.open(`https://service.weibo.com/share/share.php?url=${shareUrl}&title=${shareTitle}`, '_blank');
    } else if (type === 'twitter') {
      e.preventDefault();
      window.open(`https://twitter.com/intent/tweet?url=${shareUrl}&text=${shareTitle}`, '_blank');
    }
  });
});

/* ====================================================
   12. 滚动时导航栏高亮
   ==================================================== */
const sections = document.querySelectorAll('section[id], header[id]');

function updateActiveNav() {
  const scrollY = window.scrollY + 100;
  sections.forEach(section => {
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    const link = document.querySelector(`.nav-links a[href="#${id}"]`);
    if (link) {
      if (scrollY >= top && scrollY < top + height) {
        link.style.background = 'var(--pink-light)';
        link.style.color = 'var(--pink-dark)';
      } else {
        link.style.background = '';
        link.style.color = '';
      }
    }
  });
}

window.addEventListener('scroll', updateActiveNav, { passive: true });
