import { Award, Users, Heart, Shield } from 'lucide-react';

interface StatProps {
  icon: React.ReactNode;
  value: string;
  label: string;
  color: string;
}

function Stat({ icon, value, label, color }: StatProps) {
  return (
    <div className="text-center animate-scale-in">
      <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${color} mb-4`}>
        {icon}
      </div>
      <div className={`text-4xl md:text-5xl font-bold mb-2 bg-gradient-to-r ${color.replace('bg-', 'from-').replace('/20', '')} to-eyecare-light-blue bg-clip-text text-transparent`}>
        {value}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </div>
  );
}

export default function TrustSignals() {
  const stats = [
    {
      icon: <Award className="w-8 h-8 text-eyecare-blue" />,
      value: "20+",
      label: "Years Experience",
      color: "bg-eyecare-blue/20"
    },
    {
      icon: <Users className="w-8 h-8 text-eyecare-light-blue" />,
      value: "50K+",
      label: "Patients Treated",
      color: "bg-eyecare-light-blue/20"
    },
    {
      icon: <Heart className="w-8 h-8 text-eyecare-dark-blue" />,
      value: "191",
      label: "Eye Conditions",
      color: "bg-eyecare-dark-blue/20"
    },
    {
      icon: <Shield className="w-8 h-8 text-eyecare-blue" />,
      value: "65",
      label: "Cities Served",
      color: "bg-eyecare-blue/20"
    }
  ];

  return (
    <section className="py-16 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <Stat key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
