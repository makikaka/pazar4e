import React, { ReactNode } from 'react';

type ButtonProps = {
    children: ReactNode;
};

export default function Button({
    children,
}: ButtonProps) {
    return (
        <button className="h-12 rounded-lg bg-white font-bold px-5">
            {children}
        </button>
    );
}
