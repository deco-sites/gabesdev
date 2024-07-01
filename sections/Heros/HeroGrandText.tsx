import ShowContentAnimation from "site/islands/animations/ShowContentAnimation.tsx";
import { ContentContainer } from "site/components/others/ContentContainer.tsx";
import Image, { Props as ImageProps } from "apps/website/components/Image.tsx";
import { ImageWidget } from "apps/admin/widgets.ts";
import { Heading1 } from "site/components/typography/Heading1.tsx";
import TextsAlternatingAnimation from "site/islands/animations/TextsAlternatingAnimation.tsx";
import TextTypingAnimation from "site/islands/animations/TextTypingAnimation.tsx";
import { CTAProps, CTAs } from "site/components/others/CTAs.tsx";

export interface Props {
  title: string;
  description: {
    staticPrefix: string;
    alternatedSuffixes: string[];
  };
  image?: ImageProps & {
    src: ImageWidget;
  };
  ctas?: CTAProps[];
}

export default function Section({ title, description, image, ctas }: Props) {
  return (
    <ShowContentAnimation verticalMovement>
      <div className="h-[calc(100dvh-32px)] flex flex-col justify-center items-center">
        <ContentContainer>
          <div className="pb-20 flex flex-col md:flex-row-reverse md:items-center gap-4 md:gap-6 lg:gap-8">
            {image && <Image {...image} />}

            <div>
              <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                <Heading1>
                  {title}
                </Heading1>

                <p className="font-open-sans font-semibold text-xl md:text-2xl lg:text-3xl leading-normal text-zinc-400 min-h-[90px] sm:min-h-0">
                  {`${description.staticPrefix} `}

                  {description.alternatedSuffixes.length > 1
                    ? (
                      <TextsAlternatingAnimation>
                        {description.alternatedSuffixes.map((text) => (
                          <TextTypingAnimation
                            text={text}
                            className="text-neutral font-extrabold"
                            key={text}
                          />
                        ))}
                      </TextsAlternatingAnimation>
                    )
                    : (
                      <TextTypingAnimation
                        text={description.alternatedSuffixes[0]}
                        className="text-neutral font-extrabold"
                      />
                    )}
                </p>
              </div>

              <div className="mt-10 lg:mt-14 flex flex-col items-center gap-4 md:flex-row">
                <CTAs ctas={ctas} />
              </div>
            </div>
          </div>
        </ContentContainer>
      </div>
    </ShowContentAnimation>
  );
}
