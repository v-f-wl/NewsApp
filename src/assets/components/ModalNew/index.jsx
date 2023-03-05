import React from 'react'
import styles from './ModalNew.module.scss'

const ModalNew = () => {
  return (
    <div className={styles.ModalNew}>
        <div className={styles.ModalNewBody}>
            <span className={styles.ModalClose}></span>
            <h2 className={styles.ModalTitle}>
                Activated charcoal helvetica
                drinking 
            </h2>
            <div className={styles.ModalInfo}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 20C16.4 20 20 16.4 20 12C20 7.6 16.4 4 12 4C7.6 4 4 7.6 4 12C4 16.4 7.6 20 12 20ZM12 2C17.5 2 22 6.5 22 12C22 17.5 17.5 22 12 22C6.5 22 2 17.5 2 12C2 6.5 6.5 2 12 2ZM17 13.9L16.3 15.2L11 12.3V7H12.5V11.4L17 13.9Z" fill="black"/>
                </svg>
                <span className={styles.ModalInfoName}>
                    Tristan Preston
                </span>
            </div>
            <div className={styles.ModalInfo}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.8149 12.1336L14.0102 12.6812L14.9241 13.0164C16.518 13.601 17.9005 14.6494 18.8936 16.0264C19.8867 17.4034 20.445 19.0462 20.4965 20.7432L20.4964 20.7432L20.4969 20.7535C20.4986 20.7868 20.4936 20.82 20.4823 20.8513C20.471 20.8826 20.4535 20.9114 20.431 20.9358C20.4084 20.9603 20.3812 20.98 20.3509 20.9938C20.3206 21.0076 20.2878 21.0152 20.2546 21.0162C20.2213 21.0172 20.1882 21.0115 20.1571 20.9995C20.1261 20.9875 20.0977 20.9694 20.0737 20.9463C20.0498 20.9232 20.0307 20.8956 20.0175 20.865C20.0044 20.8344 19.9975 20.8015 19.9972 20.7682L19.9974 20.7682L19.997 20.7567C19.9335 18.6783 19.0632 16.7062 17.5705 15.2585C16.0779 13.8108 14.0802 13.0011 12.0007 13.0011C9.92133 13.0011 7.92362 13.8108 6.43096 15.2585C4.9383 16.7062 4.068 18.6783 4.00448 20.7567L4.00447 20.757C4.00248 20.8234 3.97421 20.8862 3.92587 20.9317C3.87754 20.9773 3.8131 21.0017 3.74674 20.9997C3.68037 20.9977 3.61752 20.9695 3.572 20.9211C3.52648 20.8728 3.50203 20.8084 3.50402 20.742C3.55577 19.0452 4.11409 17.4028 5.10713 16.026C6.10021 14.6491 7.48261 13.601 9.07642 13.0164L9.99025 12.6813L9.18555 12.1336C8.30162 11.5321 7.6338 10.6631 7.28009 9.65411C6.92638 8.64513 6.90542 7.54933 7.22028 6.52757C7.53514 5.5058 8.16924 4.61186 9.02951 3.97697C9.88978 3.34208 10.9309 2.99967 12.0001 3L12.0004 3C13.0696 2.99967 14.1107 3.34208 14.971 3.97697C15.8312 4.61186 16.4653 5.5058 16.7802 6.52757C17.0951 7.54934 17.0741 8.64513 16.7204 9.65411C16.3667 10.6631 15.6989 11.5321 14.8149 12.1336ZM7.50024 8C7.50024 9.19347 7.97435 10.3381 8.81826 11.182C9.66218 12.0259 10.8068 12.5 12.0002 12.5C13.1937 12.5 14.3383 12.0259 15.1822 11.182C16.0261 10.3381 16.5002 9.19347 16.5002 8C16.5002 6.80653 16.0261 5.66193 15.1822 4.81802C14.3383 3.97411 13.1937 3.5 12.0002 3.5C10.8068 3.5 9.66218 3.97411 8.81826 4.81802C7.97435 5.66193 7.50024 6.80653 7.50024 8Z" fill="black" stroke="black"/>
                </svg>
                <span className={styles.ModalInfoName}>
                    3 June 2022
                </span>
            </div>
            <img src="/src/assets/img/modalImg.jpg" alt="#" className={styles.ModalImg} />
            <p className={styles.ModalTxt}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper pretium congue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris ultricies augue sit amet tellus dictum lobortis. Nunc tempor fringilla sapien quis imperdiet. Maecenas in sagittis eros, at volutpat ligula. Sed tincidunt metus et ligula scelerisque semper. Maecenas tincidunt molestie dui, sed rutrum nisl placerat et. Quisque arcu massa, vestibulum vel urna eu, sollicitudin ornare velit. Nam velit metus, imperdiet eget consectetur ac, porttitor sed neque. Sed eget porttitor neque. Ut accumsan, ligula et ultrices dignissim, leo nisi bibendum dui, non ullamcorper libero sapien nec mauris. Nam sollicitudin dui pretium, tincidunt magna vel, lobortis metus. Etiam eget lectus nec felis viverra ornare. Nunc euismod pellentesque sem. Sed eros dui, congue vel fermentum eget, commodo vitae ante.

                Sed varius vulputate eros. Duis in egestas dui. In cursus lobortis justo, eu venenatis dolor auctor sed. Praesent accumsan malesuada ornare. Aenean laoreet eget enim et tincidunt. Fusce imperdiet sed orci sit amet volutpat. Aliquam congue aliquet odio, a vehicula erat consequat sit amet. Nulla a nulla diam. Pellentesque convallis in orci a ultricies. Sed malesuada fermentum velit, varius euismod tellus porta a. In sed tincidunt justo. Morbi tincidunt sodales diam eu lacinia. Vivamus a turpis sit amet erat posuere imperdiet sed et nibh.

                Sed mattis feugiat ex, at elementum nulla consectetur id. Vestibulum non tincidunt sem, vitae rutrum tortor. Proin sed dolor mattis, vulputate urna et, venenatis neque. Vestibulum vestibulum placerat elit, vel dictum elit sodales id. Praesent scelerisque quam sit amet tortor faucibus, sit amet congue quam dignissim. Fusce ut lobortis risus. Quisque lorem sem, vestibulum et leo sed, varius pretium tellus. Fusce dolor ligula, ornare sed consectetur non, cursus vitae mauris. Phasellus a accumsan felis, non tincidunt nibh. Vestibulum eu tortor pellentesque, imperdiet enim a, rutrum arcu. Cras tempus ipsum a tempor bibendum.

                In sed justo viverra tortor vestibulum facilisis. Phasellus non pretium mi. Praesent vitae est et felis suscipit tempor eu et ante. Praesent nec purus id quam viverra pulvinar in imperdiet nunc. Praesent feugiat tincidunt nibh a mattis. Nullam cursus nec augue non condimentum. Vestibulum consectetur vestibulum libero, eu convallis mauris. Nulla facilisi. Suspendisse potenti.

                Vestibulum viverra lacus non ligula rhoncus varius. Nam euismod tincidunt sem, convallis lobortis elit lacinia quis. Donec ultrices sapien placerat tempus gravida. Quisque eget lacus at tellus hendrerit feugiat quis eget ipsum. Maecenas condimentum consectetur faucibus. Ut quis turpis arcu. Mauris suscipit urna vehicula, suscipit mi nec, scelerisque arcu. Cras tempor eleifend justo nec ultricies.

                Proin tincidunt aliquam lacus vitae venenatis. Vestibulum dui turpis, rutrum eu euismod et, rutrum et enim. Aliquam vel felis dapibus, cursus tortor at, tempus massa. Curabitur quis metus eu tellus finibus mattis in at ligula. Ut et justo ac sem feugiat congue rhoncus a orci. Praesent rutrum rhoncus lacus in iaculis. Maecenas non dui semper, congue dui eu, vulputate urna.

                Nulla quam massa, aliquet sed turpis id, porta mattis augue. Aenean sed imperdiet nisl, quis facilisis diam. Cras commodo convallis rutrum. Fusce sollicitudin tempor tellus eleifend dapibus. Nulla nec sodales lectus, vel imperdiet nisi. Mauris lacus libero, elementum in sem nec, fringilla euismod nibh. Nam aliquam a massa vel dictum. Nullam ac commodo arcu, a consectetur sem. Sed a diam sed diam tempus convallis a sit amet nibh. Phasellus aliquet bibendum tellus vel hendrerit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
        </div>
    </div>
  )
}

export default ModalNew