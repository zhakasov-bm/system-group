import { getPayload } from "@/lib/payload";
import { RichText as SerializedRichText } from "@payloadcms/richtext-lexical/react";
import LeadMagnet from "../../components/LeadMagnet";
import Image from "next/image";
import PrimaryButton from "../../components/PrimaryButton";

const Page = async ({ params }) => {
  const { postId } = params;
  const payload = await getPayload();
  let post = await payload.find({
    collection: "posts",
    where: {
      id: {
        equals: postId,
      },
    },
  });

  if (!post.docs || post.docs.length === 0) {
    return <div>Post not found</div>;
  }

  let data = post.docs[0];
  console.log(data);

  return (
    <div>
      <div className="relative h-[240px] md:h-[400px] overflow-hidden">
        <Image
          src="/hero.png"
          alt="Hero background"
          fill
          className="object-cover w-full z-0"
          priority
          sizes="(max-width: 768px) 100vw, 100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-black/30" />{" "}
        <div className="container relative mx-auto px-4 py-24 md:pt-50 text-white z-10">
          <h1 className="text-4xl text-center md:text-5xl font-bold text-transparent !bg-clip-text [background:linear-gradient(91.15deg,_#fff,_#999)] [-webkit-background-clip:text] [-webkit-text-fill-color:transparent]">
            {data.title}
          </h1>
        </div>
      </div>
      <SerializedRichText className="payload-richtext container mx-auto p-8" data={data.content} />
      <LeadMagnet />
    </div>
  );
};

export default Page;
