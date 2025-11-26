type WindowWithDataLayer = Window & {
    dataLayer: Record<string, any>[];
};

declare const window: WindowWithDataLayer;

export const GTM_ID = 'GTM-XXXXXXX'; // Replace with actual GTM ID

export const pageview = (url: string) => {
    if (typeof window.dataLayer !== 'undefined') {
        window.dataLayer.push({
            event: 'pageview',
            page: url,
        });
    }
};

export const event = ({ action, category, label, value }: { action: string; category: string; label: string; value?: number }) => {
    if (typeof window.dataLayer !== 'undefined') {
        window.dataLayer.push({
            event: action,
            category,
            label,
            value,
        });
    }
};
