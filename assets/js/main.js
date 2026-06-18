(function() {
  'use strict';

  /* ----- Dark Mode ----- */
  var themeToggle = document.getElementById('themeToggle');
  var savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') document.body.classList.add('dark');
  if (themeToggle) {
    var icon = themeToggle.querySelector('i');
    var updateIcon = function() {
      icon.className = document.body.classList.contains('dark') ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    };
    updateIcon();
    themeToggle.addEventListener('click', function() {
      document.body.classList.toggle('dark');
      localStorage.setItem('theme', document.body.classList.contains('dark') ? 'dark' : 'light');
      updateIcon();
    });
  }

  /* ----- Mobile Menu ----- */
  var menuToggle = document.getElementById('menuToggle');
  var mainNav = document.getElementById('mainNav');
  if (menuToggle && mainNav) {
    menuToggle.addEventListener('click', function() {
      menuToggle.classList.toggle('open');
      mainNav.classList.toggle('open');
    });
    mainNav.querySelectorAll('.nav-link').forEach(function(link) {
      link.addEventListener('click', function() { menuToggle.classList.remove('open'); mainNav.classList.remove('open'); });
    });
    var dropBtn = mainNav.querySelector('.dropbtn');
    if (dropBtn) {
      dropBtn.addEventListener('click', function(e) {
        if (window.innerWidth <= 768) { e.preventDefault(); this.parentElement.classList.toggle('open'); }
      });
    }
  }

  /* ----- Back to Top ----- */
  var backTop = document.getElementById('backTop');
  if (backTop) {
    window.addEventListener('scroll', function() {
      backTop.classList.toggle('visible', window.scrollY > 400);
    });
    backTop.addEventListener('click', function() { window.scrollTo({ top: 0, behavior: 'smooth' }); });
  }

  /* ----- AOS scroll animations ----- */
  var animateOnScroll = function() {
    document.querySelectorAll('[data-aos]').forEach(function(el) {
      var rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 80) el.classList.add('aos-animate');
    });
  };
  var debounceTimer;
  window.addEventListener('scroll', function() { clearTimeout(debounceTimer); debounceTimer = setTimeout(animateOnScroll, 30); });
  window.addEventListener('resize', animateOnScroll);
  animateOnScroll();

  /* ----- Animated Counters ----- */
  var counters = document.querySelectorAll('[data-count]');
  if (counters.length) {
    var animateCounters = function() {
      counters.forEach(function(el) {
        var rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50 && !el.dataset.counted) {
          el.dataset.counted = 'true';
          var target = parseInt(el.dataset.count), current = 0, step = Math.max(1, Math.ceil(target / 50));
          var timer = setInterval(function() {
            current += step;
            if (current >= target) { current = target; clearInterval(timer); }
            el.textContent = current;
          }, 30);
        }
      });
    };
    window.addEventListener('scroll', animateCounters);
    animateCounters();
  }

  /* ----- Semester Tabs ----- */
  var tabBtns = document.querySelectorAll('.tab-btn');
  tabBtns.forEach(function(btn) {
    btn.addEventListener('click', function() {
      var tab = this.dataset.tab;
      tabBtns.forEach(function(b) { b.classList.remove('active'); });
      this.classList.add('active');
      document.querySelectorAll('.modules-grid').forEach(function(g) { g.style.display = 'none'; });
      var grid = document.getElementById(tab);
      if (grid) grid.style.display = 'grid';
    });
  });

  /* ----- Scroll Navigation (dot nav) ----- */
  var scrollNav = document.getElementById('scrollNav');
  var navItems = scrollNav ? scrollNav.querySelectorAll('.scroll-nav-item') : [];
  var sections = [];
  navItems.forEach(function(item) {
    var id = item.getAttribute('data-section');
    var el = document.getElementById(id);
    if (el) sections.push({ id: id, el: el, item: item });
  });
  if (sections.length > 0) {
    var fillBar = document.getElementById('scrollNavFill');
    var updateScrollNav = function() {
      var scrollY = window.scrollY, windowH = window.innerHeight;
      if (scrollNav) scrollNav.classList.toggle('visible', scrollY > windowH * 0.6);
      var current = -1;
      sections.forEach(function(s, i) {
        var rect = s.el.getBoundingClientRect();
        if (rect.top <= windowH * 0.4) current = i;
      });
      navItems.forEach(function(item) { item.classList.remove('active'); });
      if (current >= 0 && current < navItems.length) navItems[current].classList.add('active');
      if (fillBar && sections.length > 1) {
        var firstOff = sections[0].el.getBoundingClientRect();
        var lastOff = sections[sections.length - 1].el.getBoundingClientRect();
        var totalDist = lastOff.top - firstOff.top;
        var scrolled = Math.max(0, Math.min(1, (-firstOff.top) / (totalDist || 1)));
        fillBar.style.height = Math.max(0, scrolled * ((navItems.length - 1) * 34 + 8)) + 'px';
      }
    };
    window.addEventListener('scroll', function() { clearTimeout(debounceTimer); debounceTimer = setTimeout(updateScrollNav, 30); });
    updateScrollNav();
    navItems.forEach(function(item) {
      item.addEventListener('click', function(e) {
        e.preventDefault();
        var target = document.getElementById(this.getAttribute('data-section'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });
  }

  /* ----- Roadmap Tabs (index) ----- */
  var roadTabs = document.querySelectorAll('.roadmap-tab');
  roadTabs.forEach(function(t) {
    t.addEventListener('click', function() {
      var tab = this.dataset.panel;
      roadTabs.forEach(function(b) { b.classList.remove('active'); });
      this.classList.add('active');
      document.querySelectorAll('.roadmap-panel').forEach(function(p) { p.classList.remove('active'); });
      var panel = document.getElementById(tab);
      if (panel) panel.classList.add('active');
    });
  });

  /* ----- Hero Particles Canvas ----- */
  var heroCanvas = document.getElementById('hero-canvas');
  if (heroCanvas) {
    var ctx = heroCanvas.getContext('2d');
    var hero = document.getElementById('hero');
    var particles = [];
    var particleCount = 40;
    var mouse = { x: null, y: null };

    var resize = function() {
      var rect = hero.getBoundingClientRect();
      heroCanvas.width = rect.width;
      heroCanvas.height = rect.height;
    };
    resize();
    window.addEventListener('resize', resize);

    hero.addEventListener('mousemove', function(e) {
      var rect = hero.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    });
    hero.addEventListener('mouseleave', function() { mouse.x = null; mouse.y = null; });

    for (var i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * heroCanvas.width,
        y: Math.random() * heroCanvas.height,
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        r: Math.random() * 2 + 1,
        alpha: Math.random() * 0.5 + 0.1,
      });
    }

    var drawParticles = function() {
      ctx.clearRect(0, 0, heroCanvas.width, heroCanvas.height);
      for (var i = 0; i < particles.length; i++) {
        var p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = heroCanvas.width;
        if (p.x > heroCanvas.width) p.x = 0;
        if (p.y < 0) p.y = heroCanvas.height;
        if (p.y > heroCanvas.height) p.y = 0;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(77, 163, 255, ' + p.alpha + ')';
        ctx.fill();

        for (var j = i + 1; j < particles.length; j++) {
          var q = particles[j];
          var dx = p.x - q.x, dy = p.y - q.y;
          var dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 140) {
            var alpha = (1 - dist / 140) * 0.25;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(q.x, q.y);
            ctx.strokeStyle = 'rgba(77, 163, 255, ' + alpha + ')';
            ctx.lineWidth = 0.8;
            ctx.stroke();
          }
        }

        if (mouse.x !== null) {
          var dmx = p.x - mouse.x, dmy = p.y - mouse.y;
          var dmDist = Math.sqrt(dmx * dmx + dmy * dmy);
          if (dmDist < 120) {
            var ma = (1 - dmDist / 120) * 0.3;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = 'rgba(77, 163, 255, ' + ma + ')';
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
      requestAnimationFrame(drawParticles);
    };
    drawParticles();
  }

  /* ----- Skill Circles ----- */
  var drawSkillCircle = function(canvas, pct) {
    var w = canvas.width, h = canvas.height, cx = w / 2, cy = h / 2, r = w / 2 - 2;
    var ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, w, h);
    // Track
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(77,163,255,0.08)';
    ctx.lineWidth = 4;
    ctx.stroke();
    // Fill
    var start = -Math.PI / 2;
    var end = start + (Math.PI * 2 * pct / 100);
    ctx.beginPath();
    ctx.arc(cx, cy, r, start, end);
    ctx.strokeStyle = '#4DA3FF';
    ctx.lineWidth = 4;
    ctx.lineCap = 'round';
    ctx.stroke();
  };

  var skillCanvases = document.querySelectorAll('.skill-circle canvas');
  if (skillCanvases.length) {
    var skillSection = document.getElementById('skills');
    var drawn = false;
    var drawSkills = function() {
      if (drawn) return;
      if (skillSection) {
        var rect = skillSection.getBoundingClientRect();
        if (rect.top < window.innerHeight - 50) {
          drawn = true;
          skillCanvases.forEach(function(cv) {
            var pct = parseInt(cv.dataset.pct) || 0;
            drawSkillCircle(cv, pct);
          });
        }
      }
    };
    window.addEventListener('scroll', drawSkills);
    drawSkills();
  }

  /* ----- Dynamic Stat Numbers ----- */
  var statNumbers = document.querySelectorAll('.stat-number[data-count]');
  statNumbers.forEach(function(el) {
    var target = parseInt(el.dataset.count);
    if (target > 100) {
      // For large numbers, add + sign
      el.textContent = '+' + target;
      el.dataset.counted = 'true';
    }
  });

  /* ----- Active nav link ----- */
  var currentPath = window.location.pathname;
  document.querySelectorAll('.nav-link').forEach(function(link) {
    var href = link.getAttribute('href');
    if (href && currentPath.indexOf(href) > -1 && href !== 'index.html') link.classList.add('active');
  });
  if (currentPath.indexOf('index') > -1 || currentPath === '/' || currentPath === '') {
    var a = document.querySelector('.nav-link[href="index.html"]');
    if (a) a.classList.add('active');
  }
})();
