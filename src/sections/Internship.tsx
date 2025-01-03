import SectionHeader from "@/components/SectionHeader";
import Image from "next/image";
import grainImage from "@/assets/images/grain.jpg";

export const InternshipSection = () => {
  return (
    <div className="py-16">
      <div className="container">
        <SectionHeader
          title="Internship"
          subtitle="Internship"
          text=" Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
        iure eligendi pariatur aspernatur vitae repellat velit, placeat iusto
        animi quia libero ducimus nobis unde soluta quam! Saepe numquam quasi
        eligendi. "
        />
        <div>
          {/*
                internships.map((internship, index) => (
                    <div key={index} className="bg-gray-800 rounded-3xl p-6 relative overflow-hidden">
                    <div className="absolute inset-0 opacity-50 -z-10 style={{ backgroundImage: `url(${grainImage.src})"></div>
                        <Image src={internship.image} alt={internship.company} width={100} height={100} />
                        <div>{internship.company} - {internship.year}</div>
                        {internship.results.map((result, index) => (
                            <div key={index}>{result.title}</div>
                        ))}

                    </div>
                ))
            */}
        </div>
      </div>
    </div>
  );
};
