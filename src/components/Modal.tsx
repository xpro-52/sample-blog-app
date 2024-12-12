type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

export default function Modal({ isOpen, onClose, children }: ModalProps) {
  return (
    <div
      style={{
        visibility: isOpen ? "visible" : "hidden",
      }}
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose}>X</button>
        {children}
      </div>
    </div>
  );
}
