import { FC } from 'react'
import { useCmsContentItem } from './CmsContentItem';
import { ComponentFrame } from '@components/ui';
import s from './CmsContentItemFrame.module.css';
import { Pencil, Eye, Puzzle } from '@components/icons';
import { useAppContext } from '@lib/config/AppContext';

interface Props {
}

const CmsSlotFrame: FC<Props> = ({ children }) => {
    const {
        id,
        label,
        schema
    } = useCmsContentItem() || {};

    const { cms } = useAppContext()
    const handleEdit = () => {
        window.open(`https://content.amplience.net/#!/${cms.hub}/authoring/content-item/edit/${id}`);
    };

    const handleView = () => {
        const {
            protocol,
            host
        } = window.location;
        window.open(`${protocol}//${host}/visualization?content=${id}`)
    }

    return <ComponentFrame
        menu={
            <>
                <Puzzle title={schema} className={s.icon} />
                <strong className={s.label}>{label}</strong>

                <div className={s.actions}>
                    <button type="button" className="btn btn-sm" onClick={handleEdit}>
                        <Pencil />
                    </button>
                    <button type="button" className="btn btn-sm" onClick={handleView}>
                        <Eye />
                    </button>
                </div>
            </>
        }
        MenuProps={{
            className: s.menu
        }}>
        {children}
    </ComponentFrame>;
}

export default CmsSlotFrame;