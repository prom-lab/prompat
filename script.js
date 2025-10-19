        

        // تهيئة Firebase مع الإعدادات الجديدة
        const firebaseConfig = {
            apiKey: "AIzaSyCffrRr-wYBeiAf7GML6Xs3kQg-14mLFhQ",
            authDomain: "prompat-76c51.firebaseapp.com",
            projectId: "prompat-76c51",
            storageBucket: "prompat-76c51.firebasestorage.app",
            messagingSenderId: "663109200073",
            appId: "1:663109200073:web:9da9a15649a88028b68518",
            measurementId: "G-HKL1XTBX6H"
        };

        // تهيئة Firebase
        firebase.initializeApp(firebaseConfig);
        const auth = firebase.auth();
        const db = firebase.firestore();

        // متغيرات التطبيق
        let currentUser = null;
        let isSignUpMode = false;
        let currentPrompt = null;

        // تهيئة التطبيق
        document.addEventListener('DOMContentLoaded', function() {
            // تشغيل أنيميشن الدخول
            startIntroAnimation();
            
            // تهيئة السلايدرز
            initSwipers();
            
            // إعداد مستمعات الأحداث
            setupEventListeners();
            
            // إعداد مستمعات Firebase
            setupFirebaseListeners();
            
            // إضافة تأثير عند النقر على زر الاستكشاف
            document.getElementById('exploreBtn').addEventListener('click', function() {
                document.getElementById('boysSection').scrollIntoView({ 
                    behavior: 'smooth' 
                });
            });
            
            // زر تسجيل الدخول من قسم المفضلة
            document.getElementById('loginFromFavorites').addEventListener('click', function() {
                openAuthModal();
            });
        });

        // أنيميشن الدخول
        function startIntroAnimation() {
            const introAnimation = document.getElementById('introAnimation');
            const lightning = document.getElementById('lightning');
            
            // تشغيل البرق بعد 4 ثواني
            setTimeout(() => {
                lightning.classList.add('active');
            }, 4000);
            
            // إخفاء الأنيميشن بعد 5 ثواني
            setTimeout(() => {
                introAnimation.classList.add('hidden');
                setTimeout(() => {
                    introAnimation.style.display = 'none';
                }, 1000);
            }, 5000);
        }

        // تهيئة السلايدرز
        function initSwipers() {
            // عرض البطاقات
            renderBoysCards();
            renderGirlsCards();
            
            // تهيئة سلايدر البنين
            const boysSwiper = new Swiper('.boysSwiper', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                centeredSlides: true,
                pagination: {
                    el: '.boysSwiper .swiper-pagination',
                    clickable: true,
                },
                navigation: false,
                breakpoints: {
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
                    1024: { slidesPerView: 1 },
                },
                on: {
                    slideChange: function() {
                        updateSectionBackground('boysSection', this.slides[this.activeIndex]);
                    },
                },
            });
            
            // تهيئة سلايدر البنات
            const girlsSwiper = new Swiper('.girlsSwiper', {
                slidesPerView: 1,
                spaceBetween: 30,
                loop: true,
                centeredSlides: true,
                pagination: {
                    el: '.girlsSwiper .swiper-pagination',
                    clickable: true,
                },
                navigation: false,
                breakpoints: {
                    640: { slidesPerView: 1 },
                    768: { slidesPerView: 1 },
                    1024: { slidesPerView: 1 },
                },
                on: {
                    slideChange: function() {
                        updateSectionBackground('girlsSection', this.slides[this.activeIndex]);
                    },
                },
            });
            
            // تحديث الخلفية الأولية
            setTimeout(() => {
                updateSectionBackground('boysSection', boysSwiper.slides[boysSwiper.activeIndex]);
                updateSectionBackground('girlsSection', girlsSwiper.slides[girlsSwiper.activeIndex]);
            }, 100);
        }

        // عرض بطاقات البنين
        function renderBoysCards() {
            const boysContainer = document.getElementById('boysCardsContainer');
            boysContainer.innerHTML = '';
            
            boysCardsData.forEach(card => {
                const cardElement = document.createElement('div');
                cardElement.className = 'swiper-slide';
                cardElement.setAttribute('data-id', card.id);
                cardElement.setAttribute('data-image', card.image);
                
                cardElement.innerHTML = `
                    <div class="prompt-card">
                        <img src="${card.image}" alt="${card.title}" class="prompt-card-image" onerror="this.src='https://via.placeholder.com/500x600/6C63FF/FFFFFF?text=${encodeURIComponent(card.title)}'">
                        <div class="prompt-card-overlay">
                            <h3 class="prompt-card-title">${card.title}</h3>
                            <div class="prompt-card-category">${card.category}</div>
                            <p class="prompt-card-description">${card.description}</p>
                            <div class="prompt-card-actions">
                                <button class="card-action-btn view-prompt-btn" data-prompt="${card.prompt}" data-title="${card.title}">
                                    <i class="far fa-eye"></i>
                                </button>
                                <button class="card-action-btn favorite-card-btn" data-id="${card.id}">
                                    <i class="far fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `;
                
                boysContainer.appendChild(cardElement);
            });
        }

        // عرض بطاقات البنات
        function renderGirlsCards() {
            const girlsContainer = document.getElementById('girlsCardsContainer');
            girlsContainer.innerHTML = '';
            
            girlsCardsData.forEach(card => {
                const cardElement = document.createElement('div');
                cardElement.className = 'swiper-slide';
                cardElement.setAttribute('data-id', card.id);
                cardElement.setAttribute('data-image', card.image);
                
                cardElement.innerHTML = `
                    <div class="prompt-card">
                        <img src="${card.image}" alt="${card.title}" class="prompt-card-image" onerror="this.src='https://via.placeholder.com/500x600/FF6584/FFFFFF?text=${encodeURIComponent(card.title)}'">
                        <div class="prompt-card-overlay">
                            <h3 class="prompt-card-title">${card.title}</h3>
                            <div class="prompt-card-category">${card.category}</div>
                            <p class="prompt-card-description">${card.description}</p>
                            <div class="prompt-card-actions">
                                <button class="card-action-btn view-prompt-btn" data-prompt="${card.prompt}" data-title="${card.title}">
                                    <i class="far fa-eye"></i>
                                </button>
                                <button class="card-action-btn favorite-card-btn" data-id="${card.id}">
                                    <i class="far fa-heart"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `;
                
                girlsContainer.appendChild(cardElement);
            });
        }

        // تحديث خلفية القسم بناءً على الصورة الحالية
        function updateSectionBackground(sectionId, slideElement) {
            const section = document.getElementById(sectionId);
            const image = slideElement.querySelector('.prompt-card-image').src;
            
            section.style.background = `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('${image}') center/cover`;
        }

        // إعداد مستمعات Firebase
        function setupFirebaseListeners() {
            // مستمع حالة المصادقة
            auth.onAuthStateChanged((user) => {
                if (user) {
                    // المستخدم مسجل الدخول
                    currentUser = user;
                    updateUserUI(user);
                    loadUserFavorites();
                } else {
                    // المستخدم غير مسجل الدخول
                    currentUser = null;
                    updateUserUI(null);
                    clearFavorites();
                }
            });
        }

        // تحديث واجهة المستخدم بناءً على حالة المصادقة
        function updateUserUI(user) {
            const userAvatar = document.getElementById('userAvatar');
            const userName = document.getElementById('userName');
            const userEmail = document.getElementById('userEmail');
            const loginMenuItem = document.getElementById('loginMenuItem');
            const profileMenuItem = document.getElementById('profileMenuItem');
            const logoutMenuItem = document.getElementById('logoutMenuItem');
            
            if (user) {
                // المستخدم مسجل الدخول
                userAvatar.textContent = user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase();
                userName.textContent = user.displayName || user.email;
                userEmail.textContent = user.email;
                
                loginMenuItem.classList.add('hidden');
                profileMenuItem.classList.remove('hidden');
                logoutMenuItem.classList.remove('hidden');
            } else {
                // المستخدم غير مسجل الدخول
                userAvatar.textContent = '?';
                userName.textContent = 'مرحبًا! تسجيل الدخول';
                userEmail.textContent = 'لحفظ المفضلة والوصول لجميع الميزات';
                
                loginMenuItem.classList.remove('hidden');
                profileMenuItem.classList.add('hidden');
                logoutMenuItem.classList.add('hidden');
            }
        }

        // تسجيل الدخول باستخدام جوجل
        function signInWithGoogle() {
            const provider = new firebase.auth.GoogleAuthProvider();
            
            auth.signInWithPopup(provider)
                .then((result) => {
                    // تم تسجيل الدخول بنجاح
                    showNotification('تم تسجيل الدخول بنجاح!', 'success');
                    closeAuthModal();
                })
                .catch((error) => {
                    // حدث خطأ
                    console.error('خطأ في تسجيل الدخول:', error);
                    showAuthError('حدث خطأ في تسجيل الدخول!');
                });
        }

        // تسجيل الدخول باستخدام البريد الإلكتروني وكلمة المرور
        function signInWithEmail(email, password) {
            auth.signInWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // تم تسجيل الدخول بنجاح
                    showNotification('تم تسجيل الدخول بنجاح!', 'success');
                    closeAuthModal();
                })
                .catch((error) => {
                    // حدث خطأ
                    console.error('خطأ في تسجيل الدخول:', error);
                    let errorMessage = 'البريد الإلكتروني أو كلمة المرور غير صحيحة!';
                    
                    if (error.code === 'auth/user-not-found') {
                        errorMessage = 'لا يوجد حساب مرتبط بهذا البريد الإلكتروني!';
                    } else if (error.code === 'auth/wrong-password') {
                        errorMessage = 'كلمة المرور غير صحيحة!';
                    } else if (error.code === 'auth/invalid-email') {
                        errorMessage = 'البريد الإلكتروني غير صالح!';
                    }
                    
                    showAuthError(errorMessage);
                });
        }

        // إنشاء حساب باستخدام البريد الإلكتروني وكلمة المرور
        function signUpWithEmail(name, email, password) {
            auth.createUserWithEmailAndPassword(email, password)
                .then((userCredential) => {
                    // تم إنشاء الحساب بنجاح
                    const user = userCredential.user;
                    
                    // تحديث اسم المستخدم
                    return user.updateProfile({
                        displayName: name
                    });
                })
                .then(() => {
                    showNotification('تم إنشاء الحساب بنجاح!', 'success');
                    closeAuthModal();
                })
                .catch((error) => {
                    // حدث خطأ
                    console.error('خطأ في إنشاء الحساب:', error);
                    let errorMessage = 'حدث خطأ في إنشاء الحساب!';
                    
                    if (error.code === 'auth/email-already-in-use') {
                        errorMessage = 'البريد الإلكتروني مستخدم بالفعل!';
                    } else if (error.code === 'auth/weak-password') {
                        errorMessage = 'كلمة المرور ضعيفة! يجب أن تكون 6 أحرف على الأقل.';
                    } else if (error.code === 'auth/invalid-email') {
                        errorMessage = 'البريد الإلكتروني غير صالح!';
                    }
                    
                    showAuthError(errorMessage);
                });
        }

        // تسجيل الخروج
        function signOut() {
            auth.signOut()
                .then(() => {
                    // تم تسجيل الخروج بنجاح
                    showNotification('تم تسجيل الخروج بنجاح!', 'success');
                })
                .catch((error) => {
                    // حدث خطأ
                    console.error('خطأ في تسجيل الخروج:', error);
                    showNotification('حدث خطأ في تسجيل الخروج!', 'error');
                });
        }

        // فتح نافذة المصادقة
        function openAuthModal() {
            const authModal = document.getElementById('authModal');
            authModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        // إغلاق نافذة المصادقة
        function closeAuthModal() {
            const authModal = document.getElementById('authModal');
            authModal.style.display = 'none';
            document.body.style.overflow = 'auto';
            resetAuthForm();
        }

        // تبديل وضع التسجيل/تسجيل الدخول
        function toggleAuthMode() {
            isSignUpMode = !isSignUpMode;
            
            const authTitle = document.getElementById('authTitle');
            const authSubmitText = document.getElementById('authSubmitText');
            const authFooterText = document.getElementById('authFooterText');
            const authToggleLink = document.getElementById('authToggleLink');
            const nameGroup = document.getElementById('nameGroup');
            
            if (isSignUpMode) {
                // وضع إنشاء حساب
                authTitle.textContent = 'إنشاء حساب';
                authSubmitText.textContent = 'إنشاء حساب';
                authFooterText.textContent = 'لديك حساب بالفعل؟';
                authToggleLink.textContent = 'تسجيل الدخول';
                nameGroup.style.display = 'flex';
            } else {
                // وضع تسجيل الدخول
                authTitle.textContent = 'تسجيل الدخول';
                authSubmitText.textContent = 'تسجيل الدخول';
                authFooterText.textContent = 'ليس لديك حساب؟';
                authToggleLink.textContent = 'إنشاء حساب';
                nameGroup.style.display = 'none';
            }
            
            // إخفاء أي أخطاء
            hideAuthError();
        }

        // إعادة تعيين نموذج المصادقة
        function resetAuthForm() {
            document.getElementById('authForm').reset();
            hideAuthError();
            isSignUpMode = false;
            toggleAuthMode(); // إعادة تعيين الوضع إلى تسجيل الدخول
        }

        // عرض خطأ في نموذج المصادقة
        function showAuthError(message) {
            const authError = document.getElementById('authError');
            authError.textContent = message;
            authError.classList.add('active');
        }

        // إخفاء خطأ في نموذج المصادقة
        function hideAuthError() {
            const authError = document.getElementById('authError');
            authError.classList.remove('active');
        }

        // إعداد مستمعات الأحداث
        function setupEventListeners() {
            // قائمة المستخدم
            const userMenuBtn = document.getElementById('userMenuBtn');
            const userMenu = document.getElementById('userMenu');
            
            userMenuBtn.addEventListener('click', function(e) {
                e.stopPropagation();
                userMenu.classList.toggle('active');
            });
            
            // إغلاق قائمة المستخدم عند النقر خارجها
            document.addEventListener('click', function() {
                userMenu.classList.remove('active');
            });
            
            // منع إغلاق القائمة عند النقر داخلها
            userMenu.addEventListener('click', function(e) {
                e.stopPropagation();
            });
            
            // القائمة المتنقلة
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const mobileNav = document.getElementById('mobileNav');
            
            mobileMenuBtn.addEventListener('click', function() {
                mobileNav.classList.toggle('active');
            });
            
            // نافذة البرومبت
            const promptModal = document.getElementById('promptModal');
            const closeModal = document.getElementById('closeModal');
            
            closeModal.addEventListener('click', function() {
                promptModal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
            
            // أزرار عرض البرومبت
            document.addEventListener('click', function(e) {
                if (e.target.closest('.view-prompt-btn')) {
                    const btn = e.target.closest('.view-prompt-btn');
                    const prompt = btn.getAttribute('data-prompt');
                    const title = btn.getAttribute('data-title');
                    openPromptModal(title, prompt);
                }
                
                // أزرار المفضلة
                if (e.target.closest('.favorite-card-btn')) {
                    const btn = e.target.closest('.favorite-card-btn');
                    const cardId = btn.getAttribute('data-id');
                    toggleFavorite(cardId);
                }
            });
            
            // نسخ البرومبت
            const copyBtn = document.getElementById('copyBtn');
            copyBtn.addEventListener('click', copyPrompt);
            
            // الذهاب إلى Gemini
            const geminiBtn = document.getElementById('geminiBtn');
            geminiBtn.addEventListener('click', function() {
                window.open('https://gemini.google.com', '_blank');
                showNotification('تم فتح Gemini في نافذة جديدة!');
            });
            
            // حفظ في المفضلة
            const saveBtn = document.getElementById('saveBtn');
            saveBtn.addEventListener('click', function() {
                const promptText = document.getElementById('promptText').textContent;
                const modalTitle = document.getElementById('modalTitle').textContent;
                saveToFavorites(modalTitle, promptText);
            });
            
            // تسجيل الدخول من القائمة
            const loginMenuItem = document.getElementById('loginMenuItem');
            loginMenuItem.addEventListener('click', openAuthModal);
            
            // تسجيل الدخول بجوجل من القائمة
            const googleSignInBtn = document.getElementById('googleSignInBtn');
            googleSignInBtn.addEventListener('click', signInWithGoogle);
            
            // تسجيل الخروج
            const logoutMenuItem = document.getElementById('logoutMenuItem');
            logoutMenuItem.addEventListener('click', signOut);
            
            // عرض المفضلة
            const favoritesMenuItem = document.getElementById('favoritesMenuItem');
            favoritesMenuItem.addEventListener('click', function() {
                showFavorites();
            });
            
            // نافذة المصادقة
            const authModal = document.getElementById('authModal');
            const closeAuthModal = document.getElementById('closeAuthModal');
            const authForm = document.getElementById('authForm');
            const authToggleLink = document.getElementById('authToggleLink');
            const googleAuthBtn = document.getElementById('googleAuthBtn');
            
            closeAuthModal.addEventListener('click', closeAuthModal);
            
            authToggleLink.addEventListener('click', toggleAuthMode);
            
            authForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                const email = document.getElementById('email').value;
                const password = document.getElementById('password').value;
                
                if (isSignUpMode) {
                    const name = document.getElementById('name').value;
                    
                    if (!name) {
                        showAuthError('الرجاء إدخال الاسم الكامل!');
                        return;
                    }
                    
                    signUpWithEmail(name, email, password);
                } else {
                    signInWithEmail(email, password);
                }
            });
            
            googleAuthBtn.addEventListener('click', signInWithGoogle);
        }

        // فتح نافذة البرومبت
        function openPromptModal(title, prompt) {
            const promptModal = document.getElementById('promptModal');
            const modalTitle = document.getElementById('modalTitle');
            const promptText = document.getElementById('promptText');
            
            modalTitle.textContent = title;
            promptText.textContent = prompt;
            currentPrompt = { title, prompt };
            
            promptModal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }

        // نسخ البرومبت
        function copyPrompt() {
            const promptText = document.getElementById('promptText');
            const textToCopy = promptText.textContent;
            
            navigator.clipboard.writeText(textToCopy).then(() => {
                showNotification('تم نسخ البرومبت بنجاح!');
            }).catch(err => {
                console.error('فشل في نسخ النص: ', err);
                showNotification('فشل في نسخ البرومبت!', 'error');
            });
        }

        // إضافة/إزالة من المفضلة
        function toggleFavorite(cardId) {
            if (!currentUser) {
                showNotification('يجب تسجيل الدخول لإضافة إلى المفضلة!', 'warning');
                openAuthModal();
                return;
            }
            
            const card = [...boysCardsData, ...girlsCardsData].find(c => c.id == cardId);
            
            if (!card) return;
            
            const userFavoritesRef = db.collection('users').doc(currentUser.uid).collection('favorites');
            
            // التحقق مما إذا كانت البطاقة موجودة في المفضلة
            userFavoritesRef.doc(cardId.toString()).get()
                .then((doc) => {
                    if (doc.exists) {
                        // إزالة من المفضلة
                        userFavoritesRef.doc(cardId.toString()).delete()
                            .then(() => {
                                showNotification('تم إزالة البرومبت من المفضلة!', 'success');
                                updateFavoriteButton(cardId, false);
                            })
                            .catch((error) => {
                                console.error('خطأ في إزالة من المفضلة:', error);
                                showNotification('حدث خطأ في إزالة من المفضلة!', 'error');
                            });
                    } else {
                        // إضافة إلى المفضلة
                        userFavoritesRef.doc(cardId.toString()).set({
                            ...card,
                            addedAt: firebase.firestore.FieldValue.serverTimestamp()
                        })
                        .then(() => {
                            showNotification('تم إضافة البرومبت إلى المفضلة!', 'success');
                            updateFavoriteButton(cardId, true);
                        })
                        .catch((error) => {
                            console.error('خطأ في إضافة إلى المفضلة:', error);
                            showNotification('حدث خطأ في إضافة إلى المفضلة!', 'error');
                        });
                    }
                })
                .catch((error) => {
                    console.error('خطأ في التحقق من المفضلة:', error);
                    showNotification('حدث خطأ في التحقق من المفضلة!', 'error');
                });
        }

        // تحديث زر المفضلة
        function updateFavoriteButton(cardId, isFavorite) {
            const buttons = document.querySelectorAll(`.favorite-card-btn[data-id="${cardId}"]`);
            
            buttons.forEach(button => {
                const icon = button.querySelector('i');
                if (isFavorite) {
                    icon.className = 'fas fa-heart';
                    button.style.color = '#FF6584';
                } else {
                    icon.className = 'far fa-heart';
                    button.style.color = '';
                }
            });
        }

        // حفظ في المفضلة من نافذة البرومبت
        function saveToFavorites(title, prompt) {
            if (!currentUser) {
                showNotification('يجب تسجيل الدخول لحفظ البرومبت في المفضلة!', 'warning');
                openAuthModal();
                return;
            }
            
            // إنشاء معرف فريد للبرومبت
            const promptId = Date.now().toString();
            
            const userFavoritesRef = db.collection('users').doc(currentUser.uid).collection('favorites');
            
            userFavoritesRef.doc(promptId).set({
                id: promptId,
                title,
                prompt,
                addedAt: firebase.firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                showNotification('تم إضافة البرومبت إلى المفضلة!', 'success');
            })
            .catch((error) => {
                console.error('خطأ في إضافة إلى المفضلة:', error);
                showNotification('حدث خطأ في إضافة إلى المفضلة!', 'error');
            });
        }

        // تحميل المفضلة للمستخدم
        function loadUserFavorites() {
            if (!currentUser) return;
            
            const userFavoritesRef = db.collection('users').doc(currentUser.uid).collection('favorites');
            const favoritesGrid = document.getElementById('favoritesGrid');
            const emptyFavorites = document.getElementById('emptyFavorites');
            
            userFavoritesRef.orderBy('addedAt', 'desc').get()
                .then((querySnapshot) => {
                    favoritesGrid.innerHTML = '';
                    
                    if (querySnapshot.empty) {
                        emptyFavorites.classList.remove('hidden');
                        favoritesGrid.classList.add('hidden');
                        return;
                    }
                    
                    emptyFavorites.classList.add('hidden');
                    favoritesGrid.classList.remove('hidden');
                    
                    querySnapshot.forEach((doc) => {
                        const favorite = doc.data();
                        const favoriteElement = createFavoriteElement(favorite);
                        favoritesGrid.appendChild(favoriteElement);
                    });
                })
                .catch((error) => {
                    console.error('خطأ في تحميل المفضلة:', error);
                });
        }

        // إنشاء عنصر المفضلة
        function createFavoriteElement(favorite) {
            const element = document.createElement('div');
            element.className = 'favorite-card';
            element.setAttribute('data-id', favorite.id);
            
            element.innerHTML = `
                <img src="${favorite.image || 'https://via.placeholder.com/400x300/6C63FF/FFFFFF?text=Prompt'}" alt="${favorite.title}" class="favorite-card-image" onerror="this.src='https://via.placeholder.com/400x300/6C63FF/FFFFFF?text=${encodeURIComponent(favorite.title)}'">
                <div class="favorite-card-content">
                    <h3 class="favorite-card-title">${favorite.title}</h3>
                    <div class="favorite-card-category">${favorite.category || 'عام'}</div>
                    <p class="favorite-card-description">${favorite.description || ''}</p>
                    <div class="favorite-card-actions">
                        <button class="favorite-card-btn favorite-copy-btn" data-prompt="${favorite.prompt}">
                            <i class="far fa-copy"></i>
                            <span>نسخ البرومبت</span>
                        </button>
                        <button class="favorite-card-btn favorite-remove-btn" data-id="${favorite.id}">
                            <i class="far fa-trash-alt"></i>
                            <span>إزالة</span>
                        </button>
                    </div>
                </div>
            `;
            
            // إضافة مستمعات الأحداث
            const copyBtn = element.querySelector('.favorite-copy-btn');
            const removeBtn = element.querySelector('.favorite-remove-btn');
            
            copyBtn.addEventListener('click', function() {
                navigator.clipboard.writeText(favorite.prompt)
                    .then(() => {
                        showNotification('تم نسخ البرومبت بنجاح!');
                    })
                    .catch(err => {
                        console.error('فشل في نسخ النص: ', err);
                        showNotification('فشل في نسخ البرومبت!', 'error');
                    });
            });
            
            removeBtn.addEventListener('click', function() {
                removeFromFavorites(favorite.id, element);
            });
            
            return element;
        }

        // إزالة من المفضلة
        function removeFromFavorites(favoriteId, element) {
            if (!currentUser) return;
            
            const userFavoritesRef = db.collection('users').doc(currentUser.uid).collection('favorites');
            
            userFavoritesRef.doc(favoriteId.toString()).delete()
                .then(() => {
                    element.remove();
                    showNotification('تم إزالة البرومبت من المفضلة!', 'success');
                    
                    // التحقق مما إذا كانت المفضلة فارغة
                    const favoritesGrid = document.getElementById('favoritesGrid');
                    if (favoritesGrid.children.length === 0) {
                        const emptyFavorites = document.getElementById('emptyFavorites');
                        emptyFavorites.classList.remove('hidden');
                        favoritesGrid.classList.add('hidden');
                    }
                })
                .catch((error) => {
                    console.error('خطأ في إزالة من المفضلة:', error);
                    showNotification('حدث خطأ في إزالة من المفضلة!', 'error');
                });
        }

        // مسح المفضلة
        function clearFavorites() {
            const favoritesGrid = document.getElementById('favoritesGrid');
            const emptyFavorites = document.getElementById('emptyFavorites');
            
            favoritesGrid.innerHTML = '';
            emptyFavorites.classList.remove('hidden');
            favoritesGrid.classList.add('hidden');
        }

        // عرض المفضلة
        function showFavorites() {
            if (!currentUser) {
                showNotification('يجب تسجيل الدخول لعرض المفضلة!', 'warning');
                openAuthModal();
                return;
            }
            
            document.getElementById('favoritesSection').scrollIntoView({ 
                behavior: 'smooth' 
            });
        }

        // إظهار الإشعارات
        function showNotification(message, type = 'success') {
            const notification = document.getElementById('notification');
            notification.textContent = message;
            notification.style.display = 'block';
            
            if (type === 'error') {
                notification.style.background = '#FF6584';
            } else if (type === 'warning') {
                notification.style.background = '#FF9E00';
            } else if (type === 'info') {
                notification.style.background = '#36D1DC';
            } else {
                notification.style.background = '#6C63FF';
            }
            
            setTimeout(() => {
                notification.style.display = 'none';
            }, 3000);
        }
    