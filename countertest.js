
<script>
    function animateCounter(id, target) {
        const counter = document.getElementById(id);
        let count = 0;
        const speed = target / 50;

        const updateCounter = () => {
            if (count < target) {
                count += Math.ceil(speed);
                if (count > target) count = target; 
                counter.innerText = count;
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = count;
            }
        };
        updateCounter();
    }

    const resetCounters = () => {
        document.getElementById('counter0').innerText = '0';
        document.getElementById('counter1').innerText = '0';
        document.getElementById('counter2').innerText = '0';
        document.getElementById('counter3').innerText = '0';
    };

    const statsSection = document.querySelector('.stats-row');
    let observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                resetCounters();
                animateCounter('counter0', 2010);
                animateCounter('counter1', 150);
                animateCounter('counter2', 200);
                animateCounter('counter3', 160);
            }
        });
    }, { threshold: 0.5 });

    observer.observe(statsSection);
</script>

<style>
.section-counter {
    position: relative;
    padding: 50px 20px;
    background-color: #fff;
    text-align: center;
    overflow: hidden;
}

.section-counter .section-bg {
    background-size: cover;
    background-repeat: no-repeat;
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    opacity: 0.2;
}

.section-counter .section-bg-color {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 2;
    background-color: #f6f6f6;
}

.section-counter .inside {
    position: relative;
    z-index: 3;
    color: #000;
}

/* 데스크탑 레이아웃 */
.section-counter .stats-row {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 40px;
}

.section-counter .stat-block {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
}

.section-counter .stat-block p {
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: bold;
}
 
.section-counter .stat-block .icon {  
	background-color: #f2f2f2;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;  
    margin-bottom: 20px;  
}

.section-counter .stat-block .icon img { 
    width: auto;
    height: 31px;
}

.section-counter .counter-container {
    display: flex;
    align-items: baseline; /* 숫자와 단위를 수직 정렬 */
}

.section-counter .counter-value {
    font-size: 72px;
    color: #222a75;
}

.section-counter .unit {
    font-size: 20px;
    margin-left: 5px; /* 숫자와 단위 사이의 간격 */
}

.section-counter .divider {
    width: 1px;
    height: 80px;
    margin: 0 20px;
    opacity: 0.5;
}

/* 반응형 - 태블릿 이하 (가로 배치) */
@media (max-width: 1024px) {
    .section-counter .stats-row {
        flex-direction: column; /* 세로로 배치 (태블릿 이하) */
        gap: 40px;
    }

    .section-counter .stat-block {
        display: flex;
        flex-direction: row; /* 가로 배치 */
        align-items: center;
        justify-content: flex-start;
        width: 100%;
        text-align: left;
        padding: 20px;
    }

    .section-counter .stat-block .icon {
        margin-right: 20px; /* 아이콘과 텍스트 간격 */
        width: 80px;
        height: 80px;
    }

    .section-counter .counter-value {
        font-size: 60px; /* 숫자 크기 조정 */
        margin-right: 10px;
    }

    .section-counter .unit {
        font-size: 22px;
    }
}

/* 반응형 - 모바일 이하 (더 작은 화면에서도 가로 배치 유지) */
@media (max-width: 768px) {
    .section-counter .stat-block {
        flex-direction: row;
        justify-content: space-between; /* 양 끝 정렬 */
        width: 100%;
    }

    .section-counter .stat-block .icon {
        width: 50px;
        height: 50px;
        margin-right: 15px;
    }

    .section-counter .counter-value {
        font-size: 36px; /* 모바일 크기에 맞춘 숫자 크기 */
    }

    .section-counter .unit {
        font-size: 16px;
    }
}
</style>
