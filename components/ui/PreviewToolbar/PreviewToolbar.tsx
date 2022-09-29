import React, { FC } from 'react'
import s from './PreviewToolbar.module.css'
import clsx from 'clsx';
import Moment from 'react-moment';
import { useCmsContext } from '@lib/cms/CmsContext';
import { Calendar } from '@components/icons';

interface Props {

}

const PreviewToolbar: FC<Props> = ({ children }) => {

    const {
        timestamp,
        stagingApi
    } = useCmsContext() || {};

    if (!timestamp || !stagingApi) {
        return null;
    }
    
    return (
        <div className={clsx(s.root, 'alert alert-danger')}>
            <div className={s.info}>
                <Calendar /> Currently previewing: <Moment format="YYYY/MM/DD, h:mm:ss a">{Number(timestamp)}</Moment>
            </div>
            <div className={s.controls}>
                <a href="/current">
                    <button type="button" className="btn btn-outline-danger btn-sm">
                        View Current
                    </button>
                </a>
            </div>
        </div>
    );
}

export default PreviewToolbar;