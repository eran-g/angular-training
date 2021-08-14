package com.luv2code.ecommerce;

import org.apache.velocity.Template;
import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.VelocityEngine;
import org.apache.velocity.runtime.resource.loader.StringResourceLoader;
import org.apache.velocity.runtime.resource.util.StringResourceRepository;
import org.apache.velocity.tools.generic.DateTool;

import java.io.StringWriter;
import java.util.Properties;

public class MyTest {
    public static void main(String[] args) {

        Properties properties = new Properties();
        properties.setProperty("resource.loader", "string");
        properties.setProperty("string.resource.loader.class", "org.apache.velocity.runtime.resource.loader.StringResourceLoader");
        properties.setProperty("runtime.log.logsystem.class", "org.apache.velocity.runtime.log.NullLogSystem");

        VelocityEngine velocityEngine = new VelocityEngine();
        velocityEngine.init(properties);

        String templateKey = "templateKey";
        String templateData = "template data ${date} ";

        StringResourceRepository repo = StringResourceLoader.getRepository();
        repo.putStringResource(templateKey, templateData);
        Template template = velocityEngine.getTemplate(templateKey, "UTF-8");

        StringWriter writer = new StringWriter();

        VelocityContext context = new VelocityContext();
        context.put("testkey", "testVal");
        context.put("date", new DateTool());
        System.out.println("context: " + context.get("date"));

        template.merge(context, writer);

        System.out.println("writer: " + writer.toString());
    }
}
