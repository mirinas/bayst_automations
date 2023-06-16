import styles from "@/styles/About.module.css";


export function InfoCard({ title, style, children }) {

    const elementDrag = down => {
        if(window.screen.width < 780) {
            return;
        }

        down.preventDefault()

        const main = document.querySelector(`.${styles.main}`);
        const dragLimit = parseFloat(window.getComputedStyle(main).getPropertyValue('padding-left'))

        const card = down.target.parentElement;
        let x0 = down.clientX;
        let y0 = down.clientY;
        // element drag
        document.onmousemove = move => {
            move.preventDefault()
            if(card == null) return

            let nextLeft = card.offsetLeft - (x0 - move.clientX)
            let nextTop = card.offsetTop - (y0 - move.clientY)
            if(nextLeft < dragLimit) {
                nextLeft = dragLimit
            }
            if(nextTop < dragLimit) {
                nextTop = dragLimit
            }

            if(move.clientX > dragLimit) {
                x0 = move.clientX
            }
            if(move.clientY > dragLimit) {
                y0 = move.clientY
            }
            card.style.left = `${nextLeft}px`
            card.style.top = `${nextTop}px`
        }
        // set up the end of dragging
        document.onmouseup = () => {
            document.onmouseup = null
            document.onmousemove = null
        }
    }

    return (
        <div
            className={styles.info_card}
            style={style}
        >
            <h3 onMouseDown={elementDrag}>
                {title}
            </h3>
            <div>
                {children}
            </div>
        </div>
    )
}