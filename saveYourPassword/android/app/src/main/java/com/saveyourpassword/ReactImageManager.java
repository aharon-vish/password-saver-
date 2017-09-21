package com.saveyourpassword;


import android.support.annotation.Nullable;

import com.facebook.drawee.backends.pipeline.Fresco;
import com.facebook.drawee.controller.AbstractDraweeControllerBuilder;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.module.annotations.ReactModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.views.image.ReactImageView;

@ReactModule(name = ReactImageManager.REACT_CLASS)
public class ReactImageManager extends SimpleViewManager<ReactImageView> {

    protected static final String REACT_CLASS = "RCTImageView";

    @Override
    public String getName() {
        return REACT_CLASS;
    }

    private @Nullable
    AbstractDraweeControllerBuilder mDraweeControllerBuilder;
    private final @Nullable Object mCallerContext;

    public ReactImageManager(
            AbstractDraweeControllerBuilder draweeControllerBuilder,
            Object callerContext) {
        mDraweeControllerBuilder = draweeControllerBuilder;
        mCallerContext = callerContext;
    }

    public ReactImageManager() {
        // Lazily initialize as FrescoModule have not been initialized yet
        mDraweeControllerBuilder = null;
        mCallerContext = null;
    }

    public AbstractDraweeControllerBuilder getDraweeControllerBuilder() {
        if (mDraweeControllerBuilder == null) {
            mDraweeControllerBuilder = Fresco.newDraweeControllerBuilder();
        }
        return mDraweeControllerBuilder;
    }

    public Object getCallerContext() {
        return mCallerContext;
    }

    @Override
    public ReactImageView createViewInstance(ThemedReactContext context) {
        return new ReactImageView(
                context,
                getDraweeControllerBuilder(),
                getCallerContext());
    }

    // In JS this is Image.props.source
    @ReactProp(name = "src")
    public void setSource(ReactImageView view, @Nullable ReadableArray sources) {
        view.setSource(sources);
    }
}
