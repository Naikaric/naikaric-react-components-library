import './field.scss';

import React, { useState } from 'react';
import cn from 'classnames';

import InputMask from 'react-input-mask';

import visibleIcon from '../../assets/icons/visible.png';
import invisibleIcon from '../../assets/icons/invisible.png';

const Field = props => {
    const { type, label, placeholder, required } = props;
    const { register, settings, errors } = props.hookForm;

    const visibilityState = {
        true: {
            title: 'Скрыть пароль',
            iconSrc: visibleIcon,
            typeInput: 'text',
        },
        false: {
            title: 'Показать пароль',
            iconSrc: invisibleIcon,
            typeInput: 'password',
        },
    };

    const [isVisible, setIsVisible] = useState(false);

    const toggleTyped = e => {
        setIsVisible(e.currentTarget.checked);
    };

    return (
        <div className={cn({'field': true, 'field_protected': type === 'password', 'field_error': errors?.[settings.name]})}>
            <label className={cn('field__label')}>
                {label ? <span className={cn('field__title')}>{label}{required ? '*' : null}</span> : null}
                <div className={cn('field__input-wrapper')}>
                    {
                        settings?.pattern?.template ?
                        <InputMask
                            className={cn('field__input')}
                            type={type === 'password' ? visibilityState[isVisible].typeInput : type}
                            placeholder={placeholder}
                            {...register(settings?.name, {
                                ...settings,
                                required: required ? settings?.required ? settings?.required : 'Это поле обязательно для заполнения' : required,
                            })}
                            mask={settings?.pattern?.template ? settings.pattern.template : null}
                        />
                        :
                        <input
                            className={cn('field__input')}
                            type={type === 'password' ? visibilityState[isVisible].typeInput : type}
                            placeholder={placeholder}
                            {...register(settings?.name, {
                                ...settings,
                                required: required ? settings?.required ? settings?.required : 'Это поле обязательно для заполнения' : required,
                            })}
                        />
                    }
                    {
                        type === 'password' ?
                        <label className={cn('field__toggle-visibility')}>
                            <input type='checkbox' onChange={toggleTyped} />
                            <img src={visibilityState[isVisible].iconSrc} title={visibilityState[isVisible].title} />
                        </label>
                        : null
                    }
                </div>
            </label>
            {errors?.[settings.name] ? <div>{errors[settings.name].message}</div> : null}
        </div>
    );
};

export default Field;