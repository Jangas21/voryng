"use client";
import { ReactNode } from "react";

export default function ConfirmDialog({
  open,
  title = "¿Estás seguro?",
  description,
  confirmText = "Sí",
  cancelText = "Cancelar",
  onConfirm,
  onCancel,
}: {
  open: boolean;
  title?: string;
  description?: ReactNode;
  confirmText?: string;
  cancelText?: string;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-black/50 backdrop-blur-sm">
      <div className="w-full max-w-sm rounded-2xl border border-border/60 bg-card p-6">
        <h3 className="text-lg font-semibold">{title}</h3>
        {description && <p className="subtle mt-2">{description}</p>}
        <div className="mt-5 flex gap-2 justify-end">
          <button className="btn-secondary" onClick={onCancel}>{cancelText}</button>
          <button className="btn-primary" onClick={onConfirm}>{confirmText}</button>
        </div>
      </div>
    </div>
  );
}
