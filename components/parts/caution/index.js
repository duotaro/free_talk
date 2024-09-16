

import { ExclamationTriangleIcon } from "@heroicons/react/24/outline";

export default function Caution({ text }) {
  return (
    <div class="flex items-center text-orange-700 text-sm" role="alert">
      <ExclamationTriangleIcon className="w-5 h-5 mr-1"/>
      <p>{text}</p>
    </div>
  )
}
