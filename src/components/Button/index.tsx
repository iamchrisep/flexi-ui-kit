import React from 'react';
import classNames from 'classnames';
import styles from './Button.module.css';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Button type
     */
    type?: 'button' | 'submit' | 'reset';
    /**
     * Button variant
     */
    variant?: 'primary' | 'secondary';
    /**
     * Button size
     */
    size?: 'small' | 'medium' | 'large';
    /**
     * Button disabled
     */
    disabled?: boolean;
    /**
     * Button className
     *
     * Note: You can add your own class for this element.
     *
     */
    className?: string;
    /**
     * Optional click handler
     */
    onClick?: (event: React.MouseEvent) => void;
}

const Button: React.FC<ButtonProps> = ({
                                           children,
                                           type = 'button',
                                           variant = 'primary',
                                           size = 'medium',
                                           disabled,
                                           className,
                                           onClick,
                                           ...rest
                                       }) => {

    const buttonClassName = classNames(
        styles.button,
        styles[`button--${variant}`],
        styles[`button--${size}`],
        className
    );

    const handleClick = (event: React.MouseEvent) => {
        if (onClick) {
            onClick(event);
        }
    };

    return (
        <button
            type={type}
            className={buttonClassName}
            disabled={disabled}
            onClick={handleClick}
            {...rest}
        >
            {children}
        </button>
    );
};

export default Button;
