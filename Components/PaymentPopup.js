import { useEffect } from "react";
import { beaconer_logo_dark, stripe_logo } from "../Utils/images"; 
import Image from "next/image";

export default function PaymentPopup({ data, onClose }) {
  if (!data) return null;
useEffect(() => {
  // Lock body scroll
  document.body.style.overflow = "hidden";

  return () => {
    // Unlock body scroll on close
    document.body.style.overflow = "auto";
  };
}, []);
  return (
    <div className="fixed inset-0 z-50 bg-black/50 flex justify-center overflow-y-auto top-12"  onClick={onClose}>
  <div className="relative w-full max-w-lg my-8 max-h-[calc(100vh-4rem)] overflow-y-auto rounded-xl bg-white p-6 shadow-lg" onClick={(e) => e.stopPropagation()}>

    {/* Close button */}
    <button
      onClick={onClose}
      className="absolute right-4 top-4 text-gray-400 hover:text-gray-600"
    >
      ✕
    </button>
  <div className="mb-2 flex items-center justify-center gap-3">
  {/* Beaconer logo */}
  <Image
    src={beaconer_logo_dark}
    alt="Beaconer logo"
    className="h-7 w-auto object-contain"
  />

  {/* Divider */}
  <span className="h-5 w-px bg-gray-300" />

  {/* Stripe logo */}
  <Image
    src={stripe_logo}
    alt="Stripe logo"
    className="h-6 w-auto object-contain"
  />
</div>

    {/* Header */}
    <div className="mb-6 text-center">
      <h2 className="text-xl font-bold text-gray-900">
        Choose Your Payment Plan
      </h2>
      <p className="mt-1 text-sm text-gray-500">
        Select the payment option that works best for you
      </p>
    </div>

    {/* Full Payment */}
    {data.full && (
      <a
        href={data.full}
        target="_blank"
        rel="noopener noreferrer"
        className="mb-4 block rounded-lg border border-orange-200 bg-orange-50 p-4 hover:shadow"
      >
        <div className="mb-2 flex items-center justify-between">
          <span className="rounded-full bg-orange-500 px-2 py-0.5 text-xs font-semibold text-white">
            BEST VALUE
          </span>
          <span className="text-lg font-bold text-orange-600">
            ${data.priceFull} <span className="text-sm font-normal">USD</span>
          </span>
        </div>

        <h3 className="font-semibold text-gray-900">Full Payment</h3>
        <p className="text-sm text-gray-600">One-time payment, instant access</p>

        <p className="mt-2 text-sm text-green-600">
          ✓ Save money with single payment
        </p>

        <div className="mt-4 rounded-md bg-orange-500 py-2 text-center font-semibold text-white">
          Pay ${data.priceFull} Now
        </div>
      </a>
    )}

    {/* Installment */}
    {data.installment && (
      <a
        href={data.installment}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-lg border border-blue-200 bg-blue-50 p-4 hover:shadow"
      >
        <div className="mb-2 flex items-center justify-between">
          <span className="rounded-full bg-blue-500 px-2 py-0.5 text-xs font-semibold text-white">
            FLEXIBLE
          </span>
          <span className="text-lg font-bold text-blue-600">
            ${data.priceInstallment}
            <span className="text-sm font-normal"> × 3 payments</span>
          </span>
        </div>

        <h3 className="font-semibold text-gray-900">
          3-Part Installment Plan
        </h3>
        <p className="text-sm text-gray-600">Split into 3 easy payments</p>

        <ul className="mt-2 space-y-1 text-sm text-gray-700">
          <li>✓ 1st payment: ${data.priceInstallment} (upon enrollment)</li>
          <li>✓ 2nd payment: ${data.priceInstallment} (after 30 days)</li>
          <li>✓ 3rd payment: ${data.priceInstallment} (after 60 days)</li>
        </ul>

        <div className="mt-4 rounded-md bg-blue-500 py-2 text-center font-semibold text-white">
          Start with ${data.priceInstallment} Today
        </div>
      </a>
    )}

    {/* Footer */}
    <div className="mt-5 text-center text-xs text-gray-400">
      Secure payment powered by Stripe
      <div className="mt-1">🔒 SSL Secured</div>
    </div>
  </div>
</div>

  );
}
