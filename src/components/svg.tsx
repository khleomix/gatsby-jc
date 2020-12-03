/** @jsx jsx */
import React from "react"
import { jsx } from "theme-ui"
import { hidden } from "../styles/utils"

const icons = {
  mouse: {
    shape: (
      <React.Fragment>
        <path d="m123.25 70.67c0-7.177-2.893-13.135-5.69-18.9-3.745-7.714-7.618-15.691-4.858-27.173a1.751 1.751 0 0 0 -3.4-.819c-3.051 12.7 1.1 21.252 5.114 29.521 2.745 5.655 5.338 11 5.338 17.368 0 5.109-3.694 9.217-10.963 12.241-.528-8.747-3.861-16.125-9.738-21.442-7.472-6.762-18.852-9.933-31.223-8.691-4.836.485-10.506 2.488-16.93 5.96a10.051 10.051 0 0 0 -8.462-5.735c-3.5-.294-6.235.679-8.165 2.895-.32-.053-.645-.1-.98-.127a9.19 9.19 0 0 0 -7.793 2.572c-3.385 3.507-4.346 10.029-3.09 21.085-6.151 5.341-11.539 10.465-15.15 13.9l-.394.374a6.892 6.892 0 0 0 4.774 11.861h69.36c13.168 0 27.187-1.5 27.839-18.9 11.873-4.517 14.411-11.151 14.411-15.99zm-81.109-14.187a6.623 6.623 0 0 1 5.711 3.975q-2.515 1.485-5.17 3.247a13.276 13.276 0 0 0 -2.238-4.263 9.785 9.785 0 0 0 -2.45-2.17 6.567 6.567 0 0 1 4.147-.789zm38.859 45.577h-69.36a3.391 3.391 0 0 1 -2.354-5.831l.387-.37c3.724-3.54 9.351-8.89 15.73-14.394a1.752 1.752 0 0 0 .587-1.583c-.462-3.79-1.826-15.116 2.031-19.111a5.8 5.8 0 0 1 4.972-1.521 6.468 6.468 0 0 1 4.73 2.394 11.47 11.47 0 0 1 2.121 5.039 1.706 1.706 0 0 0 .071.385 32.69 32.69 0 0 1 .056 9.076 1.749 1.749 0 1 0 3.472.433 36.586 36.586 0 0 0 .057-9.207q3.873-2.633 7.412-4.647c.021-.011.043-.022.063-.035 6.658-3.789 12.422-5.949 17.2-6.427 11.388-1.139 21.786 1.7 28.527 7.8 5.671 5.132 8.669 12.507 8.669 21.327-.001 13.944-8.936 16.672-24.371 16.672z"/><path d="m81 96.058h-8.333a1.75 1.75 0 0 0 0 3.5h8.333a1.75 1.75 0 0 0 0-3.5z"/><path d="m30.1 82.917a4.75 4.75 0 1 0 4.75 4.75 4.755 4.755 0 0 0 -4.75-4.75zm0 6a1.25 1.25 0 1 1 1.25-1.25 1.251 1.251 0 0 1 -1.25 1.25z"/>
      </React.Fragment>
    ),
    viewBox: `0 0 128 128`,
  },
  computer: {
    shape: (
      <React.Fragment>
        <path d="m432.931 343.569v-227.451a6 6 0 0 0 -6-6h-341.862a6 6 0 0 0 -6 6v227.451a6 6 0 0 0 6 6h341.862a6 6 0 0 0 6-6zm-12-6h-329.862v-215.451h329.862z" /><path d="m115.069 246.271a6 6 0 0 0 6-6v-81.895a6 6 0 0 0 -12 0v81.895a6 6 0 0 0 6 6z" /><path d="m115.069 277.729a6 6 0 0 0 6-6v-9.224a6 6 0 0 0 -12 0v9.224a6 6 0 0 0 6 6z" /><path d="m501 371.686h-33.884v-266.941a28.8 28.8 0 0 0 -28.791-28.745h-364.65a28.8 28.8 0 0 0 -28.791 28.745v266.941h-33.884a6 6 0 0 0 -6 6v29.569a28.8 28.8 0 0 0 28.791 28.745h444.418a28.8 28.8 0 0 0 28.791-28.745v-29.569a6 6 0 0 0 -6-6zm-6 35.569a16.787 16.787 0 0 1 -16.791 16.745h-444.418a16.787 16.787 0 0 1 -16.791-16.745v-23.569h70.069a6 6 0 1 0 0-12h-30.185v-266.941a16.787 16.787 0 0 1 16.791-16.745h364.65a16.787 16.787 0 0 1 16.791 16.745v266.941h-328.047a6 6 0 0 0 0 12h77.35v7.647a17.4 17.4 0 0 0 17.394 17.373h68.374a17.4 17.4 0 0 0 17.394-17.373v-7.647h187.419zm-199.419-23.569v7.647a5.39 5.39 0 0 1 -5.394 5.373h-68.374a5.39 5.39 0 0 1 -5.394-5.373v-7.647z" />
      </React.Fragment>
    ),
    viewBox: `0 0 512 512`,
  },
  star: {
    shape: (
      <React.Fragment>
        <path d="m222.21 229c-2.074 0-4.137-.644-5.879-1.91-3.08-2.237-4.622-6.029-3.978-9.781l5.565-32.446-23.574-22.978c-2.726-2.657-3.707-6.631-2.531-10.251s4.306-6.258 8.073-6.806l32.578-4.734 14.569-29.52c1.685-3.413 5.161-5.574 8.967-5.574 3.807 0 7.283 2.161 8.968 5.574l14.568 29.52 32.577 4.734c3.768.547 6.896 3.186 8.073 6.806 1.176 3.62.195 7.594-2.53 10.251l-23.573 22.979 5.565 32.446c.644 3.751-.899 7.543-3.979 9.781-3.08 2.237-7.163 2.532-10.531.761l-29.138-15.319-29.138 15.318c-1.463.77-3.061 1.149-4.652 1.149zm.604-67.293 12.829 12.504c2.357 2.297 3.433 5.607 2.876 8.852l-3.028 17.657 15.857-8.336c2.914-1.532 6.394-1.531 9.307 0l15.857 8.336-3.029-17.657c-.556-3.244.52-6.554 2.876-8.851l12.829-12.505-17.728-2.576c-3.258-.473-6.073-2.519-7.53-5.47l-7.93-16.065-7.929 16.065c-1.457 2.951-4.272 4.997-7.529 5.47z"/>
        <path d="m186.911 366.75c-3.024 0-5.932-1.374-7.851-3.807l-16.378-20.762-26.388 1.722c-3.792.249-7.408-1.683-9.311-4.979s-1.77-7.388.344-10.553l14.685-21.992-9.792-24.565c-1.41-3.536-.689-7.565 1.857-10.394 2.548-2.829 6.479-3.967 10.143-2.934l25.454 7.17 20.337-16.903c2.929-2.433 6.983-2.993 10.46-1.445s5.774 4.936 5.925 8.74l1.046 26.423 22.36 14.118c3.218 2.032 5.004 5.715 4.607 9.501-.398 3.786-2.911 7.017-6.481 8.335l-24.807 9.161-6.518 25.628c-.938 3.689-3.889 6.526-7.612 7.317-.693.147-1.389.219-2.08.219zm-19.633-44.891c3.049 0 5.947 1.394 7.85 3.807l7.085 8.982 2.819-11.086c.811-3.19 3.14-5.776 6.227-6.917l10.731-3.963-9.673-6.107c-2.783-1.757-4.523-4.771-4.653-8.06l-.453-11.43-8.797 7.312c-2.532 2.104-5.936 2.828-9.104 1.935l-11.011-3.102 4.236 10.627c1.219 3.057.855 6.519-.973 9.256l-6.353 9.513 11.415-.745c.22-.015.438-.022.654-.022z"/>
        <path d="m325.344 366.75c-.691 0-1.388-.072-2.08-.219-3.723-.792-6.674-3.628-7.612-7.317l-6.518-25.629-24.808-9.161c-3.571-1.319-6.084-4.55-6.482-8.335-.397-3.786 1.388-7.469 4.607-9.501l22.361-14.118 1.046-26.423c.15-3.804 2.447-7.191 5.925-8.74s7.533-.988 10.459 1.445l20.337 16.903 25.455-7.17c3.66-1.031 7.595.105 10.143 2.934 2.547 2.829 3.267 6.858 1.857 10.394l-9.791 24.565 14.685 21.992c2.113 3.166 2.247 7.257.344 10.553s-5.5 5.227-9.312 4.979l-26.388-1.722-16.378 20.762c-1.919 2.433-4.827 3.807-7.85 3.808zm-15.082-54.068 10.732 3.963c3.088 1.14 5.416 3.727 6.228 6.916l2.819 11.087 7.085-8.982c2.039-2.584 5.21-3.995 8.503-3.786l11.415.745-6.353-9.513c-1.828-2.737-2.191-6.199-.973-9.256l4.235-10.627-11.012 3.102c-3.168.891-6.573.168-9.103-1.935l-8.798-7.312-.452 11.43c-.13 3.289-1.87 6.303-4.653 8.06z"/>
        <path d="m222.21 229c-2.074 0-4.137-.644-5.879-1.91-3.08-2.237-4.622-6.029-3.978-9.781l5.565-32.446-23.574-22.978c-2.726-2.657-3.707-6.631-2.531-10.251s4.306-6.258 8.073-6.806l32.578-4.734 14.569-29.52c1.685-3.413 5.161-5.574 8.967-5.574 3.807 0 7.283 2.161 8.968 5.574l14.568 29.52 32.577 4.734c3.768.547 6.896 3.186 8.073 6.806 1.176 3.62.195 7.594-2.53 10.251l-23.573 22.979 5.565 32.446c.644 3.751-.899 7.543-3.979 9.781-3.08 2.237-7.163 2.532-10.531.761l-29.138-15.319-29.138 15.318c-1.463.77-3.061 1.149-4.652 1.149zm.604-67.293 12.829 12.504c2.357 2.297 3.433 5.607 2.876 8.852l-3.028 17.657 15.857-8.336c2.914-1.532 6.394-1.531 9.307 0l15.857 8.336-3.029-17.657c-.556-3.244.52-6.554 2.876-8.851l12.829-12.505-17.728-2.576c-3.258-.473-6.073-2.519-7.53-5.47l-7.93-16.065-7.929 16.065c-1.457 2.951-4.272 4.997-7.529 5.47z"/>
        <path d="m186.911 366.75c-3.024 0-5.932-1.374-7.851-3.807l-16.378-20.762-26.388 1.722c-3.792.249-7.408-1.683-9.311-4.979s-1.77-7.388.344-10.553l14.685-21.992-9.792-24.565c-1.41-3.536-.689-7.565 1.857-10.394 2.548-2.829 6.479-3.967 10.143-2.934l25.454 7.17 20.337-16.903c2.929-2.433 6.983-2.993 10.46-1.445s5.774 4.936 5.925 8.74l1.046 26.423 22.36 14.118c3.218 2.032 5.004 5.715 4.607 9.501-.398 3.786-2.911 7.017-6.481 8.335l-24.807 9.161-6.518 25.628c-.938 3.689-3.889 6.526-7.612 7.317-.693.147-1.389.219-2.08.219zm-19.633-44.891c3.049 0 5.947 1.394 7.85 3.807l7.085 8.982 2.819-11.086c.811-3.19 3.14-5.776 6.227-6.917l10.731-3.963-9.673-6.107c-2.783-1.757-4.523-4.771-4.653-8.06l-.453-11.43-8.797 7.312c-2.532 2.104-5.936 2.828-9.104 1.935l-11.011-3.102 4.236 10.627c1.219 3.057.855 6.519-.973 9.256l-6.353 9.513 11.415-.745c.22-.015.438-.022.654-.022z"/>
        <path d="m325.344 366.75c-.691 0-1.388-.072-2.08-.219-3.723-.792-6.674-3.628-7.612-7.317l-6.518-25.629-24.808-9.161c-3.571-1.319-6.084-4.55-6.482-8.335-.397-3.786 1.388-7.469 4.607-9.501l22.361-14.118 1.046-26.423c.15-3.804 2.447-7.191 5.925-8.74s7.533-.988 10.459 1.445l20.337 16.903 25.455-7.17c3.66-1.031 7.595.105 10.143 2.934 2.547 2.829 3.267 6.858 1.857 10.394l-9.791 24.565 14.685 21.992c2.113 3.166 2.247 7.257.344 10.553s-5.5 5.227-9.312 4.979l-26.388-1.722-16.378 20.762c-1.919 2.433-4.827 3.807-7.85 3.808zm-15.082-54.068 10.732 3.963c3.088 1.14 5.416 3.727 6.228 6.916l2.819 11.087 7.085-8.982c2.039-2.584 5.21-3.995 8.503-3.786l11.415.745-6.353-9.513c-1.828-2.737-2.191-6.199-.973-9.256l4.235-10.627-11.012 3.102c-3.168.891-6.573.168-9.103-1.935l-8.798-7.312-.452 11.43c-.13 3.289-1.87 6.303-4.653 8.06z"/>
        <path d="m256.13 512c-2.63 0-5.21-1.07-7.07-2.93-1.87-1.86-2.93-4.44-2.93-7.07s1.06-5.21 2.93-7.07c1.86-1.86 4.44-2.93 7.07-2.93s5.21 1.07 7.07 2.93c1.859 1.86 2.93 4.44 2.93 7.07s-1.07 5.21-2.93 7.07-4.44 2.93-7.07 2.93z"/>
        <path d="m256.127 467c-5.523 0-10-4.477-10-10v-91.5c0-5.523 4.477-10 10-10 5.522 0 10 4.477 10 10v91.5c0 5.523-4.478 10-10 10z"/>
        <path d="m43.02 142.89c-2.63 0-5.21-1.07-7.07-2.93s-2.93-4.44-2.93-7.07 1.07-5.21 2.93-7.07 4.44-2.93 7.07-2.93 5.21 1.07 7.07 2.93 2.93 4.44 2.93 7.07-1.07 5.21-2.93 7.07-4.44 2.93-7.07 2.93z"/>
        <path d="m152.736 206.241c-1.697 0-3.416-.432-4.991-1.341l-70.75-40.847c-4.783-2.761-6.422-8.877-3.66-13.66s8.877-6.421 13.66-3.66l70.75 40.847c4.783 2.761 6.422 8.877 3.66 13.66-1.852 3.207-5.214 5.001-8.669 5.001z"/>
        <path d="m468.979 142.89c-2.64 0-5.21-1.07-7.069-2.93-1.86-1.86-2.931-4.44-2.931-7.07s1.07-5.21 2.931-7.07c1.859-1.86 4.43-2.93 7.069-2.93 2.63 0 5.21 1.07 7.07 2.93s2.93 4.44 2.93 7.07-1.069 5.21-2.93 7.07c-1.859 1.86-4.44 2.93-7.07 2.93z"/>
        <path d="m359.265 206.241c-3.457 0-6.817-1.793-8.67-5.001-2.762-4.783-1.123-10.899 3.66-13.66l70.796-40.874c4.783-2.761 10.899-1.123 13.66 3.66 2.762 4.783 1.123 10.899-3.66 13.66l-70.796 40.874c-1.574.909-3.294 1.341-4.99 1.341z"/>
        <path d="m172.509 121.375c-3.456 0-6.817-1.793-8.669-5.002l-56.104-97.175c-2.762-4.783-1.123-10.899 3.66-13.66 4.782-2.763 10.899-1.123 13.66 3.66l56.104 97.175c2.762 4.783 1.122 10.899-3.66 13.66-1.575.91-3.294 1.342-4.991 1.342z"/>
        <path d="m89 266h-79c-5.523 0-10-4.477-10-10s4.477-10 10-10h79c5.523 0 10 4.477 10 10s-4.477 10-10 10z"/>
        <path d="m116.386 507.803c-1.697 0-3.416-.432-4.991-1.341-4.783-2.761-6.422-8.877-3.66-13.66l56.104-97.175c2.762-4.783 8.879-6.42 13.66-3.66 4.783 2.761 6.422 8.878 3.66 13.66l-56.104 97.175c-1.851 3.208-5.213 5.001-8.669 5.001z"/>
        <path d="m395.614 507.803c-3.457 0-6.817-1.793-8.67-5.001l-56.104-97.175c-2.762-4.783-1.123-10.899 3.66-13.66s10.899-1.122 13.66 3.66l56.104 97.175c2.762 4.783 1.123 10.899-3.66 13.66-1.574.909-3.294 1.341-4.99 1.341z"/>
        <path d="m502 266h-79c-5.522 0-10-4.477-10-10s4.478-10 10-10h79c5.522 0 10 4.477 10 10s-4.478 10-10 10z"/>
        <path d="m339.49 121.375c-1.696 0-3.415-.432-4.99-1.341-4.783-2.761-6.422-8.877-3.66-13.66l56.104-97.175c2.762-4.782 8.875-6.422 13.66-3.66 4.783 2.761 6.422 8.877 3.66 13.66l-56.104 97.175c-1.851 3.207-5.214 5.001-8.67 5.001z"/>
        <path d="m256 74c-5.523 0-10-4.477-10-10v-54c0-5.523 4.477-10 10-10 5.522 0 10 4.477 10 10v54c0 5.523-4.478 10-10 10z"/>
        <path d="m42.967 389.001c-3.456 0-6.817-1.793-8.669-5.001-2.762-4.783-1.123-10.899 3.66-13.66l46.766-27c4.782-2.763 10.899-1.123 13.66 3.66 2.762 4.783 1.123 10.899-3.66 13.66l-46.766 27c-1.575.909-3.295 1.341-4.991 1.341z"/>
        <path d="m42.967 389.001c-3.456 0-6.817-1.793-8.669-5.001-2.762-4.783-1.123-10.899 3.66-13.66l46.766-27c4.782-2.763 10.899-1.123 13.66 3.66 2.762 4.783 1.123 10.899-3.66 13.66l-46.766 27c-1.575.909-3.295 1.341-4.991 1.341z"/>
        <path d="m469.032 389.001c-1.696 0-3.415-.432-4.99-1.341l-46.765-27c-4.783-2.761-6.422-8.877-3.66-13.66 2.762-4.782 8.876-6.422 13.66-3.66l46.765 27c4.783 2.761 6.422 8.877 3.66 13.66-1.852 3.208-5.214 5.001-8.67 5.001z"/>
      </React.Fragment>
    ),
    viewBox: `0 0 512 512`,
  },
  code: {
    shape: (
      <React.Fragment>
        <path d="M325.762,70.513l-17.706-4.854c-2.279-0.76-4.524-0.521-6.707,0.715c-2.19,1.237-3.669,3.094-4.429,5.568L190.426,440.53
          c-0.76,2.475-0.522,4.809,0.715,6.995c1.237,2.19,3.09,3.665,5.568,4.425l17.701,4.856c2.284,0.766,4.521,0.526,6.71-0.712
          c2.19-1.243,3.666-3.094,4.425-5.564L332.042,81.936c0.759-2.474,0.523-4.808-0.716-6.999
          C330.088,72.747,328.237,71.272,325.762,70.513z"/>
        <path d="M166.167,142.465c0-2.474-0.953-4.665-2.856-6.567l-14.277-14.276c-1.903-1.903-4.093-2.857-6.567-2.857
          s-4.665,0.955-6.567,2.857L2.856,254.666C0.95,256.569,0,258.759,0,261.233c0,2.474,0.953,4.664,2.856,6.566l133.043,133.044
          c1.902,1.906,4.089,2.854,6.567,2.854s4.665-0.951,6.567-2.854l14.277-14.268c1.903-1.902,2.856-4.093,2.856-6.57
          c0-2.471-0.953-4.661-2.856-6.563L51.107,261.233l112.204-112.201C165.217,147.13,166.167,144.939,166.167,142.465z"/>
        <path d="M519.614,254.663L386.567,121.619c-1.902-1.902-4.093-2.857-6.563-2.857c-2.478,0-4.661,0.955-6.57,2.857l-14.271,14.275
          c-1.902,1.903-2.851,4.09-2.851,6.567s0.948,4.665,2.851,6.567l112.206,112.204L359.163,373.442
          c-1.902,1.902-2.851,4.093-2.851,6.563c0,2.478,0.948,4.668,2.851,6.57l14.271,14.268c1.909,1.906,4.093,2.854,6.57,2.854
          c2.471,0,4.661-0.951,6.563-2.854L519.614,267.8c1.903-1.902,2.854-4.096,2.854-6.57
          C522.468,258.755,521.517,256.565,519.614,254.663z"/>
      </React.Fragment>
    ),
    viewBox: `0 0 522 522`,
  },
  rainbow: {
    shape: (
      <React.Fragment>
        <path d="m192 372.423c-4.142 0-7.5 3.358-7.5 7.5v10c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-10c0-4.142-3.358-7.5-7.5-7.5z"/>
        <path d="m320 372.423c-4.142 0-7.5 3.358-7.5 7.5v10c0 4.142 3.358 7.5 7.5 7.5s7.5-3.358 7.5-7.5v-10c0-4.142-3.358-7.5-7.5-7.5z"/>
        <path d="m275.735 386.157c-3.737-1.789-8.215-.206-10.001 3.531-3.644 7.62-14.816 7.635-18.468 0-1.787-3.737-6.266-5.317-10.001-3.531-11.086 5.3 1.649 24.266 19.235 24.266 17.506 0 30.395-18.931 19.235-24.266z"/>
        <path d="m481.148 377.731c20.2-37.235 30.852-79.165 30.852-121.731 0-55.85-17.738-108.955-51.297-153.575-2.489-3.31-7.191-3.975-10.502-1.486-3.311 2.49-3.976 7.192-1.486 10.502 58.945 78.372 62.112 179.778 19.463 258.743-5.347-2.42-11.022-4.229-16.942-5.317 37.53-67.053 38.135-150.154.142-217.829-53.736-95.716-174.761-143.958-284.508-96.071-124.031 54.12-169.442 202.46-105.809 314.777-.631 4.212-1.085 8.49-1.312 12.841-3.414.357-6.769.988-10.051 1.856-97.796-161.52 22.033-365.441 206.332-365.441 66.15 0 127.89 26.382 173.845 74.289 2.867 2.99 7.616 3.088 10.604.221 2.989-2.868 3.089-7.615.221-10.604-47.677-49.702-113.79-78.906-185.393-78.906-2.118 0-3.893.034-5.846.083-138.389 3.489-249.461 116.99-249.461 255.917 0 45.914 12.263 90.668 35.535 129.996-20.792 11.091-35.535 33.058-35.535 59.117 0 36.882 30.005 66.887 66.887 66.887h370.947c40.895 0 74.166-33.271 74.166-74.167 0-24.615-12.201-46.579-30.852-60.102zm-308.28-313.016c64.398-28.101 138.146-21.763 197.278 16.951 92.46 60.535 119.833 179.648 69.642 272.884-3.128-6.018-6.793-11.674-10.941-16.916 59.863-126.051-32.669-272.808-172.847-272.808-43.807 0-86.648 15.265-120.636 42.983-3.21 2.618-3.689 7.342-1.072 10.552 2.618 3.209 7.341 3.691 10.553 1.072 31.317-25.54 70.793-39.607 111.155-39.607 126.602 0 211.9 130.355 161.802 245.862-4.412-4.084-9.18-7.795-14.262-11.099 41.499-103.958-35.717-217.35-147.54-217.35-101.249 0-177.528 94.266-154.795 194.189-5.158 4.527-9.901 9.451-14.186 14.74-16.592-56.138-4.64-119.704 37.088-166.823 2.747-3.101 2.459-7.841-.642-10.587-3.102-2.746-7.842-2.458-10.587.642-47.922 54.112-59.831 128.557-36.535 192.286-3.964 6.852-7.273 14.126-9.877 21.753-48.341-104.736-2.109-231.375 106.402-278.724zm194.714 132.045c-1.947-3.653-6.488-5.04-10.146-3.091-3.655 1.948-5.039 6.49-3.092 10.146 14.938 28.028 17.661 62.737 4.769 94.187-6.208-.874-12.432-1.203-18.611-.989 30.296-62.142-15.296-134.948-84.501-134.948-27.167 0-52.989 11.761-70.847 32.267-16.292 18.71-24.444 43.025-22.888 67.633-6.649 1.266-11.777 2.68-17.114 4.456-6.123-65.709 45.746-121.769 110.848-121.769 31.128 0 61.072 13.22 82.155 36.27 2.795 3.056 7.539 3.267 10.596.472 3.057-2.796 3.269-7.54.473-10.596-23.918-26.148-57.896-41.146-93.224-41.146-75.616 0-135.05 66.517-125.311 142.541-5.69 2.668-11.111 5.696-16.221 9.078-15.709-88.848 52.886-169.032 141.532-169.032 100.958 0 170.147 101.656 134.311 195.022-5.495-2.562-10.893-4.542-16.32-6.097 13.461-34.952 10.195-73.244-6.409-104.404zm-45.607 102.548c-11.596 2.49-22.81 6.932-33.213 13.279-26.205-37.221-67.336-55.879-111.585-52.588-1.022-20.332 5.825-40.354 19.289-55.815 15.007-17.234 36.707-27.118 59.534-27.118 62.81-.001 100.298 70.134 65.975 122.242zm115.859 197.692h-370.947c-28.611 0-51.887-23.276-51.887-51.887 0-22.888 14.673-41.658 34.057-48.761 9.59-3.661 17.489-3.129 27.026-3.129 9.368 0 11.028-15-1.265-15 6.479-104.224 141.987-141.963 201.828-56.743l-1.509 1.243c-3.197 2.633-3.655 7.359-1.022 10.557 2.636 3.2 7.364 3.653 10.558 1.022 53.657-44.186 126.688-18.34 147.014 39.142.018.057.048.108.067.165.024.068.04.138.065.205l.016-.006c1.06 2.801 3.73 4.814 6.899 4.856 32.128.426 58.267 26.97 58.267 59.17-.001 32.624-26.543 59.166-59.167 59.166z"/>
      </React.Fragment>
    ),
    viewBox: `0 0 512 512`,
  },
  tardis: {
    shape: (
      <React.Fragment>
        <path d="m290.132812 76.800781c-.011718-9.421875-7.644531-17.054687-17.066406-17.066406-.011718-9.421875-7.644531-17.054687-17.066406-17.066406h-76.800781v-17.066407c0-14.140624-11.460938-25.601562-25.597657-25.601562-14.140624 0-25.601562 11.460938-25.601562 25.601562v17.066407h-76.800781c-9.417969.011719-17.054688 7.644531-17.066407 17.066406-9.417968.011719-17.054687 7.644531-17.066406 17.066406-9.421875.011719-17.0546872 7.644531-17.066406 17.066407v17.066406c.0195312 6.066406 3.273438 11.667968 8.535156 14.691406v337.550781c-5.261718 3.023438-8.5156248 8.621094-8.535156 14.691407v17.066406c.0117188 9.421875 7.644531 17.054687 17.066406 17.066406h273.066406c9.421876-.011719 17.054688-7.644531 17.066407-17.066406v-17.066406c-.019531-6.070313-3.273438-11.667969-8.53125-14.691407v-337.550781c5.257812-3.023438 8.511719-8.625 8.53125-14.691406v-17.066406c-.011719-9.421876-7.644531-17.054688-17.066407-17.066407zm-145.066406-51.199219c0-4.714843 3.820313-8.535156 8.535156-8.535156 4.710938 0 8.53125 3.820313 8.53125 8.535156v17.066407h-17.066406zm-93.867187 34.132813h204.800781c.011719 9.417969 7.644531 17.054687 17.066406 17.066406h-238.933594c9.421876-.011719 17.054688-7.648437 17.066407-17.066406zm-34.132813 435.199219v-17.066406h273.066406l.019532 17.066406zm230.398438-358.398438h-187.730469c-9.421875.011719-17.054687 7.644532-17.066406 17.066406v307.199219h-17.066407v-332.800781h256v332.800781h-17.066406v-307.199219c-.015625-9.421874-7.648437-17.054687-17.070312-17.066406zm-68.265625 51.199219v17.066406h-17.066407v-17.066406zm-17.066407-17.066406v-17.066407h17.066407v17.066407zm85.332032 51.199219v238.933593h-85.332032v-238.933593zm-34.132813-34.132813v17.066406h-17.066406v-17.066406zm-17.066406-17.066406v-17.066407h17.066406v17.066407zm34.132813 34.132812v-17.066406h17.066406v17.066406zm0-34.132812v-17.066407h17.066406v17.066407zm-153.597657 17.066406v17.066406h-17.066406v-17.066406zm-17.066406-17.066406v-17.066407h17.066406v17.066407zm85.332031 51.199219v238.933593h-85.332031v-238.933593zm-34.132812-34.132813v17.066406h-17.066406v-17.066406zm-17.066406-17.066406v-17.066407h17.066406v17.066407zm34.132812 34.132812v-17.066406h17.066406v17.066406zm0-34.132812v-17.066407h17.066406v17.066407zm162.132812-59.734375h-273.066406v-17.066406h273.066406l.019532 17.066406zm0 0"/>
        <path d="m85.332031 298.667969h34.132813c9.421875-.015625 17.054687-7.648438 17.070312-17.066407v-34.136718c-.015625-9.417969-7.648437-17.050782-17.070312-17.066406h-34.132813c-9.417969.015624-17.050781 7.648437-17.066406 17.066406v34.136718c.015625 9.417969 7.648437 17.050782 17.066406 17.066407zm0-51.203125h34.132813l.019531 34.136718h-34.152344zm0 0"/>
        <path d="m85.332031 375.464844h34.132813c9.421875-.011719 17.054687-7.644532 17.070312-17.066406v-34.132813c-.015625-9.417969-7.648437-17.054687-17.070312-17.066406h-34.132813c-9.417969.011719-17.050781 7.648437-17.066406 17.066406v34.132813c.015625 9.421874 7.648437 17.054687 17.066406 17.066406zm0-51.199219h34.132813l.019531 34.132813h-34.152344zm0 0"/>
        <path d="m85.332031 452.265625h34.132813c9.421875-.011719 17.054687-7.644531 17.070312-17.066406v-34.132813c-.015625-9.421875-7.648437-17.054687-17.070312-17.066406h-34.132813c-9.417969.011719-17.050781 7.644531-17.066406 17.066406v34.132813c.015625 9.421875 7.648437 17.054687 17.066406 17.066406zm0-51.199219h34.132813l.019531 34.132813h-34.152344zm0 0"/>
        <path d="m187.734375 298.667969h34.132813c9.417968-.015625 17.054687-7.648438 17.066406-17.066407v-34.136718c-.011719-9.417969-7.648438-17.050782-17.066406-17.066406h-34.132813c-9.421875.015624-17.054687 7.648437-17.066406 17.066406v34.136718c.011719 9.417969 7.644531 17.050782 17.066406 17.066407zm0-51.203125h34.132813l.015624 34.136718h-34.148437zm0 0"/>
        <path d="m187.734375 375.464844h34.132813c9.417968-.011719 17.054687-7.644532 17.066406-17.066406v-34.132813c-.011719-9.417969-7.648438-17.054687-17.066406-17.066406h-34.132813c-9.421875.011719-17.054687 7.648437-17.066406 17.066406v34.132813c.011719 9.421874 7.644531 17.054687 17.066406 17.066406zm0-51.199219h34.132813l.015624 34.132813h-34.148437zm0 0"/>
        <path d="m187.734375 452.265625h34.132813c9.417968-.011719 17.054687-7.644531 17.066406-17.066406v-34.132813c-.011719-9.421875-7.648438-17.054687-17.066406-17.066406h-34.132813c-9.421875.011719-17.054687 7.644531-17.066406 17.066406v34.132813c.011719 9.421875 7.644531 17.054687 17.066406 17.066406zm0-51.199219h34.132813l.015624 34.132813h-34.148437zm0 0"/>
      </React.Fragment>
    ),
    viewBox: `0 0 512 512`,
  },
  cross: {
    shape: (
      <path
        strokeWidth="3px"
        d="M60.5,50l34.8-34.8c2.9-2.9,2.9-7.6,0-10.5c-2.9-2.9-7.6-2.9-10.5,0L50,39.5L15.2,4.7c-2.9-2.9-7.6-2.9-10.5,0    c-2.9,2.9-2.9,7.6,0,10.5L39.5,50L4.7,84.8c-2.9,2.9-2.9,7.6,0,10.5c1.4,1.4,3.3,2.2,5.2,2.2s3.8-0.7,5.2-2.2L50,60.5l34.8,34.8    c1.4,1.4,3.3,2.2,5.2,2.2c1.9,0,3.8-0.7,5.2-2.2c2.9-2.9,2.9-7.6,0-10.5L60.5,50z"
      />
    ),
    viewBox: `0 0 100 100`,
  },
  sun: {
    shape: (
      <React.Fragment>
        <path d="M256,112.071c-79.363,0-143.929,64.566-143.929,143.929c0,9.886,1.008,19.766,3,29.364c1.12,5.405,6.414,8.881,11.816,7.757c5.405-1.12,8.879-6.411,7.757-11.816c-1.713-8.266-2.583-16.78-2.583-25.305c0-68.34,55.598-123.939,123.939-123.939S379.938,187.66,379.938,256S324.34,379.938,256,379.938c-36.975,0-71.744-16.332-95.394-44.808c-3.526-4.247-9.828-4.83-14.075-1.303c-4.247,3.526-4.831,9.828-1.303,14.075c27.459,33.064,67.834,52.026,110.772,52.026c79.363,0,143.929-64.566,143.929-143.929S335.363,112.071,256,112.071z"/>
        <path d="M256,0c-5.52,0-9.995,4.475-9.995,9.995V75.13c0,5.52,4.475,9.995,9.995,9.995s9.995-4.475,9.995-9.995V9.995C265.995,4.475,261.52,0,256,0z"/>
        <path d="M256,426.875c-5.52,0-9.995,4.475-9.995,9.995v65.135c0,5.52,4.475,9.995,9.995,9.995s9.995-4.475,9.995-9.995V436.87C265.995,431.35,261.52,426.875,256,426.875z"/>
        <path d="M502.005,246.005H436.87c-5.52,0-9.995,4.475-9.995,9.995s4.475,9.995,9.995,9.995h65.135c5.52,0,9.995-4.475,9.995-9.995S507.525,246.005,502.005,246.005z"/>
        <path d="M75.13,246.005H9.995C4.475,246.005,0,250.48,0,256s4.475,9.995,9.995,9.995H75.13c5.52,0,9.995-4.475,9.995-9.995S80.65,246.005,75.13,246.005z"/>
        <path d="M437.02,74.98c-3.904-3.902-10.233-3.902-14.136,0l-46.057,46.057c-3.903,3.904-3.903,10.233,0,14.136c1.951,1.951,4.51,2.928,7.068,2.928s5.116-0.977,7.068-2.928l46.057-46.057C440.923,85.212,440.923,78.883,437.02,74.98z"/>
        <path d="M135.174,376.826c-3.904-3.902-10.233-3.902-14.136,0l-46.057,46.057c-3.903,3.904-3.903,10.233,0,14.136c1.951,1.951,4.51,2.928,7.068,2.928s5.116-0.977,7.068-2.928l46.057-46.057C139.077,387.058,139.077,380.729,135.174,376.826z"/>
        <path d="M437.02,422.883l-46.057-46.057c-3.904-3.902-10.233-3.902-14.136,0c-3.903,3.904-3.903,10.233,0,14.136l46.057,46.057c1.951,1.951,4.51,2.928,7.068,2.928c2.558,0,5.116-0.977,7.068-2.928C440.923,433.115,440.923,426.786,437.02,422.883z"/>
        <path d="M135.174,121.037L89.117,74.98c-3.904-3.902-10.233-3.902-14.136,0c-3.903,3.904-3.903,10.233,0,14.136l46.057,46.057c1.951,1.951,4.51,2.928,7.068,2.928c2.558,0,5.116-0.977,7.068-2.928C139.077,131.269,139.077,124.94,135.174,121.037z"/>
        <path d="M143.106,308.537c-1.859-1.859-4.438-2.929-7.067-2.929s-5.207,1.069-7.066,2.929c-1.859,1.859-2.929,4.428-2.929,7.066c0,2.629,1.069,5.207,2.929,7.067c1.859,1.859,4.438,2.929,7.066,2.929s5.207-1.069,7.067-2.929s2.929-4.438,2.929-7.067C146.035,312.975,144.965,310.396,143.106,308.537z"/>
        <path d="M353.513,249.205c-1.5-21.814-10.447-42.755-25.193-58.963c-3.714-4.083-10.035-4.382-14.119-0.667c-4.082,3.714-4.382,10.036-0.667,14.119c11.727,12.892,18.843,29.541,20.035,46.882c0.362,5.273,4.754,9.309,9.961,9.309c0.23,0,0.463-0.008,0.696-0.023C349.733,259.484,353.891,254.713,353.513,249.205z"/>
        <path d="M350.813,280.791c-1.859-1.859-4.428-2.929-7.066-2.929c-2.629,0-5.207,1.07-7.067,2.929c-1.859,1.859-2.929,4.438-2.929,7.067s1.069,5.207,2.929,7.067c1.859,1.859,4.438,2.929,7.067,2.929c2.639,0,5.207-1.07,7.066-2.929c1.869-1.859,2.929-4.438,2.929-7.067S352.682,282.65,350.813,280.791z"/>
      </React.Fragment>
    ),
    viewBox: `0 0 512 512`,
  },
  moon: {
    shape: (
      <React.Fragment>
        <path d="m123.467 31.566h9.066v9.067c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-9.067h9.066c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-9.066v-9.066c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v9.066h-9.066c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5z"/><path d="m388.533 480.434h-9.066v-9.067c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v9.067h-9.067c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h9.066v9.066c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-9.066h9.066c4.143 0 7.5-3.357 7.5-7.5s-3.356-7.5-7.499-7.5z"/><path d="m139.25 305.7c0-13.271-10.796-24.066-24.066-24.066s-24.068 10.796-24.068 24.066 10.797 24.066 24.067 24.066 24.067-10.795 24.067-24.066zm-24.066 9.067c-5 0-9.067-4.067-9.067-9.066s4.067-9.066 9.067-9.066c4.999 0 9.066 4.067 9.066 9.066s-4.067 9.066-9.066 9.066z"/><path d="m131.75 263.5c13.27 0 24.066-10.796 24.066-24.066s-10.796-24.067-24.066-24.067-24.066 10.797-24.066 24.067 10.795 24.066 24.066 24.066zm0-33.134c4.999 0 9.066 4.067 9.066 9.067 0 4.999-4.067 9.066-9.066 9.066s-9.066-4.067-9.066-9.066 4.067-9.067 9.066-9.067z"/><path d="m462.3 255.666c-.011-6.411-4.423-11.787-10.729-13.074-6.296-1.279-12.45 1.93-14.968 7.814-21.044 49.196-69.145 80.929-122.624 80.929-.117 0-.242-.001-.359-.001-73.116-.195-132.759-59.838-132.953-132.953-.143-53.619 31.623-101.894 80.929-122.983 5.884-2.518 9.097-8.672 7.812-14.968-1.287-6.306-6.663-10.718-13.087-10.729h-.321c-49.345 0-97.096 17.697-134.458 49.832-3.141 2.701-3.496 7.437-.796 10.577 2.702 3.142 7.437 3.495 10.577.796 32.781-28.195 74.191-44.403 117.316-46.063-50.804 24.916-83.125 76.527-82.973 133.577.217 81.343 66.569 147.696 147.913 147.914.134 0 .266.001.4.001 56.893-.002 108.324-32.289 133.18-82.979-3.882 102.084-88.141 183.944-191.159 183.944-8.348 0-16.77-.549-25.034-1.632-.476-.062-.641-.589-.663-.892-.071-.97-.205-1.953-.397-2.922-2.131-10.735-11.224-18.696-22.113-19.359-8.759-.518-17.137 3.747-21.829 11.172-.079.126-.434.221-.782.082-19.635-7.83-37.752-18.818-53.85-32.661-3.139-2.701-7.875-2.346-10.576.797-2.701 3.141-2.344 7.876.797 10.576 17.356 14.926 36.895 26.776 58.071 35.221 7.049 2.812 15.046.287 19.021-6.003 1.768-2.799 4.926-4.42 8.236-4.211 4.024.245 7.52 3.318 8.311 7.308.073.371.125.742.151 1.102.562 7.652 6.185 13.683 13.673 14.664 8.908 1.167 17.986 1.759 26.983 1.759 113.754 0 206.3-92.546 206.3-206.3v-.335z"/><path d="m64.7 256c0-45.757 16.409-90.035 46.205-124.677 2.7-3.141 2.345-7.876-.796-10.577-3.14-2.7-7.875-2.346-10.577.796-32.135 37.362-49.832 85.113-49.832 134.458 0 49.343 17.699 97.092 49.837 134.451 1.483 1.724 3.58 2.608 5.688 2.608 1.732 0 3.473-.597 4.889-1.815 3.14-2.701 3.495-7.436.794-10.577-29.798-34.637-46.208-78.912-46.208-124.667z"/><path d="m463.083 381.033c-4.143 0-7.5 3.357-7.5 7.5v16.567c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-16.566c0-4.143-3.357-7.501-7.5-7.501z"/><path d="m463.083 447.3c-4.143 0-7.5 3.357-7.5 7.5v16.566c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.5v-16.566c0-4.143-3.357-7.5-7.5-7.5z"/><path d="m504.5 422.45h-16.566c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h16.566c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5z"/><path d="m438.233 422.45h-16.566c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h16.566c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5z"/><path d="m48.917 64.7c4.143 0 7.5-3.357 7.5-7.5v-16.566c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v16.566c0 4.143 3.357 7.5 7.5 7.5z"/><path d="m56.417 123.467v-16.567c0-4.143-3.357-7.5-7.5-7.5s-7.5 3.357-7.5 7.5v16.566c0 4.143 3.357 7.5 7.5 7.5s7.5-3.357 7.5-7.499z"/><path d="m73.767 89.55h16.566c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5h-16.566c-4.143 0-7.5 3.357-7.5 7.5 0 4.142 3.357 7.5 7.5 7.5z"/><path d="m24.066 74.55h-16.566c-4.143 0-7.5 3.357-7.5 7.5s3.357 7.5 7.5 7.5h16.566c4.143 0 7.5-3.357 7.5-7.5s-3.357-7.5-7.5-7.5z"/>
      </React.Fragment>
    ),
    viewBox: `0 0 512 512`,
  },
  unicorn: {
    shape: (
      <React.Fragment>
        <circle cx="61.75" cy="50.844" r="7.798"/>
        <path d="m142.211 74.966 8.279 23.28c.354.997 1.056 1.786 1.942 2.186l20.683 9.319c2.922 1.317 2.922 5.972 0 7.289l-20.683 9.319c-.885.399-1.587 1.189-1.942 2.186l-8.279 23.28c-1.17 3.289-5.306 3.289-6.476 0l-8.279-23.28c-.354-.997-1.056-1.787-1.942-2.186l-20.683-9.319c-2.922-1.316-2.922-5.972 0-7.289l20.683-9.319c.886-.399 1.587-1.189 1.942-2.186l8.279-23.28c1.17-3.289 5.307-3.289 6.476 0z"/>
        <path d="m487.45 246.425 6.141 17.269c.263.739.784 1.325 1.44 1.621l15.343 6.912c2.168.977 2.168 4.43 0 5.407l-15.343 6.913c-.657.296-1.177.882-1.44 1.621l-6.141 17.269c-.868 2.44-3.936 2.44-4.804 0l-6.141-17.269c-.263-.739-.783-1.325-1.44-1.621l-15.343-6.913c-2.168-.977-2.168-4.43 0-5.407l15.343-6.912c.657-.296 1.177-.882 1.44-1.621l6.141-17.269c.868-2.439 3.936-2.439 4.804 0z"/>
        <circle cx="245.313" cy="44.271" r="14.308"/>
        <path d="m510.153 36.397c-2.802-4.023-8.093-5.447-12.536-3.372l-73.865 34.495-9.667-12.884c-2.393-3.189-6.444-4.668-10.328-3.772l-37.824 8.727c.029-.072.056-.145.085-.217l-44.891 9.867c-2.796.614-5.199 2.388-6.608 4.88l-90.893 160.601-75.904 32.607c-.177-.077-.345-.168-.527-.235l-54.141-19.984c-3.233-1.193-6.851-.652-9.593 1.434l-33.299 25.334-36.5-13.88c-3.407-1.296-7.247-.652-10.044 1.685-2.797 2.336-4.115 6.001-3.447 9.583l8.02 43.006c.89 4.774 5.057 8.231 9.907 8.231h.071l81.775-.567c1.077-.008 2.136-.193 3.143-.532l3.194 150.768c.089 4.208 2.784 7.917 6.758 9.303 1.087.38 2.207.562 3.316.562 2.945 0 5.81-1.293 7.761-3.646l79.028-95.316 92.643-41.163 47.549 106.999c1.638 3.686 5.279 5.987 9.206 5.987.573 0 1.153-.049 1.732-.15 4.553-.792 7.983-4.579 8.324-9.188l12.873-174.462c.036-.15.077-.298.107-.451l21.498-110.001 19.255 22.511c1.988 2.324 4.814 3.528 7.665 3.528 2.153 0 4.319-.687 6.149-2.098l43.717-33.704c4.367-3.367 5.218-9.619 1.908-14.031l-23.56-31.402 56.758-56.127c3.487-3.447 3.987-8.902 1.185-12.926zm-482.346 265.88-1.344.009-3.183-17.066 17.581 6.686zm19.614-.136 38.738-30.322 4.212 30.024zm282.425-214.178 18.958-4.167-68.012 141.529-21.496-6.781c-1.019-.322-2.062-.461-3.097-.454zm-231.659 182.529 25.354 9.358-21.6 17.4zm27.675 174.212-2.894-136.618.522-.145 64.735 61.546zm80.981-85.33-68.749-65.363 1.615-1.3 112.699-48.415 35.193 79.195zm138.608 44.656-70.895-159.535 80.787 25.485zm13.62-154.01-66.625-21.018 58.67-122.09 29.242 34.187zm66.353-87.246-58.732-68.663 7.236-15.677 27.969-6.453 51.778 69.012zm14.576-73.598-3.887-5.181 17.292-8.075z"/>
        <path d="m220.107 290.164c-3.891 0-7.597-2.266-9.248-6.062-2.22-5.105.119-11.043 5.224-13.262l5.597-2.433c5.105-2.217 11.042.121 13.261 5.227 2.219 5.105-.122 11.042-5.227 13.261l-5.593 2.431c-1.308.569-2.672.838-4.014.838z"/>
        <path d="m175.125 309.715c-3.891 0-7.598-2.267-9.248-6.064-2.219-5.105.121-11.043 5.225-13.261l22.55-9.801c5.105-2.22 11.042.12 13.261 5.225s-.121 11.043-5.226 13.261l-22.55 9.801c-1.307.57-2.671.839-4.012.839z"/>
      </React.Fragment>
    ),
    viewBox: `0 0 512 512`,
  },
  coffee: {
    shape: (
      <React.Fragment>
        <path d="M34,2H32a2.869,2.869,0,0,1-.8,1.9A4.787,4.787,0,0,0,30,7a4.791,4.791,0,0,0,1.2,3.1A2.858,2.858,0,0,1,32,12a2.858,2.858,0,0,1-.8,1.9A4.791,4.791,0,0,0,30,17h2a2.858,2.858,0,0,1,.8-1.9A4.791,4.791,0,0,0,34,12a4.791,4.791,0,0,0-1.2-3.1A2.858,2.858,0,0,1,32,7a2.869,2.869,0,0,1,.8-1.9A4.787,4.787,0,0,0,34,2Z"/>
        <path d="M28,5H26a2.869,2.869,0,0,1-.8,1.9A4.787,4.787,0,0,0,24,10a4.791,4.791,0,0,0,1.2,3.1A2.858,2.858,0,0,1,26,15a2.858,2.858,0,0,1-.8,1.9A4.791,4.791,0,0,0,24,20h2a2.858,2.858,0,0,1,.8-1.9,4.607,4.607,0,0,0,0-6.2A2.858,2.858,0,0,1,26,10a2.869,2.869,0,0,1,.8-1.9A4.787,4.787,0,0,0,28,5Z"/>
        <path d="M40,6H38a2.869,2.869,0,0,1-.8,1.9A4.787,4.787,0,0,0,36,11a4.791,4.791,0,0,0,1.2,3.1A2.858,2.858,0,0,1,38,16a2.858,2.858,0,0,1-.8,1.9A4.791,4.791,0,0,0,36,21h2a2.858,2.858,0,0,1,.8-1.9,4.607,4.607,0,0,0,0-6.2A2.858,2.858,0,0,1,38,11a2.869,2.869,0,0,1,.8-1.9A4.787,4.787,0,0,0,40,6Z"/>
        <path d="M44,45V44H42v1a1,1,0,0,1-1,1H40v2h1A3,3,0,0,0,44,45Z"/>
        <path d="M55,26H15a1,1,0,0,0-1,1V41a1,1,0,0,0,1,1h1v2a7.976,7.976,0,0,0,2.726,6H11a1,1,0,0,0-.949,1.316L11.6,55.949A3,3,0,0,0,14.441,58H16v3a1,1,0,0,0,1,1H47a1,1,0,0,0,1-1V58h1.559a3,3,0,0,0,2.846-2.051l1.544-4.633A1,1,0,0,0,53,50H45.274A7.976,7.976,0,0,0,48,44V42h7a5.006,5.006,0,0,0,5-5V31A5.006,5.006,0,0,0,55,26Zm-5,6h4v4H50ZM46,60H18V58H46Zm5.613-8-1.106,3.316a1,1,0,0,1-.948.684H14.441a1,1,0,0,1-.948-.684L12.387,52ZM46,44a6.006,6.006,0,0,1-6,6H24a6.006,6.006,0,0,1-6-6V42H46Zm2-4H16V28H48Zm10-3a3,3,0,0,1-3,3H50V38h4a2,2,0,0,0,2-2V32a2,2,0,0,0-2-2H50V28h5a3,3,0,0,1,3,3Z"/>
        <rect x="43" y="30" width="2" height="2"/>
        <rect x="43" y="34" width="2" height="4"/>
        <rect x="36" y="46" width="2" height="2"/>
      </React.Fragment>
    ),
    viewBox: `0 0 64 64`,
  },
}

type IconType = "mouse" | "star" | "code" | "rainbow" | "tardis" | "cross" | "sun" | "moon" | "unicorn" | "coffee" | "computer"

type SVGProps = {
  stroke?: boolean
  color?: string | number | any
  width: number
  icon: IconType
  left: string
  top: string
  hiddenMobile?: boolean
}

const SVG = ({ stroke = false, color = ``, width, icon, left, top, hiddenMobile = false }: SVGProps) => (
  <svg
    sx={{
      position: `absolute`,
      stroke: stroke ? `currentColor` : `none`,
      fill: stroke ? `none` : `currentColor`,
      display: hiddenMobile ? hidden : `block`,
      color,
      width,
      left,
      top,
    }}
    viewBox={icons[icon].viewBox}
  >
    {icons[icon].shape}
  </svg>
)

export default SVG