/**
 * # Form Submit
 */
"use client"

/**
 * ## Imports
 */
import { useFormStatus } from 'react-dom';

/**
 * ## Component
 */
export default function FormSubmit() {
    const status = useFormStatus();

    if (status.pending) {
        return <p>Creating post...</p>;
    }

    return (
        <>
            <button type="reset">Reset</button>
            <button>Create Post</button>
        </>
    );
};
