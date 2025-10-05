import React, { useState, useRef } from 'react';
import { Snackbar, Alert } from '@mui/material'; 
// Removed styled-components import to resolve the compilation error

// --- Formspree Endpoint ---
// Using the endpoint you provided: https://formspree.io/f/xrbylkga
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xrbylkga";

// --- Style Objects (In lieu of styled-components) ---
// Note: Theme colors are placeholders and should be defined externally in a real app.
const theme = {
    text_primary: '#F2F3F4', // Light text for dark backgrounds
    text_secondary: '#b1b2b3', // Secondary light text
    card: '#1C1C27', // Dark card background
    primary: '#854CE6', // Purple accent
};

const styles = {
    Container: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        position: 'relative',
        zIndex: 1,
        alignItems: 'center',
        padding: '0 16px',
        margin: '0 auto',
        // Media query for small screens is handled via utility/inline styles where possible
    },
    Wrapper: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
        maxWidth: '1350px',
        padding: '0 0 80px 0',
        gap: '12px',
    },
    Title: {
        fontSize: '42px',
        textAlign: 'center',
        fontWeight: 600,
        marginTop: '20px',
        color: theme.text_primary,
    },
    Desc: {
        fontSize: '18px',
        textAlign: 'center',
        maxWidth: '600px',
        color: theme.text_secondary,
        marginTop: '12px',
    },
    ContactForm: {
        width: '95%',
        maxWidth: '600px',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: theme.card,
        padding: '32px',
        borderRadius: '16px',
        boxShadow: 'rgba(23, 92, 230, 0.15) 0px 4px 24px',
        marginTop: '28px',
        gap: '12px',
        // Using action/method attributes on the JSX element instead of styled-components.attrs
    },
    ContactTitle: {
        fontSize: '24px',
        marginBottom: '6px',
        fontWeight: 600,
        color: theme.text_primary,
    },
    Input: {
        flex: 1,
        backgroundColor: 'transparent',
        border: `1px solid ${theme.text_secondary}`,
        outline: 'none',
        fontSize: '18px',
        color: theme.text_primary,
        borderRadius: '12px',
        padding: '12px 16px',
        transition: 'border 0.3s',
    },
    Button: {
        width: '100%',
        textAlign: 'center',
        background: `linear-gradient(225deg, ${theme.primary} 0%, hsla(294, 100%, 50%, 1) 100%)`,
        padding: '13px 16px',
        marginTop: '2px',
        borderRadius: '12px',
        border: 'none',
        color: theme.text_primary,
        fontSize: '18px',
        fontWeight: 600,
        cursor: 'pointer',
    }
};

const Contact = () => {
    // Hooks for Snackbar feedback
    const [open, setOpen] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);
    const form = useRef(null);

    // Form submission function to show Snackbar instead of redirecting (optional)
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        
        try {
            const response = await fetch(FORMSPREE_ENDPOINT, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json',
                },
            });

            if (response.ok) {
                setIsSuccess(true);
                setOpen(true);
                e.target.reset(); // Clear the form
            } else {
                setIsSuccess(false);
                setOpen(true);
                console.error("Formspree error response:", await response.json());
            }
        } catch (error) {
            setIsSuccess(false);
            setOpen(true);
            console.error("Network error submitting form:", error);
        }
    };
    
    return (
        <div style={styles.Container}>
            <div style={styles.Wrapper}>
                <h1 style={styles.Title}>Contact</h1>
                <p style={styles.Desc}>Feel free to reach out to me for any questions or opportunities!</p>
                
                {/* Form now uses standard JSX with ref and onSubmit for client-side feedback */}
                <form 
                    ref={form} 
                    onSubmit={handleSubmit}
                    style={styles.ContactForm}
                > 
                    <h2 style={styles.ContactTitle}>Email Me 🚀</h2>
                    
                    {/* Input fields using inline styles and simple name attributes */}
                    <input 
                        type="text" 
                        name="name" 
                        placeholder="Your Name" 
                        required 
                        style={styles.Input}
                    />
                    <input 
                        type="email" 
                        name="email" 
                        placeholder="Your Email" 
                        required
                        style={styles.Input}
                    />
                    <input 
                        type="text" 
                        name="subject" 
                        placeholder="Subject" 
                        required
                        style={styles.Input}
                    />
                    <textarea 
                        name="message" 
                        placeholder="Your Message" 
                        rows="4" 
                        required
                        style={{...styles.Input, resize: 'vertical'}}
                    ></textarea>
                    
                    <input 
                        type="submit" 
                        value="Send" 
                        style={styles.Button}
                    />
                </form>
                
                {/* Snackbar Feedback */}
                <Snackbar
                    open={open} 
                    autoHideDuration={6000}
                    onClose={() => setOpen(false)}
                    anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
                >
                    <Alert 
                        onClose={() => setOpen(false)} 
                        severity={isSuccess ? "success" : "error"} 
                        variant="filled" 
                        sx={{ width: '100%' }}
                    >
                        {isSuccess ? "Email sent successfully!" : "Oops! Something went wrong."}
                    </Alert>
                </Snackbar>
            </div>
        </div>
    );
};

export default Contact
;