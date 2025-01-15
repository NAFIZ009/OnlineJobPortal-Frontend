const Footer = () => {
    return (
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">About Us</h3>
            <p className="text-sm">
              We're dedicated to connecting talented professionals with their dream careers.
              Join thousands of job seekers who've found their perfect match through our platform.
            </p>
          </div>
          
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-white transition-colors">Find Jobs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Company Reviews</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Career Resources</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Help Center</a></li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>Email: support@example.com</li>
              <li>Phone: (555) 123-4567</li>
              <li>Address: 123 Job Street</li>
            </ul>
          </div>
  
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
              <a href="#" className="hover:text-white transition-colors">Facebook</a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800">
          <div className="max-w-7xl mx-auto px-4 py-6 text-sm text-center">
            © {new Date().getFullYear()} Job Portal. All rights reserved.
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;