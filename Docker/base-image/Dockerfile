# Use scratch as the base image (empty/minimalist image)
#FROM scratch
# Use BusyBox as the base image
FROM busybox
# Copy hello.txt file into the root directory of the container
COPY hello.txt /

# Specify the command to run when the container starts
CMD ["cat", "/hello.txt"]
