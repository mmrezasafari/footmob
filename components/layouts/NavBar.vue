<template>
  <v-app-bar class="border-boottom py-2" :elevation="1">
    <v-container>
      <v-row align="center">
        <v-col class="d-flex" cols="2" align="center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="108"
            height="18"
            viewBox="0 0 108 18"
          >
            <g
              fill="var(--GlobalColorScheme-Logo-color)"
              id="ic_fotmob_logo"
              transform="translate(-586 -21)"
            >
              <path
                id="Path_1"
                d="M103.359 8.679c1.811-.642 3.132-1.887 3.132-3.811 0-3.585-2.906-4.679-6.453-4.679h-5.4a1 1 0 0 0-.981.981v16.6h6.943c4.264 0 6.377-2.34 6.377-5.17.004-2.072-1.203-3.355-3.618-3.921zm-6.491-5.7H100c2.226 0 2.906.868 2.906 2.3 0 2.906-3.321 2.189-6 2.3v-4.6zm3.623 11.962h-3.585v-4.6h3.585c1.66 0 2.906.566 2.906 2.226.003 1.697-1.208 2.376-2.906 2.376zM49.849 1.17v2.3h-5.283v14.3h-3.283V3.472H36V1.17a1 1 0 0 1 .981-.981h11.925a.967.967 0 0 1 .943.981zm11.887 14.453a1.3 1.3 0 0 1-1.17-.717l-5.4-10a9.864 9.864 0 0 1 .075 1.509v11.359H52V1.17a1 1 0 0 1 .981-.981c2.83 0 2.83-.038 3.094.075a.826.826 0 0 1 .377.34c4.679 8.83 4.906 8.981 5.245 10.038.34-1.057.566-1.208 5.245-10.038a.663.663 0 0 1 .377-.34c.226-.075.264-.075 3.094-.075a1 1 0 0 1 .981.981v16.6h-3.243V6.415c0-.491.038-1.019.076-1.509l-5.4 10a1.068 1.068 0 0 1-1.094.717zM26.226 0a8.6 8.6 0 0 0-8.906 8.981A8.7 8.7 0 0 0 26.226 18a8.7 8.7 0 0 0 8.906-9.019A8.557 8.557 0 0 0 26.226 0zm0 14.981c-2.642 0-5.4-1.7-5.4-6 0-3.509 1.887-6 5.4-6s5.4 2.491 5.4 6c-.003 4.302-2.72 6.038-5.4 6zM82.528 0a8.6 8.6 0 0 0-8.906 8.981A8.7 8.7 0 0 0 82.528 18a8.7 8.7 0 0 0 8.906-9.019A8.578 8.578 0 0 0 82.528 0zm0 14.981c-2.642 0-5.4-1.7-5.4-6 0-3.509 1.887-6 5.4-6s5.4 2.491 5.4 6c-.003 4.302-2.758 6.038-5.4 6zM6.34 13.208v4.528H3.057v-2.755zM16.642 1.17v2.3H6.34v4.568l-3.283.792V1.17a1 1 0 0 1 .981-.981H15.66a1 1 0 0 1 .982.981zm-9.17 8.49L0 12.6v-2.147L7.585 8.6a3.607 3.607 0 0 0-.113 1.06zm.189.868a3.9 3.9 0 0 0 .415.792L0 15.66v-2.151zm2.906-3.283a2.23 2.23 0 0 1 2.226 2.226 2.226 2.226 0 1 1-4.453 0 2.23 2.23 0 0 1 2.226-2.226"
                class="cls-1"
                data-name="Path 1"
                transform="translate(587 21)"
              ></path>
            </g>
            <g>
              <path
                id="Rectangle_3401"
                d="M0 0h108v18H0z"
                class="cls-2"
                data-name="Rectangle 3401"
                transform="translate(586 21)"
              ></path>
            </g>
          </svg>
        </v-col>
        <v-col cols="3">
          <v-text-field
            density="compact"
            variant="solo"
            prepend-inner-icon="mdi-magnify"
            placeholder="جستجو"
            rounded="xl"
            single-line
            clearable
            hide-details
            bg-color="grey-lighten-2"
          ></v-text-field>
        </v-col>
        <v-col class="flex" col="7" align="end">
          <v-btn variant="plain" href="#">
            <h3>اخبار</h3>
          </v-btn>
          <v-btn variant="plain" href="#">
            <h3>انتقالات</h3>
          </v-btn>
          <v-btn variant="plain" href="#">
            <h3>درباره ما</h3>
          </v-btn>
          <v-btn variant="plain" href="#">
            <v-icon icon="mdi-cog" />
          </v-btn>
        </v-col>
      </v-row>
    </v-container>
  </v-app-bar>
</template>

<style scoped>
.v-btn {
  letter-spacing: 0 !important;
  opacity: 1 !important;
}
</style>
