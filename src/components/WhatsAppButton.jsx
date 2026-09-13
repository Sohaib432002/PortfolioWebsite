import { FaWhatsapp } from 'react-icons/fa'
import { SITE } from '../data/site'

const WhatsAppButton = () => {
  return (
    <a
      href={SITE.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      title="Chat on WhatsApp"
      style={{ position: 'fixed', bottom: 20, right: 16, zIndex: 60 }}
      className="whatsapp-float flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-200 hover:scale-110 focus:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300"
    >
      <FaWhatsapp size={28} aria-hidden="true" />
    </a>
  )
}

export default WhatsAppButton
