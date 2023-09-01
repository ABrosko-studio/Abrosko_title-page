export function burgerOpen() {
    let paddingOffset = window.innerWidth - document.body.offsetWidth + 'px';
    let buttonOpen = document.querySelector('[data-openburger]');
    let body = document.body;
    buttonOpen.addEventListener('click', () => {

        document.body.style.paddingRight = paddingOffset;
        let fixwindow = document.querySelectorAll('.fix_block');
        // console.log(fixwindow);

        fixwindow.forEach(element => {
            element.style.paddingRight = paddingOffset;
            console.log(element.style.paddingRight);
    
        });

        let burger = document.querySelector('[data-burger]');
        burger.classList.add('burger-active');
        body.classList.add('_lock');
        setTimeout(function () {
            burger.style.opacity = '1';
            burger.style.transform = 'translateX(0)';
        }, 100)
    })
}


export function burgerClose() {
    
    let buttonClose = document.querySelector('[data-burgerclose]');
    let body = document.body;
    buttonClose.addEventListener('click', () => {

        let fixwindow = document.querySelectorAll('.fix_block');
        
        let burger = document.querySelector('[data-burger]');
        burger.style.opacity = '0';
        burger.style.transform = 'translateX(-200%)';
        setTimeout(function () {
            burger.classList.remove('burger-active');
            body.classList.remove('_lock');
            document.body.style.paddingRight = 0;
            fixwindow.forEach(element => {
                element.style.paddingRight = 0;
                console.log(element.style.paddingRight);
            });
        }, 100)
    })
}


export function burgerItem() {
    let burger = document.querySelector('.burger__menu');
    let burgerChild = document.querySelectorAll('.burger__menu>li');
    burgerChild.forEach(element => {
        if (element.querySelector('ul')) {
            element.classList.add('parent');
        }
    });

    let parentSection = document.querySelectorAll('.parent');
    if (window.innerWidth > 992) {
        parentSection.forEach(element => {
            element.addEventListener('mouseenter', () => {
                let submenu = element.querySelector('ul');
                submenu.style.display = "flex";
                setTimeout(() => {
                    submenu.style.opacity = "1";
                }, 300);
            })
            element.addEventListener('mouseleave', () => {
                let submenu = element.querySelector('ul');
                submenu.style.opacity = "0";
                setTimeout(() => {
                    submenu.style.display = "none";
                }, 300);
            })
        });
    }
    else {
        let parentSection = document.querySelectorAll('.parent');
        parentSection.forEach(element => {
            element.addEventListener('click', (event) => {
                event.preventDefault();
                let submenu = element.querySelector('ul');

                parentSection.forEach(element => {
                    let menus = element.querySelector('ul');
                    if (menus.classList.contains('open')) {
                        menus.classList.remove('open');
                        menus.style.opacity = "0";
                        setTimeout(() => {
                            menus.style.display = "none";
                        }, 50);
                    }
                });


                submenu.style.display = "flex";
                setTimeout(() => {
                    submenu.style.opacity = "1";
                }, 100);
                submenu.classList.add('open');


                let buttonClose = `  <svg class="burger__submenu__close" width="24" height="24" data-submenu>
                                        <use xlink:href="#close"></use>
                                    </svg>`;

                let submenuClose = submenu.querySelector('[data-submenu]');
                if(submenuClose === null){
                    submenu.insertAdjacentHTML('beforeend', buttonClose);
                    submenuClose = submenu.querySelector('[data-submenu]');
                }

                submenuClose.addEventListener('click', () => {
                    submenu.classList.remove('open');
                    submenu.style.opacity = "0";
                    setTimeout(() => {
                        submenu.style.display = "none";
                        submenuClose.remove();
                    }, 50);
                })
            })
        });
    }

}
