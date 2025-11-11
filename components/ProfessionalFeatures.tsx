import { Badge } from "./ui/badge";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { Eye, Glasses, Microscope, Heart, Shield, Users } from 'lucide-react';

interface FeatureProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const features: FeatureProps[] = [
  {
    title: "Comprehensive Eye Exams",
    description:
      "State-of-the-art diagnostic technology to detect eye conditions early and preserve your vision for years to come.",
    icon: <Eye className="w-12 h-12 text-eyecare-blue" />,
  },
  {
    title: "Contact Lens Fitting",
    description:
      "Expert fitting for all lens types including scleral, RGP, and specialty lenses for keratoconus and irregular corneas.",
    icon: <Glasses className="w-12 h-12 text-eyecare-light-blue" />,
  },
  {
    title: "Advanced Treatment",
    description:
      "Cutting-edge treatments for glaucoma, cataracts, macular degeneration, and 191 other eye conditions.",
    icon: <Microscope className="w-12 h-12 text-eyecare-lighter-blue" />,
  },
];

const serviceList: string[] = [
  "Keratoconus Specialists",
  "Corneal Disease",
  "Glaucoma Management",
  "Cataract Care",
  "Dry Eye Treatment",
  "Diabetic Eye Care",
  "Emergency Services",
  "Pediatric Optometry",
  "LASIK Consultation",
  "Low Vision Aids",
];

export default function ProfessionalFeatures() {
  return (
    <section
      id="features"
      className="container py-24 sm:py-32 space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
    >
      <div className="text-center space-y-4">
        <h2 className="text-3xl lg:text-4xl font-bold">
          Comprehensive{" "}
          <span className="bg-gradient-to-b from-eyecare-blue to-eyecare-light-blue text-transparent bg-clip-text">
            Eye Care Services
          </span>
        </h2>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Board-certified specialists providing comprehensive care for all your vision needs
        </p>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {serviceList.map((service: string) => (
          <div key={service}>
            <Badge
              variant="secondary"
              className="text-sm bg-eyecare-blue/10 text-eyecare-blue hover:bg-eyecare-blue hover:text-white"
            >
              {service}
            </Badge>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
        {features.map(({ title, description, icon }: FeatureProps) => (
          <Card key={title} className="border-2 hover:border-eyecare-blue transition-colors hover:shadow-xl">
            <CardHeader>
              <div className="mb-4 p-3 bg-eyecare-blue/10 rounded-full w-fit">
                {icon}
              </div>
              <CardTitle className="text-xl">{title}</CardTitle>
            </CardHeader>

            <CardContent className="text-muted-foreground">
              {description}
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-eyecare-blue to-eyecare-light-blue text-white p-8 rounded-xl shadow-2xl max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold mb-3">
            Trusted by 50,000+ Orange County Patients
          </h3>
          <p className="text-lg mb-6 opacity-90">
            Join thousands of satisfied patients who trust us with their vision care
          </p>
          <div className="flex flex-wrap justify-center gap-8 text-center">
            <div>
              <div className="text-4xl font-bold">4.9/5</div>
              <div className="text-sm opacity-90">Patient Rating</div>
            </div>
            <div>
              <div className="text-4xl font-bold">20+</div>
              <div className="text-sm opacity-90">Years Experience</div>
            </div>
            <div>
              <div className="text-4xl font-bold">191</div>
              <div className="text-sm opacity-90">Conditions Treated</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
