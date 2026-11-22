// ani 2 ảnh
window.addEventListener('DOMContentLoaded', () => {
    const imgs = document.querySelectorAll('.gt_img');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    }, {
        threshold: 0.3
    });

    imgs.forEach(img => observer.observe(img));
});




// 3 ảnh
window.addEventListener('scroll', () => 
{
    document.querySelectorAll('.img_small').forEach(el => 
    {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0)
        {
            // el.classList.add('album_hihi');
            el.classList.remove('js_left');
            el.classList.remove('js_right');
        }
    });
});

window.addEventListener('scroll', () => {
    const el = document.querySelector('.img_big');
    if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            el.classList.remove('js_center');
        }
    }
});

// lời mời




// cf nha
document.addEventListener('DOMContentLoaded', () => {
    const cfContainer = document.querySelector('.cf_container');

    if (cfContainer) {
        const observer2 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, {
            threshold: 0.3
        });

        observer2.observe(cfContainer);
    }
});




// ani album
window.addEventListener('scroll', () => 
{
    document.querySelectorAll('.js_album').forEach(el => 
    {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0)
        {
            // el.classList.add('album_hihi');
            el.classList.remove('album_left');
            el.classList.remove('album_right');
        }
        // else
        // {
        //     el.classList.add('album_left');
        //     el.classList.add('album_right');
        // }
    });
});

// thank
document.addEventListener('DOMContentLoaded', () => {
    const thankDesc = document.querySelector('.thank_desc');

    if (thankDesc) {
        const observer3 = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                }
            });
        }, { threshold: 0.3 });

        observer3.observe(thankDesc);
    }
});


// Quản lý phát / bật / tắt nhạc nền
window.addEventListener('DOMContentLoaded', () => {
    const audio = document.getElementById('myAudio');
    const indicator = document.getElementById('audioIndicator');
    if (!audio || !indicator) return;

    audio.loop = true;

    // Cập nhật giao diện nút loa theo trạng thái audio thực tế
    const updateUI = () => {
        if (!audio.paused) {
            indicator.classList.add('playing');
            indicator.setAttribute('title', 'Tắt nhạc');
            indicator.setAttribute('aria-label', 'Tắt nhạc');
        } else {
            indicator.classList.remove('playing');
            indicator.setAttribute('title', 'Bật nhạc');
            indicator.setAttribute('aria-label', 'Bật nhạc');
        }
    };

    audio.addEventListener('play', updateUI);
    audio.addEventListener('pause', updateUI);
    audio.addEventListener('ended', updateUI);

    let userManuallyToggled = false;
    const interactionEvents = ['click', 'touchstart', 'scroll', 'keydown'];

    const removeAutoPlayListeners = () => {
        interactionEvents.forEach(evt => {
            window.removeEventListener(evt, playOnFirstInteraction, { passive: true });
            document.removeEventListener(evt, playOnFirstInteraction, { passive: true });
        });
    };

    // Tự động phát khi người dùng tương tác lần đầu với trang
    const playOnFirstInteraction = () => {
        if (userManuallyToggled) return;
        audio.play().then(() => {
            console.log('Tự động phát nhạc thành công');
            removeAutoPlayListeners();
        }).catch(err => {
            console.warn('Trình duyệt chưa cho phép tự động phát:', err);
        });
    };

    // Đăng ký các sự kiện tương tác lần đầu
    interactionEvents.forEach(evt => {
        window.addEventListener(evt, playOnFirstInteraction, { passive: true });
        document.addEventListener(evt, playOnFirstInteraction, { passive: true });
    });

    // Bấm trực tiếp vào nút loa để Bật / Tắt nhạc
    indicator.addEventListener('click', (e) => {
        e.stopPropagation();
        userManuallyToggled = true;
        removeAutoPlayListeners();

        if (audio.paused) {
            audio.play().catch(err => {
                console.warn('Lỗi khi phát nhạc:', err);
            });
        } else {
            audio.pause();
        }
    });

    // Thử phát ngay nếu trình duyệt cho phép autoplay
    audio.play().then(() => {
        removeAutoPlayListeners();
    }).catch(() => {
        updateUI();
    });
});
  
  




  