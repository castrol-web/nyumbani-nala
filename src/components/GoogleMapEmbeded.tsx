const GoogleMapEmbeded = () => (
    <div className="w-full rounded-xl shadow-md overflow-hidden mt-10">
        <iframe
            title="Nyumbani Nala Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.9447985013608!2d37.32352117443217!3d-3.363667796611016!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1839d9006334ecaf%3A0xd3aa306d7292e81a!2sMoshi%20Airport!5e0!3m2!1sen!2stz!4v1765783383828!5m2!1sen!2stz"
            className="border-0"
            width="100%"
            height="400"
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade">
        </iframe>
    </div>
);

export default GoogleMapEmbeded;
