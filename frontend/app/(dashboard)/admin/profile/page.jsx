import { useState } from 'react';
import  Input  from '@/components/ui/Input';
import  Button  from '@/components/ui/Button';
import Avatar from '@/components/ui/Avatar' 
import { useDispatch } from 'react-redux';
import { clearUser } from 'store/slices/userSlice';
import { useRouter } from 'next/navigation';

export default function ProfileForm() {
  const [formData, setFormData] = useState({
    fullName: 'John Doe',
    email: 'john.doe@company.com',
    phone: '+1 (555) 123-4567',
    title: 'Senior Administrator'
  });
  const router = useRouter();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(clearUser()); // Reset user state
    router.push('/login'); // Redirect to the login page
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
 <div className="space-y-4 mx-auto w-4/5 my-8">
      <div className="flex flex-col items-center gap-4">
      <Avatar 
        src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        alt="John Doe"
      />
      <div className='text-center'>
        <h2 className="text-2xl font-bold text-gray-900">John Doe</h2>
        <p className="text-gray-500">Senior Administrator</p>
      </div>
      </div>
    <form onSubmit={handleSubmit} className="space-y-6 ">
      <Input
        label="Full Name"
        name="fullName"
        value={formData.fullName}
        onChange={handleChange}
      />
      <Input
        label="Email"
        type="email"
        name="email"
        value={formData.email}
        onChange={handleChange}
      />
      <Input
        label="Phone"
        type="tel"
        name="phone"
        value={formData.phone}
        onChange={handleChange}
      />
      <Input
        label="Title"
        name="title"
        value={formData.title}
        onChange={handleChange}
      />
      <div className="pt-4">
        <Button type="submit" fullWidth>
          Save Changes
        </Button>
      </div>
    </form>
      <Button onClick={handleLogout}>Logout</Button> 
    </div>
  );
}