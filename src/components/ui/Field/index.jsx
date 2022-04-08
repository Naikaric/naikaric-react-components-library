import * as Styled from './styles';

import React, { useState } from 'react';

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
        <Styled.Field error={errors?.[settings.name]} protected={type === 'password'}>
            <Styled.Label>
                {label ? <Styled.Title>{label}{required ? '*' : null}</Styled.Title> : null}
                <Styled.InputWrapper>
                    {
                        settings?.pattern?.template ?
                        <Styled.Input
                            type={type === 'password' ? visibilityState[isVisible].typeInput : type}
                            placeholder={placeholder}
                            {...register(settings?.name, {
                                ...settings,
                                required: required ? settings?.required ? settings?.required : 'Это поле обязательно для заполнения' : required,
                            })}
                            mask={settings?.pattern?.template ? settings.pattern.template : null}
                        />
                        :
                        <Styled.Input as='input'
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
                        <Styled.ToggleVisibility>
                            <input type='checkbox' onChange={toggleTyped} />
                            <img src={visibilityState[isVisible].iconSrc} title={visibilityState[isVisible].title} />
                        </Styled.ToggleVisibility>
                        : null
                    }
                </Styled.InputWrapper>
            </Styled.Label>
            {errors?.[settings.name] ? <div>{errors[settings.name].message}</div> : null}
        </Styled.Field>
    );
};

export default Field;