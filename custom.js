// قسم التخصيص الجديد - JavaScript فقط
// بيانات قسم التخصيص
const customizationData = {
    clothing: {
        jacket_black: {
            name: "جاكيت أسود",
            images: {
                solid: {
                    yellow: "jacket_black_solid_yellow.jpg",
                    blue: "jacket_black_solid_blue.jpg", 
                    foggy: "jacket_black_solid_foggy.jpg"
                },
                nature: {
                    forest: "jacket_black_nature_forest.jpg",
                    street: "jacket_black_nature_street.jpg",
                    ocean: "jacket_black_nature_ocean.jpg"
                },
                indoor: {
                    apartment: "jacket_black_indoor_apartment.jpg",
                    office: "jacket_black_indoor_office.jpg",
                    wedding: "jacket_black_indoor_wedding.jpg",
                    garden: "jacket_black_indoor_garden.jpg"
                }
            },
            prompts: {
                solid: {
                    yellow: "رجل يرتدي جاكيت أسود أنيق مع خلفية صفراء ساطعة، إضاءة احترافية، تفاصيل عالية الجودة، صورة واقعية بدقة 4K",
                    blue: "رجل يرتدي جاكيت أسود كلاسيكي مع خلفية زرقاء ناعمة، مظهر عصري وأنيق، إضاءة متقنة، صورة فوتوغرافية احترافية",
                    foggy: "رجل يرتدي جاكيت أسود مع خلفية ضبابية رمادية، جو درامي وغامض، إضاءة خافتة، تأثيرات ضباب فنية"
                },
                nature: {
                    forest: "رجل يرتدي جاكيت أسود في وسط غابة خضراء، أشعة الشمس تتخلل الأوراق، طبيعة خلابة، منظر طبيعي بديع",
                    street: "رجل يرتدي جاكيت أسود في شارع مزدحم بالسيارات، أضواء المدينة ليلاً، جو حضاري، حركة وحيوية",
                    ocean: "رجل يرتدي جاكيت أسود على شاطئ البحر، الأمواج تتكسر، غروب الشمس الذهبي، منظر بحري ساحر"
                },
                indoor: {
                    apartment: "رجل يرتدي جاكيت أسود في شقة عصرية، ديكور حديث، إضاءة دافئة، أجواء مريحة وأنيقة",
                    office: "رجل يرتدي جاكيت أسود في مكتب فاخر، طاولة عمل نظيفة، جو احترافي، بيئة عمل راقية",
                    wedding: "رجل يرتدي جاكيت أسود في قاعة أفراح، زهور وأضواء، مناسبة سعيدة، احتفال مميز",
                    garden: "رجل يرتدي جاكيت أسود في حديقة منزلية، زهور ملونة، جو هادئ، طبيعة منظمة وجميلة"
                }
            }
        },
        shirt: {
            name: "قميص",
            images: {
                solid: {
                    yellow: "shirt_solid_yellow.jpg",
                    blue: "shirt_solid_blue.jpg",
                    foggy: "shirt_solid_foggy.jpg"
                },
                nature: {
                    forest: "shirt_nature_forest.jpg",
                    street: "shirt_nature_street.jpg", 
                    ocean: "shirt_nature_ocean.jpg"
                },
                indoor: {
                    apartment: "shirt_indoor_apartment.jpg",
                    office: "shirt_indoor_office.jpg",
                    wedding: "shirt_indoor_wedding.jpg",
                    garden: "shirt_indoor_garden.jpg"
                }
            },
            prompts: {
                solid: {
                    yellow: "رجل يرتدي قميص أنيق مع خلفية صفراء مشرقة، مظهر عصري وجذاب، تفاصيل دقيقة، صورة احترافية",
                    blue: "رجل يرتدي قميص رسمي مع خلفية زرقاء هادئة، أناقة واحترافية، إضاءة متوازنة، جودة عالية",
                    foggy: "رجل يرتدي قميص مع خلفية ضبابية، جو فني وإبداعي، تأثيرات ضباب فنية، إبداع بصري"
                },
                nature: {
                    forest: "رجل يرتدي قميص في غابة خضراء، الطبيعة البكر، هدوء وسكينة، مناظر طبيعية خلابة",
                    street: "رجل يرتدي قميص في شارع المدينة، الحياة اليومية، واقعية، حركة وحيوية حضرية",
                    ocean: "رجل يرتدي قميص على الشاطئ، نسمات البحر، استرخاء، أجواء بحرية هادئة"
                },
                indoor: {
                    apartment: "رجل يرتدي قميص في منزل مريح، أجواء عائلية، دفء، بيئة منزلية مريحة",
                    office: "رجل يرتدي قميص في مكان العمل، جدية واحترافية، بيئة عمل منظمة",
                    wedding: "رجل يرتدي قميص في حفل، بهجة وفرح، مناسبة سعيدة واحتفالية",
                    garden: "رجل يرتدي قميص في الحديقة، نزهة ممتعة، طبيعة هادئة، استرخاء في الهواء الطلق"
                }
            }
        },
        suit: {
            name: "بدلة",
            images: {
                solid: {
                    yellow: "suit_solid_yellow.jpg",
                    blue: "suit_solid_blue.jpg",
                    foggy: "suit_solid_foggy.jpg"
                },
                nature: {
                    forest: "suit_nature_forest.jpg",
                    street: "suit_nature_street.jpg",
                    ocean: "suit_nature_ocean.jpg"
                },
                indoor: {
                    apartment: "suit_indoor_apartment.jpg",
                    office: "suit_indoor_office.jpg",
                    wedding: "suit_indoor_wedding.jpg",
                    garden: "suit_indoor_garden.jpg"
                }
            },
            prompts: {
                solid: {
                    yellow: "رجل يرتدي بدلة رسمية مع خلفية صفراء فاتحة، أناقة وفخامة، تفاصيل راقية، صورة احترافية",
                    blue: "رجل يرتدي بدلة داكنة مع خلفية زرقاء ملكية، احترافية مميزة، أناقة وجاذبية، جودة عالية",
                    foggy: "رجل يرتدي بدلة مع خلفية ضبابية، غموض وجاذبية، تأثيرات فنية، إبداع بصري مميز"
                },
                nature: {
                    forest: "رجل يرتدي بدلة في غابة، تباين جميل بين الأناقة والطبيعة، تفرد وإبداع، مناظر طبيعية ساحرة",
                    street: "رجل يرتدي بدلة في وسط المدينة، أناقة حضرية، تباين مميز، بيئة حضرية راقية",
                    ocean: "رجل يرتدي بدلة على الشاطئ، فخامة مع إطلالة بحرية، ترف واسترخاء، منظر بحري فاخر"
                },
                indoor: {
                    apartment: "رجل يرتدي بدلة في منزل فاخر، رقي وذوق، ديكور راقي، أجواء فاخرة",
                    office: "رجل يرتدي بدلة في مكتب تنفيذي، قيادة ونفوذ، بيئة عمل فاخرة، احترافية عالية",
                    wedding: "رجل يرتدي بدلة في حفل زفاف، أناقة واحتفال، مناسبة خاصة، بهجة وترف",
                    garden: "رجل يرتدي بدلة في حديقة قصر، فخامة وترف، طبيعة منظمة، أجواء أرستقراطية"
                }
            }
        },
        hoodie: {
            name: "هودي",
            images: {
                solid: {
                    yellow: "hoodie_solid_yellow.jpg",
                    blue: "hoodie_solid_blue.jpg",
                    foggy: "hoodie_solid_foggy.jpg"
                },
                nature: {
                    forest: "hoodie_nature_forest.jpg",
                    street: "hoodie_nature_street.jpg",
                    ocean: "hoodie_nature_ocean.jpg"
                },
                indoor: {
                    apartment: "hoodie_indoor_apartment.jpg",
                    office: "hoodie_indoor_office.jpg",
                    wedding: "hoodie_indoor_wedding.jpg",
                    garden: "hoodie_indoor_garden.jpg"
                }
            },
            prompts: {
                solid: {
                    yellow: "شخص يرتدي هودي مريح مع خلفية صفراء، جو شبابي وعصري، راحة واسترخاء، صورة عصرية",
                    blue: "شخص يرتدي هودي مع خلفية زرقاء، راحة واسترخاء، أجواء مريحة، بسيط وأنيق",
                    foggy: "شخص يرتدي هودي مع خلفية ضبابية، جو فني وإبداعي، تأثيرات ضباب فنية، إبداع بصري"
                },
                nature: {
                    forest: "شخص يرتدي هودي في الغابة، مغامرة واستكشاف، طبيعة برية، جو شجاع ومغامر",
                    street: "شخص يرتدي هودي في الشارع، حياة المدينة، واقعية، أجواء حضرية يومية",
                    ocean: "شخص يرتدي هودي على الشاطئ، استرخاء وهدوء، أجواء بحرية مريحة، نسمات بحر هادئة"
                },
                indoor: {
                    apartment: "شخص يرتدي هودي في المنزل، راحة واسترخاء، أجواء منزلية مريحة، بسيط وعملي",
                    office: "شخص يرتدي هودي في مساحة عمل مريحة، إبداع وعمل، بيئة عمل غير رسمية",
                    wedding: "شخص يرتدي هودي في حفل informal، مرح ومرح، أجواء ودية، احتفال غير رسمي",
                    garden: "شخص يرتدي هودي في الحديقة، نزهة مريحة، طبيعة هادئة، استرخاء في الهواء الطلق"
                }
            }
        }
    }
};

// تهيئة قسم التخصيص
function initCustomizationSection() {
    const clothingSelect = document.getElementById('clothingSelect');
    const backgroundTypeSelect = document.getElementById('backgroundTypeSelect');
    const solidBackgroundGroup = document.getElementById('solidBackgroundGroup');
    const natureBackgroundGroup = document.getElementById('natureBackgroundGroup');
    const indoorBackgroundGroup = document.getElementById('indoorBackgroundGroup');
    const copyCustomPrompt = document.getElementById('copyCustomPrompt');
    
    // إظهار/إخفاء خيارات الخلفية الفرعية
    backgroundTypeSelect.addEventListener('change', function() {
        solidBackgroundGroup.style.display = 'none';
        natureBackgroundGroup.style.display = 'none';
        indoorBackgroundGroup.style.display = 'none';
        
        if (this.value === 'solid') {
            solidBackgroundGroup.style.display = 'block';
        } else if (this.value === 'nature') {
            natureBackgroundGroup.style.display = 'block';
        } else if (this.value === 'indoor') {
            indoorBackgroundGroup.style.display = 'block';
        }
        
        generateCustomizationPreview();
    });
    
    // تحديث المعاينة عند تغيير أي اختيار
    clothingSelect.addEventListener('change', generateCustomizationPreview);
    document.getElementById('solidColorSelect').addEventListener('change', generateCustomizationPreview);
    document.getElementById('natureBackgroundSelect').addEventListener('change', generateCustomizationPreview);
    document.getElementById('indoorBackgroundSelect').addEventListener('change', generateCustomizationPreview);
    
    // نسخ البرومبت المخصص
    copyCustomPrompt.addEventListener('click', function() {
        const promptText = document.getElementById('generatedPrompt').textContent;
        if (promptText) {
            navigator.clipboard.writeText(promptText)
                .then(() => {
                    showNotification('تم نسخ البرومبت المخصص بنجاح!');
                })
                .catch(err => {
                    console.error('فشل في نسخ النص: ', err);
                    showNotification('فشل في نسخ البرومبت!', 'error');
                });
        }
    });
    
    // إضافة خيارات الملابس ديناميكياً
    populateClothingOptions();
}

// تعبئة خيارات الملابس
function populateClothingOptions() {
    const clothingSelect = document.getElementById('clothingSelect');
    
    // إزالة الخيارات الحالية (باستثناء الخيار الافتراضي)
    while (clothingSelect.children.length > 1) {
        clothingSelect.removeChild(clothingSelect.lastChild);
    }
    
    // إضافة خيارات الملابس من البيانات
    Object.keys(customizationData.clothing).forEach(clothingKey => {
        const clothing = customizationData.clothing[clothingKey];
        const option = document.createElement('option');
        option.value = clothingKey;
        option.textContent = clothing.name;
        clothingSelect.appendChild(option);
    });
}

// إنشاء معاينة التخصيص
function generateCustomizationPreview() {
    const clothing = document.getElementById('clothingSelect').value;
    const backgroundType = document.getElementById('backgroundTypeSelect').value;
    const previewSection = document.getElementById('previewSection');
    const resultSection = document.getElementById('resultSection');
    const previewGrid = document.getElementById('previewGrid');
    const generatedPrompt = document.getElementById('generatedPrompt');
    
    // إخفاء الأقسام إذا لم يتم اختيار كل شيء
    if (!clothing || !backgroundType) {
        previewSection.style.display = 'none';
        resultSection.style.display = 'none';
        return;
    }
    
    const clothingData = customizationData.clothing[clothing];
    if (!clothingData) return;
    
    // الحصول على الخلفية المحددة
    let backgroundValue = '';
    if (backgroundType === 'solid') {
        backgroundValue = document.getElementById('solidColorSelect').value;
    } else if (backgroundType === 'nature') {
        backgroundValue = document.getElementById('natureBackgroundSelect').value;
    } else if (backgroundType === 'indoor') {
        backgroundValue = document.getElementById('indoorBackgroundSelect').value;
    }
    
    // عرض الصور
    previewGrid.innerHTML = '';
    
    const imageData = clothingData.images[backgroundType][backgroundValue];
    const promptData = clothingData.prompts[backgroundType][backgroundValue];
    
    // إنشاء عنصر المعاينة
    const previewItem = document.createElement('div');
    previewItem.className = 'preview-item';
    previewItem.innerHTML = `
        <img src="${imageData}" alt="${clothingData.name}" class="preview-image" onerror="this.src='https://via.placeholder.com/300x400/6C63FF/FFFFFF?text=${encodeURIComponent(clothingData.name)}'">
        <div class="preview-overlay">
            <div class="preview-info">
                <h5>${clothingData.name}</h5>
                <p>${getBackgroundName(backgroundType, backgroundValue)}</p>
            </div>
        </div>
    `;
    
    // إضافة حدث النقر لنسخ البرومبت
    previewItem.addEventListener('click', function() {
        navigator.clipboard.writeText(promptData)
            .then(() => {
                showNotification('تم نسخ برومبت هذه الصورة!');
            })
            .catch(err => {
                console.error('فشل في نسخ النص: ', err);
                showNotification('فشل في نسخ البرومبت!', 'error');
            });
    });
    
    previewGrid.appendChild(previewItem);
    
    // عرض البرومبت
    generatedPrompt.textContent = promptData;
    
    // إظهار الأقسام
    previewSection.style.display = 'block';
    resultSection.style.display = 'block';
}

// الحصول على اسم الخلفية بالعربية
function getBackgroundName(type, value) {
    const names = {
        solid: {
            yellow: 'خلفية صفراء',
            blue: 'خلفية زرقاء', 
            foggy: 'خلفية ضبابية'
        },
        nature: {
            forest: 'خلفية غابة',
            street: 'خلفية شارع',
            ocean: 'خلفية بحر'
        },
        indoor: {
            apartment: 'داخل شقة',
            office: 'على مكتب',
            wedding: 'قاعة أفراح',
            garden: 'في حديقة'
        }
    };
    
    return names[type]?.[value] || value;
}

// دالة الإشعارات (للاستخدام في نسخ البرومبت)
function showNotification(message, type = 'success') {
    // إنشاء عنصر الإشعار إذا لم يكن موجوداً
    let notification = document.getElementById('customizationNotification');
    if (!notification) {
        notification = document.createElement('div');
        notification.id = 'customizationNotification';
        notification.style.cssText = `
            position: fixed;
            bottom: 30px;
            right: 30px;
            background: var(--primary, #6C63FF);
            color: white;
            padding: 18px 30px;
            border-radius: 12px;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
            display: none;
            z-index: 1001;
            animation: slideIn 0.3s ease;
            max-width: 350px;
            font-weight: 500;
            font-size: 1.05rem;
        `;
        document.body.appendChild(notification);
    }
    
    // تخصيص اللون حسب النوع
    if (type === 'error') {
        notification.style.background = '#FF6584';
    } else if (type === 'warning') {
        notification.style.background = '#FF9E00';
    } else if (type === 'info') {
        notification.style.background = '#36D1DC';
    } else {
        notification.style.background = '#6C63FF';
    }
    
    notification.textContent = message;
    notification.style.display = 'block';
    
    setTimeout(() => {
        notification.style.display = 'none';
    }, 3000);
}

// تهيئة القسم عند تحميل الصفحة
document.addEventListener('DOMContentLoaded', function() {
    initCustomizationSection();
});

// إضافة أنيميشن CSS للإشعارات
const style = document.createElement('style');
style.textContent = `
    @keyframes slideIn {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);