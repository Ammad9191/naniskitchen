import { Link } from 'react-router-dom';
import Seo from '../components/Seo';

export default function NotFound() {
  return (
    <div className="container-site py-24 text-center">
      <Seo title="Page not found" description="This Nani’s Kitchen page is missing. Head back to the menu." />
      <p className="font-script text-3xl text-leaf-olive">Lost the trail to the kitchen?</p>
      <h1 className="mt-3 font-display text-4xl text-brown-dark">This page isn’t on the menu</h1>
      <p className="mt-3 text-brown-muted">The link may be outdated. Fresh meals are still waiting on the home page.</p>
      <Link to="/" className="btn-brown mt-8">Back home</Link>
    </div>
  );
}
