const useInView = (ref, threshold) => {
	const options = {
		threshold: threshold
	}
	// eslint-disable-next-line no-unused-vars
	const callback = (entries, observer) => {
		entries.forEach(entry => {
			if (entry.isIntersecting && entry.intersectionRatio == 1) {
				entry.target.classList.add('box--visible')
			} else {
				entry.target.classList.remove('box--visible')
			}
		})
	}
	const observer = new IntersectionObserver(callback, options)
	observer.observe(ref)
}

export default useInView

//Threshold: 0 (Значение по умолчанию. Возвратная функция сработает два раза – как только первый пиксель элемента попадёт в область наблюдения, и как только последний пиксель покинет область наблюдения.)
//Threshold: 0.5 (Возвратная функция сработает, когда центр (50%) элемента будет пересекать область наблюдения в любом направлении)
//Threshold: [0, 0.2, 0.5, 1] (Возвратная функция срабатывает при: {
//1) первый пиксель элемента попадает в область наблюдения, либо последний пиксель выходит из области наблюдения.
//2) 20% элемента внутри области наблюдения.
//3) 50% элемента внутри области наблюдения.
//4) Когда элемент полностью в области наблюдения.
//}

const start = () => {
	let delay = 0
	const jobs = document.querySelectorAll(
		'.vacancy-serp-item__layout a.bloko-button'
	)
	jobs.forEach(el => {
		setTimeout(() => {
			el.click()
		}, delay)
		delay += 2000
	})
}

start()
