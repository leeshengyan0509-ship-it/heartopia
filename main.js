// 心动小镇攻略站 - 交互脚本

// ===== 移动端导航菜单 =====
const navToggle = document.getElementById('navToggle');
const navLinks = document.querySelector('.nav-links');

navToggle?.addEventListener('click', () => {
  navLinks?.classList.toggle('open');
});

// 点击导航链接后关闭菜单
navLinks?.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ===== 礼包码复制功能 =====
function copyCode(code) {
  navigator.clipboard.writeText(code).then(() => {
    showToast('✅ 已复制到剪贴板：' + code);
  }).catch(() => {
    // 降级方案
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

// ===== 滚动时导航栏高亮 =====
const sections = document.querySelectorAll('section[id]');

function updateActiveNav() {
  const scrollY = window.scrollY + 80;
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

// ===== 卡片入场动画 =====
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -40px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// 为卡片添加初始动画状态
document.addEventListener('DOMContentLoaded', () => {
  const cards = document.querySelectorAll(
    '.tip-card, .hobby-card, .guide-card, .stat-card, .code-item'
  );
  cards.forEach((card, i) => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(24px)';
    card.style.transition = `opacity 0.5s ease ${i * 0.05}s, transform 0.5s ease ${i * 0.05}s`;
    observer.observe(card);
  });
});
