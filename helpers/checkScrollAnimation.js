export function checkScrollAnimation_Y(container, box, direction, velocity = 2.3) {
	const calc = () => {
		if (document.querySelector(container)) {
			const containerMotion = document.querySelector(container)
			const boxMotion = document.querySelector(box)

		if (direction == 'negative') {
			if (containerMotion.getBoundingClientRect().bottom >= 0 && containerMotion.getBoundingClientRect().bottom <= window.innerHeight + 200) {
				boxMotion.style.transform = `translateY(${containerMotion.getBoundingClientRect().bottom / velocity - 200}px)`
			}
		} else {
			if (containerMotion.getBoundingClientRect().bottom >= 0 && containerMotion.getBoundingClientRect().bottom <= window.innerHeight + 200) {
				boxMotion.style.transform = `translateY(-${containerMotion.getBoundingClientRect().bottom / velocity - 200}px)`
			}
		}
		}
	}
	window.addEventListener('scroll', () => calc())
}

export function checkScrollAnimation_X(container, box, offset = window.innerHeight + 200, operation = 'divider', direction, velocity = 2.3) {
	const calc = () => {
		if (document.querySelector(container)) {
			const containerMotion = document.querySelector(container)
			const boxMotion = document.querySelector(box)

		if (direction == 'negative') {
			if (containerMotion.getBoundingClientRect().bottom >= 0 && containerMotion.getBoundingClientRect().bottom <= offset) {
				boxMotion.style.transform = `translateX(${
					operation == 'divider'
					? containerMotion.getBoundingClientRect().bottom / velocity
					: containerMotion.getBoundingClientRect().bottom * velocity
				}px)`
			}
		} else {
			if (containerMotion.getBoundingClientRect().bottom >= 0 && containerMotion.getBoundingClientRect().bottom <= offset) {
				boxMotion.style.transform = `translateX(-${
					operation == 'divider'
					? containerMotion.getBoundingClientRect().bottom / velocity
					: containerMotion.getBoundingClientRect().bottom * velocity
				}px)`
			}
		}
		}
	}
	window.addEventListener('scroll', () => calc())
}