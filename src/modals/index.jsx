import {useModals} from "~/stores/modal/hooks"
import {modals as modalsRoutes} from "~/routes/modal"
import {modal} from "~/stores/modal/actions"

export default function Modals() {

    const modals = useModals();

    return (
        <div
            className="fixed inset-0 z-[9999] bg-zinc-700/60 backdrop-blur flex px-4 md:px-0 items-center justify-center flex-wrap overflow-auto py-4">
                {modals.map(modalData => {
                    const current = modalsRoutes.find(m => m.name === modalData.name)
                    return (
                        <div
                            key={modalData.name}
                            className="bg-white dark:bg-primary min-w-full md:min-w-[400px] max-w-full grid rounded-md overflow-hidden shadow-lg last:block"
                        >
                            <current.element
                                destroy={modal.destroy}
                                destroyAll={modal.destroyAll}
                                modalData={modalData?.data}
                            />
                        </div>
                    )
                })}
        </div>
    )
}
