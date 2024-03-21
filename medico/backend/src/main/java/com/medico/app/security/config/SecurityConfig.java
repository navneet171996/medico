package com.medico.app.security.config;

import com.medico.app.security.services.AdminDetailsService;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;
import org.springframework.security.web.util.matcher.AntPathRequestMatcher;
import org.springframework.security.web.util.matcher.RequestMatcher;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.CorsConfigurationSource;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;

import java.util.Arrays;

@Configuration
@EnableWebSecurity
public class SecurityConfig{

    private final AdminDetailsService adminDetailsService;
    private final JwtTokenFilter jwtTokenFilter;

    public SecurityConfig(AdminDetailsService adminDetailsService, JwtTokenFilter jwtTokenFilter) {
        this.adminDetailsService = adminDetailsService;
        this.jwtTokenFilter = jwtTokenFilter;
    }


    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception{
        RequestMatcher[] requestMatchers = new RequestMatcher[]{
                new AntPathRequestMatcher("/api/auth/login/**"),
                new AntPathRequestMatcher("/api/auth/register/**"),
<<<<<<< Updated upstream
                new AntPathRequestMatcher("/api/home/allSpecialities"),
                new AntPathRequestMatcher("/api/aux/addSpecialities")

=======
                new AntPathRequestMatcher("/api/home/allSpecializations")
>>>>>>> Stashed changes
        };
        return http
                .cors(cors -> cors.configurationSource(corsConfigurationSource()))
                .csrf(AbstractHttpConfigurer::disable)
               .authorizeHttpRequests(
                       req -> req
                               .requestMatchers(requestMatchers)
                               .permitAll()
                               .anyRequest()
                               .authenticated())
               .userDetailsService(adminDetailsService)
               .sessionManagement(
                       sess -> sess.sessionCreationPolicy(SessionCreationPolicy.STATELESS))
               .addFilterBefore(jwtTokenFilter, UsernamePasswordAuthenticationFilter.class)
               .build();


   }



   @Bean
   public PasswordEncoder passwordEncoder(){
        return new BCryptPasswordEncoder();
   }

   @Bean
   public AuthenticationManager authenticationManager(AuthenticationConfiguration configuration) throws Exception {
        return configuration.getAuthenticationManager();
   }

    @Bean
    CorsConfigurationSource corsConfigurationSource() {
        CorsConfiguration configuration = new CorsConfiguration();
        configuration.setAllowedOrigins(Arrays.asList("http://localhost:5173"));
        configuration.setAllowedMethods(Arrays.asList("GET", "POST"));
        configuration.setAllowedHeaders(Arrays.asList("*"));
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        source.registerCorsConfiguration("/**", configuration);
        return source;
    }


}
