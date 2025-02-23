import cl from './MyModal.module.css'; 


const MyModal = ({ children }: { children: React.ReactNode | null }) => {
    return (
        <div className={[cl.myModal, cl.active].join(' ')}>
            <div className={cl.myModalContent}>
                {children}
            </div>
        </div>
    );
};

export default MyModal;