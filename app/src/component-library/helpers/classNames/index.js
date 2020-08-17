export const ClassNames = ({ blk = '', elt = '', mods = [''] }) => {

    let subClass = '';

    if (blk !== '') {
        if (elt !== '') {
            subClass = ` ${blk} ${blk}__${elt}`
        }

        if (mods.length > 0) {
            mods.map((item) => {
                if (item !== '')
                    subClass += ` ${blk}__${elt}--${item}`
            })
        }
        return subClass;
    }

}



