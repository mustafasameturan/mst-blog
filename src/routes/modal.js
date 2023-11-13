import StaticErrorModal from "~/modals/error/dynamic/index.jsx";
import DynamicErrorModal from "~/modals/error/dynamic/index.jsx";
import StaticSuccessModal from "~/modals/success/static/index.jsx";
import DynamicSubscribeModal from "~/modals/success/dynamic/index.jsx";

export const modals = [
    {
        name: 'error.static',
        element: StaticErrorModal
    },
    {
        name: 'error.dynamic',
        element: DynamicErrorModal
    },
    {
        name: 'success.static',
        element: StaticSuccessModal
    },
    {
        name: 'success.dynamic',
        element: DynamicSubscribeModal
    }
]