// components/AboutUs.jsx

import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";

export function AboutUs() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}

      {/* Main Content */}
      <main className="flex-1 pt-14">
        {" "}
        {/* Add top padding to account for fixed header */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
              <div className="space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                    About Acme Inc
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Acme Inc is a leading provider of innovative solutions for
                    businesses of all sizes. Our mission is to empower our
                    clients with the tools and expertise they need to succeed in
                    the digital age.
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="flex flex-col items-start gap-1">
                    <AwardIcon className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-semibold">10+ Awards</h3>
                    <p className="text-muted-foreground">
                      Recognized for our excellence in the industry.
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <UsersIcon className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-semibold">500+ Clients</h3>
                    <p className="text-muted-foreground">
                      Trusted by businesses of all sizes.
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <BriefcaseIcon className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-semibold">15+ Years</h3>
                    <p className="text-muted-foreground">
                      Decades of experience in the industry.
                    </p>
                  </div>
                  <div className="flex flex-col items-start gap-1">
                    <RocketIcon className="h-6 w-6 text-primary" />
                    <h3 className="text-lg font-semibold">Innovative</h3>
                    <p className="text-muted-foreground">
                      Constantly pushing the boundaries of what's possible.
                    </p>
                  </div>
                </div>
              </div>
              <img
                src="/placeholder.svg"
                width="500"
                height="400"
                alt="About Us"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full"
              />
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="inline-block rounded-lg bg-muted px-3 py-1 text-sm">
                  FAQ
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to the most common questions about our company
                  and services.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl gap-6 py-12 lg:grid-cols-2 lg:gap-12">
              {/* FAQ Items */}
              <CollapsibleItem question="What is Acme Inc?">
                Acme Inc is a leading provider of innovative software solutions.
                We specialize in developing cutting-edge technologies that help
                our clients streamline their operations and achieve their
                business goals.
              </CollapsibleItem>
              <CollapsibleItem question="What services do you offer?">
                Our services include custom software development, cloud-based
                solutions, data analytics, and IT consulting. We work closely
                with our clients to understand their unique needs and deliver
                tailored solutions that drive their success.
              </CollapsibleItem>
              <CollapsibleItem question="How can I get in touch with Acme Inc?">
                You can reach us by email at info@acmeinc.com or by phone at
                (123) 456-7890. Our office is located at 123 Main Street,
                Anytown USA. We're available during regular business hours to
                assist you with any questions or concerns.
              </CollapsibleItem>
              <CollapsibleItem question="What is your company's mission?">
                Our mission is to empower our clients with innovative technology
                solutions that drive their success. We are committed to
                delivering exceptional service, fostering collaboration, and
                continuously improving our offerings to meet the evolving needs
                of our customers.
              </CollapsibleItem>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
    </div>
  );
}

function CollapsibleItem({ question, children }) {
  return (
    <Collapsible className="space-y-2">
      <CollapsibleTrigger className="flex items-center justify-between rounded-md bg-background px-4 py-3 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[state=open]:bg-accent/50">
        <span>{question}</span>
        <ChevronDownIcon className="h-5 w-5 transition-transform data-[state=open]:rotate-180" />
      </CollapsibleTrigger>
      <CollapsibleContent className="px-4 pb-4 text-muted-foreground">
        {children}
      </CollapsibleContent>
    </Collapsible>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function AwardIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526" />
      <circle cx="12" cy="8" r="6" />
    </svg>
  );
}

function BriefcaseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
      <rect width="20" height="14" x="2" y="6" rx="2" />
    </svg>
  );
}

function MountainIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  );
}

function RocketIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
    </svg>
  );
}

function UsersIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}
