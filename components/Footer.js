export default function Footer() {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Beykonak İnşaat</h3>
                        <p className="text-gray-400">Yenilikçi ve sürdürülebilir yapıların adresi</p>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">İletişim</h4>
                        <address className="text-gray-400 not-italic">
                            <p>Merkez Ofis:</p>
                            <p>İzmir, Türkiye</p>
                            <p>Tel: +90 (555) 123 45 67</p>
                        </address>
                    </div>
                    <div>
                        <h4 className="text-lg font-semibold mb-4">Hızlı Bağlantılar</h4>
                        <ul className="space-y-2 text-gray-400">
                            <li><a href="#hakkımızda" className="hover:text-white transition-colors">Hakkımızda</a></li>
                            <li><a href="/projeler" className="hover:text-white transition-colors">Projeler</a></li>
                        </ul>
                    </div>
                    {/* <div>
                        <h4 className="text-lg font-semibold mb-4">Sosyal Medya</h4>
                        <div className="flex space-x-4">
                            {['LinkedIn', 'Instagram', 'Twitter'].map((social) => (
                                <a key={social} href="#" className="text-gragiy-400 hover:text-white transition-colors">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div> */}
                </div>
                <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                    <p>© 2024 Beykonak İnşaat. Tüm hakları saklıdır.</p>
                </div>
            </div>
        </footer>
    );
}
