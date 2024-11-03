import { IResultExercises, ISubtypeExercise } from './interface'

function createMarkupForExercises(results: IResultExercises[]): string {
    return results.map(({ name, filter, imgUrl }) => {
        return `
        <li class='exercises__item' data-filterName='${filter.toLocaleLowerCase()}' data-exercise='${name}' style='background: linear-gradient(0deg, rgba(16, 16, 16, 0.7) 0%, rgba(16, 16, 16, 0.7) 100%), url(${imgUrl}) lightgray -16.825px 0.844px / 121.36% 108.504% no-repeat;'>
        <h3 class='exercises__item-title'>${name}</h3>
        <p class='exercises__item-filter'>${filter}</p>
        </li>
        `
    }).join('')
}

function createMarkupForExercisesPagination(totalPages: number) {
    let str = ''
    for (let i = 1; i <= totalPages; i++) {
        str += `<li data-page='${i}' class='pagination__item'><button class='pagination__btn'>${i}</button></li>`
    }
    return str
}

function createMarkupForSubtypeExercises(results: ISubtypeExercise[]): string {
      return results.map(({ bodyPart, burnedCalories, name, rating, target, time, _id }: ISubtypeExercise) => {
        return `
        <li class="subtype-exercises__item js-subtype-exercises__item" data-id="${_id}">
  <div class="subtype-exercises__layout">
    <p class="subtype-exercises__workout">WORKOUT</p>
    <p class="subtype-exercises__rating">${Math.round(rating)}.0 <svg width="18" height="18" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="#EEA10C"/>
</svg></p>
    <button class="subtype-exercises__btn js-subtype-exercises__btn">
      Start
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6.5625 12.25L12.25 6.5625M12.25 6.5625L6.5625 0.875M12.25 6.5625H0.875"
          stroke="#1B1B1B"
          stroke-width="1.3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  </div>
  <div class="subtype-exercises__box">
    <div class="subtype-exercises__icon--wrap">
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M14.8234 4.72544C14.6138 4.47504 14.2403 4.44212 13.9899 4.65092L12.349 6.02938L11.5943 4.15967C11.5675 4.08949 11.5267 4.03057 11.4799 3.97859C11.3257 3.63549 11.058 3.34091 10.6889 3.17023C10.5286 3.09745 10.3631 3.05846 10.1977 3.0394C10.1613 3.02034 10.1283 2.99521 10.0868 2.98222L7.19901 2.17732C7.03699 2.13314 6.87411 2.16173 6.74068 2.2397C6.58213 2.29342 6.4461 2.40865 6.38112 2.57587L5.29378 5.37178C5.17594 5.67589 5.3267 6.01899 5.63168 6.13855C5.93492 6.25638 6.27888 6.10476 6.39758 5.79978L7.31598 3.43882L8.63119 3.80444C8.59913 3.85643 8.56447 3.90495 8.53848 3.9604L6.85245 7.61491C6.82819 7.66863 6.81519 7.72322 6.79786 7.77867L4.7488 11.214L1.31955 12.3611C0.931399 12.6514 0.84909 13.1981 1.13587 13.5862C1.42439 13.9752 1.97282 14.0575 2.36011 13.7708L5.86907 12.5621C5.97651 12.4841 6.05448 12.3819 6.1134 12.2719C6.15759 12.2251 6.20784 12.1878 6.24163 12.1298L7.46327 10.0816L9.63189 11.9296L7.31165 14.5445C6.99194 14.9049 7.024 15.4603 7.38616 15.7791C7.74745 16.1005 8.30108 16.0667 8.62252 15.7046L11.5181 12.4426C11.6082 12.342 11.6619 12.2259 11.6983 12.1047C11.7199 12.0388 11.7199 11.9704 11.7251 11.9019C11.7251 11.8673 11.7381 11.8361 11.7355 11.804C11.7277 11.5649 11.6307 11.3327 11.4349 11.1672L9.43955 9.46557C9.58337 9.32867 9.70554 9.16579 9.79391 8.97431L11.0866 6.17494L11.5007 7.27788C11.5181 7.37578 11.551 7.47196 11.6203 7.55253C11.6827 7.62704 11.7624 7.67643 11.8473 7.71109C11.856 7.71542 11.8664 7.71628 11.8768 7.71888C11.9305 7.73794 11.9851 7.75614 12.0414 7.75874C12.1081 7.7648 12.1757 7.75614 12.2441 7.73708C12.2459 7.73621 12.2467 7.73621 12.2467 7.73621C12.2649 7.73188 12.2831 7.73534 12.3013 7.72755C12.3975 7.69116 12.4711 7.62964 12.5344 7.55773L14.8893 5.55892C15.1397 5.34838 15.034 4.97583 14.8234 4.72544Z"
          fill="#F6F6F6"
        />
        <path
          d="M11.8448 3.30102C12.7564 3.30102 13.4954 2.56206 13.4954 1.65051C13.4954 0.738959 12.7564 0 11.8448 0C10.9333 0 10.1943 0.738959 10.1943 1.65051C10.1943 2.56206 10.9333 3.30102 11.8448 3.30102Z"
          fill="#F6F6F6"
        />
      </svg>
    </div>
      <h3 class="subtype-exercises__title">${name}</h3>
  </div>
  <div class="subtype-exercises__container">
    <p class="subtype-exercises__text">
      Burned calories: <span class="subtype-exercises__dynamic-text">${burnedCalories} / ${time} min</span>
    </p>
    <p class="subtype-exercises__text">
      Body part: <span class="subtype-exercises__dynamic-text">${bodyPart}</span>
    </p>
    <p class="subtype-exercises__text">
      Target: <span class="subtype-exercises__dynamic-text">${target}</span>
    </p>
  </div>
</li>
        `
    }).join('')  
  }

function createMarkupForSubtypeExercisesModal({ bodyPart, burnedCalories, description, equipment, gifUrl, name, popularity, rating, target, time, _id}: ISubtypeExercise): string {
  const star = Math.round(rating)
  const arrStr:string[] = []
  for (let i = 0; i < star; i++) {
    arrStr.push(`<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="#EEA10C"/>
</svg>
`)
  }
  while (arrStr.length < 5) {
    arrStr.push(`<svg width="14" height="13" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.04894 0.927052C6.3483 0.0057416 7.6517 0.00574088 7.95106 0.927052L8.79611 3.52786C8.92999 3.93989 9.31394 4.21885 9.74717 4.21885H12.4818C13.4505 4.21885 13.8533 5.45846 13.0696 6.02786L10.8572 7.63525C10.5067 7.8899 10.3601 8.34127 10.494 8.75329L11.339 11.3541C11.6384 12.2754 10.5839 13.0415 9.80017 12.4721L7.58779 10.8647C7.2373 10.6101 6.7627 10.6101 6.41222 10.8647L4.19983 12.4721C3.41612 13.0415 2.36164 12.2754 2.66099 11.3541L3.50604 8.75329C3.63992 8.34127 3.49326 7.8899 3.14277 7.63525L0.930391 6.02787C0.146677 5.45846 0.549452 4.21885 1.51818 4.21885H4.25283C4.68606 4.21885 5.07001 3.93989 5.20389 3.52786L6.04894 0.927052Z" fill="#1B1B1B" fill-opacity="0.2"/>
</svg>
`)
  }

  return `
    <div class="favorite-modal" data-id='${_id}'>
  <button class="modal-close js-modal-close">✕</button>
  <img src="${gifUrl}" alt="${name}" class="modal-gif" />
  <div class="modal-box">
    <h3 class="modal-title">${name}</h3>
    <p class="modal-rating">${Math.round(rating)}.0 ${arrStr.join('')}</p>
    <div class="modal-detail__container">
      <p class="modal-detail__text">
        Target<span class="modal-detail__dynamic-text">${target}</span>
      </p>
      <p class="modal-detail__text">
        Body Part<span class="modal-detail__dynamic-text">${bodyPart}</span>
      </p>
      <p class="modal-detail__text">
        Equipment<span class="modal-detail__dynamic-text">${equipment}</span>
      </p>
      <p class="modal-detail__text">
        Popular<span class="modal-detail__dynamic-text">${popularity}</span>
      </p>
      <p class="modal-detail__text">
        Burned Calories<span class="modal-detail__dynamic-text">${burnedCalories}/${time} min</span>
      </p>
    </div>
    <p class="modal-description">${description}</p>
    <div class='modal-btn--wrap'>
    <button class="modal-favorite__btn js-modal-favorite">
      Add to favorites
      <svg
        width="18"
        height="16"
        viewBox="0 0 18 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15.6306 2.45753C15.2475 2.07428 14.7927 1.77026 14.2921 1.56284C13.7915 1.35542 13.2549 1.24866 12.7131 1.24866C12.1712 1.24866 11.6347 1.35542 11.1341 1.56284C10.6335 1.77026 10.1786 2.07428 9.79558 2.45753L9.00058 3.25253L8.20558 2.45753C7.43181 1.68376 6.38235 1.24906 5.28808 1.24906C4.1938 1.24906 3.14435 1.68376 2.37058 2.45753C1.59681 3.2313 1.16211 4.28075 1.16211 5.37503C1.16211 6.4693 1.59681 7.51876 2.37058 8.29253L3.16558 9.08753L9.00058 14.9225L14.8356 9.08753L15.6306 8.29253C16.0138 7.90946 16.3178 7.45464 16.5253 6.95404C16.7327 6.45345 16.8394 5.91689 16.8394 5.37503C16.8394 4.83316 16.7327 4.2966 16.5253 3.79601C16.3178 3.29542 16.0138 2.84059 15.6306 2.45753Z"
          stroke="#F6F6F6"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
    <button class="modal-rating__btn js-modal-rating">Give a rating</button></div> 
  </div>
</div>
  `
}

export { createMarkupForExercises, createMarkupForExercisesPagination, createMarkupForSubtypeExercises, createMarkupForSubtypeExercisesModal}

    